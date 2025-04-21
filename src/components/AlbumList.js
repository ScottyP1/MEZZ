'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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

    return (
        <div className="flex justify-center items-center mt-10 w-full">
            <div className="grid grid-cols-2 gap-6 max-w-4xl">
                {tracks.length > 0 ? (
                    tracks.map((track, index) => (
                        <div key={track.id || index} className="flex flex-col items-center">
                            {track.album?.images?.[0]?.url ? (
                                <Image
                                    src={track.album.images[0].url}
                                    width={200}
                                    height={200}
                                    alt={`Album cover for ${track.name}`}
                                    className="rounded-lg shadow-md"
                                />
                            ) : (
                                <div className="w-[200px] h-[200px] bg-gray-700 rounded-lg shadow-md flex items-center justify-center">
                                    <span className="text-gray-400">No Image</span>
                                </div>
                            )}
                            <p className="text-white text-sm mt-2 text-center line-clamp-1">
                                {track.name || 'Unknown Track'}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="col-span-full text-white text-center">
                        No tracks available.
                    </div>
                )}
            </div>
        </div>
    );
}
