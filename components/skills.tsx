const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: ["C#", ".NET Framework", ".NET Core", "ASP.NET", "VB.NET", "BizTalk Server"],
  },
  {
    title: "Batch & ETL",
    skills: ["SSIS Packages", "SQL Server Agent Jobs", "Batch Scheduling", "DTS", "BCP Utility"],
  },
  {
    title: "Web Services",
    skills: ["SOAP", "REST APIs", "WCF Services", "Web API"],
  },
  {
    title: "Database",
    skills: ["MS SQL Server", "T-SQL", "Stored Procedures", "Triggers", "Performance Tuning"],
  },
  {
    title: "Monitoring Tools",
    skills: ["Splunk", "Azure Application Insights", "SQL Profiler", "Windows Event Logs"],
  },
  {
    title: "Cloud",
    skills: ["Azure App Service", "Azure Functions", "Azure SQL", "AWS EC2"],
  },
  {
    title: "DevOps",
    skills: ["Azure DevOps", "CI/CD Pipelines", "Git", "TFS"],
  },
  {
    title: "Methodologies",
    skills: ["ITIL", "Agile/Scrum", "SDLC"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Skills</h2>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <div key={index} className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">{category.title}</h3>
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
        ))}
      </div>
    </section>
  )
}
