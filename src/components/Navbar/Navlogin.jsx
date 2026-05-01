"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import FethLoader from '../FethLoader';

const Navlogin = () => {

  
    const { data: session } = authClient.useSession()
    const user = session?.user
   
    // console.log(session, "navbar")
    // console.log(user, "navbar user")
    const handelSignOut = async () => {
        await authClient.signOut();
        alert("sing out succes")
    }
    return (
        <div className="navbar-end">

            {user ?
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user?.image || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
                        </div>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <Link href="/myProfile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><a>Settings</a></li>
                        <li onClick={handelSignOut}><a>Log out</a></li>
                    </ul>
                </div > :
                <Link href='/Authinatication/Login'><button className="btn">Log In</button></Link>}
        </div >
    );
};

export default Navlogin;