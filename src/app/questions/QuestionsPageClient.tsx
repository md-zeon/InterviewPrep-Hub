"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Question } from "@/lib/types";
import QuestionsFilters from "@/components/QuestionsFilters";
import QuestionCard from "@/components/QuestionCard";
import { categories, difficulties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function QuestionsPageClient({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined };
}) {
    const router = useRouter();

    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters (initialize from server-side searchParams)
    const [searchTerm, setSearchTerm] = useState(
        (searchParams.search as string) || ""
    );
    const [categoryFilter, setCategoryFilter] = useState<string>(
        (searchParams.category as string) || "all"
    );
    const [difficultyFilter, setDifficultyFilter] = useState<string>(
        (searchParams.difficulty as string) || "all"
    );

    useEffect(() => {
        const fetchQuestions = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/questions");
                const data: Question[] = await res.json();
                setQuestions(data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    // Update URL when filters change
    useEffect(() => {
        const params = new URLSearchParams();
        if (searchTerm) params.set("search", searchTerm);
        if (categoryFilter !== "all") params.set("category", categoryFilter);
        if (difficultyFilter !== "all") params.set("difficulty", difficultyFilter);

        router.replace(`/questions${params.toString() ? "?" + params.toString() : ""}`);
    }, [searchTerm, categoryFilter, difficultyFilter, router]);

    const filteredQuestions = questions.filter((q) => {
        const matchesSearch =
            q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.tags.some((tag: string) =>
                tag.toLowerCase().includes(searchTerm.toLowerCase())
            );

        const matchesCategory = categoryFilter === "all" || q.category === categoryFilter;
        const matchesDifficulty = difficultyFilter === "all" || q.difficulty === difficultyFilter;

        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    const handleFilterChange = (filters: {
        search?: string;
        category?: string;
        difficulty?: string;
    }) => {
        if (filters.search !== undefined) setSearchTerm(filters.search);
        if (filters.category !== undefined) setCategoryFilter(filters.category);
        if (filters.difficulty !== undefined) setDifficultyFilter(filters.difficulty);
    };

    return (
        <div className="min-h-screen bg-background">
            <main className="container mx-auto py-8 px-4">
                <div className="mb-8">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">
                        Interview Questions Library
                    </h1>
                    <p className="text-xl text-muted-foreground">
                        Browse our comprehensive collection of technical interview questions
                    </p>
                </div>

                {/* Filters */}
                <QuestionsFilters
                    searchTerm={searchTerm}
                    categoryFilter={categoryFilter}
                    difficultyFilter={difficultyFilter}
                    categories={categories}
                    difficulties={difficulties}
                    onChange={handleFilterChange}
                />

                {/* Filter info */}
                {(searchTerm || categoryFilter !== "all" || difficultyFilter !== "all") && (
                    <div className="flex items-center gap-2 mb-6">
                        <Filter className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm text-muted-foreground">
                            Showing {filteredQuestions.length} of {questions.length} questions
                        </span>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                                setSearchTerm("");
                                setCategoryFilter("all");
                                setDifficultyFilter("all");
                            }}
                            className="ml-auto"
                        >
                            Clear Filters
                        </Button>
                    </div>
                )}

                {loading ? (
                    <p>Loading questions...</p>
                ) : filteredQuestions.length === 0 ? (
                    <p>No questions found.</p>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {filteredQuestions.map((q) => (
                            <QuestionCard
                                key={q._id}
                                question={q}
                                categoryInfo={categories.find((c) => c.value === q.category)}
                                difficultyInfo={difficulties.find((d) => d.value === q.difficulty)}
                            />
                        ))}
                    </div>
                )}
            </main>
        </div>
    );
}
