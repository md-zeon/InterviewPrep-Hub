"use client";

import { useState, useMemo, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { mockQuestions, categories, difficulties, Question } from "@/lib/data";
import QuestionsFilters from "@/components/QuestionsFilters";
import QuestionCard from "@/components/QuestionCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function QuestionsPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    // Initialize filters from URL query or defaults
    const [searchTerm, setSearchTerm] = useState(searchParams.get("search") || "");
    const [categoryFilter, setCategoryFilter] = useState<string>(searchParams.get("category") || "all");
    const [difficultyFilter, setDifficultyFilter] = useState<string>(searchParams.get("difficulty") || "all");

    // Update URL query whenever filters change
    useEffect(() => {
        const params = new URLSearchParams();
        if (searchTerm) params.set("search", searchTerm);
        if (categoryFilter !== "all") params.set("category", categoryFilter);
        if (difficultyFilter !== "all") params.set("difficulty", difficultyFilter);

        const queryString = params.toString();
        router.replace(`/questions${queryString ? "?" + queryString : ""}`);
    }, [searchTerm, categoryFilter, difficultyFilter, router]);

    const filteredQuestions = useMemo(() => {
        return mockQuestions.filter((question) => {
            const matchesSearch =
                question.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                question.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                question.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

            const matchesCategory =
                categoryFilter === "all" || question.category === categoryFilter;
            const matchesDifficulty =
                difficultyFilter === "all" || question.difficulty === difficultyFilter;

            return matchesSearch && matchesCategory && matchesDifficulty;
        });
    }, [searchTerm, categoryFilter, difficultyFilter]);

    // Handler for QuestionsFilters component
    const handleFilterChange = (filters: { search?: string; category?: string; difficulty?: string }) => {
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
                            Showing {filteredQuestions.length} of {mockQuestions.length} questions
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

                {/* Questions Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {filteredQuestions.map((q: Question) => (
                        <QuestionCard
                            key={q.id}
                            question={q}
                            categoryInfo={categories.find((c) => c.value === q.category)}
                            difficultyInfo={difficulties.find((d) => d.value === q.difficulty)}
                        />
                    ))}
                </div>

                {filteredQuestions.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold mb-2">No questions found</h3>
                        <p className="text-muted-foreground mb-6">
                            Try adjusting your search criteria or browse all questions
                        </p>
                        <Button
                            onClick={() => {
                                setSearchTerm("");
                                setCategoryFilter("all");
                                setDifficultyFilter("all");
                            }}
                        >
                            View All Questions
                        </Button>
                    </div>
                )}
            </main>
        </div>
    );
}
