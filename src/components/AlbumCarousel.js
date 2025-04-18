import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const albumCovers = [
    "/albumCovers/Gone.jpg",
];

export default function AlbumCarousel() {
    const [currentIndex, setCurrentIndex] = useState(3); // Centered album initially

    const shiftLeft = () => {
        setCurrentIndex((prev) => (prev - 1 + albumCovers.length) % albumCovers.length);
    };

    const shiftRight = () => {
        setCurrentIndex((prev) => (prev + 1) % albumCovers.length);
    };

    const getAlbum = (i) => {
        const index = (currentIndex + i + albumCovers.length) % albumCovers.length;
        return albumCovers[index];
    };

    return (
        <div className="relative w-full h-[500px] bg-black flex items-center justify-center overflow-hidden">
            {/* Left Arrow */}
            <button onClick={shiftLeft} className="absolute left-18 md:left-80 bottom-10 z-30 text-white">
                <FaChevronLeft size={30} />
            </button>

            {/* Carousel */}
            <div className="flex items-end justify-center gap-[-40px] relative">
                {[...Array(7)].map((_, i) => {
                    const isCenter = i === 3;
                    const scale = isCenter ? 1.5 : 0.8; // Center album is bigger
                    const zIndex = isCenter ? 20 : 10 - Math.abs(3 - i); // Center is on top
                    const offset = (i - 3) * 80; // Positioning offset for left and right albums

                    return (
                        <motion.div
                            key={i}
                            className="relative"
                            style={{
                                zIndex,
                                transform: `translateX(${offset}px) scale(${scale})`,
                            }}
                        >
                            <div className="relative w-[100px] h-[100px] md:w-[250px] md:h-[250px]">
                                {/* Album */}
                                <img
                                    src={getAlbum(i)}
                                    alt={`Album ${i}`}
                                    className="w-full h-full object-cover rounded-lg shadow-lg"
                                />

                                {/* Reflection */}
                                <div className="absolute top-full left-0 w-full h-[80px] overflow-hidden mt-2 rounded-lg">
                                    <img
                                        src={getAlbum(i)}
                                        alt=""
                                        className="w-full h-full object-cover scale-y-[-1] opacity-30"
                                    />
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-transparent" />
                                </div>
                            </div>

                        </motion.div>
                    );
                })}
            </div>

            {/* Right Arrow */}
            <button onClick={shiftRight} className="absolute right-18 md:right-80 bottom-10 z-30 text-white">
                <FaChevronRight size={30} />
            </button>
        </div>
    );
}
