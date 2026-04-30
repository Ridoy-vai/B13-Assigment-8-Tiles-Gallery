import React from 'react';
import NavClient from './NavClient';
import Image from 'next/image';

const Navbar = () => {

    const Navitems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'All Tiles',
            path: '/allTiles',
        },
        {
            name: 'My Profile',
            path: '/myProfile'
        },
    ]

    return (
        <div className="navbar bg-base-100 shadow-sm sticky top-0 container mx-auto z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <NavClient Navitems={Navitems} />
                    </ul>
                </div>

                <Image
                    src="https://akijceramics.net/wp-content/uploads/2023/07/akij-ceramics-logo.png"
                    alt="example"
                    width={300}
                    height={200}
                    className="hi"
                />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <NavClient Navitems={Navitems} />
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Log Out </a>
            </div>
        </div>
    );
};

export default Navbar;