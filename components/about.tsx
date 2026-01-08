export function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="sticky top-0 z-20 -mx-6 mb-4 bg-background/75 px-6 py-5 backdrop-blur lg:hidden">
        <h2 className="text-sm font-bold uppercase tracking-widest text-foreground">About</h2>
      </div>

      <div className="space-y-4">
        <p className="leading-relaxed text-muted-foreground">
          I'm a <span className="text-foreground font-medium">Microsoft Certified Azure Developer</span> with{" "}
          <span className="text-foreground font-medium">5 years of experience</span> in .NET application development and
          production support. My passion lies in building enterprise-grade applications that are both performant and
          maintainable.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          My expertise spans across <span className="text-foreground font-medium">batch job scheduling</span>,{" "}
          <span className="text-foreground font-medium">SSIS package development</span>, and{" "}
          <span className="text-foreground font-medium">SQL Server optimization</span>. I thrive in production
          environments where ensuring application uptime and stability is paramount.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          I have a proven track record in <span className="text-foreground font-medium">root cause analysis</span>,{" "}
          <span className="text-foreground font-medium">incident resolution</span>, and cross-team collaboration.
          Whether it's monitoring systems with Splunk or developing complex T-SQL queries, I bring a methodical approach
          to every challenge.
        </p>

        <p className="leading-relaxed text-muted-foreground">
          When I'm not debugging production issues or optimizing database queries, I'm continuously expanding my
          knowledge in cloud technologies and exploring new ways to leverage Azure services for modern application
          development.
        </p>
      </div>
    </section>
  )
}
