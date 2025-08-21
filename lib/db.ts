import { neon } from "@neondatabase/serverless"

const sql = neon(process.env.DATABASE_URL!)

export interface Project {
  id: string
  name: string
  description: string | null
  thumbnail: string | null
  liveUrl: string | null
  repoUrl: string | null
  technologies: string[]
  createdAt: Date
  updatedAt: Date
  order: number | null
  duration: string | null
}

export async function getProjects(): Promise<Project[]> {
  try {
    const projects = await sql`
      SELECT 
        id,
        name,
        description,
        thumbnail,
        "liveUrl",
        "repoUrl",
        technologies,
        "createdAt",
        "updatedAt",
        "order",
        duration,
        "videoUrl"
      FROM "Projects"
      ORDER BY COALESCE("order", 999), "createdAt" DESC LIMIT 4
    `

    return projects as Project[]
  } catch (error) {
    console.error("Failed to fetch projects:", error)
    return []
  }
}
