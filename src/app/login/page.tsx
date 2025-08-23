"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-svh grid place-items-center p-6">
      <div className="w-full max-w-sm rounded-2xl shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <button
          onClick={() => signIn("google", { callbackUrl: "/questions" })}
          className="w-full rounded-xl px-4 py-2 bg-black text-white"
        >
          Continue with Google
        </button>
      </div>
    </main>
  );
}
