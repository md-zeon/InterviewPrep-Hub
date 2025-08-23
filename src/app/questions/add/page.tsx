import { auth } from "@/auth";
import AddQuestionForm from "@/components/form/AddQuestionForm";
import { redirect } from "next/navigation";

export default async function AddQuestionPage() {
  const session = await auth();

  if (!session) {
    // Redirect non-logged-in users to login page
    redirect("/login");
  }

  return (
    <div className="min-h-screen bg-background py-10">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800 dark:text-gray-100">
        Add New Question
      </h1>
      <AddQuestionForm />
    </div>
  );
}
