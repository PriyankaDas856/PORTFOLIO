"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowUpRight,
  ExternalLink,
  Github,
} from "lucide-react";

import { PROJECTS } from "@/types/projects";
import { BlurReveal, TextReveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

function ProjectShowcase({
  project,
  index,
}: {
  project: (typeof PROJECTS)[0];
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    ["8%", "-8%"]
  );

  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref}
      id={`project-${project.slug}`}
      className="section-spacing section-padding relative overflow-hidden"
      style={{
        background:
          index % 2 === 1
            ? "color-mix(in srgb, var(--color-card) 45%, transparent)"
            : undefined,
      }}
    >
      {/* Decorative Background */}

      <div className="pointer-events-none absolute inset-0">

        <div
          className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full blur-[130px] opacity-20"
          style={{
            background: project.accent,
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,transparent_0%,transparent_35%,rgba(255,255,255,0.03)_100%)] dark:bg-[radial-gradient(circle_at_top,transparent_0%,transparent_35%,rgba(255,255,255,0.02)_100%)]" />

      </div>

      <div className="relative mx-auto max-w-7xl">

        <div
          className={`grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-20 ${
            !isEven ? "lg:[direction:rtl]" : ""
          }`}
        >
          {/* ================= IMAGE ================= */}

          <div
            className={`lg:col-span-7 ${
              isEven ? "lg:order-1" : "lg:order-2"
            } lg:[direction:ltr]`}
          >
            <Link
              href={`/projects/${project.slug}`}
              data-cursor="project"
              data-cursor-label="View Case Study"
            >
              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{
                  duration: 0.35,
                }}
                className="group relative"
              >
                <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-primary/20 via-transparent to-transparent blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-card shadow-2xl">

                  <div className="relative aspect-[16/10] overflow-hidden">

                    <motion.div
                      style={{
                        y: imageY,
                      }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        priority={index < 2}
                        sizes="(max-width:1024px)100vw,60vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </motion.div>

                    {/* Overlay */}

                    <div
                      className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      style={{
                        background: `linear-gradient(135deg, ${project.accent}22 0%, transparent 60%)`,
                      }}
                    />

                    {/* Floating Badge */}

                    <motion.div
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      whileHover={{
                        opacity: 1,
                        y: 0,
                      }}
                      className="absolute bottom-5 right-5"
                    >
                      <div className="rounded-full border border-white/20 bg-black/60 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl">
                        View Project →
                      </div>
                    </motion.div>

                  </div>

                </div>

              </motion.div>
            </Link>
          </div>

          {/* ================= CONTENT ================= */}

          <div
            className={`lg:col-span-5 ${
              isEven ? "lg:order-2" : "lg:order-1"
            } lg:[direction:ltr]`}
          >

                        <BlurReveal>

              <div className="mb-5 flex flex-wrap items-center gap-3">

                <Badge variant="accent">
                  {project.category}
                </Badge>

                <span className="rounded-full bg-card px-3 py-1 text-xs font-medium text-muted shadow-sm">
                  {project.year}
                </span>

                <span className="h-1 w-1 rounded-full bg-border" />

                <span
                  className="rounded-full border px-3 py-1 text-xs font-medium"
                  style={{
                    color: project.accent,
                    borderColor: `${project.accent}40`,
                    background: `${project.accent}12`,
                  }}
                >
                  {project.status}
                </span>

              </div>

            </BlurReveal>

            <h3
              className="
                display-heading
                mb-4
                text-[clamp(2.2rem,4vw,3.4rem)]
                leading-tight
                text-zinc-900
                dark:text-white
              "
            >
              <TextReveal>

                {project.title}

              </TextReveal>
            </h3>

            <BlurReveal delay={0.08}>

              <p
                className="mb-6 text-lg font-semibold tracking-wide"
                style={{
                  color: project.accent,
                }}
              >
                {project.tagline}
              </p>

            </BlurReveal>

            <BlurReveal delay={0.15}>

              <p
                className="
                  mb-8
                  text-base
                  leading-8
                  text-zinc-600
                  dark:text-zinc-400
                "
              >
                {project.description}
              </p>

            </BlurReveal>

            <BlurReveal delay={0.22}>

              <div className="space-y-6">

                <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">

                  <p className="label-mono mb-2 text-primary">

                    Problem

                  </p>

                  <p
                    className="
                      text-[15px]
                      leading-7
                      text-zinc-600
                      dark:text-zinc-400
                    "
                  >
                    {project.problem}
                  </p>

                </div>

                <div className="rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-sm">

                  <p className="label-mono mb-3 text-primary">

                    Impact

                  </p>

                  <ul className="space-y-3">

                    {project.impact
                      .slice(0, 3)
                      .map((item) => (

                        <li
                          key={item}
                          className="flex items-start gap-3"
                        >

                          <span
                            className="mt-1 h-2.5 w-2.5 rounded-full"
                            style={{
                              background: project.accent,
                            }}
                          />

                          <span
                            className="
                              text-[15px]
                              leading-7
                              text-zinc-600
                              dark:text-zinc-400
                            "
                          >
                            {item}
                          </span>

                        </li>

                      ))}

                  </ul>

                </div>

              </div>

            </BlurReveal>

                        <BlurReveal delay={0.3}>

              <div className="mt-8">

                <p className="label-mono mb-3 text-primary">

                  Tech Stack

                </p>

                <div className="flex flex-wrap gap-3">

                  {project.techStack.slice(0, 6).map((tech) => (

                    <Badge
                      key={tech}
                      variant="outline"
                      className="
                        rounded-full
                        border-border/70
                        bg-card/60
                        px-4
                        py-2
                        text-sm
                        backdrop-blur-sm
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-primary/30
                        hover:bg-primary/5
                      "
                    >
                      {tech}
                    </Badge>

                  ))}

                </div>

              </div>

            </BlurReveal>

            <BlurReveal delay={0.38}>

              <div className="mt-10 flex flex-wrap items-center gap-4">

                <Link
                  href={`/projects/${project.slug}`}
                  data-cursor="button"
                  className="
                    group
                    inline-flex
                    items-center
                    gap-2
                    rounded-full
                    bg-primary
                    px-6
                    py-3
                    text-sm
                    font-semibold
                    text-primary-foreground
                    shadow-lg
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  View Case Study

                  <ArrowUpRight
                    className="
                      h-4
                      w-4
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />

                </Link>

                {project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="button"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-border
                      bg-card/60
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-muted-foreground
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary/20
                      hover:text-foreground
                    "
                  >

                    <Github className="h-4 w-4" />

                    GitHub

                  </a>

                )}

                {project.liveDemo && (

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="button"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-full
                      border
                      border-border
                      bg-card/60
                      px-5
                      py-3
                      text-sm
                      font-medium
                      text-muted-foreground
                      backdrop-blur-sm
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-primary/20
                      hover:text-foreground
                    "
                  >

                    <ExternalLink className="h-4 w-4" />

                    Live Demo

                  </a>

                )}

              </div>

            </BlurReveal>

          </div>

        </div>

      </div>

    </article>
  );
}

export function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden"
    >

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-[150px]" />

      </div>

      <div className="section-padding pb-12 pt-28">

        <div className="mx-auto max-w-6xl">

          <BlurReveal>

            <span
              className="
                label-mono
                mb-5
                inline-flex
                rounded-full
                border
                border-primary/20
                bg-primary/10
                px-4
                py-2
                text-primary
              "
            >
              Featured Projects
            </span>

          </BlurReveal>

          <h2
            className="
              display-heading
              mb-6
              text-[clamp(2.5rem,5vw,4rem)]
              leading-tight
              text-zinc-900
              dark:text-white
            "
          >

            <TextReveal>

              Building products that solve real problems.

            </TextReveal>

          </h2>

          <BlurReveal delay={0.1}>

            <p
              className="
                max-w-2xl
                text-lg
                leading-8
                text-zinc-600
                dark:text-zinc-400
              "
            >
              Every project begins with understanding people,
              validating ideas, designing scalable systems,
              and building experiences that are fast,
              intuitive, and impactful.
            </p>

          </BlurReveal>

        </div>

      </div>
            {PROJECTS.map((project, index) => (
        <ProjectShowcase
          key={project.slug}
          project={project}
          index={index}
        />
      ))}
    </section>
  );
}