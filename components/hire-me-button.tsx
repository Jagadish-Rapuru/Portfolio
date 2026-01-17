"use client"

import { useState, useEffect } from "react"
import { Briefcase } from "lucide-react"

export function HireMeButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling past hero section (about 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.8)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToContact}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-medium shadow-lg shadow-[#0066FF]/30 hover:shadow-xl hover:shadow-[#0066FF]/40 hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-subtle"
      aria-label="Hire Me"
    >
      <Briefcase className="h-5 w-5" />
      <span className="hidden sm:inline">Hire Me</span>
    </button>
  )
}
