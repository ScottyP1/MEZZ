import Link from "next/link";
import Image from "next/image";

import { FaTiktok } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSoundcloud } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
    return (
        <div
            id="connect"
            className="relative w-screen h-screen overflow-hidden [mask-image:radial-gradient(ellipse_at_center,white,transparent)] mt-32">
            {/* Background Image */}
            <div className="relative w-full h-full">
                <Image
                    src="/connectImg.png"
                    alt="Connect Background"
                    fill
                    priority
                    className="
      object-cover object-center z-10
      sm:scale-100 scale-[1.9]
      sm:aspect-auto aspect-square
    "
                />
                <div className="absolute top- left-0 w-full h-full z-20 pointer-events-none bg-gradient-to-b from-black via-transparent to-transparent" />
            </div>


            {/* Overlay content */}
            <div className="absolute inset-0 flex z-20 flex-col items-center justify-center text-white px-4 bg-black/40">
                <h1 className="text-4xl font-bold mb-4 text-center text-red-500 tracking-[10px]" style={{ fontFamily: 'marker' }}>FOLLOW MEZZ</h1>

                <div className="flex space-x-6 mb-4">
                    <Link href="https://www.tiktok.com/@official.mezz">
                        <FaTiktok size={36} color='red' className="hover:text-gray-400 transition-colors" />
                    </Link>
                    <Link href="https://www.instagram.com/official.mezz">
                        <RiInstagramFill size={36} color='red' className="hover:text-gray-400 transition-colors" />
                    </Link>
                    <Link href='https://music.apple.com/us/artist/mezz/1800083744'>
                        <FaApple size={36} color='red' />
                    </Link>
                    <Link href='https://soundcloud.com/officialmezz?ref=clipboard&p=i&c=1&si=C66CA815999E48948A15F924528F063E&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing'>
                        <FaSoundcloud size={36} color='red' />
                    </Link>
                    <Link href='https://open.spotify.com/artist/2IDHmy8yjm8ASIpFv4A1R0?si=CA_aZemPSh-ExSlNzLbNtA&utm_medium=share&utm_source=linktree&nd=1&dlsi=d0e2ee9333014d4d'>
                        <FaSpotify size={36} color='red' />
                    </Link>
                </div>

                <h2 className="text-xl font-medium text-red-500">
                    <a href="mailto:booking@yomezz.com">booking@yomezz.com</a>
                </h2>
            </div>
        </div>
    );
}
