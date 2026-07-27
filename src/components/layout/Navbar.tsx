"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Command } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { SITE } from "@/lib/constants/site";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenCommand: () => void;
}

export function Navbar({ onOpenCommand }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={cn("fixed top-0 left-0 right-0 z-50 section-padding transition-all duration-500", scrolled ? "py-3" : "py-5")}
      >
        <nav className={cn(
          "mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3 md:px-7 transition-all duration-500",
          scrolled ? "glass shadow-sm" : ""
        )}>
          <Link href="/" className="display-heading text-lg" data-cursor="text" id="logo-easter-egg">
            {SITE.shortName}<span className="text-primary">.</span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="text-sm text-muted hover:text-foreground transition-colors" data-cursor="text">
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCommand}
              className="hidden sm:flex items-center gap-2 rounded-full border border-border px-3 py-2 text-xs text-muted hover:text-foreground hover:border-border-strong transition-colors"
              data-cursor="button"
            >
              <Command className="h-3.5 w-3.5" />
              <span className="label-mono">Ctrl K</span>
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border md:hidden"
              aria-label="Menu"
              data-cursor="button"
            >
              <div className="flex flex-col gap-1.5">
                <span className={cn("block h-[1.5px] w-4 bg-foreground transition-all", mobileOpen && "translate-y-[5px] rotate-45")} />
                <span className={cn("block h-[1.5px] w-4 bg-foreground transition-all", mobileOpen && "opacity-0")} />
                <span className={cn("block h-[1.5px] w-4 bg-foreground transition-all", mobileOpen && "-translate-y-[5px] -rotate-45")} />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl md:hidden">
            <nav className="flex h-full flex-col justify-center gap-1 section-padding">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.04 }}
                  className="display-heading py-3 text-3xl"
                  data-cursor="button"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
