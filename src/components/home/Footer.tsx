"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants/site";
import { FOOTER_LINKS } from "@/lib/constants/navigation";
import { BlurReveal } from "@/components/ui/Reveal";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="section-padding py-10 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <BlurReveal>
            <Link href="/" className="display-heading text-xl" data-cursor="text">
              {SITE.shortName}<span className="text-primary">.</span>
            </Link>
            <p className="text-xs text-muted font-light mt-2 max-w-xs">
              Building AI-powered products at the intersection of engineering, design, and business.
            </p>
          </BlurReveal>

          <BlurReveal delay={0.1}>
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              {FOOTER_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm text-muted hover:text-primary transition-colors"
                  data-cursor="text"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </BlurReveal>

          <BlurReveal delay={0.15}>
            <p className="text-xs text-muted-foreground">
              © {year} {SITE.name}. Crafted with intention.
            </p>
          </BlurReveal>
        </div>
      </div>
    </footer>
  );
}
