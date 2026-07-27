"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "primary",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<
    { id: number; x: number; y: number }[]
  >([]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.2, y: y * 0.2 });
  };

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 });

  const handleClick = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const id = Date.now();
    setRipples((prev) => [
      ...prev,
      { id, x: e.clientX - rect.left, y: e.clientY - rect.top },
    ]);
    setTimeout(
      () => setRipples((prev) => prev.filter((r) => r.id !== id)),
      600
    );
    onClick?.();
  };

  const variants = {
    primary: "bg-foreground text-background hover:shadow-lg hover:shadow-primary/20",
    secondary: "bg-transparent border border-border-strong text-foreground hover:border-primary hover:text-primary",
    ghost: "bg-transparent text-muted hover:text-foreground",
  };

  const inner = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      data-cursor="button"
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full px-7 py-3.5",
        "text-sm font-medium tracking-wide transition-colors duration-300",
        variants[variant],
        className
      )}
    >
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-white/20 animate-[ripple_0.6s_ease-out_forwards] pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 4,
            height: 4,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block">
        {inner}
      </a>
    );
  }

  return inner;
}
