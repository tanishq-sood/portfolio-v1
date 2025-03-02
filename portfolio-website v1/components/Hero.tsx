"use client"

import { Mail, FileText, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none" />
      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
                Tanishq Sood
              </span>
            </h1>
            <p className="text-xl text-gray-300">A passionate developer building the future of technology</p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button
              asChild
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
            >
              <a href="mailto:tanishqsood.24@gmail.com">
                <Mail className="mr-2 h-4 w-4" /> Contact Me
              </a>
            </Button>
            <Button
              asChild
              className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-200"
            >
              <a
                href="https://drive.google.com/file/d/1HZvbYPGDo35yNhj-a9YlB96SaJ9XT4w3/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </a>
            </Button>
          </div>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Link href="https://github.com/tanishq-sood" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-gray-800/50">
                <Github className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/tanishq-sood/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-gray-800/50">
                <Linkedin className="h-5 w-5" />
              </Button>
            </Link>
            <Link href="https://x.com/TanishqSood_24" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="hover:bg-gray-800/50">
                <Twitter className="h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative h-[400px] w-full">
          <div className="w-full h-full max-w-md mx-auto bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center">
            <h2 className="text-4xl font-bold text-gray-300">TS</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

