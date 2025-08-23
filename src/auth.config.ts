import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
	providers: [
		Google({
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
