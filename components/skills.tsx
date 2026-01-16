"use client"

import { useEffect, useRef, useState } from "react"
import { Code, Cloud, Database, Layout, Server, Cpu } from "lucide-react"

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    color: "from-[#0066FF] to-[#00D4FF]",
    skills: [
      { name: "C# / .NET 8 / .NET Core", level: 95 },
      { name: "ASP.NET Core Web API", level: 95 },
      { name: "Blazor Server/WASM", level: 90 },
      { name: "Microservices Architecture", level: 85 },
      { name: "Python", level: 70 },
    ],
  },
  {
    title: "Frontend Development",
    icon: Layout,
    color: "from-[#00D4FF] to-[#0066FF]",
    skills: [
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5/CSS3/SASS", level: 90 },
      { name: "JavaScript/ES6+", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    color: "from-[#0066FF] to-[#00D4FF]",
    skills: [
      { name: "Microsoft Azure", level: 95 },
      { name: "Azure DevOps/CI-CD", level: 90 },
      { name: "Azure Functions", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Git/GitHub", level: 95 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    color: "from-[#00D4FF] to-[#0066FF]",
    skills: [
      { name: "SQL Server/T-SQL", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "Entity Framework Core", level: 90 },
      { name: "Redis Cache", level: 70 },
    ],
  },
  {
    title: "Programming Languages",
    icon: Code,
    color: "from-[#0066FF] to-[#00D4FF]",
    skills: [
      { name: "C#", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "C", level: 70 },
    ],
  },
  {
    title: "Data & ML",
    icon: Cpu,
    color: "from-[#00D4FF] to-[#0066FF]",
    skills: [
      { name: "Data Mining", level: 80 },
      { name: "Jupyter/Pandas", level: 80 },
      { name: "Machine Learning", level: 70 },
      { name: "TensorFlow/Keras", level: 65 },
      { name: "Scikit-learn", level: 70 },
    ],
  },
]

export function Skills() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Skills <span className="gradient-text">Matrix</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">
            Comprehensive skill set built through 5+ years of enterprise development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={index}
                className="glass rounded-2xl p-6 card-hover relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Glowing border on hover */}
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-5 rounded-2xl`} />
                </div>

                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${category.color} bg-opacity-20`}>
                      <Icon className="h-5 w-5 text-[#00D4FF]" />
                    </div>
                    <h3 className="font-bold text-white">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex justify-between text-sm mb-1.5">
                          <span className="text-[#8892b0]">{skill.name}</span>
                          <span className="text-[#00D4FF] font-medium">{skill.level}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out ${isVisible ? "skill-bar-fill" : ""}`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${skillIndex * 0.1}s`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
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
