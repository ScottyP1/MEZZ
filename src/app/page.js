'use client';

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
    <div className={`min-h-screen w-full transition-opacity duration-2000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>

      {/* Image Section */}
      <RGBSplitImage />

      {/* <div className="flex flex-row justify-center items-center h-screen overflow-hidden"> */}
      {/* <Image
          src="/bg.png"
          width={750}
          height={750}
          alt="logo"
          className="w-[100vw] max-w-[850px] h-auto md:w-[60vw] md:h-screen mt-12"
        />
        <Image
          src="/bg4.png"
          width={750}
          height={750}
          alt="logo"
          className="w-[100vw] max-w-[850px] h-auto md:w-[60vw] md:h-screen mt-2"
        />
        <Image
          src="/bg.png"
          width={750}
          height={750}
          alt="logo"
          className="w-[100vw] max-w-[850px] h-auto md:w-[60vw] md:h-screen mt-12"
        /> */}
      {/* </div> */}


      {/* Spotify Section */}

      <div className='mt-24 text-center'>
        <h1 className='text-4xl tracking-[10px]'>MUSIC</h1>
        <div className="flex flex-wrap justify-center mt-12">
          <SpotifyLink />
          <AlbumCarousel />
        </div>
      </div>
      {/* Store Section */}
      <div className='mt-24 text-center'>
        <h1 className='text-4xl tracking-[10px]'>PRODUCTS</h1>
        <Products />
      </div>

    </div>
  );
}
