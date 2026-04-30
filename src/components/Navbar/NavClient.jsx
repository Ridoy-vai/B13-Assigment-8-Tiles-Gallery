'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavClient = ({ Navitems }) => {
    const pathname = usePathname();

    return (
        <>
            {
                Navitems.map((item, index) => {
                    const active = pathname === item.path;
                    
                    return (
                        <li key={index} className="list-none">
                            <Link 
                                href={item.path}
                                className={`px-4 py-2 rounded-md transition-all duration-300 block ${
                                    active 
                                    ? 'bg-blue-600 text-white font-semibold shadow-md' 
                                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                                }`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    )
                })
            }
        </>
    );
};

export default NavClient;