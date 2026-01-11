export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">About</h2>
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed text-muted-foreground">
          I'm a <span className="text-foreground font-medium">Microsoft Certified Azure Developer</span> with{" "}
          <span className="text-foreground font-medium">5 years of experience</span> designing and developing
          enterprise-grade web applications using .NET Core, Blazor, Angular, and Azure cloud services.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          My expertise spans across <span className="text-foreground font-medium">microservices architecture</span>,{" "}
          <span className="text-foreground font-medium">RESTful APIs</span>, and{" "}
          <span className="text-foreground font-medium">database optimization</span>. I'm skilled in delivering scalable
          solutions with a strong focus on performance, security, and clean code practices.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          I hold multiple <span className="text-foreground font-medium">Microsoft Azure certifications</span> including
          AZ-400 (DevOps Engineer Expert), AZ-204 (Developer Associate), and AZ-900 (Fundamentals), demonstrating my
          commitment to staying current with cloud technologies.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          Whether it's building interactive frontends with Angular and Blazor, developing robust backend services, or
          optimizing database queries, I bring a methodical approach to every challenge and continuously expand my
          knowledge in modern application development.
        </p>
      </div>
    </section>
  )
}
