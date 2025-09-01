"use client";

import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <main className="min-h-svh grid place-items-center p-6">
      <div className="w-full max-w-sm rounded-2xl shadow p-6 space-y-4">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <Button
          variant="outline"
          size="lg"
          onClick={() => signIn("google", { callbackUrl: "/questions" })}
          className="w-full rounded-xl"
        >
          Continue with Google
        </Button>
      </div>
    </main>
  );
}
