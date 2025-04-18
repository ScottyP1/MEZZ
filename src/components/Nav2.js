'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav2() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Top Navigation */}
            <nav className="fixed w-full top-0 left-0 z-50 h-16 bg-black/30 flex items-center justify-between px-6">
                {/* Left: Shop */}
                <Link href="/Tour" className=" text-xl z-30 text-red-500" style={{ fontFamily: 'marker' }}>Tour</Link>


                {/* Center: Logo */}
                <Link href="/" className="z-30 mt-4">
                    <Image
                        src="/navLogo.png"
                        width={200}
                        height={100}
                        alt="Logo"
                        className="object-contain"
                    />
                </Link>

                {/* Right: Tour */}
                <Link href="/Shop" className="text-red-500 text-xl z-30" style={{ fontFamily: 'marker' }}>Shop</Link>
            </nav>

            {/* Bottom Navigation */}
            <div className="fixed bottom-0 w-full bg-black/30 z-50 flex justify-around items-center h-16 text-white text-sm">
                <Link href="/Music" className='text-xl mb-4 text-red-500' style={{ fontFamily: 'marker' }}>Music</Link>
                <Link href="#connect" className='text-xl mb-4 text-red-500' style={{ fontFamily: 'marker' }}>Connect</Link>
                <Link href="/About" className='text-xl mb-4 text-red-500' style={{ fontFamily: 'marker' }}>My Story</Link>
            </div>

            {/* Optional: Mobile Menu */}
            {isOpen && (
                <div className="fixed top-16 left-0 w-full h-screen bg-black/60 z-40 p-4">
                    <ul className="flex flex-col space-y-4 text-white">
                        <li><Link href="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/Shop" onClick={() => setIsOpen(false)}>Shop</Link></li>
                        <li><Link href="/Tours" onClick={() => setIsOpen(false)}>Tours</Link></li>
                        <li><Link href="/Services" onClick={() => setIsOpen(false)}>Connect</Link></li>
                        <li><Link href="/Music" onClick={() => setIsOpen(false)}>Music</Link></li>
                        <li><Link href="/About" onClick={() => setIsOpen(false)}>My Story</Link></li>
                    </ul>
                </div>
            )}
        </>
    );
}
