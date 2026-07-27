"use client";

import { motion } from "framer-motion";

export function HeroIllustration() {
  return (
    <div className="relative aspect-square max-w-md mx-auto">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-8 rounded-full border border-dashed border-primary/20"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute inset-16 rounded-full border border-dashed border-secondary/20"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="card card-hover w-64 p-6 space-y-4"
        >
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-secondary" />
            <div className="space-y-1.5 flex-1">
              <div className="h-2 w-24 rounded-full bg-border" />
              <div className="h-2 w-16 rounded-full bg-border" />
            </div>
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-border" />
            <div className="h-2 w-4/5 rounded-full bg-border" />
            <div className="h-2 w-3/5 rounded-full bg-primary/30" />
          </div>
          <div className="flex gap-2">
            <div className="h-8 flex-1 rounded-xl bg-primary/10" />
            <div className="h-8 flex-1 rounded-xl bg-secondary/10" />
          </div>
        </motion.div>
      </div>

      {[
        { label: "AI", x: "10%", y: "15%", delay: 0 },
        { label: "Design", x: "75%", y: "20%", delay: 0.5 },
        { label: "Code", x: "80%", y: "70%", delay: 1 },
        { label: "Product", x: "5%", y: "75%", delay: 1.5 },
      ].map((item) => (
        <motion.span
          key={item.label}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 + item.delay }}
          className="absolute rounded-full border border-border bg-card px-3 py-1.5 text-xs text-muted shadow-sm"
          style={{ left: item.x, top: item.y }}
        >
          {item.label}
        </motion.span>
      ))}
    </div>
  );
}
