import { NextResponse } from "next/server";
import { auth } from "./lib/auth";
import { headers } from "next/headers";


export async function proxy(request) {
    // ১. সেশন ডাটা গেট করা
    const session = await auth.api.getSession({
        headers: await headers()
    });

    // ২. সেশন চেক করা (সেশন না থাকলে রিডাইরেক্ট করা)
    if (!session) {
        return NextResponse.redirect(new URL("./Authinatication/Login", request.url));
    }

    // ৩. সেশন থাকলে পরবর্তী ধাপে যেতে দেওয়া
    return NextResponse.next();
}

// ৪. কোন কোন পেজে এই চেকটি হবে
export const config = {
    matcher: [
        '/myProfile',
        '/TileDetails/:path*' // নিশ্চিত করুন শুরুতে / আছে
    ]

};