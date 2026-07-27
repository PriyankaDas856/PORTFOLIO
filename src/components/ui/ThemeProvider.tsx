"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");
    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  if (!mounted) return <>{children}</>;

  return (
    <>
      {children}
      <button
        onClick={toggle}
        className={cn(
          "fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full glass",
          "transition-transform duration-300 hover:scale-105 active:scale-95 md:bottom-8 md:left-8"
        )}
        aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        data-cursor="button"
      >
        {theme === "light" ? (
          <Moon className="h-4 w-4 text-muted" />
        ) : (
          <Sun className="h-4 w-4 text-muted" />
        )}
      </button>
    </>
  );
}

export function useThemeToggle() {
  return () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };
}
