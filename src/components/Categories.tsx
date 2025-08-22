"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Database, Target, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

const categories = [
    {
        name: "JavaScript",
        slug: "javascript",
        icon: <Code className="h-8 w-8 text-yellow-600 mb-4" />,
        description: "Core JavaScript concepts, ES6+, async/await, closures, and more",
    },
    {
        name: "React",
        slug: "react",
        icon: <div className="h-8 w-8 bg-blue-600 rounded mb-4 flex items-center justify-center text-white font-bold">R</div>,
        description: "Hooks, state management, lifecycle methods, and performance optimization",
    },
    {
        name: "System Design",
        slug: "system-design",
        icon: <Cpu className="h-8 w-8 text-purple-600 mb-4" />,
        description: "Scalability, architecture patterns, distributed systems concepts",
    },
    {
        name: "Node.js",
        slug: "nodejs",
        icon: <div className="h-8 w-8 bg-green-600 rounded mb-4 flex items-center justify-center text-white font-bold">N</div>,
        description: "Event loop, middleware, APIs, and server-side development",
    },
    {
        name: "Databases",
        slug: "databases",
        icon: <Database className="h-8 w-8 text-indigo-600 mb-4" />,
        description: "SQL queries, NoSQL concepts, indexing, and optimization",
    },
    {
        name: "Algorithms",
        slug: "algorithms",
        icon: <Target className="h-8 w-8 text-red-600 mb-4" />,
        description: "Data structures, sorting, searching, and problem-solving patterns",
    },
];

const Categories = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Explore by Technology
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Focused practice areas to target your specific interview needs
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((cat) => (
                        <Link
                            key={cat.slug}
                            href={`/questions?category=${cat.slug}`}
                            className="group"
                        >
                            <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                                <CardContent className="p-6">
                                    {cat.icon}
                                    <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                                        {cat.name}
                                    </h3>
                                    <p className="text-muted-foreground mb-4">
                                        {cat.description}
                                    </p>
                                    <div className="text-sm text-primary font-medium">
                                        View Questions →
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button asChild size="lg" variant="outline">
                        <Link href="/questions">
                            View All Questions
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Categories;
