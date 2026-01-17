import type React from "react"
import type { Metadata } from "next"
import { DM_Sans, Sora, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" })

export const metadata: Metadata = {
  title: "Jagadish Rapuru | .NET Developer | Azure Certified | Hire Me",
  description:
    ".NET Full Stack Developer with 5+ years experience, 3 Azure certifications. Specialized in microservices, Web APIs, and enterprise applications. Available for immediate hire.",
  keywords: [
    "Jagadish Rapuru",
    ".NET Developer",
    "Azure Certified",
    "Full Stack Developer",
    "C#",
    "SQL Server",
    "Blazor",
    "Cloud Engineer",
    "Software Engineer",
    "Hire .NET Developer",
    "Available for hire",
  ],
  openGraph: {
    title: "Jagadish Rapuru | .NET Developer | Azure Certified",
    description: "Microsoft Certified Azure Developer with 5+ years experience. Available for immediate hire.",
    type: "website",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${sora.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
