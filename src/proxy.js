import dns from "node:dns"
dns.setServers(["8.8.8.8", "8.8.4.4"])
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function proxy(request) {
    const { pathname } = request.nextUrl;

    // ১. যদি ইউজার অলরেডি Authinatication ফোল্ডারের ভেতরে থাকে (Login বা Registration)
    // তবে তাকে আর রিডাইরেক্ট করা যাবে না। এটা ইনফিনিট লুপ বন্ধ করবে।
    if (pathname.startsWith('/Authinatication')) {
        return NextResponse.next();
    }

    // ২. সেশন চেক করা
    const session = await auth.api.getSession({
        headers: await headers()
    });

    // ৩. সেশন না থাকলে রিডাইরেক্ট করা
    if (!session) {
        // আপনার ফোল্ডার স্ট্রাকচার অনুযায়ী পাথটি হবে: /Authinatication/Login
        return NextResponse.redirect(new URL("/Authinatication/Login", request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/myProfile',
        '/allTiles/TileDetails/:path*'
    ]
};