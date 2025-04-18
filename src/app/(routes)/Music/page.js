import Image from "next/image"

export default function MusicPage() {
    return (
        <div className="mt-32">
            <h1 className="text-center text-4xl tracking-[10px]">MUSIC</h1>

            {/* Featured Album */}
            <div className="relative mt-12 w-fit mx-auto group">
                <Image
                    src="/albumCovers/Gone.jpg"
                    width={600}
                    height={600}
                    alt="latest album"
                    className="group-hover:rotate-3 transition-transform duration-300 w-[370px] h-[370px] md:w-[600px] md:h-[600px]"
                />
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 text-sm tracking-wider opacity-0 group-hover:opacity-100 transition">
                    NEW ALBUM • OUT NOW
                </div>
            </div>

            {/* Grid of Other Albums */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-0 mx-auto space-y-4">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="flex justify-center">
                        <Image
                            src="/albumCovers/Gone.jpg"
                            width={200}
                            height={200}
                            alt={`Album ${i + 1}`}
                            className="group-hover:rotate-3 transition-transform duration-300 w-[200px] h-[200px] md:w-[350px] md:h-[350px]"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}
