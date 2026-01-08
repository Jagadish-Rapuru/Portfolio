import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Experience } from "@/components/experience"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="lg:flex">
        {/* Left sidebar - sticky on desktop */}
        <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24 lg:px-12 xl:px-24">
          <Hero />
        </div>
        {/* Right content - scrollable */}
        <div className="lg:w-1/2 lg:py-24 px-6 lg:px-12 xl:px-24">
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </div>
      </main>
    </div>
  )
}
