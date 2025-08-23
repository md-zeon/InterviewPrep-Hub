// src/middleware.ts
import NextAuth from "next-auth";
import authConfig from "@/auth.config";

export default NextAuth(authConfig).auth;

export const config = {
  // Protect these routes (add more as needed)
  matcher: ["/dashboard/:path*", "/profile/:path*"],
};
