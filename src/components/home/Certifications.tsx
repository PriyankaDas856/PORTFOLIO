"use client";

import { ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "@/lib/data/certifications";
import { TextReveal, BlurReveal } from "@/components/ui/Reveal";

export function Certifications() {
  return (
    <section id="certifications" className="section-spacing section-padding">
      <div className="mx-auto max-w-6xl">
        <span className="label-mono text-primary mb-4 block">Certifications</span>
        <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-12">
          <TextReveal>Continuous learning</TextReveal>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CERTIFICATIONS.map((cert, i) => (
            <BlurReveal key={cert.id} delay={i * 0.05}>
              <a
                href={cert.link ?? "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover p-6 flex flex-col h-full group"
                data-cursor="button"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="display-heading text-2xl text-primary">{cert.logo}</span>
                  <ExternalLink className="h-4 w-4 text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-medium text-sm mb-1 leading-snug">{cert.title}</h3>
                <p className="text-xs text-muted mb-3">{cert.issuer}</p>
                <div className="mt-auto flex items-center justify-between">
                  <span className="label-mono text-muted-foreground">{cert.date}</span>
                  {cert.credentialId && (
                    <span className="text-[10px] text-muted-foreground">{cert.credentialId}</span>
                  )}
                </div>
              </a>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
