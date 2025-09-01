import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
	// Example: check auth token from cookies
	//   const token = request.cookies.get("token")?.value;

	// If no token, redirect to login
	//   if (!token) {
	//     return NextResponse.redirect(new URL("/login", request.url));
	//   }

	// Otherwise allow request
	return NextResponse.next();
}
