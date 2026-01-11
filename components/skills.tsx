import { Code, Layout, Globe, Database, Activity, Cloud, GitBranch, FileSpreadsheet } from "lucide-react"

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code,
    skills: ["C#", ".NET Framework", ".NET Core", "ASP.NET MVC", "Blazor Server", "Web API"],
  },
  {
    title: "Frontend",
    icon: Layout,
    skills: ["Angular", "Razor Pages", "HTML5", "CSS3", "JavaScript", "jQuery", "Radzen UI Components"],
  },
  {
    title: "Web Services",
    icon: Globe,
    skills: ["SOAP", "REST APIs", "WCF Services", "Web API"],
  },
  {
    title: "Database",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "Cosmos DB", "PL/pgSQL", "T-SQL", "Database Views", "Stored Procedures"],
  },
  {
    title: "Monitoring Tools",
    icon: Activity,
    skills: ["Splunk", "Azure Application Insights", "SQL Profiler", "Windows Event Logs"],
  },
  {
    title: "Cloud",
    icon: Cloud,
    skills: ["Azure App Service", "Azure Functions", "Azure SQL", "Blob Storage", "Azure Key Vault"],
  },
  {
    title: "DevOps",
    icon: GitBranch,
    skills: ["Azure DevOps", "CI/CD Pipelines", "Git", "TFS"],
  },
  {
    title: "Office Tools & Methodologies",
    icon: FileSpreadsheet,
    skills: ["Excel (Advanced)", "Power BI", "Microsoft Office Suite", "ITIL", "Agile/Scrum", "SDLC"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Skills</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => {
          const IconComponent = category.icon
          return (
            <div key={index} className="space-y-3">
              <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <IconComponent className="h-4 w-4 text-primary" />
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-primary/20 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
