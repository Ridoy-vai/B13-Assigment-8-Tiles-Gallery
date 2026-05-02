import FutureProductMap from '@/components/Featured Tiles/FutureProductMap';
import { getProductsByCategory } from '@/components/jsonFatch';
import Link from 'next/link';
import React from 'react';
import SearchComponent from './SearchComponent';
import TileMapLoader from '@/components/TileMapLoader';

const AllTilesPage = async ({ searchParams }) => {
    const query = (await searchParams)?.search || "";

    let isloading = true

    const products = await getProductsByCategory('all');

    isloading = false;

    const filteredProducts = products.filter((product) => {
        const searchTerm = query.toLowerCase();
        return (
            product.title?.toLowerCase().includes(searchTerm)
        );
    });

    return (
        <section className="py-16 bg-white container mx-auto">
            <div className="container mx-auto px-4">

             
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
                    <div>
                        <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Premium Quality</span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-1">
                            Explore <span className="text-blue-600">All Tiles</span>
                        </h2>
                    </div>

               
                    <SearchComponent defaultValue={query} />


                </div>

            
                {isloading ? <TileMapLoader /> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
                    {filteredProducts.length > 0 ? (
                        <FutureProductMap products={filteredProducts} />
                    ) : (
                        <div className="col-span-full flex justify-center items-center py-20">
                            <h3 className="text-2xl font-semibold text-gray-500">
                                No tiles found
                            </h3>
                        </div>
                    )}
                </div>}

                {/* 4. Bottom Call to Action */}
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