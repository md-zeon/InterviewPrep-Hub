import Link from "next/link";
import { Button } from "./ui/button";
import { Github, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-background border-t mt-16">
            <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">

                {/* Logo & Description */}
                <div className="flex flex-col gap-2">
                    <Link href="/" className="text-xl font-bold">
                        InterviewPrep Hub
                    </Link>
                    <p className="text-muted-foreground max-w-sm">
                        A full-stack platform to prepare for technical interviews with curated questions, detailed solutions, and community contributions.
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-12">
                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Pages</h4>
                        <Link href="/questions" className="text-muted-foreground hover:text-primary transition-colors">Questions</Link>
                        <Link href="/categories" className="text-muted-foreground hover:text-primary transition-colors">Categories</Link>
                        <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Account</h4>
                        <Link href="/login" className="text-muted-foreground hover:text-primary transition-colors">Login</Link>
                        <Link href="/register" className="text-muted-foreground hover:text-primary transition-colors">Sign Up</Link>
                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="font-semibold">Connect</h4>
                        <div className="flex gap-2 mt-1">
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="mailto:support@interviewprephub.com"><Mail className="h-5 w-5" /></Link>
                            </Button>
                            <Button variant="ghost" size="icon" asChild>
                                <Link href="https://github.com/md-zeon"><Github className="h-5 w-5" /></Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-t mt-8 py-4 text-center text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} InterviewPrep Hub. All rights reserved.
            </div>
        </footer>
    );
}
