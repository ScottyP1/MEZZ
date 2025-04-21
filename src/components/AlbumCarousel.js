'use client';
import { useState, useEffect, useMemo } from 'react';
import Image from 'next/image';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

export default function Carousel() {
    const [tracks, setTracks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [error, setError] = useState(null);
    const [spacing, setSpacing] = useState(300); // Default spacing for translateX

    // Dynamically adjust spacing based on screen size
    useEffect(() => {
        const updateSpacing = () => {
            setSpacing(window.innerWidth < 768 ? 200 : 300); // 200px for mobile, 300px for desktop
        };
        updateSpacing();
        window.addEventListener('resize', updateSpacing);
        return () => window.removeEventListener('resize', updateSpacing);
    }, []);

    // Fetch tracks from Spotify API
    useEffect(() => {
        const fetchTracks = async () => {
            try {
                const response = await fetch('/api/spotify');
                const data = await response.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setTracks(data.tracks || []);
            } catch (error) {
                console.error('Error fetching tracks:', error);
                setError('Failed to load tracks');
            }
        };
        fetchTracks();
    }, []);

    const shiftLeft = () => {
        setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    };

    const shiftRight = () => {
        setCurrentIndex((prev) => (prev + 1) % tracks.length);
    };

    const visibleCount = Math.min(5, tracks.length);
    const getVisibleTracks = useMemo(() => {
        const result = [];
        const half = Math.floor(visibleCount / 2);

        for (let i = -half; i <= half; i++) {
            const index = (currentIndex + i + tracks.length) % tracks.length;
            result.push({ track: tracks[index], offset: i, keyOffset: i });
        }
        return result;
    }, [currentIndex, tracks, visibleCount]);

    const handleRetry = () => {
        setError(null);
        const fetchTracks = async () => {
            try {
                const response = await fetch('/api/spotify');
                const data = await response.json();
                if (data.error) {
                    throw new Error(data.error);
                }
                setTracks(data.tracks || []);
            } catch (error) {
                console.error('Error fetching tracks:', error);
                setError('Failed to load tracks');
            }
        };
        fetchTracks();
    };

    if (error) {
        return (
            <div className="text-white text-center">
                Error: {error}
                <button
                    onClick={handleRetry}
                    className="ml-4 px-4 py-2 bg-white text-black rounded"
                >
                    Retry
                </button>
            </div>
        );
    }

    if (tracks.length === 0) {
        return <div className="text-white text-center">Loading...</div>;
    }

    return (
        <div className="relative w-full h-[500px] bg-black flex items-center justify-center overflow-hidden">
            {/* Left Arrow */}
            <button
                onClick={shiftLeft}
                aria-label="Previous track"
                className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 z-30 text-white cursor-pointer focus:outline-none"
            >
                <AiOutlineLeft size={30} />
            </button>

            {/* Carousel */}
            <div className="relative w-full h-full flex items-center justify-center">
                {getVisibleTracks.map(({ track, offset, keyOffset }) => {
                    if (!track) return null;

                    const isCenter = offset === 0;
                    const scale = isCenter ? 1.5 : 0.7;
                    const zIndex = isCenter ? 20 : 10 - Math.abs(offset);
                    const translateX = offset * spacing; // Use dynamic spacing

                    return (
                        <div
                            key={`${track.id}-${keyOffset}`}
                            className="absolute"
                            style={{
                                zIndex,
                                transform: `translateX(${translateX}px) scale(${scale})`,
                                transition: 'transform 0.4s ease, z-index 0.4s ease',
                            }}
                        >
                            <div className="relative w-[150px] h-[150px] md:w-[200px] md:h-[200px]">
                                {/* Album Image */}
                                <Image
                                    src={track.album.images[0]?.url || '/placeholder.jpg'}
                                    alt={track.album.name || 'Album'}
                                    width={200}
                                    height={200}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                    priority={isCenter}
                                />

                                {/* Reflection */}
                                <div className="absolute top-full left-0 w-full h-[60px] mt-2 overflow-hidden rounded-lg">
                                    <Image
                                        src={track.album.images[0]?.url || '/placeholder.jpg'}
                                        alt=""
                                        width={200}
                                        height={60}
                                        className="w-full h-full object-cover scale-y-[-1] opacity-30"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Right Arrow */}
            <button
                onClick={shiftRight}
                aria-label="Next track"
                className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 z-30 text-white cursor-pointer focus:outline-none"
            >
                <AiOutlineRight size={30} />
            </button>
        </div>
    );
}