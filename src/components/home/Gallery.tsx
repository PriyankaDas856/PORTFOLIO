"use client";

import { useState } from "react";
import Image from "next/image";
import { GALLERY } from "@/lib/data/gallery";
import { TextReveal, BlurReveal } from "@/components/ui/Reveal";

export function Gallery() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-spacing section-padding bg-card/50">
      <div className="mx-auto max-w-6xl">
        <span className="label-mono text-primary mb-4 block">Gallery</span>
        <h2 className="display-heading text-[clamp(2rem,5vw,3.5rem)] mb-12">
          <TextReveal>Design & craft</TextReveal>
        </h2>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {GALLERY.map((item, i) => (
            <BlurReveal key={item.id} delay={i * 0.05}>
              <div
                className="card card-hover overflow-hidden break-inside-avoid cursor-pointer group"
                onClick={() => setActive(active === item.id ? null : item.id)}
                data-cursor="image"
              >
                <div className={`relative ${item.aspect === "portrait" ? "aspect-[3/4]" : item.aspect === "square" ? "aspect-square" : "aspect-video"}`}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white text-sm font-medium">{item.title}</p>
                      <p className="text-white/70 text-xs">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            </BlurReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
