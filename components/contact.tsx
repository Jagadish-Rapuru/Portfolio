import Link from "next/link"
import { Mail, Phone, Linkedin, MapPin } from "lucide-react"

export function Contact() {
  return (
    <section className="mb-16 scroll-mt-16 lg:mb-24 lg:scroll-mt-24">
      <div className="rounded-lg border border-border bg-card p-6">
        <h2 className="text-lg font-semibold text-foreground mb-4">Get In Touch</h2>
        <p className="text-sm leading-relaxed text-muted-foreground mb-6">
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <div className="space-y-3">
          <Link
            href="mailto:jagadishrapuru@gmail.com"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            jagadishrapuru@gmail.com
          </Link>
          <Link
            href="tel:+17753516890"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (775) 351-6890
          </Link>
          <Link
            href="https://www.linkedin.com/in/jagadish-rapuru-a13a34214/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin className="h-4 w-4" />
            linkedin.com/in/jagadish-rapuru
          </Link>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Reno, NV, USA
          </div>
        </div>

        <Link
          href="mailto:jagadishrapuru@gmail.com"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Say Hello
        </Link>
      </div>
    </section>
  )
}
