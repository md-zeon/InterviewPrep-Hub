import type { NextAuthConfig } from "next-auth";

import GoogleProvider from "next-auth/providers/google";

export default {
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID!,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
		}),
	],
	pages: {
		signIn: "/login", // where to send unauthenticated users
	},
	callbacks: {
		authorized({ auth }) {
			// middleware gate: true = allow, false = redirect to signIn page
			return !!auth;
		},
	},
} satisfies NextAuthConfig;
