import Image from "next/image";


const FutureProductMap = ({ products }) => {


    return (
        <>
            {products.map((p) => (
                <div key={p.id} className="card bg-base-100 w-full shadow-sm border border-gray-100">

                    {/* Figure এ একটি নির্দিষ্ট হাইট দিন এবং relative ক্লাসটি অবশ্যই যোগ করুন */}
                    <figure className="relative h-64 w-full overflow-hidden">
                        <Image
                            src={p.image}
                            alt={p.title}
                            fill // ইমেজকে পুরো কন্টেইনার জুড়ে রাখার জন্য
                            className="object-cover transition-transform duration-300 hover:scale-110" // ইমেজ যাতে স্ট্রেচ না হয়
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </figure>

                    <div className="card-body p-5">
                        <h2 className="card-title text-xl font-bold">
                            {p.title}
                            {p.inStock && <div className="badge badge-secondary text-xs">NEW</div>}
                        </h2>

                        <p className="text-sm text-gray-600 line-clamp-2">{p.description}</p>

                        <div className="card-actions justify-end mt-4">
                            <div className="badge badge-outline text-xs uppercase font-semibold">
                                {p.category}
                            </div>

                            <div className="badge badge-primary font-bold">
                                ${p.price}
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }
        </>
    );
};

export default FutureProductMap;