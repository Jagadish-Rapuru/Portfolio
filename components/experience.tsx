import Link from "next/link"
import { ExternalLink } from "lucide-react"

const experiences = [
  {
    period: "June 2024 — Dec 2025",
    title: ".NET Developer – Graduate Assistant",
    company: "University of Nevada Reno",
    location: "Reno, NV, USA",
    url: "https://www.unr.edu/",
    description: [
      "Designed and developed GBCESU (Great Basin Cooperative Ecosystem Studies Unit) research portal using Blazor Server and Radzen UI components",
      "Implemented JWT-based authentication and authorization to secure application endpoints and protect sensitive research data",
      "Utilized Database First approach with Entity Framework Core scaffold commands to generate data models, ensuring schema consistency",
      "Designed and created optimized SQL Server views for complex data retrieval, improving query performance for research analytics",
      "Developed SSIS packages for data extraction, transformation, and loading across multiple databases",
      "Analyze production errors, identify root causes, and propose long-term fixes",
    ],
    technologies: [".NET Core", "C#", "Blazor Server", "Radzen", "SSIS", "SQL Server", "REST APIs", "JWT"],
  },
  {
    period: "Mar 2022 — Jul 2023",
    title: ".NET Developer",
    company: "Wipro Technologies",
    location: "India",
    url: "https://www.wipro.com/",
    description: [
      "Developed RESTful Web APIs using .NET Core microservices architecture, enabling scalable and maintainable backend services",
      "Collaborated on frontend development using Angular for building interactive forms and UI components",
      "Built .NET Console Applications to automate data migration by converting Excel data to SQL insert scripts, streamlining ETL processes",
      "Authored PostgreSQL PL/pgSQL functions for advanced multi-filtering and search capabilities, enhancing data retrieval efficiency",
      "Resolved critical production and UAT defects through systematic debugging, reducing bug count and improving application stability",
    ],
    technologies: [".NET Core", "C#", "Angular", "PostgreSQL"],
  },
  {
    period: "Mar 2020 — Mar 2022",
    title: ".NET Developer",
    company: "HCL Technologies",
    location: "India",
    url: "https://www.hcltech.com/",
    description: [
      "Designed and developed an Issue Tracking Portal using ASP.NET Core MVC, enabling teams to efficiently manage and resolve project issues",
      "Created dynamic web forms with Razor Pages and integrated Azure Cosmos DB for scalable, globally distributed data storage",
      "Implemented document management system leveraging Azure Blob Storage for secure upload and retrieval of PDFs and documents",
      "Built robust client-side validation using jQuery alongside server-side validation with Data Annotations for comprehensive input verification",
      "Engineered chunked file upload functionality for large video files to Azure Blob Storage, optimizing upload performance and reliability",
      "Managed sensitive application credentials and secrets using Azure Key Vault, enhancing security posture and compliance",
    ],
    technologies: ["ASP.NET Core", "C#", "SQL Server", "Blob Storage", "Azure Key Vault", "jQuery"],
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
