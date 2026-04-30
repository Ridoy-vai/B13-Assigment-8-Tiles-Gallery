import FutureProductMap from '@/components/Featured Tiles/FutureProductMap';
import { getProducts } from '@/components/jsonFatch';
import Link from 'next/link';
import React from 'react';
import Catagory from './Catagory';

// কিছু ডামি ক্যাটাগরি (এগুলো আপনার ডাটা অনুযায়ী পরিবর্তন করতে পারেন)
const categories = [
    { name: 'All Tiles', slug: 'all', icon: '💎' },
    { name: 'Marble', slug: 'marble', icon: '🏛️' },
    { name: 'Ceramic', slug: 'ceramic', icon: '🧱' },
    { name: 'Porcelain', slug: 'porcelain', icon: '✨' },
    { name: 'Mosaic', slug: 'mosaic', icon: '🎨' },
    { name: 'Handmade', slug: 'Handmade', icon: '⛰️' },
    { name: 'Concrete', slug: 'Concrete', icon: '⛰️' },
    { name: 'Terrazzo', slug: 'Terrazzo', icon: '⛰️' },
    { name: 'Stone', slug: 'Stone', icon: '⛰️' },
    { name: 'Outdoor', slug: 'Outdoor', icon: '⛰️' },
    { name: 'Decorative', slug: 'Decorative', icon: '⛰️' },
];

const AllTilesPage = async () => {
    const products = await getProducts();

    const catagory = products.filter(prod => prod.catagory === products.catagory)
    console.log(catagory, "catagoru")



    return (
        <section className="py-16 bg-white container mx-auto">
            <div className="container mx-auto px-4">

                {/* 1. Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                    <div>
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Premium Quality</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-1">
                            Explore <span className="text-blue-600">Collections</span>
                        </h2>
                    </div>

                    <Link
                        href="/all-tiles"
                        className="group flex items-center gap-2 text-gray-900 font-bold hover:text-blue-600 transition-all"
                    >
                        View Full Catalog 
                        <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
                    </Link>
                </div>

                {/* 2. Category Section Design */}
                <div className="mb-12">
                    <Catagory categories={categories}/>
                </div>

                {/* 3. Product Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    <FutureProductMap products={products} />
                </div>

                {/* 4. Bottom Call to Action (Mobile Only) */}
                <div className="mt-12 sm:hidden text-center">
                    <Link href="/all-tiles">
                        <button className="bg-gray-900 text-white w-full py-4 rounded-xl font-bold active:scale-95 transition-transform">
                            Explore All 50+ Designs
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AllTilesPage;