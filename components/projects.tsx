import Link from "next/link"
import Image from "next/image"
import { FolderGit2 } from "lucide-react"

const projects = [
  {
    title: "GBCESU Research Portal",
    client: "University of Nevada, Reno (Client: Bureau of Land Management)",
    description:
      "A comprehensive research portal developed for the Great Basin Cooperative Ecosystem Studies Unit using Blazor Server and Radzen UI components. Implemented JWT-based authentication, Entity Framework Core with Database First approach, and optimized SQL Server views for research analytics.",
    technologies: [".NET Core", "Blazor Server", "Radzen", "SQL Server", "REST APIs", "JWT", "Entity Framework Core"],
    link: "https://gbcesu.unr.edu/",
    hasLink: true,
    image: "/images/image.png",
  },
  {
    title: "Relcare Substation Monitoring System",
    client: "Wipro (Client: Hitachi Energy)",
    description:
      "Enterprise-grade monitoring system built with .NET Core microservices architecture. Developed RESTful Web APIs, Angular-based interactive UI components, and PostgreSQL PL/pgSQL functions for advanced data filtering and search capabilities.",
    technologies: [".NET Core", "C#", "Angular", "PostgreSQL", "REST APIs"],
    link: "#",
    hasLink: false,
  },
  {
    title: "Digital Days Issue Tracking Portal",
    client: "HCL (Client: Microsoft)",
    description:
      "Issue tracking and management portal built using ASP.NET Core MVC with Razor Pages. Features include Azure Cosmos DB integration, document management with Azure Blob Storage, chunked file uploads for large videos, and Azure Key Vault for secrets management.",
    technologies: ["ASP.NET Core", "C#", "Razor Pages", "Azure Cosmos DB", "Blob Storage", "Azure Key Vault", "jQuery"],
    link: "#",
    hasLink: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Projects</h2>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50 hover:bg-card/80"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <FolderGit2 className="h-10 w-10 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{project.client}</p>
                </div>
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>

            {project.image && project.hasLink && (
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block relative overflow-hidden rounded-lg border border-border hover:border-primary/50 transition-all group/image"
              >
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} preview`}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover object-top transition-transform group-hover/image:scale-105"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover/image:bg-primary/10 transition-colors flex items-center justify-center">
                  <span className="opacity-0 group-hover/image:opacity-100 transition-opacity bg-background/90 text-foreground text-sm font-medium px-4 py-2 rounded-full">
                    Click to visit website
                  </span>
                </div>
              </Link>
            )}

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <li key={tech}>
                  <span className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
