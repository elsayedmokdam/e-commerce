import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

const AUTH_ROUTES = ["/signin", "/signup"];
const PROTECTED_ROUTES = [
  "/checkout",
  "/orders",
  "/profile",
  "/settings",
];

export async function proxy(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;

  const isAuth: boolean = !!token;

  // Check if the current route is an auth page or a protected page
  const isAuthPage: boolean = AUTH_ROUTES.includes(pathname);
  const isProtected: boolean = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route),
  );

  // If the user is not authenticated and trying to access a protected route, redirect to signin page.
  if (!isAuth && isProtected) {
    return NextResponse.redirect(new URL("/signin", req.url));
  }

  // If the user is authenticated and trying to access an auth page (signin/signup), redirect to home page.
  if (isAuth && isAuthPage) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  // For all other cases, allow the request to proceed.
  return NextResponse.next();
}

// Apply this middleware to all routes except for static files and API routes
export const config = {
  matcher: [
    "/checkout/:path*",
    "/orders/:path*",
    "/profile/:path*",
    "/settings/:path*",
    "/signin/:path*",
    "/signup/:path*",
  ],
};
