"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
    return (
        <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-purple-600/10 to-blue-600/10">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to Level Up Your Interview Skills?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join thousands of developers who have successfully landed their dream jobs
                </p>
                <Button asChild size="lg">
                    <Link href="/questions">
                        Start Practicing Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
            </div>
        </section>
    );
}
