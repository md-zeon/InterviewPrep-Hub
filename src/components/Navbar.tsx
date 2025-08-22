// "use client";

import Link from "next/link";
import {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Separator } from "./ui/separator";
import Container from "./Container";

export default function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
			<Container>
				<div className="flex h-16 items-center justify-between">
					{/* Logo */}
					<Link href="/" className="text-xl font-bold">
						InterviewPrep Hub
					</Link>

					{/* Desktop Navigation */}
					<nav className="hidden md:flex items-center gap-4">
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link href="/questions">Questions</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link href="/categories">Categories</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
								<NavigationMenuItem>
									<NavigationMenuLink asChild>
										<Link href="/about">About</Link>
									</NavigationMenuLink>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>

						{/* Auth */}
						<Button variant="outline" asChild>
							<Link href="/login">Login</Link>
						</Button>
						<Button asChild>
							<Link href="/register">Sign Up</Link>
						</Button>

						{/* Theme Toggle */}
						<ModeToggle />
					</nav>

					{/* Mobile Navigation */}
					<div className="md:hidden flex items-center gap-2">
						<ModeToggle />
						<Sheet>
							<SheetTrigger asChild>
								<Button variant="ghost" size="icon">
									<Menu className="h-6 w-6" />
								</Button>
							</SheetTrigger>
							<SheetContent side="right" className="w-64">
								<div className="flex flex-col gap-4 p-8">
									<Link href="/questions" className="text-lg font-medium">
										Questions
									</Link>
									<Link href="/categories" className="text-lg font-medium">
										Categories
									</Link>
									<Link href="/about" className="text-lg font-medium">
										About
									</Link>
									<Separator />
									<div className="pt-4 mt-4 flex flex-col gap-2">
										<Button variant="outline" asChild>
											<Link href="/login">Login</Link>
										</Button>
										<Button asChild>
											<Link href="/register">Sign Up</Link>
										</Button>
									</div>
								</div>
							</SheetContent>
						</Sheet>
					</div>
				</div>
			</Container>
		</header>
	);
}
