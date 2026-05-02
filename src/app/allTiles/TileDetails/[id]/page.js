import { getProducts, getProductsByCategory } from '@/components/jsonFatch';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TileDetails = async ({ params }) => {
    const { id } = await params;
    console.log(id, " params")
     const allProducts = await getProducts();

    const tile = allProducts.find(p => p.id === id)
    console.log(tile, 'params')
    return (
        <div className="bg-gray-50 min-h-screen py-12">
            <div className="container mx-auto px-4">

              
                <nav className="mb-8 flex items-center gap-2 text-sm text-gray-500">
                    <Link href="/all-tiles" className="hover:text-blue-600 transition">All Tiles</Link>
                    <span>/</span>
                    <span className="text-gray-900 font-medium">{tile.category}</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            height={100}
                            width={100}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                        />
                        {tile.inStock && (
                            <span className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                In Stock
                            </span>
                        )}
                    </div>

   
                    <div className="flex flex-col justify-center">
                        <span className="text-blue-600 font-semibold uppercase tracking-widest text-sm mb-2">
                            {tile.category}
                        </span>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            {tile.title}
                        </h1>

                        <div className="flex items-center gap-4 mb-6">
                            <p className="text-3xl font-bold text-gray-900">
                                {tile.currency === 'USD' ? '$' : tile.currency}{tile.price}
                            </p>
                            <span className="text-gray-500 text-sm">per sq. meter</span>
                        </div>

                        <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                            {tile.description}
                        </p>


                        <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-6 mb-8">
                            <div>
                                <p className="text-gray-400 text-sm uppercase font-semibold">Material</p>
                                <p className="text-gray-900 font-medium">{tile.material}</p>
                            </div>
                            <div>
                                <p className="text-gray-400 text-sm uppercase font-semibold">Dimensions</p>
                                <p className="text-gray-900 font-medium">{tile.dimensions}</p>
                            </div>
                        </div>

   
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all active:scale-95 shadow-lg shadow-blue-200">
                                Add to Quote
                            </button>
                            <button className="flex-1 bg-white border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-bold py-4 rounded-xl transition-all active:scale-95">
                                Contact Sales
                            </button>
                        </div>

                        <p className="mt-6 text-sm text-gray-400 text-center sm:text-left">
                            * Custom sizes available upon request. Delivery within 7-10 business days.
                        </p>
                    </div>
                </div>

                <div className="mt-16 bg-white p-8 rounded-3xl border border-gray-100">
                    <h3 className="text-2xl font-bold mb-6">Technical Specifications</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-2">
                            <h4 className="font-bold text-gray-900">Finish</h4>
                            <p className="text-gray-600">Polished / High Gloss</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-gray-900">Edge</h4>
                            <p className="text-gray-600">Rectified / Precision Cut</p>
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-bold text-gray-900">Usage</h4>
                            <p className="text-gray-600">Indoor, Residential, Commercial</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TileDetails;