"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { ACHIEVEMENTS } from "@/lib/data/achievements";
import { TextReveal, BlurReveal } from "@/components/ui/Reveal";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="display-heading text-4xl md:text-5xl gradient-text">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export function Achievements() {
  return (
    <section id="achievements" className="section-spacing section-padding bg-card/50">
      <div className="mx-auto max-w-6xl">
        <span className="label-mono text-primary mb-4 block">Achievements</span>
        <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-12">
          <TextReveal>Milestones</TextReveal>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((item, i) => (
            <BlurReveal key={item.id} delay={i * 0.05}>
              <div className="card card-hover p-6 md:p-8 h-full">
                {item.metric && (
                  <div className="mb-4">
                    <Counter value={item.metric.value} suffix={item.metric.suffix} />
                    <p className="text-xs text-muted mt-1">{item.metric.label}</p>
                  </div>
                )}
                <h3 className="display-heading text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted font-light leading-relaxed">{item.description}</p>
                <span className="label-mono text-muted-foreground mt-4 block">{item.year}</span>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
