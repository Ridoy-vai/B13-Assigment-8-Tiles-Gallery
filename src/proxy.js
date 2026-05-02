import dns from "node:dns"
dns.setServers(["8.8.8.8", "8.8.4.4"])

import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';

export async function proxy(request) {
    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/Authinatication')) {
        return NextResponse.next();
    }

    const session = await auth.api.getSession({
        headers: await headers()
    });

    if (!session) {
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