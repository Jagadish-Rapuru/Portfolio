import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Certifications } from "@/components/certifications"
import { Experience } from "@/components/experience"
import { WhyHireMe } from "@/components/why-hire-me"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { HireMeButton } from "@/components/hire-me-button"

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0f] overflow-hidden grid-pattern">
      {/* Gradient mesh blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#0066FF]/10 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute top-3/4 -right-32 w-96 h-96 bg-[#00D4FF]/10 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "5s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#0066FF]/5 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "10s" }}
        />
      </div>

      <ScrollProgress />
      <Header />

      <main className="relative z-10">
        <Hero />
        <Certifications />
        <Experience />
        <WhyHireMe />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <BackToTop />
      <HireMeButton />
    </div>
  )
}
