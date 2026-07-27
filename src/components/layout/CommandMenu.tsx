"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, FileText, Home, Mail, Moon, Sun, User, Briefcase, BookOpen } from "lucide-react";
import { PROJECTS } from "@/types/projects";
import { NAV_LINKS } from "@/lib/constants/navigation";
import { SITE } from "@/lib/constants/site";

interface CommandMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function CommandMenu({ open, onOpenChange }: CommandMenuProps) {
  const router = useRouter();

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, []);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const run = (action: () => void) => {
    onOpenChange(false);
    action();
  };

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-foreground/20 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -8 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-[15%] z-[80] w-[calc(100%-2rem)] max-w-lg -translate-x-1/2"
          >
            <Command className="overflow-hidden rounded-[var(--radius-card)] border border-border bg-card shadow-2xl" label="Command Menu">
              <Command.Input
                placeholder="Search pages, projects, actions..."
                className="flex h-14 w-full border-b border-border bg-transparent px-4 text-sm outline-none placeholder:text-muted-foreground"
              />
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-8 text-center text-sm text-muted">No results found.</Command.Empty>

                <Command.Group heading="Navigation" className="px-2 py-1.5 [&_[cmdk-group-heading]]:label-mono [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
                  <Item icon={<Home className="h-4 w-4" />} onSelect={() => run(() => router.push("/"))}>Home</Item>
                  {NAV_LINKS.map((link) => (
                    <Item key={link.href} icon={<User className="h-4 w-4" />} onSelect={() => run(() => { router.push("/"); setTimeout(() => scrollTo(link.href.replace("/#", "")), 300); })}>
                      {link.label}
                    </Item>
                  ))}
                  <Item icon={<BookOpen className="h-4 w-4" />} onSelect={() => run(() => router.push("/now"))}>Now Page</Item>
                </Command.Group>

                <Command.Group heading="Projects" className="px-2 py-1.5 [&_[cmdk-group-heading]]:label-mono [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
                  {PROJECTS.map((p) => (
                    <Item key={p.slug} icon={<Briefcase className="h-4 w-4" />} onSelect={() => run(() => router.push(`/projects/${p.slug}`))}>
                      {p.title}
                      <span className="ml-auto text-xs text-muted">{p.year}</span>
                    </Item>
                  ))}
                </Command.Group>

                <Command.Group heading="Actions" className="px-2 py-1.5 [&_[cmdk-group-heading]]:label-mono [&_[cmdk-group-heading]]:text-muted-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5">
                  <Item icon={<Sun className="h-4 w-4" />} onSelect={() => run(toggleTheme)}>Toggle Theme</Item>
                  <Item icon={<FileText className="h-4 w-4" />} onSelect={() => run(() => window.open(SITE.resumePath, "_blank"))}>Download Resume</Item>
                  <Item icon={<Mail className="h-4 w-4" />} onSelect={() => run(() => window.open(`mailto:${SITE.email}`))}>Send Email</Item>
                  <Item icon={<ArrowUpRight className="h-4 w-4" />} onSelect={() => run(() => router.push("/blog"))}>View Blog</Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function Item({ children, icon, onSelect }: { children: React.ReactNode; icon: React.ReactNode; onSelect: () => void }) {
  return (
    <Command.Item
      onSelect={onSelect}
      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-muted transition-colors aria-selected:bg-primary/10 aria-selected:text-foreground"
    >
      <span className="text-primary">{icon}</span>
      {children}
    </Command.Item>
  );
}
