"use client";

import { useEffect, useState } from 'react';
import Image from "next/image";
import SpotifyLink from '@/components/SpotifyLink';
import Products from '@/components/Products';
import AlbumCarousel from '@/components/AlbumCarousel';
import RGBSplitImage from '@/components/RGBDistortionImage';

export default function Home() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 10); // slight delay to trigger transition
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`min-h-screen w-full transition-opacity duration-6000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>

      {/* Image Section */}
      <div>
        <RGBSplitImage />
      </div>

      {/* Spotify Section */}
      <div className='mt-24 text-center'>
        <h1 className='text-4xl tracking-[10px] text-red-500'>MUSIC</h1>
        <div className="flex flex-wrap justify-center mt-12">
          {/* <SpotifyLink /> */}
          <AlbumCarousel />
        </div>
      </div>

      {/* Store Section */}
      {/* <div className='mt-24 text-center'>
        <h1 className='text-4xl tracking-[10px]'>PRODUCTS</h1>
        <Products />
      </div> */}

    </div>
  );
}
