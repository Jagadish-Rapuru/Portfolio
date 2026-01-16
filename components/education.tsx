import Link from "next/link"
import { GraduationCap, ExternalLink, BookOpen, Calendar } from "lucide-react"

const coursework = [
  "Advanced Database Systems",
  "Data Mining & Machine Learning",
  "Digital Forensics",
  "Operating Systems",
  "Image Processing",
]

export function Education() {
  return (
    <section id="education" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-[#00D4FF] text-sm font-medium mb-4">
            Academic Background
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-[#8892b0] max-w-2xl mx-auto">
            Building a strong foundation in computer science and engineering
          </p>
        </div>

        <div className="space-y-6">
          {/* Masters */}
          <div className="glass rounded-2xl p-8 card-hover relative overflow-hidden">
            {/* Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#0066FF] to-[#00D4FF]" />

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 rounded-xl bg-[#0066FF]/10 shrink-0">
                <GraduationCap className="h-10 w-10 text-[#00D4FF]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-xl">Master of Science - Computer Science</h3>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0066FF]/10 text-[#00D4FF] text-sm font-medium w-fit">
                    <Calendar className="h-4 w-4" />
                    Aug 2023 - May 2025
                  </div>
                </div>

                <Link
                  href="https://www.unr.edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-white hover:text-[#00D4FF] transition-colors font-medium"
                >
                  University of Nevada, Reno
                  <ExternalLink className="h-4 w-4" />
                </Link>

                <p className="text-sm text-[#8892b0] mt-1">GPA: 3.8/4.0</p>

                <p className="mt-4 text-[#8892b0]">
                  Focusing on advanced topics in software engineering, machine learning, data mining, and cloud
                  computing. Currently working as a Graduate Assistant developing the GBCESU Research Portal.
                </p>

                <div className="mt-4">
                  <p className="text-sm text-[#8892b0] mb-3">Relevant Coursework:</p>
                  <div className="flex flex-wrap gap-2">
                    {coursework.map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1 rounded-full bg-white/5 text-sm text-[#8892b0] border border-white/5"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bachelors */}
          <div className="glass rounded-2xl p-8 card-hover relative overflow-hidden">
            {/* Accent */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#00D4FF] to-[#0066FF]" />

            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="p-4 rounded-xl bg-[#00D4FF]/10 shrink-0">
                <BookOpen className="h-10 w-10 text-[#0066FF]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                  <h3 className="font-bold text-white text-xl">Bachelor of Technology - Computer Science</h3>
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00D4FF]/10 text-[#0066FF] text-sm font-medium w-fit">
                    <Calendar className="h-4 w-4" />
                    Graduated 2019
                  </div>
                </div>

                <p className="text-white font-medium">India</p>

                <p className="mt-4 text-[#8892b0]">
                  Completed undergraduate studies with focus on computer science fundamentals, programming, data
                  structures, algorithms, and software development principles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
