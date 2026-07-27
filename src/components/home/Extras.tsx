"use client";

import Link from "next/link";
import { ArrowUpRight, BookOpen, Workflow, Wrench } from "lucide-react";
import { BOOKSHELF, WORKFLOW, FAVORITE_TOOLS } from "@/lib/data/now";
import { TextReveal, BlurReveal } from "@/components/ui/Reveal";

export function Extras() {
  return (
    <section id="extras" className="section-spacing section-padding bg-card/50">
      <div className="mx-auto max-w-6xl">
        <span className="label-mono text-primary mb-4 block">Beyond Work</span>
        <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-12">
          <TextReveal>How I work & grow</TextReveal>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <BlurReveal>
            <div className="card p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Workflow className="h-5 w-5 text-primary" />
                <h3 className="display-heading text-lg">My Workflow</h3>
              </div>
              <div className="space-y-5">
                {WORKFLOW.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <span className="label-mono text-primary">{step.step}</span>
                    <div>
                      <p className="text-sm font-medium">{step.title}</p>
                      <p className="text-xs text-muted font-light mt-0.5">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <div className="card p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <Wrench className="h-5 w-5 text-secondary" />
                <h3 className="display-heading text-lg">Favorite Tools</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {FAVORITE_TOOLS.map((tool) => (
                  <div key={tool.name} className="rounded-2xl border border-border px-3 py-2.5 hover:border-primary/30 transition-colors">
                    <p className="text-sm font-medium">{tool.name}</p>
                    <p className="text-[10px] text-muted">{tool.category}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurReveal>

          <BlurReveal delay={0.2}>
            <div className="card p-6 md:p-8 h-full">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5 text-primary" />
                  <h3 className="display-heading text-lg">Bookshelf</h3>
                </div>
                <Link href="/now" className="text-xs text-muted hover:text-primary flex items-center gap-1" data-cursor="button">
                  Now page <ArrowUpRight className="h-3 w-3" />
                </Link>
              </div>
              <ul className="space-y-3">
                {BOOKSHELF.slice(0, 5).map((book) => (
                  <li key={book.title} className="flex justify-between gap-2 text-sm">
                    <span className="font-light">{book.title}</span>
                    <span className="text-xs text-muted shrink-0">{book.category}</span>
                  </li>
                ))}
              </ul>
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  );
}
