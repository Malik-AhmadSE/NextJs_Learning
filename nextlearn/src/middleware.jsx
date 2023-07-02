import { NextResponse } from "next/server";

export default function middleware(request) {
    return NextResponse.redirect(new URL("/login",request.url));            
}

export const config={
    // restrict parent with child pages 
    matcher:"/about/:path*",
};