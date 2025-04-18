'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);


    return (
        <nav className="fixed w-full z-20 top-0 left-0 h-16 bg-black/[.2] flex items-center px-4">
            <div className="w-full flex items-center justify-between relative">

                {/* Left: Logo */}
                <div className="flex items-center z-30">
                    <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
                        <RxHamburgerMenu size={25} className='w-12 text-white' />
                    </div>
                    <Link href='/' className="hidden md:block">
                        <Image
                            src="/navLogo.png"
                            width={120}
                            height={100}
                            alt="nav logo"
                            className="object-contain"
                        />
                    </Link>
                </div>

                {/* Center: Desktop Nav Links */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-12 text-white text-lg">
                    <Link href="/">Home</Link>
                    <Link href="/Services">Connect</Link>
                    <Link href="/About">Shop</Link>

                    <Link href="/Contact">Tours</Link>
                    <Link href="/Contact">My Story</Link>

                </div>

                {/* Right: Shopping Bag */}
                {/* <div className="text-white z-30">
                    <TbShoppingBag size={24} className='w-12' />
                </div> */}
            </div>

            {/* Mobile Menu */}
            <div
                className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} h-screen w-screen md:hidden absolute top-16 left-0 bg-black/[.5] z-10 transition-transform duration-300 ease-in-out`}>
                <ul className="flex flex-col items-start p-4 space-y-6">
                    {['Home', 'About', 'Services', 'Contact'].map((text) => (
                        <li key={text}>
                            <Link
                                href={`/${text === 'Home' ? '' : text}`}
                                className="hover:text-gray-300 ml-4"
                                onClick={() => setIsOpen(false)}
                            >
                                {text}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>

    );
}
