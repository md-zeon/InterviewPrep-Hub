import Categories from "@/components/Categories"
import Features from "@/components/Features"
import Hero from "@/components/Hero"

const HomePage = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Features />
      <Categories />
    </main>
  )
}

export default HomePage