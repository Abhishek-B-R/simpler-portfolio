"use client"

import { useState, useEffect } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, TvMinimalPlay } from "lucide-react"
import Github from "./icons/Github"

interface Project {
  id: string
  name: string
  description: string | null
  thumbnail: string | null
  liveUrl: string | null
  repoUrl: string | null
  technologies: string[]
  createdAt: string
  updatedAt: string
  order: number | null
  duration: string | null
  videoUrl: string | null
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("/api/projects")
        if (response.ok) {
          const data = await response.json()
          setProjects(data)
        }
      } catch (error) {
        console.error("Failed to fetch projects:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>
          <div className="text-gray-400">Loading projects...</div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-8">Projects</h2>

        <div className="space-y-8">
          {projects.map((project) => (
            <div key={project.id} className="border-l-2 border-gray-700 pl-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-colors flex items-center gap-2 px-2 bg-white"
                      >
                        Demo <TvMinimalPlay className="h-4 w-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-colors flex items-center gap-2 px-2 bg-white rounded"
                      >
                        Live <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-800 hover:text-black transition-colors flex items-center gap-2 px-2 bg-white rounded"
                      >
                        Github <Github className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {project.description && <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>}

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="bg-gray-800/70 text-gray-200 hover:bg-gray-300 hover:text-gray-800">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
