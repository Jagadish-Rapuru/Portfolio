"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Download } from "lucide-react"

const navItems = [
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
]

export function Header() {
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      const sections = navItems.map((item) => item.href.slice(1))
      for (const section of sections.reverse()) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${isScrolled ? "glass-strong shadow-lg" : ""}`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold gradient-text tracking-tight">
            JR
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-[#00D4FF] ${
                  activeSection === item.href.slice(1) ? "text-[#00D4FF]" : "text-[#8892b0]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/Jagadish_Rapuru_Resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white hover:shadow-lg hover:shadow-[#0066FF]/25 transition-all duration-300"
            >
              <Download className="h-4 w-4" />
              Resume
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-[#0066FF]/20 pt-4">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-medium transition-colors hover:text-[#00D4FF] ${
                    activeSection === item.href.slice(1) ? "text-[#00D4FF]" : "text-[#8892b0]"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/Jagadish_Rapuru_Resume.pdf"
                target="_blank"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white w-fit"
              >
                <Download className="h-4 w-4" />
                Resume
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
