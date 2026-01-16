"use client"

import Link from "next/link"
import { ExternalLink, CheckCircle, Cloud, Settings, Server } from "lucide-react"

const certifications = [
  {
    code: "AZ-400",
    name: "DevOps Engineer",
    issuer: "Microsoft Azure",
    icon: Settings,
    color: "from-[#0066FF] to-[#00D4FF]",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RapuruJagadish-8656/CE3EAA3E7AC2F14A?sharingId=2A18191ADB106515",
    skills: ["CI/CD", "Pipelines", "Infrastructure as Code"],
  },
  {
    code: "AZ-204",
    name: "Azure Developer Associate",
    issuer: "Microsoft Azure",
    icon: Server,
    color: "from-[#00D4FF] to-[#0066FF]",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RapuruJagadish-8656/F8DACB914B8428C4?sharingId=2A18191ADB106515",
    skills: ["Cloud-Native Apps", "Serverless", "APIs"],
  },
  {
    code: "AZ-900",
    name: "Azure Fundamentals",
    issuer: "Microsoft Azure",
    icon: Cloud,
    color: "from-[#0066FF] to-[#00D4FF]",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RapuruJagadish-8656/E25E81A9C954AA5?sharingId=2A18191ADB106515",
    skills: ["Cloud Concepts", "Azure Services", "Security"],
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Microsoft Azure <span className="gradient-text">Certified</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">
            Verified expertise in cloud architecture, DevOps, and enterprise application development
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="group relative glass rounded-2xl p-6 card-hover overflow-hidden flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Gradient border on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                />

                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />

                <div className="relative flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 rounded-xl bg-[#0066FF]/10 group-hover:bg-[#0066FF]/20 transition-colors">
                      <Icon className="h-8 w-8 text-[#00D4FF]" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-[#0066FF]/20 text-[#00D4FF] text-sm font-bold">
                      {cert.code}
                    </span>
                  </div>

                  <h3 className="font-bold text-white text-xl mb-1">{cert.name}</h3>
                  <p className="text-sm text-[#8892b0] mb-4">{cert.issuer}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {cert.skills.map((skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-white/5 text-xs text-[#8892b0]"
                      >
                        <CheckCircle className="h-3 w-3 text-[#00D4FF]" />
                        {skill}
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto">
                    <Link
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#0066FF]/25 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Verify
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
