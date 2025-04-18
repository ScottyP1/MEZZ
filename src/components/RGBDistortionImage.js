"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, extend } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import * as THREE from "three";

// Custom shader material for RGB split effect
const RGBMaterial = shaderMaterial(
    {
        uTexture: null,
        uScroll: 0,
    },
    `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
    `
    uniform sampler2D uTexture;
    uniform float uScroll;
    varying vec2 vUv;

    void main() {
      vec2 uv = vUv;

      float rOffset = uScroll * 0.005;
      float gOffset = uScroll * 0.003;
      float bOffset = uScroll * -0.005;

      vec4 r = texture2D(uTexture, uv + vec2(rOffset, 0.0));
      vec4 g = texture2D(uTexture, uv + vec2(gOffset, 0.0));
      vec4 b = texture2D(uTexture, uv + vec2(bOffset, 0.0));

      gl_FragColor = vec4(r.r, g.g, b.b, 1.0);
    }
  `
);

// Make the shader usable in JSX
extend({ RGBMaterial });

// Hook to detect screen size
const useIsSmallScreen = () => {
    const [isSmall, setIsSmall] = useState(false);

    useEffect(() => {
        const check = () => setIsSmall(window.innerWidth < 640);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    return isSmall;
};

// Plane with RGB split shader
const ImagePlane = ({ texture, x }) => {
    const materialRef = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (materialRef.current) {
                materialRef.current.uScroll = window.scrollY;
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <mesh position={[x, 0, 0]}>
            <planeGeometry args={[8, 8]} />
            <rGBMaterial ref={materialRef} uTexture={texture} uScroll={0} />
        </mesh>
    );
};

// Main 3D content component
const RGBSplit = () => {
    const [textures, setTextures] = useState([]);
    const isSmallScreen = useIsSmallScreen();

    useEffect(() => {
        const loader = new THREE.TextureLoader();
        const paths = ["/bg.png", "/bg4.png", "/bg.png"];

        Promise.all(
            paths.map(
                (src) =>
                    new Promise((res) => {
                        loader.load(src, (tex) => {
                            tex.minFilter = THREE.LinearFilter;
                            res(tex);
                        });
                    })
            )
        ).then((loaded) => setTextures(loaded));
    }, []);

    if (textures.length !== 3) return null;

    return (
        <>
            {!isSmallScreen && <ImagePlane texture={textures[0]} x={-8.5} />}
            <ImagePlane texture={textures[1]} x={0} />
            {!isSmallScreen && <ImagePlane texture={textures[2]} x={8.5} />}
        </>
    );
};

// Top-level component with Canvas
export default function RGBSplitImage() {
    return (
        <div className="relative w-full h-screen overflow-hidden">
            <Canvas camera={{ position: [0, 0, 6] }}>
                <RGBSplit />
            </Canvas>
        </div>
    );
}
