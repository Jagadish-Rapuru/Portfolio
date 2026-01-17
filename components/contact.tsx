"use client"

import Link from "next/link"
import { Mail, Phone, Linkedin, MapPin, Github, Download, Calendar, Clock, Check } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText("jagadishrapuru@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Let's Connect
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Let's Build Something <span className="gradient-text">Great Together</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">Currently interviewing for .NET Developer positions</p>
        </div>

        {/* Availability Card */}
        <div className="glass rounded-2xl p-6 mb-8 relative overflow-hidden border border-green-500/30">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400" />
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="relative">
                <span className="flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500"></span>
                </span>
              </div>
              <div>
                <p className="text-green-400 font-bold text-lg">Available to Start: Immediately</p>
                <p className="text-[#8892b0] text-sm">Location: Reno, NV (Open to Remote)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-[#8892b0] text-sm">
              <Clock className="h-4 w-4" />I typically respond within 2 hours
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="glass rounded-2xl p-8 relative overflow-hidden">
          <h3 className="font-bold text-white text-xl mb-6 text-center">Contact Information</h3>

          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            <button
              onClick={copyEmail}
              className="flex flex-col items-center gap-3 text-[#8892b0] hover:text-[#00D4FF] transition-colors group p-4 rounded-xl hover:bg-white/5"
            >
              <div className="p-3 rounded-xl bg-[#0066FF]/10 group-hover:bg-[#0066FF]/20 transition-colors">
                {copied ? <Check className="h-5 w-5 text-green-500" /> : <Mail className="h-5 w-5 text-[#00D4FF]" />}
              </div>
              <div className="text-center">
                <p className="text-sm text-[#8892b0]">
                  Email {copied && <span className="text-green-400">(Copied!)</span>}
                </p>
                <p className="text-white font-medium text-sm">jagadishrapuru@gmail.com</p>
              </div>
            </button>

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

          {/* Schedule Call CTA */}
          <div className="text-center mb-8">
            <Link
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-bold text-lg hover:shadow-xl hover:shadow-[#0066FF]/30 hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <Calendar className="h-6 w-6" />
              Schedule a 15-Minute Call
            </Link>
            <p className="text-[#8892b0] text-sm mt-3">I respond to all inquiries within 24 hours</p>
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
          <p className="text-[#8892b0] text-sm mb-2">
            © {new Date().getFullYear()} Jagadish Rapuru. All rights reserved.
          </p>
          <p className="text-[#64748b] text-xs">Open to opportunities - Let's connect!</p>
        </div>
      </div>
    </section>
  )
}
