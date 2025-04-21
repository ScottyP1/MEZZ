import { NextResponse } from 'next/server';
import { generateAppleMusicToken } from '../../../lib/appleMusicToken';

export async function GET() {
    try {
        const developerToken = generateAppleMusicToken();
        const artistId = '1800083744'; // Mezz's artist ID
        const storefront = 'us';

        // Step 1: Fetch the artist's albums
        const albumsRes = await fetch(
            `https://api.music.apple.com/v1/catalog/${storefront}/artists/${artistId}/albums?limit=10`,
            {
                headers: {
                    Authorization: `Bearer ${developerToken}`,
                },
            }
        );

        if (!albumsRes.ok) {
            let errorData = {};
            try {
                errorData = await albumsRes.json();
            } catch (jsonError) {
                console.error('Failed to parse Albums API error response:', jsonError.message);
                errorData = { message: 'Empty or invalid response body' };
            }
            throw new Error(`Albums API error: ${albumsRes.status} - ${JSON.stringify(errorData)}`);
        }

        const albumsData = await albumsRes.json();
        const albums = albumsData.data || [];

        // Step 2: Fetch tracks for each album
        const tracks = [];
        for (const album of albums) {
            const albumId = album.id;
            const tracksRes = await fetch(
                `https://api.music.apple.com/v1/catalog/${storefront}/albums/${albumId}/tracks`,
                {
                    headers: {
                        Authorization: `Bearer ${developerToken}`,
                    },
                }
            );
            if (!tracksRes.ok) {
                let errorData = {};
                try {
                    errorData = await tracksRes.json();
                } catch (jsonError) {
                    console.error('Failed to parse Tracks API error response:', jsonError.message);
                    errorData = { message: 'Empty or invalid response body' };
                }
                throw new Error(`Tracks API error: ${tracksRes.status} - ${JSON.stringify(errorData)}`);
            }

            const tracksData = await tracksRes.json();
            tracks.push(...(tracksData.data || []));
        }

        return new Response(JSON.stringify({ tracks }), {
            status: 200,
        });
    } catch (error) {
        console.error('Error in /api/appleMusic:', error.message);
        return NextResponse.json(
            { error: `Failed to fetch data from Apple Music API: ${error.message}` },
            { status: 500 }
        );
    }
}