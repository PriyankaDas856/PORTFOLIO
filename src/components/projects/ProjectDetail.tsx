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


      {/* Header */}

      <div className="section-padding pt-28 pb-8">

        <div className="mx-auto max-w-4xl">


          <Link
            href="/#projects"
            className="
            inline-flex
            items-center
            gap-2
            text-sm
            text-muted
            hover:text-primary
            transition-colors
            mb-8
            "
            data-cursor="button"
          >

            <ArrowLeft className="h-4 w-4" />

            Back to Projects

          </Link>



          <BlurReveal>


            <div className="flex flex-wrap items-center gap-3 mb-4">

              <Badge variant="accent">
                {project.category}
              </Badge>


              <span className="text-xs text-muted">
                {project.year}
              </span>


              <span className="text-xs text-muted">
                · {project.status}
              </span>


            </div>




            <h1 className="display-heading text-[clamp(2.5rem,6vw,4rem)] mb-3">

              {project.title}

            </h1>




            <p
              className="text-xl font-medium mb-6"
              style={{
                color: project.accent
              }}
            >

              {project.tagline}

            </p>




            <p className="text-muted font-light leading-relaxed reading-width mb-8">

              {project.description}

            </p>




            <div className="flex flex-wrap gap-3 mb-10">


              {
                project.github && (

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Button variant="outline">

                      <Github className="h-4 w-4 mr-2" />

                      GitHub

                    </Button>

                  </a>

                )
              }



              {
                project.liveDemo && (

                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >

                    <Button>

                      <ExternalLink className="h-4 w-4 mr-2" />

                      Live Demo

                    </Button>

                  </a>

                )
              }


            </div>


          </BlurReveal>


        </div>

      </div>





      {/* Image */}

      <div className="section-padding pb-8">

        <div className="mx-auto max-w-5xl">

          <BlurReveal delay={0.1}>

            <div className="card overflow-hidden aspect-[16/9] relative mb-16">

              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />

            </div>

          </BlurReveal>

        </div>

      </div>






      {/* Details */}

      <div className="section-padding section-spacing">

        <div className="mx-auto max-w-4xl space-y-16">


          {[
            {
              title: "Overview",
              content: project.description,
            },
            {
              title: "Problem",
              content: project.problem,
            },
            {
              title: "Research",
              content:
                project.research ??
                "User research and competitive analysis informed product decisions.",
            },
            {
              title: "Solution",
              content: project.solution,
            },
            {
              title: "Architecture",
              content: project.architecture,
            },

          ].map((section, index) => (

            <BlurReveal
              key={section.title}
              delay={index * 0.05}
            >

              <section>

                <h2 className="display-heading text-2xl mb-4">

                  {section.title}

                </h2>


                <p className="text-muted font-light leading-relaxed">

                  {section.content}

                </p>


              </section>


            </BlurReveal>

          ))}






          <DetailList
            title="Features"
            items={project.features}
            accent={project.accent}
          />



          <TechSection
            tech={project.techStack}
          />



          <TimelineSection
            timeline={project.timeline}
          />



          <DetailList
            title="Challenges"
            items={project.challenges}
            accent="var(--color-primary)"
          />



          <DetailList
            title="Impact"
            items={project.impact}
            accent={project.accent}
          />



          <DetailList
            title="Lessons Learned"
            items={project.lessonsLearned}
            italic
          />



          <DetailList
            title="Future Scope"
            items={project.futureScope}
            accent="var(--color-secondary)"
          />


        </div>

      </div>


    </article>

  );

}






function DetailList({
  title,
  items,
  accent,
  italic = false,
}: {
  title: string;
  items: string[];
  accent?: string;
  italic?: boolean;
}) {


  return (

    <BlurReveal>

      <section>

        <h2 className="display-heading text-2xl mb-4">

          {title}

        </h2>


        <ul className="space-y-3">

          {
            items.map((item) => (

              <li
                key={item}
                className={`
                text-sm
                text-muted
                font-light
                flex
                gap-2
                ${italic ? "italic" : ""}
                `}
              >

                <span style={{ color: accent }}>

                  →

                </span>

                {item}

              </li>

            ))
          }

        </ul>


      </section>

    </BlurReveal>

  );

}






function TechSection({
  tech,
}: {
  tech: string[];
}) {

  return (

    <BlurReveal>

      <section>

        <h2 className="display-heading text-2xl mb-4">

          Tech Stack

        </h2>


        <div className="flex flex-wrap gap-2">

          {
            tech.map((item) => (

              <Badge key={item}>

                {item}

              </Badge>

            ))
          }

        </div>


      </section>


    </BlurReveal>

  );

}






function TimelineSection({
  timeline,
}: {
  timeline: Project["timeline"];
}) {

  return (

    <BlurReveal>

      <section>

        <h2 className="display-heading text-2xl mb-4">

          Timeline

        </h2>


        <div className="space-y-4">

          {
            timeline.map((item) => (

              <div
                key={item.phase}
                className="
                flex
                items-center
                justify-between
                border-b
                border-border
                pb-3
                "
              >

                <span className="text-sm">

                  {item.phase}

                </span>


                <span className="text-xs text-muted">

                  {item.duration}

                </span>


              </div>

            ))
          }

        </div>


      </section>


    </BlurReveal>

  );

}