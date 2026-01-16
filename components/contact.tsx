"use client"
import Link from "next/link"
import { Mail, Phone, Linkedin, MapPin, Github, Download } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my
            best to get back to you!
          </p>
        </div>

        {/* Contact Info */}
        <div className="glass rounded-2xl p-8 relative overflow-hidden">
          {/* Status Badge */}
          <div className="glass rounded-2xl p-6 relative overflow-hidden mb-8">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400" />
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-green-400 font-bold">Currently Seeking Opportunities</span>
            </div>
            <p className="text-[#8892b0] text-sm text-center">
              Available to start: <span className="text-white font-medium">Immediately</span>
            </p>
          </div>

          <h3 className="font-bold text-white text-xl mb-6 text-center">Contact Information</h3>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <Link
              href="mailto:jagadishrapuru@gmail.com"
              className="flex flex-col items-center gap-3 text-[#8892b0] hover:text-[#00D4FF] transition-colors group p-4 rounded-xl hover:bg-white/5"
            >
              <div className="p-3 rounded-xl bg-[#0066FF]/10 group-hover:bg-[#0066FF]/20 transition-colors">
                <Mail className="h-5 w-5 text-[#00D4FF]" />
              </div>
              <div className="text-center">
                <p className="text-sm text-[#8892b0]">Email</p>
                <p className="text-white font-medium text-sm">jagadishrapuru@gmail.com</p>
              </div>
            </Link>

            <Link
              href="tel:+17753516890"
              className="flex flex-col items-center gap-3 text-[#8892b0] hover:text-[#00D4FF] transition-colors group p-4 rounded-xl hover:bg-white/5"
            >
              <div className="p-3 rounded-xl bg-[#0066FF]/10 group-hover:bg-[#0066FF]/20 transition-colors">
                <Phone className="h-5 w-5 text-[#00D4FF]" />
              </div>
              <div className="text-center">
                <p className="text-sm text-[#8892b0]">Phone</p>
                <p className="text-white font-medium text-sm">(775) 351-6890</p>
              </div>
            </Link>

            <div className="flex flex-col items-center gap-3 p-4 rounded-xl">
              <div className="p-3 rounded-xl bg-[#0066FF]/10">
                <MapPin className="h-5 w-5 text-[#00D4FF]" />
              </div>
              <div className="text-center">
                <p className="text-sm text-[#8892b0]">Location</p>
                <p className="text-white font-medium text-sm">Reno, Nevada, USA</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-[#8892b0] mb-4 text-center">Quick Links</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="https://github.com/Jagadish-Rapuru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-[#8892b0] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all text-sm"
              >
                <Github className="h-4 w-4" />
                GitHub
              </Link>
              <Link
                href="https://www.linkedin.com/in/jagadish-rapuru-a13a34214/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full glass text-[#8892b0] hover:text-[#00D4FF] hover:border-[#00D4FF]/50 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all text-sm"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
              <a
                href="/Jagadish_Rapuru_Resume.pdf"
                download="Jagadish_Rapuru_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#0066FF]/25 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-white/10 text-center">
          <p className="text-[#8892b0] text-sm">© {new Date().getFullYear()} Jagadish Rapuru. All rights reserved.</p>
        </div>
      </div>
    </section>
  )
}
