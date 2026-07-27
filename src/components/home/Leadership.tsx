"use client";

import { LEADERSHIP } from "@/lib/data/leadership";
import { TextReveal, BlurReveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

export function Leadership() {
  return (
    <section id="leadership" className="section-spacing section-padding bg-card/50">
      <div className="mx-auto max-w-6xl">
        <span className="label-mono text-primary mb-4 block">Leadership</span>
        <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-12">
          <TextReveal>Beyond the code</TextReveal>
        </h2>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {LEADERSHIP.map((item) => (
            <StaggerItem key={item.id}>
              <div className="card card-hover p-6 md:p-8 h-full">
                <span className="label-mono text-muted-foreground block mb-3">{item.period}</span>
                <h3 className="display-heading text-xl mb-1">{item.role}</h3>
                <p className="text-primary text-sm mb-4">{item.organization}</p>
                <p className="text-sm text-muted font-light leading-relaxed mb-5">{item.description}</p>
                <ul className="space-y-2">
                  {item.highlights.map((h) => (
                    <li key={h} className="text-xs text-muted flex gap-2">
                      <span className="text-primary">→</span> {h}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
