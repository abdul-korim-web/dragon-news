import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
export async function proxy(request) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const pathname = request.nextUrl.pathname
  if (!session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
//   if (session && (pathname === "/login" || pathname === "/register")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
  return NextResponse.next();
}
export const config = {
  matcher: ["/news/:path"], // Specify the routes the middleware applies to
};
