"use client";
import Backlight from "@/components/backlight";
import Github from "@/components/icons/Github";
import LinkedIn from "@/components/icons/LinkedIn";
import Twitter from "@/components/icons/Twitter";
import { ProjectsSection } from "@/components/projects-section";
import { LampContainer } from "@/components/ui/lamp";
import { ExternalLink, FileText, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume.pdf";
    link.download = "Abhishek_BR_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  const [visitorCount, setVisitorCount] = useState(0);
  useEffect(() => {
    (async () => {
      const data = await fetch("/api/visitors");
      if (data.ok) {
        const jsonData = await data.json();
        setVisitorCount(jsonData.count);
      } else {
        setVisitorCount(100);
      }
    })();
  }, []);

  return (
    <LampContainer className="inset-0 left-0 top-0 w-full h-full bg-gray-900 text-gray-200">
      <Backlight />
      <main className="relative z-20 w-full max-w-4xl mx-auto px-6 py-16 text-white">
        <header className="mb-12">
          <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-center md:justify-between md:text-left mb-8">
            <h1 className="text-2xl font-medium">Hi, I&apos;m Abhishek👋</h1>
            <div className="flex flex-col items-center gap-2 md:flex-row md:items-center md:gap-4 text-sm">
              <div className="flex gap-3">
                <a
                  href="https://github.com/Abhishek-B-R"
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/abhi-br"
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LinkedIn className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/abhi__br"
                  className="hover:text-blue-400 transition-colors"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <button
                  onClick={handleDownloadResume}
                  className="hover:text-blue-400 transition-colors cursor-pointer"
                  aria-label="Download Resume"
                >
                  <FileText className="h-5 w-5" />
                </button>
              </div>
              <span className="text-sm text-gray-300">
                abhishek.br.work@gmail.com
              </span>
            </div>
          </div>
        </header>

        <div className="mb-12 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent p-6 shadow-lg shadow-cyan-500/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-base md:text-lg font-medium text-white">
                <span className="text-cyan-400">
                  ✨ Want the full experience?
                </span>
              </h3>
              <p className="text-sm text-gray-300 max-w-md">
                Explore my complete portfolio with detailed projects, case
                studies, and more professional achievements.
              </p>
            </div>

            <a
              href="https://me.abhishekbr.dev/"
              target="_blank"
              rel="noreferrer"
              title="Open full portfolio in a new tab"
              aria-label="Open full portfolio in a new tab"
              className="flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-gray-900 transition-all hover:bg-gray-100 hover:scale-105 hover:shadow-md"
            >
              View full portfolio
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6">About Me</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I’m <strong className="text-white">Abhishek BR</strong>, a
              <strong className="text-white">
                {" "}
                20-year-old full stack developer
              </strong>{" "}
              who loves building simple, maintainable web products that people
              actually use.
            </p>
            <p>
              I work mainly with <strong className="text-white">Next.js</strong>
              ,<strong className="text-white"> Express.js</strong>, and
              <strong className="text-white"> TypeScript</strong>. I also
              integrate <span className="text-white">blockchain</span> and
              <span className="text-white"> AI-powered features</span> when they
              bring real value.
            </p>
            <p>
              Open to <span className="text-white font-bold">internships</span>,
              collaborations, or new ideas. Always excited to work on
              <span className="text-white font-bold"> meaningful projects</span>
              .
              <a
                href="mailto:abhishek.br.work@gmail.com"
                className="text-blue-500 font-medium pl-2"
              >
                Contact Me
              </a>
            </p>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-xl font-medium">Skills and tools</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Express.js",
              "Python",
              "C++",
              "PostgreSQL",
              "MongoDB",
              "Prisma",
              "TailwindCSS",
              "Docker",
              "AWS",
              "Git",
              "Vercel",
              "NextAuth",
              "Web3",
              "AI/ML",
              "DevOps",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-800/70 text-gray-200 font-bold text-sm rounded border border-gray-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <ProjectsSection />

        <section className="mb-12">
          <h2 className="text-xl font-medium mb-6">Reach out</h2>
          <p className="text-gray-300 text-sm mb-6">
            Feel free to reach out via email, LinkedIn, or Twitter for
            questions, collaborations, or to learn more about my work.
          </p>
          <div className="flex gap-4">
            <a
              href="https://twitter.com/abhi__br"
              className="px-2 py-2 mt-0.5 rounded gap-2 flex bg-white text-gray-800 text-sm hover:bg-gray-200 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter className="h-5 w-5" /> Twitter
            </a>
            <a
              href="https://linkedin.com/in/abhi-br"
              className="px-2 py-2 mt-0.5 rounded gap-2 flex bg-white text-gray-800 text-sm hover:bg-gray-200 transition-colors"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedIn className="h-5 w-5" /> LinkedIn
            </a>
            <a
              href="mailto:abhishek.br.work@gmail.com"
              className="px-2 py-2 mt-0.5 rounded gap-2 flex bg-white text-gray-800 text-sm hover:bg-gray-200 transition-colors"
            >
              <Mail className="h-5 w-5" /> Email
            </a>
          </div>
        </section>

        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <div className="flex items-center justify-between">
            <span>{visitorCount+100} visitors</span>
            <span>Location, Time</span>
          </div>
          <p className="mt-4">© 2025 Designed and developed by Abhishek</p>
        </footer>
      </main>
    </LampContainer>
  );
}
