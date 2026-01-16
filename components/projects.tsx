"use client"

import Link from "next/link"
import Image from "next/image"
import {
  Github,
  ExternalLink,
  Factory,
  Monitor,
  ImageIcon,
  BarChart3,
  Cpu,
  Brain,
  FlaskConical,
  Star,
  Code,
} from "lucide-react"

const featuredProject = {
  title: "GBCESU Research Portal",
  description:
    "Research proposal management system developed for the University of Nevada, Reno in collaboration with Bureau of Land Management. Handles research funding, project coordination, and comprehensive proposal lifecycle management.",
  technologies: ["Blazor Server", ".NET 8", "Azure", "SQL Server", "EF Core", "REST APIs"],
  link: "https://gbcesu.unr.edu/",
  image: "/images/gbcesu.png",
  icon: FlaskConical,
  features: [
    "Research proposal submission & tracking",
    "Multi-stage approval workflow",
    "Document management system",
    "Reporting & analytics dashboard",
  ],
}

const highlightedProject = {
  title: "MineEvac - Emergency Mine Evacuation System",
  description:
    "Real-time emergency evacuation system for underground mines. Tracks personnel location, detects hazards, and coordinates safe evacuation routes during emergencies.",
  technologies: ["C#/.NET", "Xamarin.Forms", "Google Maps API", "XML", "GPS Tracking"],
  github: "https://github.com/Jagadish-Rapuru/MineEvac",
  icon: Factory,
  image: "/images/mineevac.png",
  features: [
    "Real-time GPS tracking of 200+ miners",
    "Automated hazard detection & alerts",
    "Emergency protocol automation",
    "Mobile-responsive dashboard",
  ],
}

const projects = [
  {
    title: "MineEvac Frontend",
    description:
      "Modern, responsive dashboard for MineEvac with real-time data visualization and interactive mine maps.",
    technologies: ["TypeScript", "React", "Tailwind", "Chart.js", "WebSocket"],
    github: "https://github.com/Jagadish-Rapuru/MineEvac-Frontend-main",
    icon: Monitor,
  },
  {
    title: "MineEvac Backend",
    description: "Backend API services for MineEvac system handling real-time data processing and emergency protocols.",
    technologies: ["JavaScript", "Node.js", "Express", "WebSocket", "MongoDB"],
    github: "https://github.com/Jagadish-Rapuru/MineEvac-Backend-main",
    icon: Code,
  },
  {
    title: "Data Mining Projects",
    description:
      "Collection of data mining implementations: classification, clustering, association rules, and predictive analytics.",
    technologies: ["Jupyter Notebook", "Python", "Pandas", "Scikit-learn", "Matplotlib"],
    github: "https://github.com/Jagadish-Rapuru/Data-Mining",
    icon: BarChart3,
  },
  {
    title: "Image Processing Toolkit",
    description:
      "Computer vision algorithms including edge detection, filters, transformations, and color manipulation.",
    technologies: ["Python", "OpenCV", "NumPy", "PIL", "Matplotlib"],
    github: "https://github.com/Jagadish-Rapuru/ImageProcessing",
    icon: ImageIcon,
  },
  {
    title: "Machine Learning Projects",
    description:
      "ML implementations covering neural networks, classification, regression, and model optimization techniques.",
    technologies: ["Python", "TensorFlow", "Keras", "Scikit-learn"],
    github: "https://github.com/Jagadish-Rapuru/Machine-Learning",
    icon: Brain,
  },
  {
    title: "Operating System Concepts",
    description: "Core OS implementations: process scheduling, memory management, thread synchronization.",
    technologies: ["C", "Linux", "Shell Scripting", "POSIX"],
    github: "https://github.com/Jagadish-Rapuru/Operating-System",
    icon: Cpu,
  },
  {
    title: "Dynamic Programming",
    description: "Collection of dynamic programming algorithms and solutions for optimization problems.",
    technologies: ["C", "Algorithms", "Data Structures"],
    github: "https://github.com/Jagadish-Rapuru/Dynamic-Programming",
    icon: Code,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">
            A selection of my work spanning enterprise applications, machine learning, and system programming
          </p>
        </div>

        <div className="mb-8">
          <div className="group glass rounded-2xl p-8 card-hover relative overflow-hidden border border-[#0066FF]/30">
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-xs font-bold">
              <Star className="h-3 w-3 fill-current" />
              FEATURED
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#0066FF]/10">
                    <featuredProject.icon className="h-8 w-8 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-bold text-white text-2xl">{featuredProject.title}</h3>
                </div>

                <p className="text-[#8892b0] mb-6">{featuredProject.description}</p>

                <div className="space-y-2 mb-6">
                  {featuredProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-[#8892b0]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-sm font-medium text-[#00D4FF] border border-[#0066FF]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={featuredProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-medium hover:shadow-lg hover:shadow-[#0066FF]/25 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                  Visit Site
                </Link>
              </div>

              <div className="hidden lg:block">
                <Link
                  href={featuredProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video rounded-xl overflow-hidden border border-[#0066FF]/20 group/image"
                >
                  <Image
                    src={featuredProject.image || "/placeholder.svg"}
                    alt={featuredProject.title}
                    fill
                    className="object-cover group-hover/image:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Click to visit website</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="group glass rounded-2xl p-8 card-hover relative overflow-hidden border border-[#00D4FF]/30">
            <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-[#00D4FF] to-[#0066FF] text-white text-xs font-bold">
              <Star className="h-3 w-3 fill-current" />
              HIGHLIGHTED
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-[#00D4FF]/10">
                    <highlightedProject.icon className="h-8 w-8 text-[#00D4FF]" />
                  </div>
                  <h3 className="font-bold text-white text-2xl">{highlightedProject.title}</h3>
                </div>

                <p className="text-[#8892b0] mb-6">{highlightedProject.description}</p>

                <div className="space-y-2 mb-6">
                  {highlightedProject.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-[#8892b0]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00D4FF]" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {highlightedProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-[#00D4FF]/10 text-sm font-medium text-[#00D4FF] border border-[#00D4FF]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={highlightedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-medium hover:shadow-lg hover:shadow-[#0066FF]/25 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                >
                  <Github className="h-5 w-5" />
                  View Code
                </Link>
              </div>

              <div className="hidden lg:block">
                <Link
                  href={highlightedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block aspect-video rounded-xl overflow-hidden border border-[#00D4FF]/20 group/image"
                >
                  <Image
                    src={highlightedProject.image || "/placeholder.svg"}
                    alt={highlightedProject.title}
                    fill
                    className="object-cover group-hover/image:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/image:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Click to view code</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-6 card-hover relative overflow-hidden flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-[#0066FF]/10 group-hover:bg-[#0066FF]/20 transition-colors">
                    <Icon className="h-6 w-6 text-[#00D4FF]" />
                  </div>
                </div>

                <h3 className="font-bold text-white text-lg mb-2 group-hover:text-[#00D4FF] transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#8892b0] mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded-md bg-white/5 text-xs text-[#8892b0]">
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-[#8892b0]">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>

                <div className="mt-auto">
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#0066FF]/25 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all duration-300"
                  >
                    <Github className="h-4 w-4" />
                    View Code
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
