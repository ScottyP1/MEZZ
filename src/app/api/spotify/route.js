import { NextResponse } from 'next/server';

export async function GET() {
    const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
    const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;

    try {
        const credentials = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString('base64');

        const tokenRes = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials}`,
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: 'grant_type=client_credentials',
        });

        if (!tokenRes.ok) {
            throw new Error('Failed to fetch access token');
        }

        const tokenData = await tokenRes.json();
        const accessToken = tokenData.access_token;

        const artistId = '2IDHmy8yjm8ASIpFv4A1R0';
        const tracksRes = await fetch(`https://api.spotify.com/v1/artists/${artistId}/top-tracks?market=US`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`,
            },
        });

        if (!tracksRes.ok) {
            const trackError = await tracksRes.text();
            console.error('Error fetching tracks:', trackError);
            throw new Error('Failed to fetch tracks');
        }

        const tracks = await tracksRes.json();

        // Return tracks in the response
        return NextResponse.json(tracks);
    } catch (error) {
        console.error('Error:', error.message);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
