import { Briefcase, GraduationCap, Award, Code2 } from "lucide-react"

const highlights = [
  { icon: Briefcase, label: "5+ Years Experience", description: "Professional development" },
  { icon: GraduationCap, label: "MS Computer Science", description: "University of Nevada, Reno" },
  { icon: Award, label: "3x Azure Certified", description: "AZ-400, AZ-204, AZ-900" },
  { icon: Code2, label: "Full Stack Expert", description: ".NET, Azure, Angular" },
]

export function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Passionate about building scalable solutions and continuously learning
        </p>

        {/* Highlights Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {highlights.map((item, index) => (
            <div key={index} className="glass rounded-xl p-6 text-center hover:scale-105 transition-transform">
              <item.icon className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-1">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Bio */}
        <div className="glass rounded-2xl p-8 space-y-4">
          <p className="leading-relaxed text-muted-foreground">
            I'm a <span className="text-foreground font-medium">Senior .NET Full Stack Developer</span> currently
            pursuing my <span className="text-foreground font-medium">Master's in Computer Science</span> at the
            University of Nevada, Reno. With over 5 years of professional experience, I specialize in building
            enterprise-grade applications using .NET Core, Blazor, Angular, and Azure cloud services.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            Currently working as a <span className="text-foreground font-medium">Graduate Assistant</span> at UNR, I'm
            developing the GBCESU Research Portal for the Bureau of Land Management. My previous roles at{" "}
            <span className="text-foreground font-medium">Wipro Technologies</span> and{" "}
            <span className="text-foreground font-medium">HCL Technologies</span> gave me extensive experience in
            microservices architecture, database optimization, and cloud deployments.
          </p>

          <p className="leading-relaxed text-muted-foreground">
            I'm passionate about <span className="text-foreground font-medium">cloud architecture</span>,{" "}
            <span className="text-foreground font-medium">data engineering</span>, and{" "}
            <span className="text-foreground font-medium">machine learning</span>. I continuously expand my knowledge
            and hold three Microsoft Azure certifications demonstrating my commitment to staying current with cloud
            technologies.
          </p>
        </div>
      </div>
    </section>
  )
}
