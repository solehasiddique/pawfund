import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("admin_token");
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  // Block access if not logged in
  if (isAdminRoute && !token) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
