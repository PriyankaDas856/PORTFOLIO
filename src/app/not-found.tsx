"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] flex flex-col items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.15]" style={{
        backgroundImage: `linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)`,
        backgroundSize: "64px 64px",
      }} />

      <div className="relative z-10 text-center">
        <span className="label-mono text-primary mb-6 block">404</span>
        <h1 className="display-heading text-[clamp(4rem,12vw,7rem)] mb-4">Lost in the void</h1>
        <p className="text-muted font-light mb-10 max-w-md mx-auto leading-relaxed">
          This page doesn&apos;t exist — but plenty of great projects do.
        </p>
        <Link href="/">
          <Button size="lg">Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
