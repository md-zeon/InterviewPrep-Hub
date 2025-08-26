import NextAuth from "next-auth";
import authConfig from "@/auth.config";

// Protect configured routes using NextAuth v5 middleware
export default NextAuth(authConfig).auth;

export const config = {
	matcher: ["/dashboard/:path*"],
};
