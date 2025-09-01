import type { NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";

export default {
	providers: [Google],
	pages: {
		signIn: "/login", // where to send unauthenticated users
	},
	// callbacks: {
	// 	authorized({ auth }) {
	// 		// middleware gate: true = allow, false = redirect to signIn page
	// 		return !!auth;
	// 	},
	// },
} satisfies NextAuthConfig;
