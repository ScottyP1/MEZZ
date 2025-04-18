import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="relative min-h-screen text-white px-6 mt-42">

            {/* Content Container */}
            <div className="max-w-5xl mx-auto text-center relative z-10">
                {/* <h1 className="text-5xl md:text-6xl font-extrabold tracking-[10px] mb-10 text-red-500">MEET MEZZ</h1> */}

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* DJ Image */}
                    <Image
                        src="/storyImg2.jpg"
                        alt="Mezz performing"
                        width={700}
                        height={500}
                        className="w-90 h-90 object-cover rounded-full"
                    />

                    {/* Bio */}
                    <p className="text-lg leading-relaxed max-w-xl text-gray-300">
                        Mezz is a trailblazing music producer and DJ whose innovative take on bass music and bass house keeps audiences hooked. With a background in hip hop and breakdancing from a young age,
                        Mezz&apos;s dynamic sound evolves constantly, blending creative ideas into captivating tracks. Driven by the belief that music can transform everyday stress into powerful art, Mezz is set to
                        release new, groundbreaking work that reveals his true artistic potential. Stay tuned as Mezz opens the floodgates to a fresh wave of sonic experiences.
                    </p>

                </div>
            </div>
        </div>
    );
}
