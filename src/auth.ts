import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "@/lib/db";

export const { handlers, auth, signIn, signOut } = NextAuth({
	...authConfig,
	adapter: MongoDBAdapter(clientPromise),
	// (optional) custom session/jwt callbacks go here
	// session: { strategy: "jwt" },
});
