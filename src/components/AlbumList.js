'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AlbumList({ music_site }) {
    const [tracks, setTracks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTracks = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch(`/api/${music_site}`);
                const data = await response.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setTracks(data.tracks || []);
            } catch (error) {
                console.error('Error fetching tracks:', error);
                setError('Failed to load tracks. Please try again later.');
            } finally {
                setLoading(false);
            }
        };
        fetchTracks();
    }, [music_site]);

    if (loading) {
        return <div className="text-white text-center mt-10">Loading tracks...</div>;
    }

    if (error) {
        return <div className="text-red-500 text-center mt-10">{error}</div>;
    }
    console.log(tracks)
    return (
        <div className="flex justify-center items-center mt-10 w-full">
            <div className="grid grid-cols-2 gap-6 max-w-4xl">
                {tracks.length > 0 ? (
                    tracks.map((track, index) => {
                        // Group 1: Apple Music
                        let imageUrl = null;

                        if (music_site === 'apple' && track.attributes?.artwork?.url) {
                            // Replace {w} and {h} with a fixed value like 300
                            imageUrl = track.attributes.artwork.url.replace('{w}', '300').replace('{h}', '300');
                        }

                        return (
                            <div key={track.id || index} className="flex flex-col items-center">
                                {imageUrl ? (
                                    <>
                                        <Link href={track.attributes.url}>
                                            <Image
                                                src={imageUrl}
                                                width={300}
                                                height={300}
                                                alt={`Album cover for ${track.name}`}
                                                className="rounded-lg shadow-md"
                                            />
                                        </Link>
                                        <p className="text-white text-sm mt-2 text-center line-clamp-1">
                                            {track.attributes.name || 'Unknown Track'}
                                        </p>
                                    </>
                                ) : null}

                                {/* Group 2: Spotify */}
                                {music_site === 'spotify' && track.album?.images?.[0]?.url ? (
                                    <>
                                        <Link href={track.external_urls?.spotify}>
                                            <Image
                                                src={track.album.images[0].url}
                                                width={300}
                                                height={300}
                                                alt={`Album cover for ${track.name}`}
                                                className="rounded-lg shadow-md"
                                            />
                                        </Link>
                                        <p className="text-white text-sm mt-2 text-center line-clamp-1">
                                            {track.name || track.title || 'Unknown Track'}
                                        </p>
                                    </>
                                ) : null}

                                {/* Group 3: SoundCloud */}
                                {/* {music_site === 'soundcloud' && track.artwork_url ? (
                                    <Link href={track.permalink_url}>
                                        <Image
                                            src={track.artwork_url}
                                            width={200}
                                            height={200}
                                            alt={`Album cover for ${track.title}`}
                                            className="rounded-lg shadow-md"
                                        />
                                    </Link>
                                ) : null} */}
                            </div>
                        );
                    })
                ) : (
                    <div className="col-span-full text-white text-center">
                        No tracks available.
                    </div>
                )}
            </div>
        </div>
    );
}
