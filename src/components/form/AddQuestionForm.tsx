"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { categories, difficulties, Question } from "@/lib/data";

export default function AddQuestionForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [answer, setAnswer] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [tags, setTags] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!title || !description || !answer || !category || !difficulty) {
            toast.error("Please fill in all required fields.");
            return;
        }

        const newQuestion: Question = {
            title,
            description,
            answer,
            category: category as Question["category"],
            difficulty: difficulty as Question["difficulty"],
            tags: tags.split(",").map((t) => t.trim()),
            createdAt: new Date().toISOString(),
        };

        setLoading(true);
        try {
            const res = await fetch("/api/questions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(newQuestion),
            });

            if (!res.ok) throw new Error("Failed to add question");

            toast.success("Question added successfully!");
            setTitle("");
            setDescription("");
            setAnswer("");
            setCategory("");
            setDifficulty("");
            setTags("");
        } catch (err) {
            console.error(err);
            toast.error("Something went wrong. Try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-background shadow-lg rounded-xl border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-bold mb-6 text-center">Add a New Question</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                <Input
                    placeholder="Question Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <div className="flex gap-3">
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>

                    <Select value={difficulty} onValueChange={setDifficulty}>
                        <SelectTrigger>
                            <SelectValue placeholder="Select Difficulty" />
                        </SelectTrigger>
                        <SelectContent>
                            {difficulties.map((diff) => (
                                <SelectItem key={diff.value} value={diff.value}>{diff.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <Textarea
                    placeholder="Question Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    className="min-h-[120px]"
                />

                <Textarea
                    placeholder="Solution / Answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                    className="min-h-[150px]"
                />

                <Input
                    placeholder="Tags (comma separated)"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                />

                <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Adding..." : "Add Question"}
                </Button>
            </form>
        </div>
    );
}
