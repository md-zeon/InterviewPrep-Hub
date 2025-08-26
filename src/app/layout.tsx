import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "InterviewPrep Hub",
	description: "Ace Your Next Tech Interview. Comprehensive collection of technical interview questions with detailed solutions.  Practice, learn, and contribute to help the developer community succeed."
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang='en'
			suppressHydrationWarning={true}
		>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning={true}>
				<ThemeProvider
					attribute='class'
					defaultTheme='system'
					enableSystem
					disableTransitionOnChange
				>
					<SessionProvider>
						<Navbar />
						{children}
						<Footer />
					</SessionProvider>
				</ThemeProvider>
				<Toaster />
			</body>
		</html>
	);
}
