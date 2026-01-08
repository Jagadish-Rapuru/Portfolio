import Link from "next/link"
import { ExternalLink, GraduationCap, Award } from "lucide-react"

const certifications = [
  {
    name: "Azure DevOps Engineer Expert (AZ-400)",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RapuruJagadish-8656/CE3EAA3E7AC2F14A?sharingId=2A18191ADB106515",
  },
  {
    name: "Azure Developer Associate (AZ-204)",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RapuruJagadish-8656/F8DACB914B8428C4?sharingId=2A18191ADB106515",
  },
  {
    name: "Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    url: "https://learn.microsoft.com/api/credentials/share/en-us/RapuruJagadish-8656/E25E81A9C954AA5?sharingId=2A18191ADB106515",
  },
]

export function Education() {
  return (
    <section id="education" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">Education</h2>
      </div>

      <div className="space-y-8">
        {/* Degree */}
        <div className="group relative rounded-lg border border-border bg-card p-6 transition-all hover:border-primary/50">
          <div className="flex items-start gap-4">
            <GraduationCap className="h-8 w-8 text-primary shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground">Master of Science in Computer Science and Engineering</h3>
              <Link
                href="https://www.unr.edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                University of Nevada, Reno
                <ExternalLink className="ml-1 h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
            <Award className="h-4 w-4 text-primary" />
            Certifications
          </h3>
          <div className="space-y-3">
            {certifications.map((cert, index) => (
              <Link
                key={index}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/cert flex items-center justify-between rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:bg-card/80"
              >
                <div>
                  <p className="font-medium text-foreground group-hover/cert:text-primary transition-colors">
                    {cert.name}
                  </p>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover/cert:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
