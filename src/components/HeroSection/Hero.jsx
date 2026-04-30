import Link from 'next/link';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { SiZenbrowser } from 'react-icons/si';

const Hero = () => {
    const images = [
        "https://images.unsplash.com/photo-1",
        "https://images.unsplash.com/photo-2",
        "https://images.unsplash.com/photo-3",
        "https://images.unsplash.com/photo-4",
    ];
    return (
        <div className="hero min-h-[91vh] max-h-screen relative container mx-auto z-2" style={{ backgroundImage: "url(https://theonlinetileshop.co.uk/img/cms/tots-sample-banner.png)", }} >

            <div className="hero-overlay"></div>

            <div className="hero-content text-neutral-content text-center">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">High-Quality Tiles for Homes & Commercial Spaces</h1>
                    <p className="mb-5">
                        From classic marble to modern geometric patterns—find the tiles that define your space.
                    </p>
                    <button className="btn btn-primary"><Link href={'/allTiles'} className='flex items-center gap-2'><SiZenbrowser/>Browse Now </Link></button>
                </div>
            </div>

            {/* ✅ Marquee fixed at bottom */}
            <div className="absolute bottom-0 left-0 w-full bg-gray-900 border-y border-gray-800">
                <Marquee
                    speed={50}
                    pauseOnHover
                    gradient={false}
                    className="py-3 text-white text-sm md:text-base font-medium uppercase tracking-widest"
                >
                    <span className="mx-10">✨ New Arrivals: Carrara Gold Marble</span>
                    <span className="mx-10">🔥 Weekly Feature: Modern Geometric Patterns</span>
                    <span className="mx-10">🏢 Commercial Grade Porcelain Available</span>
                    <span className="mx-10">🚚 Free Shipping on bulk orders</span>
                </Marquee>
            </div>
        </div>
    );
};

export default Hero;