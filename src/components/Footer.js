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


            {/* Overlay content */}
            <div className="absolute inset-0 flex z-20 flex-col items-center justify-center text-white px-4 bg-black/40">
                <h1 className="text-4xl font-bold mb-4 text-center text-red-500 tracking-[10px]" style={{ fontFamily: 'marker' }}>FOLLOW MEZZ</h1>

                <div className="flex space-x-6 mb-6 mt-12">
                    <Link href="https://www.tiktok.com/@official.mezz">
                        <FaTiktok size={36} color='red' className="hover:text-gray-400 transition-colors" />
                    </Link>
                    <Link href="https://www.instagram.com/official.mezz">
                        <RiInstagramFill size={36} color='red' className="hover:text-gray-400 transition-colors" />
                    </Link>
                    <FaApple size={36} color='red' />
                    <FaSoundcloud size={36} color='red' />
                    <FaSpotify size={36} color='red' />
                    <FaFacebook size={36} color='red' />

                </div>

                <h2 className="text-xl font-medium text-red-500">NickMessMusic@gmail.com</h2>
            </div>
        </div>
    );
}
