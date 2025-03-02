import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ResQ By AARAMBH",
    description:
      "Advanced accident detection and response system leveraging IoT sensors, AI models, and GPS technologies for rapid emergency response.",
    technologies: ["IoT", "AI/ML", "Python", "C++", "YOLO", "ESP32-CAM"],
    github: "https://github.com/tanishq-sood/SAFEGUARD360-Accident-detection-model",
    demo: "https://police-dash.vercel.app/dashboard",
  },
  {
    title: "Autonomous Sample Retrieving Planetary Rover",
    description:
      "ISRO URSC IRoC 2024 finalist project integrating SLAM for autonomous navigation and inverse kinematics for precision robotic arm control.",
    technologies: ["Python", "ROS2", "SLAM", "Robotics", "Computer Vision"],
    github: "#",
    demo: null,
  },
  {
    title: "AYUSH Startup Registration Portal",
    description:
      "Streamlined portal for AYUSH sector startup registration featuring blockchain-based authentication and user-friendly interface.",
    technologies: ["React.js", "Node.js", "MongoDB", "Blockchain", "Tailwind CSS"],
    github: "#",
    demo: "https://ayush-dash.vercel.app/login",
  },
  {
    title: "AI-Powered Inventory Management System",
    description:
      "Hackathon project using AI to analyze sales data for inventory optimization with predictive analytics.",
    technologies: ["Python", "React.js", "Flask", "PostgreSQL", "Machine Learning"],
    github: "#",
    demo: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 overflow-hidden">
              <div className="h-48 w-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center p-6">
                <h3 className="text-2xl font-bold text-center text-gray-200">{project.title}</h3>
              </div>
              <CardHeader className="p-6">
                <CardTitle className="mb-2">{project.title}</CardTitle>
                <CardDescription className="text-gray-400 text-base">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-6 pt-0">
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-sm rounded-full bg-blue-500/20 text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button asChild variant="outline" size="sm" className="hover:bg-gray-700/50">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" /> Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button asChild size="sm" className="bg-blue-500 hover:bg-blue-600">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

