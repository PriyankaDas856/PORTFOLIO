"use client";

import { HeroDashboard } from "@/components/home/HeroDashboard";
import { About } from "@/components/home/About";
import { Experience } from "@/components/home/Experience";
import { Projects } from "@/components/home/Projects";
import { Leadership } from "@/components/home/Leadership";
import { Skills } from "@/components/home/Skills";
import { Achievements } from "@/components/home/Achievements";
import { Certifications } from "@/components/home/Certifications";
import { Gallery } from "@/components/home/Gallery";
import { BlogPreview } from "@/components/home/BlogPreview";
import { Extras } from "@/components/home/Extras";
import { Contact } from "@/components/home/Contact";
import { Footer } from "@/components/home/Footer";

import { ScrollIndicator } from "@/components/ui/ScrollUtilities";

export function HomePage() {
  return (
    <>
      <ScrollIndicator />

      <main className="relative overflow-x-hidden">
        <HeroDashboard />
        <About />
        <Experience />
        <Projects />
        <Leadership />
        <Skills />
        <Achievements />
        <Certifications />
        <Gallery />
        <BlogPreview />
        <Extras />
        <Contact />
      </main>

      <Footer />
    </>
  );
}