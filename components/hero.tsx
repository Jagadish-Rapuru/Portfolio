"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Linkedin, Download, Calendar, Building2 } from "lucide-react"

const roles = [
  "Building Scalable Enterprise Applications",
  "3x Microsoft Azure Certified Professional",
  "Microservices & Cloud Architecture",
]

const floatingSkills = [
  { name: "C#", angle: 0, color: "text-purple-400" },
  { name: ".NET", angle: 60, color: "text-blue-400" },
  { name: "Azure", angle: 120, color: "text-[#00BCF2]" },
  { name: "SQL", angle: 180, color: "text-orange-400" },
  { name: "Angular", angle: 240, color: "text-red-400" },
  { name: "API", angle: 300, color: "text-green-400" },
]

const stats = [
  { value: 5, suffix: "+", label: "Years Exp" },
  { value: 3, suffix: "", label: "Azure Certs" },
  { value: 500, suffix: "K+", label: "Daily API Calls" },
  { value: 99.9, suffix: "%", label: "Uptime" },
]

const companies = [
  { name: "Wipro", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  { name: "HCL Technologies", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
  {
    name: "University of Nevada, Reno",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
  },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLSpanElement>(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current * 10) / 10)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => observer.disconnect()
  }, [value, hasAnimated])

  return (
    <span ref={countRef} className="text-3xl md:text-4xl font-bold gradient-text-blue">
      {count}
      {suffix}
    </span>
  )
}

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute bottom-20 right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/15 rounded-full blur-3xl animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left side - Profile Image with orbiting skills */}
          <div className="relative flex-shrink-0">
            <div
              className="absolute inset-0 w-[calc(100%+6rem)] h-[calc(100%+6rem)] -left-12 -top-12 animate-spin-slow"
              style={{ animationDuration: "30s" }}
            >
              {floatingSkills.map((skill) => {
                const radius = 180
                const angleRad = (skill.angle * Math.PI) / 180
                const x = Math.cos(angleRad) * radius
                const y = Math.sin(angleRad) * radius

                return (
                  <div
                    key={skill.name}
                    className={`absolute left-1/2 top-1/2 ${skill.color} text-sm font-bold hover:scale-125 transition-transform duration-300 cursor-default z-10`}
                    style={{
                      transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    }}
                  >
                    <span
                      className="inline-block animate-spin-slow"
                      style={{ animationDirection: "reverse", animationDuration: "30s" }}
                    >
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* Rotating orbit ring */}
            <div
              className="absolute inset-0 w-[calc(100%+6rem)] h-[calc(100%+6rem)] -left-12 -top-12 rounded-full border-2 border-dashed border-[#0066FF]/30 animate-spin-slow"
              style={{ animationDuration: "40s" }}
            />

            {/* Multiple glow layers */}
            <div className="absolute inset-0 w-full h-full rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] blur-2xl opacity-30" />
            <div className="absolute inset-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-20" />

            {/* Profile Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0066FF]/50 shadow-2xl shadow-[#0066FF]/30">
              <Image src="/images/profile.jpeg" alt="Jagadish Rapuru" fill className="object-cover" priority />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="text-center lg:text-left flex-1">
            {/* Available Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/30 mb-6 pulse-glow">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-400">Open to Work - Available Immediately</span>
            </div>

            {/* Name */}
            <p className="text-lg text-[#8892b0] mb-2">Hi, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 tracking-tight">
              <span className="text-white">Jagadish Rapuru</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 gradient-text-blue">
              .NET Full Stack Developer
            </h2>

            {/* Typing Animation */}
            <div className="h-8 mb-6">
              <span className="text-lg md:text-xl text-[#00D4FF] font-medium typing-cursor">{displayText}</span>
            </div>

            {/* Value Proposition */}
            <p className="text-[#94a3b8] text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              I architect high-performance .NET solutions that handle{" "}
              <span className="text-[#00D4FF] font-semibold">500K+ daily requests</span> with{" "}
              <span className="text-[#00D4FF] font-semibold">99.9% uptime</span> for Fortune 500 companies.
            </p>

            {/* Stats Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 glass rounded-2xl">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover:scale-105 transition-transform">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-xs text-[#8892b0] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
              <a
                href="/Jagadish_Rapuru_Resume.pdf"
                download="Jagadish_Rapuru_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-medium hover:shadow-lg hover:shadow-[#0066FF]/30 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
              <Link
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full glass border border-[#0066FF]/30 text-white font-medium hover:bg-white/10 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <Calendar className="h-5 w-5" />
                Schedule Call
              </Link>
              <Link
                href="https://www.linkedin.com/in/jagadish-rapuru-a13a34214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full text-[#8892b0] hover:text-[#00D4FF] hover:scale-105 transition-all duration-300"
              >
                <Linkedin className="h-5 w-5" />
                LinkedIn
              </Link>
            </div>

            {/* Company Trust Strip */}
            <div className="pt-6 border-t border-white/10">
              <p className="text-xs text-[#64748b] mb-3 flex items-center gap-2 justify-center lg:justify-start">
                <Building2 className="h-3 w-3" />
                Previously delivered solutions for
              </p>
              <div className="flex items-center justify-center lg:justify-start gap-6 flex-wrap">
                {["Wipro", "HCL Technologies", "University of Nevada, Reno"].map((company) => (
                  <span
                    key={company}
                    className="text-sm text-[#64748b] hover:text-white transition-colors cursor-default grayscale hover:grayscale-0"
                  >
                    {company}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
