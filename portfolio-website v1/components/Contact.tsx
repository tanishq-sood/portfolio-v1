"use client"

import type React from "react"

import { useState } from "react"
import { Linkedin, Github, Mail } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-md bg-gray-800 text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
          <div className="flex flex-col justify-center items-center space-y-4">
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <Linkedin className="h-6 w-6 mr-2" />
              LinkedIn
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <Github className="h-6 w-6 mr-2" />
              GitHub
            </a>
            <a
              href="mailto:your.email@example.com"
              className="flex items-center text-blue-400 hover:text-blue-300 transition duration-300"
            >
              <Mail className="h-6 w-6 mr-2" />
              your.email@example.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

