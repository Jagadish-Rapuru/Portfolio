import Link from "next/link"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "June 2024 — Dec 2025",
    title: "Senior .NET Developer",
    company: "University of Nevada Reno",
    location: "Reno, NV, USA",
    url: "https://www.unr.edu/",
    description: [
      "Designed and developed GBCESU (Great Basin Cooperative Ecosystem Studies Unit) research portal using Blazor Server and Radzen UI components",
      "Scheduled, monitored, and executed batch jobs using SQL Server Agent and SSIS packages across Dev, QA, and Production environments",
      "Monitor production systems and ensure application uptime and stability",
      "Analyze production errors, identify root causes, and propose long-term fixes",
      "Collaborate with development, database, and infrastructure teams to resolve incidents and improve performance",
    ],
    technologies: [".NET Core", "C#", "Blazor Server", "Radzen", "SSIS", "SQL Server", "T-SQL", "Splunk", "REST APIs"],
  },
  {
    period: "Mar 2022 — Jul 2023",
    title: ".NET Developer",
    company: "Wipro Technologies",
    location: "India",
    url: "https://www.wipro.com/",
    description: [
      "Managed batch job scheduling and monitoring for enterprise applications using SQL Server Agent",
      "Developed SSIS packages for data extraction, transformation, and loading across multiple databases",
      "Provided 24x7 production support with rotational shifts, handling incidents and ensuring system stability",
      "Wrote complex T-SQL queries, stored procedures, and triggers for data processing and reporting",
      "Integrated SOAP and REST services for inter-system communication",
    ],
    technologies: [".NET Framework", "C#", "BizTalk", "SSIS", "SQL Server", "T-SQL", "SOAP", "REST", "Splunk"],
  },
  {
    period: "Mar 2020 — Mar 2022",
    title: ".NET Developer",
    company: "HCL Technologies",
    location: "India",
    url: "https://www.hcltech.com/",
    description: [
      "Scheduled, monitored, and ran batch jobs across multiple environments",
      "Monitored production systems and ensured application uptime and stability",
      "Developed and maintained SQL monitoring queries and reports",
      "Collaborated with DBA and infrastructure teams to resolve database and server issues",
      "Documented batch processes, runbooks, and troubleshooting guides for operations team",
    ],
    technologies: ["ASP.NET", "C#", "SSIS", "SQL Server", "T-SQL", "SOAP", "REST", "Splunk"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Experience</h2>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <div key={index} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4">
            <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground sm:col-span-2">
              {exp.period}
            </header>
            <div className="z-10 sm:col-span-6">
              <h3 className="font-medium leading-snug">
                <Link
                  href={exp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link inline-flex items-baseline text-foreground hover:text-primary focus-visible:text-primary"
                >
                  <span>
                    {exp.title} ·{" "}
                    <span className="inline-block">
                      {exp.company}
                      <ExternalLink className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                    </span>
                  </span>
                </Link>
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
              <ul className="mt-2 space-y-1.5">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed text-muted-foreground">
                    • {item}
                  </li>
                ))}
              </ul>
              <ul className="mt-4 flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <li key={tech}>
                    <span className="flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {tech}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
