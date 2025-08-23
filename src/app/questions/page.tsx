import QuestionsPageClient from "./QuestionsPageClient";

export default function QuestionsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return <QuestionsPageClient searchParams={searchParams} />;
}
