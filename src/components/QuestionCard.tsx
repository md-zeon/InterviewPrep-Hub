"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Question } from "@/lib/data";

export default function QuestionCard({ question, categoryInfo, difficultyInfo }: {
    question: Question;
    categoryInfo: { label: string; color: string } | undefined;
    difficultyInfo: { label: string; color: string } | undefined;
}) {
    return (
        <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors line-clamp-2">
                        {question.title}
                    </h3>
                    <div className="flex gap-2 shrink-0">
                        {categoryInfo && <Badge variant="secondary" className={`${categoryInfo.color} text-white text-xs`}>{categoryInfo.label}</Badge>}
                        {difficultyInfo && <Badge variant="outline" className={`${difficultyInfo.color} text-white border-none text-xs`}>{difficultyInfo.label}</Badge>}
                    </div>
                </div>
            </CardHeader>

            <CardContent className="pt-0">
                <p className="text-muted-foreground mb-4 line-clamp-3">{question.description}</p>
                <div className="flex flex-wrap gap-1 mb-4">
                    {question.tags.slice(0, 3).map((tag) => <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>)}
                    {question.tags.length > 3 && <Badge variant="outline" className="text-xs">+{question.tags.length - 3} more</Badge>}
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Added {new Date(question.createdAt).toLocaleDateString()}</span>
                    <Button asChild variant="ghost" size="sm">
                        <Link href={`/questions/${question.id}`}>
                            View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
