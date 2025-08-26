import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { categories, difficulties } from '@/lib/data';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import { Question } from '@/lib/types';

interface QuestionPageProps {
    params: { id: string };
}

export default async function QuestionPage({ params }: QuestionPageProps) {
    const { id } = params;
    // Fetch all questions
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/questions`);
    const questions: Question[] = await res.json();

    // Find the current question
    const question = questions.find((q) => q._id === id);
    if (!question) notFound();

    const categoryInfo = categories.find((cat) => cat.value === question.category);
    const difficultyInfo = difficulties.find((diff) => diff.value === question.difficulty);

    // Filter related questions (same category or overlapping tags, excluding current)
    const relatedQuestions = questions.filter(
        (q) =>
            q._id !== question._id &&
            (q.category === question.category ||
                q.tags.some((tag) => question.tags.includes(tag)))
    ).slice(0, 3);

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto py-8 px-4">
                {/* Back button */}
                <Button asChild variant="ghost" className="mb-4">
                    <Link href="/questions">
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Questions
                    </Link>
                </Button>

                {/* Badges and date */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                    {categoryInfo && <Badge className={`${categoryInfo.color} text-white`}>{categoryInfo.label}</Badge>}
                    {difficultyInfo && (
                        <Badge variant="outline" className={`${difficultyInfo.color} text-white border-none`}>
                            {difficultyInfo.label}
                        </Badge>
                    )}
                    <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        Added {new Date(question.createdAt).toLocaleDateString()}
                    </div>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold mb-4">{question.title}</h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {question.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="flex items-center">
                            <Tag className="mr-1 h-3 w-3" />
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-6">
                        <Card>
                            <CardHeader>
                                <CardTitle>Question Description</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="prose prose-neutral dark:prose-invert max-w-none">
                                    <p className="text-base leading-relaxed whitespace-pre-line">{question.description}</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle className="text-green-600">Solution & Explanation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="prose prose-neutral dark:prose-invert max-w-none">
                                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg p-6">
                                        <p className="text-base leading-relaxed whitespace-pre-line m-0">{question.answer}</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Question details */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Question Details</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h4 className="font-medium mb-2">Category</h4>
                                    <Badge className={`${categoryInfo?.color} text-white`}>{categoryInfo?.label}</Badge>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-medium mb-2">Difficulty</h4>
                                    <Badge variant="outline" className={`${difficultyInfo?.color} text-white border-none`}>
                                        {difficultyInfo?.label}
                                    </Badge>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-medium mb-2">Tags</h4>
                                    <div className="flex flex-wrap gap-1">
                                        {question.tags.map((tag) => (
                                            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                                        ))}
                                    </div>
                                </div>
                                <Separator />
                                <div>
                                    <h4 className="font-medium mb-2">Date Added</h4>
                                    <p className="text-sm text-muted-foreground">
                                        {new Date(question.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Related questions */}
                        {relatedQuestions.length > 0 && (
                            <Card>
                                <CardHeader>
                                    <CardTitle className="text-lg">Related Questions</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {relatedQuestions.map((relatedQ) => (
                                            <Link
                                                key={relatedQ._id}
                                                href={`/questions/${relatedQ._id}`}
                                                className="block p-3 rounded-lg border hover:bg-accent transition-colors"
                                            >
                                                <h5 className="font-medium text-sm line-clamp-2 mb-1">{relatedQ.title}</h5>
                                                <div className="flex items-center gap-2">
                                                    <Badge variant="outline" className="text-xs">
                                                        {categories.find((cat) => cat.value === relatedQ.category)?.label}
                                                    </Badge>
                                                    <Badge variant="outline" className="text-xs">
                                                        {difficulties.find((diff) => diff.value === relatedQ.difficulty)?.label}
                                                    </Badge>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}