"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react"

const roles = [".NET Full Stack Developer", "Azure Certified Cloud Engineer", "MS Computer Science @ UNR"]

const skillCategories = [
  {
    name: "BACKEND",
    skills: [
      { name: "C#", glow: "purple" },
      { name: ".NET 8", glow: "purple" },
      { name: "ASP.NET Core", glow: "purple" },
      { name: "Blazor", glow: "purple" },
      { name: "Web API", glow: "purple" },
      { name: "Entity Framework", glow: "purple" },
      { name: "SignalR", glow: "purple" },
    ],
  },
  {
    name: "FRONTEND",
    skills: [
      { name: "Angular", glow: "red" },
      { name: "React", glow: "cyan" },
      { name: "TypeScript", glow: "blue" },
      { name: "JavaScript", glow: "yellow" },
      { name: "HTML5", glow: "orange" },
      { name: "CSS3", glow: "blue" },
      { name: "Tailwind", glow: "cyan" },
    ],
  },
  {
    name: "CLOUD & DEVOPS",
    skills: [
      { name: "Azure", glow: "blue", badge: "3x Certified" },
      { name: "Azure DevOps", glow: "blue" },
      { name: "Docker", glow: "blue" },
      { name: "CI/CD", glow: "green" },
      { name: "Microservices", glow: "cyan" },
      { name: "Git", glow: "orange" },
    ],
  },
  {
    name: "DATABASES",
    skills: [
      { name: "SQL Server", glow: "red" },
      { name: "PostgreSQL", glow: "blue" },
      { name: "MongoDB", glow: "green" },
      { name: "Redis", glow: "red" },
      { name: "T-SQL", glow: "yellow" },
    ],
  },
  {
    name: "DATA & ML",
    skills: [
      { name: "Python", glow: "yellow" },
      { name: "TensorFlow", glow: "orange" },
      { name: "Machine Learning", glow: "pink" },
      { name: "Data Mining", glow: "purple" },
      { name: "OpenCV", glow: "green" },
      { name: "Pandas", glow: "blue" },
    ],
  },
  {
    name: "PRACTICES",
    skills: [
      { name: "Agile", glow: "blue" },
      { name: "Scrum", glow: "green" },
      { name: "SOLID", glow: "purple" },
      { name: "Design Patterns", glow: "cyan" },
      { name: "Linux", glow: "yellow" },
      { name: "REST API", glow: "green" },
    ],
  },
]

const floatingSkills = [
  { name: "C#", angle: 0, color: "text-purple-400" },
  { name: ".NET", angle: 60, color: "text-blue-400" },
  { name: "Azure", angle: 120, color: "text-[#00BCF2]" },
  { name: "SQL", angle: 180, color: "text-orange-400" },
  { name: "Angular", angle: 240, color: "text-red-400" },
  { name: "API", angle: 300, color: "text-green-400" },
]

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
              {floatingSkills.map((skill, index) => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 pulse-glow">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-semibold text-green-400">Open to Work</span>
            </div>

            {/* Name */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
              <span className="gradient-text">Jagadish Rapuru</span>
            </h1>

            {/* Typing Animation */}
            <div className="h-8 mb-6">
              <span className="text-xl md:text-2xl text-[#00D4FF] font-medium typing-cursor">{displayText}</span>
            </div>

            {/* Description */}
            <p className="text-[#94a3b8] text-lg mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Building scalable enterprise solutions with expertise in microservices architecture, RESTful APIs, and
              cloud-native applications. Passionate about clean code and performance optimization.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="/Jagadish_Rapuru_Resume.pdf"
                download="Jagadish_Rapuru_Resume.pdf"
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-medium hover:shadow-lg hover:shadow-[#0066FF]/30 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </a>
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
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Link
                href="https://github.com/Jagadish-Rapuru"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-[#94a3b8] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/jagadish-rapuru-a13a34214/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-[#94a3b8] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:jagadishrapuru@gmail.com"
                className="p-3 rounded-full glass text-[#94a3b8] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:scale-110 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
