import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Target, Users, Zap } from "lucide-react";

export default function Features() {
    return (
        <section className="py-20 px-4 bg-muted/50">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Everything You Need to Succeed
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive resources designed to help you excel in technical interviews
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6 text-center">
                            <BookOpen className="h-12 w-12 text-primary mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Curated Questions</h3>
                            <p className="text-muted-foreground">
                                Hand-picked questions covering all major technologies and concepts
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6 text-center">
                            <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Difficulty Levels</h3>
                            <p className="text-muted-foreground">
                                Progress from beginner to advanced with structured difficulty levels
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6 text-center">
                            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Community Driven</h3>
                            <p className="text-muted-foreground">
                                Contribute your own questions and help fellow developers succeed
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                        <CardContent className="p-6 text-center">
                            <Zap className="h-12 w-12 text-green-600 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Detailed Solutions</h3>
                            <p className="text-muted-foreground">
                                Comprehensive answers with explanations and best practices
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
