"use client"

import { Server, Layout, Cloud, Database, Code, Cpu } from "lucide-react"

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

const skillCategories = [
  {
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

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          <span className="bg-gradient-to-r from-[#0066FF] to-[#00D4FF] bg-clip-text text-transparent">
            Technical Skills
          </span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          A comprehensive overview of my technical expertise across various domains
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const CategoryIcon = category.icon
            return (
              <div
                key={index}
                className="p-6 rounded-xl bg-[#12121a]/80 border border-white/5 backdrop-blur-sm hover:border-[#0066FF]/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 rounded-lg bg-gradient-to-br from-[#0066FF]/20 to-[#00D4FF]/20">
                    <CategoryIcon className="w-5 h-5 text-[#00D4FF]" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-1">
                        <div className="flex items-center gap-2">
                          <img
                            src={skillIcons[skill.name] || "/placeholder.svg"}
                            alt={skill.name}
                            className="w-5 h-5 object-contain"
                          />
                          <span className="text-gray-300 text-sm">{skill.name}</span>
                        </div>
                        <span className="text-[#00D4FF] text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
