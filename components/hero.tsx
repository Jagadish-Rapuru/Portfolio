import Link from "next/link"
import { Mail, Phone, Linkedin } from "lucide-react"

export function Hero() {
  return (
    <section className="pt-24 pb-12 lg:pt-0 lg:pb-0">
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Jagadish Rapuru</h1>
      <h2 className="mt-3 text-lg font-medium text-primary sm:text-xl">.NET Full Stack Developer</h2>
      <p className="mt-1 text-muted-foreground">Production Support & Batch Operations</p>
      <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
        Microsoft Certified Azure Developer building robust, scalable enterprise applications with .NET technologies.
      </p>

      {/* Desktop Navigation */}
      <nav className="mt-16 hidden lg:block" aria-label="In-page jump links">
        <ul className="w-max">
          <NavItem href="#about" label="About" />
          <NavItem href="#experience" label="Experience" />
          <NavItem href="#projects" label="Projects" />
          <NavItem href="#skills" label="Skills" />
          <NavItem href="#education" label="Education" />
        </ul>
      </nav>

      {/* Social Links */}
      <ul className="mt-8 flex items-center gap-5" aria-label="Social media">
        <li>
          <Link
            href="mailto:jagadishrapuru@gmail.com"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link
            href="tel:+17753516890"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/jagadish-rapuru-a13a34214/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </li>
      </ul>
    </section>
  )
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <a
        href={href}
        className="group flex items-center py-3 text-sm font-medium text-muted-foreground transition-all hover:text-foreground"
      >
        <span className="mr-4 h-px w-8 bg-muted-foreground transition-all group-hover:w-16 group-hover:bg-foreground" />
        {label}
      </a>
    </li>
  )
}
