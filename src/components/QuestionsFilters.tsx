"use client";

import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

interface QuestionsFiltersProps {
    searchTerm: string;
    categoryFilter: string;
    difficultyFilter: string;
    categories: { value: string; label: string; color: string }[];
    difficulties: { value: string; label: string; color: string }[];
    onChange: (filters: { search?: string; category?: string; difficulty?: string }) => void;
}

export default function QuestionsFilters({
    searchTerm,
    categoryFilter,
    difficultyFilter,
    categories,
    difficulties,
    onChange,
}: QuestionsFiltersProps) {
    return (
        <div className="mb-8 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
                <div className="relative flex-1">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        placeholder="Search questions, tags, or technologies..."
                        value={searchTerm}
                        onChange={(e) => onChange({ search: e.target.value })}
                        className="pl-10"
                    />
                </div>

                <Select value={categoryFilter} onValueChange={(val) => onChange({ category: val })}>
                    <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Categories</SelectItem>
                        {categories.map((cat) => (
                            <SelectItem key={cat.value} value={cat.value}>
                                {cat.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Select value={difficultyFilter} onValueChange={(val) => onChange({ difficulty: val })}>
                    <SelectTrigger className="w-full md:w-48">
                        <SelectValue placeholder="Difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        {difficulties.map((diff) => (
                            <SelectItem key={diff.value} value={diff.value}>
                                {diff.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
