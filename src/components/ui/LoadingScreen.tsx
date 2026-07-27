"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/constants/site";

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 300);
          return 100;
        }
        return prev + Math.random() * 12 + 8;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500">
      <div className="flex flex-col items-center gap-6">
        <span className="display-heading text-2xl">{SITE.shortName}</span>
        <div className="relative h-[2px] w-40 overflow-hidden rounded-full bg-border">
          <div
            className="absolute inset-y-0 left-0 rounded-full bg-primary transition-all duration-100"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
        <span className="label-mono text-muted">{Math.min(Math.round(progress), 100)}%</span>
      </div>
    </div>
  );
}
