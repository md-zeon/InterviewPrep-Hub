"use client";
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative py-20 px-4 overflow-hidden">
            <div className="container mx-auto text-center">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                    <Zap className="h-4 w-4 mr-2" />
                    Master Technical Interviews
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Ace Your Next Tech Interview
                </h1>

                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Comprehensive collection of technical interview questions with detailed solutions.
                    Practice, learn, and contribute to help the developer community succeed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <Button asChild size="lg" className="group">
                        <Link href="/questions">
                            Browse Questions
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/auth/signin">
                            Contribute Questions
                        </Link>
                    </Button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100+</div>
                        <p className="text-muted-foreground">Curated Questions</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 mb-2">6</div>
                        <p className="text-muted-foreground">Technology Categories</p>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 mb-2">3</div>
                        <p className="text-muted-foreground">Difficulty Levels</p>
                    </div>
                </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-primary/20 rounded-full blur-3xl"></div>
            </div>
        </section>
    );
}
