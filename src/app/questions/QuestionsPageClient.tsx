"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Question } from "@/lib/types";
import QuestionsFilters from "@/components/QuestionsFilters";
import QuestionCard from "@/components/QuestionCard";
import { categories, difficulties } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

export default function QuestionsPageClient() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const [questions, setQuestions] = useState<Question[]>([]);
    const [loading, setLoading] = useState(true);

    // Filters
    const [searchTerm, setSearchTerm] = useState(searchParams?.get("search") || "");
    const [categoryFilter, setCategoryFilter] = useState<string>(searchParams.get("category") || "all");
    const [difficultyFilter, setDifficultyFilter] = useState<string>(searchParams.get("difficulty") || "all");

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

    // Update URL on filter change
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
            q.tags.some((tag: string) => tag.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesCategory = categoryFilter === "all" || q.category === categoryFilter;
        const matchesDifficulty = difficultyFilter === "all" || q.difficulty === difficultyFilter;

        return matchesSearch && matchesCategory && matchesDifficulty;
    });

    const handleFilterChange = (filters: { search?: string; category?: string; difficulty?: string }) => {
        if (filters.search !== undefined) setSearchTerm(filters.search);
        if (filters.category !== undefined) setCategoryFilter(filters.category);
        if (filters.difficulty !== undefined) setDifficultyFilter(filters.difficulty);
    };

    return (
        <div>
            {/* Filters */}
            <QuestionsFilters
                searchTerm={searchTerm}
                categoryFilter={categoryFilter}
                difficultyFilter={difficultyFilter}
                categories={categories}
                difficulties={difficulties}
                onChange={handleFilterChange}
            />

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
                            question={{ ...q, _id: q._id }}
                            categoryInfo={categories.find((c) => c.value === q.category)}
                            difficultyInfo={difficulties.find((d) => d.value === q.difficulty)}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
