// components/SearchComponent.js
"use client";

import { useRouter, usePathname } from 'next/navigation';
import { useTransition } from 'react';

const SearchComponent = ({ defaultValue }) => {
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();

    const handleSearch = (term) => {
        const params = new URLSearchParams(window.location.search);
        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }

        // URL আপডেট করা (পেজ রিফ্রেশ ছাড়া)
        startTransition(() => {
            router.push(`${pathname}?${params.toString()}`);
        });
    };

    return (
        <div className="relative w-full md:w-72">
            <input
                type="text"
                placeholder="Search tiles..."
                defaultValue={defaultValue}
                onChange={(e) => handleSearch(e.target.value)}
                className="w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            {isPending && (
                <div className="absolute right-3 top-2.5">
                    <div className="animate-spin h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full"></div>
                </div>
            )}
        </div>
    );
};

export default SearchComponent;