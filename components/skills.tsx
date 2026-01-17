"use client"

import { useState, useEffect, useRef } from "react"
import { Server, Layout, Cloud, Database, Code, Cpu, Star } from "lucide-react"

const skillIcons: Record<string, string> = {
  // Backend
  "C# / .NET 8 / .NET Core": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  "ASP.NET Core Web API": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  "Blazor Server/WASM": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blazor/blazor-original.svg",
  "Microservices Architecture": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",

  // Frontend
  Angular: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
  TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "HTML5/CSS3/SASS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "JavaScript/ES6+": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",

  // Cloud & DevOps
  "Microsoft Azure": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  "Azure DevOps/CI-CD": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg",
  "Azure Functions": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
  Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  "Git/GitHub": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",

  // Databases
  "SQL Server/T-SQL":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg",
  PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "Entity Framework Core": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
  "Redis Cache": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",

  // Programming Languages
  "C#": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",

  // Data & ML
  "Data Mining": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "Jupyter/Pandas": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  "Machine Learning": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "TensorFlow/Keras": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Scikit-learn": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
}

const coreExpertiseSkills = [
  "C# / .NET 8 / .NET Core",
  "C#",
  "Microsoft Azure",
  "SQL Server/T-SQL",
  "Angular",
  "ASP.NET Core Web API",
]

const filters = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "cloud", label: "Cloud" },
  { id: "database", label: "Database" },
  { id: "languages", label: "Languages" },
]

const skillCategories = [
  {
    id: "backend",
    title: "Backend Development",
    icon: Server,
    skills: [
      { name: "C# / .NET 8 / .NET Core", level: 95 },
      { name: "ASP.NET Core Web API", level: 95 },
      { name: "Blazor Server/WASM", level: 90 },
      { name: "Microservices Architecture", level: 85 },
      { name: "Python", level: 70 },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: Layout,
    skills: [
      { name: "Angular", level: 85 },
      { name: "TypeScript", level: 85 },
      { name: "HTML5/CSS3/SASS", level: 90 },
      { name: "JavaScript/ES6+", level: 85 },
      { name: "Tailwind CSS", level: 80 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "Microsoft Azure", level: 95 },
      { name: "Azure DevOps/CI-CD", level: 90 },
      { name: "Azure Functions", level: 85 },
      { name: "Docker", level: 80 },
      { name: "Git/GitHub", level: 95 },
    ],
  },
  {
    id: "database",
    title: "Databases",
    icon: Database,
    skills: [
      { name: "SQL Server/T-SQL", level: 95 },
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 70 },
      { name: "Entity Framework Core", level: 90 },
      { name: "Redis Cache", level: 70 },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C#", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 85 },
      { name: "Python", level: 70 },
      { name: "C", level: 70 },
    ],
  },
  {
    id: "data",
    title: "Data & ML",
    icon: Cpu,
    skills: [
      { name: "Data Mining", level: 80 },
      { name: "Jupyter/Pandas", level: 80 },
      { name: "Machine Learning", level: 70 },
      { name: "TensorFlow/Keras", level: 65 },
      { name: "Scikit-learn", level: 70 },
    ],
  },
]

function AnimatedProgressBar({ level, isVisible }: { level: number; isVisible: boolean }) {
  return (
    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
      <div
        className="h-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-full transition-all duration-1000 ease-out"
        style={{ width: isVisible ? `${level}%` : "0%" }}
      />
    </div>
  )
}

export function Skills() {
  const [activeFilter, setActiveFilter] = useState("all")
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

  const filteredCategories =
    activeFilter === "all" ? skillCategories : skillCategories.filter((cat) => cat.id === activeFilter)

  return (
    <section id="skills" className="py-20 px-4" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Technical Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent">
              Skills Matrix
            </span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white shadow-lg shadow-[#0066FF]/25"
                    : "glass text-[#8892b0] hover:text-white hover:bg-white/10"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#12121a]/80 border border-white/5 backdrop-blur-sm hover:border-[#0066FF]/30 transition-all duration-300 card-hover"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20">
                    <CategoryIcon className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const isExpert = skill.level >= 90
                    const isCoreExpertise = coreExpertiseSkills.includes(skill.name)

                    return (
                      <div
                        key={skillIndex}
                        className={`group ${isExpert ? "relative" : ""}`}
                        style={{ animationDelay: `${skillIndex * 0.1}s` }}
                      >
                        {isExpert && (
                          <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/20 to-amber-500/20 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}

                        <div className={`relative ${isExpert ? "p-2 -m-2" : ""}`}>
                          <div className="flex justify-between items-center mb-1">
                            <div className="flex items-center gap-2">
                              <img
                                src={skillIcons[skill.name] || "/placeholder.svg"}
                                alt={skill.name}
                                className="w-5 h-5 object-contain"
                              />
                              <span className="text-gray-300 text-sm">{skill.name}</span>
                              {isCoreExpertise && (
                                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-400 border border-yellow-500/30">
                                  <Star className="h-2.5 w-2.5 fill-current" />
                                  CORE
                                </span>
                              )}
                            </div>
                            <span className={`text-sm font-medium ${isExpert ? "text-yellow-400" : "text-[#00D4FF]"}`}>
                              {skill.level}%
                            </span>
                          </div>
                          <AnimatedProgressBar level={skill.level} isVisible={isVisible} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
