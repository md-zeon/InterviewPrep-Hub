import { Suspense } from "react";
import QuestionsPageClient from "./QuestionsPageClient";
import { Spinner } from "@/components/ui/shadcn-io/spinner";

export default function QuestionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Interview Questions Library</h1>
        <p className="text-xl text-muted-foreground mb-6">
          Browse our comprehensive collection of technical interview questions
        </p>

        <Suspense fallback={<Spinner />}>
          <QuestionsPageClient />
        </Suspense>
      </main>
    </div>
  );
}
