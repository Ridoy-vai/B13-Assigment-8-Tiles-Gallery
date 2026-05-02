import Image from "next/image";
import Link from "next/link";


const FutureProductMap = ({ products }) => {


    return (
        <>
            {products.map((p) => (
                <div key={p.id} className="card bg-base-100 w-full shadow-sm border border-gray-100">
                    <figure className="relative h-64 w-full overflow-hidden">
                        <Image
                            src={p.image}
                            alt={p.title}
                            fill
                            className="object-cover transition-transform duration-300 hover:scale-110" // ইমেজ যাতে স্ট্রেচ না হয়
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </figure>

                    <div className="card-body p-5">
                        <h2 className="card-title text-xl font-bold">
                            {p.title}
                            {p.inStock ? <div className="badge bg-blue-500 text-xs">Available</div> : <div className="badge bg-red-500 text-xs">Stock_Out</div>}
                        </h2>

                        <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>
                        <ul className="flex flex-col gap-2 text-xl">
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>dimensions: {p.dimensions}</span>
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>material:  {p.material}</span>
                            </li>
                        </ul>

                        <div className="card-actions justify-end mt-4">
                            <div className="badge badge-outline text-xs uppercase font-semibold">
                                {p.category}
                            </div>

                            <div className="badge badge-primary font-bold">
                                ${p.price} {p.currency}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link href={`/allTiles/TileDetails/${p.id}`}><button className="btn btn-ghost bg-blue-700 w-full">view details</button></Link>
                    </div>
                </div>
            ))
            }
        </>
    );
};

export default FutureProductMap;