"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { EXPERIENCE } from "@/types/experience";
import { TextReveal, BlurReveal } from "@/components/ui/Reveal";
import { Badge } from "@/components/ui/Badge";

export function Experience() {
  const [expanded, setExpanded] = useState<string | null>(EXPERIENCE[0]?.id ?? null);

  return (
    <section id="experience" className="section-spacing section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-6 items-end">
          <div>
            <span className="label-mono text-primary mb-4 block">Experience</span>
            <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)]">
              <TextReveal>Where I&apos;ve built</TextReveal>
            </h2>
          </div>
          <BlurReveal delay={0.1}>
            <p className="text-muted font-light text-sm leading-relaxed lg:text-right">
              Internships and collaborations across product engineering, research, and full-stack development.
            </p>
          </BlurReveal>
        </div>

        <div className="space-y-4">
          {EXPERIENCE.map((item, i) => {
            const isOpen = expanded === item.id;
            return (
              <BlurReveal key={item.id} delay={i * 0.05}>
                <div className="card overflow-hidden">
                  <button
                    onClick={() => setExpanded(isOpen ? null : item.id)}
                    className="w-full flex items-start justify-between gap-4 p-6 md:p-8 text-left"
                    data-cursor="button"
                  >
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <h3 className="display-heading text-xl md:text-2xl">{item.company}</h3>
                        <Badge variant="outline">{item.type}</Badge>
                      </div>
                      <p className="text-primary text-sm mb-1">{item.role}</p>
                      <p className="text-xs text-muted">
                        {item.duration} · {item.location}
                      </p>
                    </div>
                    <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown className="h-5 w-5 text-muted shrink-0 mt-1" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 pb-8 grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-border pt-6">
                          <div>
                            <h4 className="label-mono text-muted-foreground mb-3">Achievements</h4>
                            <ul className="space-y-2">
                              {item.achievements.map((a) => (
                                <li key={a} className="text-sm text-muted font-light flex gap-2">
                                  <span className="text-primary mt-1">·</span>
                                  {a}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="label-mono text-muted-foreground mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {item.responsibilities.map((r) => (
                                <li key={r} className="text-sm text-muted font-light flex gap-2">
                                  <span className="text-primary mt-1">·</span>
                                  {r}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="md:col-span-2">
                            <h4 className="label-mono text-muted-foreground mb-3">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {item.technologies.map((t) => (
                                <Badge key={t}>{t}</Badge>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
