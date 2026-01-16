"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, Linkedin, MapPin, Github, Send, CheckCircle, Download, Briefcase } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Job Opportunity",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "Job Opportunity", message: "" })

    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
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

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Status Badge */}
            <div className="glass rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-emerald-400" />
              <div className="flex items-center gap-3 mb-3">
                <span className="h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <span className="text-green-400 font-bold">Currently Seeking Opportunities</span>
              </div>
              <p className="text-[#8892b0] text-sm">
                Available to start: <span className="text-white font-medium">Immediately</span>
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h3 className="font-bold text-white text-xl mb-6">Contact Information</h3>

              <div className="space-y-5">
                <Link
                  href="mailto:jagadishrapuru@gmail.com"
                  className="flex items-center gap-4 text-[#8892b0] hover:text-[#00D4FF] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-[#0066FF]/10 group-hover:bg-[#0066FF]/20 transition-colors">
                    <Mail className="h-5 w-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Email</p>
                    <p className="text-white font-medium">jagadishrapuru@gmail.com</p>
                  </div>
                </Link>

                <Link
                  href="tel:+17753516890"
                  className="flex items-center gap-4 text-[#8892b0] hover:text-[#00D4FF] transition-colors group"
                >
                  <div className="p-3 rounded-xl bg-[#0066FF]/10 group-hover:bg-[#0066FF]/20 transition-colors">
                    <Phone className="h-5 w-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Phone</p>
                    <p className="text-white font-medium">(775) 351-6890</p>
                  </div>
                </Link>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#0066FF]/10">
                    <MapPin className="h-5 w-5 text-[#00D4FF]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#8892b0]">Location</p>
                    <p className="text-white font-medium">Reno, Nevada, USA</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm text-[#8892b0] mb-4">Quick Links</p>
                <div className="flex flex-wrap gap-3">
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
                  <Link
                    href="/Jagadish_Rapuru_Resume.pdf"
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white text-sm font-medium hover:shadow-lg hover:shadow-[#0066FF]/25 hover:scale-105 hover:-translate-y-0.5 active:scale-95 transition-all"
                  >
                    <Download className="h-4 w-4" />
                    Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0066FF] to-[#00D4FF]" />

            <h3 className="font-bold text-white text-xl mb-6">Send a Message</h3>

            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <div className="p-4 rounded-full bg-green-500/10 mb-4">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">Message Sent!</h4>
                <p className="text-[#8892b0]">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-white mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8892b0]" />
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all appearance-none cursor-pointer"
                    >
                      <option value="Job Opportunity">Job Opportunity</option>
                      <option value="Collaboration">Collaboration</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-[#8892b0] focus:outline-none focus:ring-2 focus:ring-[#0066FF] focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#0066FF] to-[#00D4FF] text-white font-bold hover:shadow-lg hover:shadow-[#0066FF]/30 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
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
