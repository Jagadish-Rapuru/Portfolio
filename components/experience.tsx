"use client"

import Link from "next/link"
import { ExternalLink, MapPin, Calendar, Building2, Briefcase } from "lucide-react"

const experiences = [
  {
    period: "June 2024 — December 2025",
    title: ".NET Developer",
    company: "University of Nevada, Reno",
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
      "Monitored application logs using Splunk and resolved performance bottlenecks",
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
    <section id="experience" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Career Journey
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">
            Building enterprise solutions across industries - from research portals to power grid monitoring
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#0066FF] via-[#00D4FF] to-[#0066FF]" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row gap-8 mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] border-4 border-[#0a0a0f] z-10" />

              {/* Content */}
              <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-16" : "md:pl-16"} pl-12 md:pl-0`}>
                <div
                  className={`glass rounded-2xl p-6 card-hover relative overflow-hidden ${index % 2 === 0 ? "md:text-right" : ""}`}
                >
                  {/* Accent line */}
                  <div
                    className={`absolute top-0 ${index % 2 === 0 ? "right-0" : "left-0"} w-1 h-full bg-gradient-to-b from-[#0066FF] to-[#00D4FF]`}
                  />

                  <div
                    className={`flex items-center gap-2 text-sm text-[#00D4FF] font-medium mb-3 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    <Calendar className="h-4 w-4" />
                    {exp.period}
                  </div>

                  <div
                    className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? "md:justify-end md:flex-row-reverse" : ""}`}
                  >
                    <Briefcase className="h-5 w-5 text-[#0066FF]" />
                    <h3 className="font-bold text-white text-xl">{exp.title}</h3>
                  </div>

                  <Link
                    href={exp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-white hover:text-[#00D4FF] transition-colors font-medium ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <Building2 className="h-4 w-4" />
                    {exp.company}
                    <ExternalLink className="h-3 w-3" />
                  </Link>

                  <div
                    className={`flex items-center gap-1.5 text-sm text-[#8892b0] mt-2 ${index % 2 === 0 ? "md:justify-end" : ""}`}
                  >
                    <MapPin className="h-3 w-3" />
                    {exp.location}
                  </div>

                  <ul className={`mt-4 space-y-2 ${index % 2 === 0 ? "md:text-right" : ""}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-[#8892b0] flex items-start gap-2">
                        <span className="text-[#00D4FF] mt-1.5 flex-shrink-0">{index % 2 === 0 ? "" : ""}</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className={`flex flex-wrap gap-2 mt-5 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-[#0066FF]/10 text-xs font-medium text-[#00D4FF] border border-[#0066FF]/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-1/2" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
