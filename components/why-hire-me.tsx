"use client"

import { Rocket, Layers, Cloud, Users } from "lucide-react"

const reasons = [
  {
    icon: Rocket,
    title: "Immediate Impact",
    description:
      "I've consistently delivered production-ready code within the first 2 weeks at every role. No lengthy ramp-up needed.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Layers,
    title: "Full Stack Expertise",
    description:
      "End-to-end ownership from database design to API development to frontend implementation. One developer, complete solutions.",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description:
      "3x Azure certified with hands-on experience in serverless, containers, CI/CD pipelines, and enterprise cloud architecture.",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Team Player",
    description:
      "Proven collaboration across global teams, clear communication, and experience mentoring junior developers.",
    color: "from-green-500 to-emerald-500",
  },
]

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Value Proposition
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why <span className="gradient-text">Hire Me</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">What sets me apart from other candidates</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div key={index} className="group glass rounded-2xl p-6 card-hover relative overflow-hidden">
                {/* Gradient top line */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${reason.color}`} />

                <div
                  className={`p-3 rounded-xl bg-gradient-to-r ${reason.color} bg-opacity-10 w-fit mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="font-bold text-white text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-[#8892b0]">{reason.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
