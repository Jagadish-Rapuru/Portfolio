import Link from "next/link"
import { ExternalLink, FolderGit2 } from "lucide-react"

const projects = [
  {
    title: "GBCESU Research Portal",
    client: "University of Nevada, Reno (Bureau of Land Management)",
    description:
      "A comprehensive research portal developed for the Great Basin Cooperative Ecosystem Studies Unit. Built with Blazor Server and Radzen UI components, enabling researchers to collaborate and manage ecosystem studies data efficiently.",
    technologies: [".NET Core", "Blazor Server", "Radzen", "SQL Server", "REST APIs"],
    link: "https://gbcesu.unr.edu/",
    hasLink: true,
  },
  {
    title: "Relcare Substation Monitoring System",
    client: "Wipro (Hitachi Energy)",
    description:
      "Enterprise-grade monitoring system for electrical substations. Implemented batch processing, SSIS packages for data transformation, and real-time monitoring capabilities using Splunk for system health tracking.",
    technologies: [".NET Framework", "C#", "SSIS", "BizTalk", "SQL Server", "Splunk"],
    link: "#",
    hasLink: false,
  },
  {
    title: "Digital Days Issue Tracking Portal",
    client: "HCL (Microsoft)",
    description:
      "Issue tracking and management portal built for Microsoft's Digital Days initiative. Features include batch job scheduling, automated reporting, and integration with existing Microsoft systems through SOAP and REST services.",
    technologies: ["ASP.NET", "C#", "SQL Server", "T-SQL", "SOAP", "REST"],
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
              {project.hasLink && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${project.title}`}
                >
                  <ExternalLink className="h-5 w-5" />
                </Link>
              )}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
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
