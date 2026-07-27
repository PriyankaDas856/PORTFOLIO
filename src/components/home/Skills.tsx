"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data/skills";
import { TextReveal, BlurReveal } from "@/components/ui/Reveal";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(SKILLS[0]?.id ?? "");

  const active = SKILLS.find((s) => s.id === activeCategory) ?? SKILLS[0];

  return (
    <section id="skills" className="section-spacing section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <span className="label-mono text-primary mb-4 block">Skills</span>
            <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-6">
              <TextReveal>Tools & craft</TextReveal>
            </h2>
            <BlurReveal delay={0.1}>
              <p className="text-sm text-muted font-light">
                Hover categories to explore. No progress bars — just the technologies I work with daily.
              </p>
            </BlurReveal>
          </div>

          <div className="lg:col-span-8">
            <div className="flex flex-wrap gap-2 mb-8">
              {SKILLS.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  onMouseEnter={() => setActiveCategory(cat.id)}
                  className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                    activeCategory === cat.id
                      ? "bg-primary text-white shadow-lg shadow-primary/20"
                      : "border border-border text-muted hover:border-primary hover:text-primary"
                  }`}
                  data-cursor="button"
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <motion.div
              key={active?.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              {active?.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  className="card px-5 py-3 text-sm font-medium cursor-default"
                  data-cursor="text"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
