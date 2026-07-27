"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import type { Project } from "@/types/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { BlurReveal } from "@/components/ui/Reveal";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="min-h-screen">
      <div className="section-padding pt-28 pb-8">
        <div className="mx-auto max-w-4xl">
          <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8" data-cursor="button">
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>

          <BlurReveal>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="accent">{project.category}</Badge>
              <span className="text-xs text-muted">{project.year}</span>
              <span className="text-xs text-muted">· {project.status}</span>
            </div>
            <h1 className="display-heading text-[clamp(2.5rem,6vw,4rem)] mb-3">{project.title}</h1>
            <p className="text-xl font-medium mb-6" style={{ color: project.accent }}>{project.tagline}</p>
            <p className="text-muted font-light leading-relaxed reading-width mb-8">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-10">
              {project.github && (
                <Button variant="outline" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" /> GitHub
                  </a>
                </Button>
              )}
              {project.liveDemo && (
                <Button asChild>
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" /> Live Demo
                  </a>
                </Button>
              )}
            </div>
          </BlurReveal>
        </div>
      </div>

      <div className="section-padding pb-8">
        <div className="mx-auto max-w-5xl">
          <BlurReveal delay={0.1}>
            <div className="card overflow-hidden aspect-[16/9] relative mb-16">
              <Image src={project.image} alt={project.title} fill className="object-cover" priority sizes="100vw" />
            </div>
          </BlurReveal>
        </div>
      </div>

      <div className="section-padding section-spacing">
        <div className="mx-auto max-w-4xl space-y-16">
          {[
            { title: "Overview", content: project.description },
            { title: "Problem", content: project.problem },
            { title: "Research", content: project.research ?? "User research and competitive analysis informed the product direction and feature prioritization." },
            { title: "Solution", content: project.solution },
            { title: "Architecture", content: project.architecture },
          ].map((section, i) => (
            <BlurReveal key={section.title} delay={i * 0.05}>
              <section>
                <h2 className="display-heading text-2xl mb-4">{section.title}</h2>
                <p className="text-muted font-light leading-relaxed">{section.content}</p>
              </section>
            </BlurReveal>
          ))}

          <BlurReveal>
            <section>
              <h2 className="display-heading text-2xl mb-4">Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {project.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-muted font-light">
                    <span style={{ color: project.accent }}>→</span> {f}
                  </li>
                ))}
              </ul>
            </section>
          </BlurReveal>

          <BlurReveal>
            <section>
              <h2 className="display-heading text-2xl mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => <Badge key={t}>{t}</Badge>)}
              </div>
            </section>
          </BlurReveal>

          <BlurReveal>
            <section>
              <h2 className="display-heading text-2xl mb-4">Timeline</h2>
              <div className="space-y-4">
                {project.timeline.map((t) => (
                  <div key={t.phase} className="flex items-center justify-between border-b border-border pb-3">
                    <span className="text-sm">{t.phase}</span>
                    <span className="text-xs text-muted">{t.duration}</span>
                  </div>
                ))}
              </div>
            </section>
          </BlurReveal>

          <BlurReveal>
            <section>
              <h2 className="display-heading text-2xl mb-4">Challenges</h2>
              <ul className="space-y-3">
                {project.challenges.map((c) => (
                  <li key={c} className="text-sm text-muted font-light flex gap-2">
                    <span className="text-primary">·</span> {c}
                  </li>
                ))}
              </ul>
            </section>
          </BlurReveal>

          <BlurReveal>
            <section>
              <h2 className="display-heading text-2xl mb-4">Impact</h2>
              <ul className="space-y-3">
                {project.impact.map((item) => (
                  <li key={item} className="text-sm text-muted font-light flex gap-2">
                    <span style={{ color: project.accent }}>→</span> {item}
                  </li>
                ))}
              </ul>
            </section>
          </BlurReveal>

          <BlurReveal>
            <section>
              <h2 className="display-heading text-2xl mb-4">Lessons Learned</h2>
              <ul className="space-y-3">
                {project.lessonsLearned.map((l) => (
                  <li key={l} className="text-sm text-muted font-light italic">&ldquo;{l}&rdquo;</li>
                ))}
              </ul>
            </section>
          </BlurReveal>

          <BlurReveal>
            <section>
              <h2 className="display-heading text-2xl mb-4">Future Scope</h2>
              <ul className="space-y-2">
                {project.futureScope.map((f) => (
                  <li key={f} className="text-sm text-muted font-light flex gap-2">
                    <span className="text-secondary">→</span> {f}
                  </li>
                ))}
              </ul>
            </section>
          </BlurReveal>
        </div>
      </div>
    </article>
  );
}
