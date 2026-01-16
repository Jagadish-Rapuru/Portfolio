"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"

const roles = [".NET Full Stack Developer", "Azure Certified Cloud Engineer", "MS Computer Science @ UNR"]

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [counts, setCounts] = useState({ years: 0, certs: 0, projects: 0 })
  const statsRef = useRef<HTMLDivElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Typing animation
  useEffect(() => {
    const currentRole = roles[currentRoleIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentRole.length) {
            setDisplayText(currentRole.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRoleIndex])

  // Counter animation
  useEffect(() => {
    if (!hasAnimated) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setHasAnimated(true)
            animateCounters()
          }
        },
        { threshold: 0.5 },
      )

      if (statsRef.current) {
        observer.observe(statsRef.current)
      }

      return () => observer.disconnect()
    }
  }, [hasAnimated])

  const animateCounters = () => {
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      setCounts({
        years: Math.round(5 * progress),
        certs: Math.round(3 * progress),
        projects: Math.round(10 * progress),
      })
      if (step >= steps) clearInterval(timer)
    }, interval)
  }

  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Left Side - Content */}
          <div className="order-2 lg:order-1">
            {/* Open to Work Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 pulse-glow">
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-green-400">Open to Work</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
              JAGADISH <span className="gradient-text">RAPURU</span>
            </h1>

            {/* Typing Animation */}
            <div className="h-10 flex items-center mb-6">
              <span className="text-xl md:text-2xl text-[#00D4FF] font-medium typing-cursor">{displayText}</span>
            </div>

            {/* Stats Row */}
            <div ref={statsRef} className="flex flex-wrap gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{counts.years}+</div>
                <div className="text-sm text-[#8892b0]">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{counts.certs}x</div>
                <div className="text-sm text-[#8892b0]">Azure Certified</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold gradient-text">{counts.projects}+</div>
                <div className="text-sm text-[#8892b0]">Projects Delivered</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/Jagadish_Rapuru_Resume.pdf"
                target="_blank"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-medium hover:shadow-lg hover:shadow-[#0066FF]/30 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Link>
              <Link
                href="https://www.linkedin.com/in/jagadish-rapuru-a13a34214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full glass text-white font-medium hover:bg-white/10 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <ExternalLink className="h-5 w-5" />
                Let's Connect
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="https://github.com/Jagadish-Rapuru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-[#8892b0] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jagadish-rapuru-a13a34214/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-[#8892b0] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:jagadishrapuru@gmail.com"
                className="p-3 rounded-full glass text-[#8892b0] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Side - Profile with Floating Icons */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              {/* Gradient ring */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] blur-xl opacity-30 animate-pulse" />

              {/* Profile Image */}
              <div className="relative">
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] opacity-75" />
                <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-[#0a0a0f]">
                  <Image src="/images/profile.jpeg" alt="Jagadish Rapuru" fill className="object-cover" priority />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -right-4 p-3 glass rounded-xl animate-float">
                <span className="text-2xl font-bold text-[#0066FF]">C#</span>
              </div>
              <div
                className="absolute top-1/4 -left-8 p-3 glass rounded-xl animate-float"
                style={{ animationDelay: "1s" }}
              >
                <span className="text-xl font-bold text-[#00D4FF]">.NET</span>
              </div>
              <div
                className="absolute bottom-1/4 -right-6 p-3 glass rounded-xl animate-float"
                style={{ animationDelay: "2s" }}
              >
                <span className="text-xl font-bold text-[#0066FF]">Azure</span>
              </div>
              <div
                className="absolute -bottom-2 left-1/4 p-3 glass rounded-xl animate-float"
                style={{ animationDelay: "1.5s" }}
              >
                <span className="text-xl font-bold text-[#00D4FF]">SQL</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
