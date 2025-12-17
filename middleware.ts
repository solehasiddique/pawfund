import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_token");
  const { pathname } = req.nextUrl;

  // Allow login page always
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect other admin routes
  if (pathname.startsWith("/admin") && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
