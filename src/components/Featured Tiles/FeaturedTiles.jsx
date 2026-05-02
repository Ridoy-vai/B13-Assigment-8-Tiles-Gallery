import FethLoader from "../FethLoader";
import { getProducts, getProductsByCategory } from "../jsonFatch";
import FutureProductMap from "./FutureProductMap";
import Link from 'next/link';

const FeaturedTiles = async () => {
    var loading = true
    const allProducts = await getProductsByCategory('all');
    const featuredProducts = allProducts.slice(0, 4);

    var loading = false

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">

                {/* Header Section */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Featured <span className="text-blue-600">Collections</span>
                        </h2>
                        <div className="h-1 w-20 bg-blue-600 mt-2"></div>
                    </div>

                    <Link
                        href="/allTiles"
                        className="text-blue-600 font-semibold hover:underline hidden sm:block"
                    >
                        View All Tiles &rarr;
                    </Link>
                </div>

                {/* Grid Layout - Responsive */}
                {loading ? <FethLoader /> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <FutureProductMap products={featuredProducts} />
                </div>
                }
                <div className="mt-8 sm:hidden text-center">
                    <Link href="/all-tiles">
                        <button className="btn btn-outline btn-primary w-full">View All Tiles</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedTiles;