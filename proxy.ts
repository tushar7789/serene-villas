import { NextRequest, NextResponse } from "next/server";
import { API_AUTH_PREFIX, AUTH_ROUTES, PROTECTED_ROUTES } from "./routes";
import { auth } from "./auth";

export default async function proxy(req : NextRequest) {
    const session = await auth();
    const pathname = req.nextUrl.pathname;
    console.log("pathname:", pathname);

    const isAccessingApiAuthRoute = pathname.startsWith(API_AUTH_PREFIX);
    const isAccessingAuthRoute = AUTH_ROUTES.some(route => pathname.startsWith(route));
    const isAccessingProtectedRoute = PROTECTED_ROUTES.some(route => pathname.startsWith(route));

    
    if (isAccessingApiAuthRoute) {
        return NextResponse.redirect(new URL("/auth/success", req.url));
        // return NextResponse.next();
    }

    if (isAccessingAuthRoute) {
        if (!session?.user) {
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL("/auth/logout", req.url));
    }

    if (!session?.user && isAccessingProtectedRoute) {
        console.log("inside protected cond");
        return NextResponse.redirect(new URL("/auth/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
 matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
// mathcer : ["/"]
};
