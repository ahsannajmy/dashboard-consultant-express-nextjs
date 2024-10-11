import { NextResponse } from "next/server";

export async function middleware(req) {
  const pathname = req.nextUrl.pathname;

  if (
    pathname.startsWith("/auth/login") ||
    pathname.startsWith("/auth/register")
  ) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/auth/login", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
