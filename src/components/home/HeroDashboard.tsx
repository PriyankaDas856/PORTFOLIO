"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  GraduationCap,
  MapPin,
  Sparkles,
} from "lucide-react";

import { SITE, ROLES, PROFILE } from "@/lib/constants/site";

import { HeroIllustration } from "@/components/home/HeroIllustration";
import { BlurReveal } from "@/components/ui/Reveal";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function HeroDashboard() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden section-padding pt-32 pb-20"
    >
      <AnimatedGrid />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-16 lg:grid-cols-2">

          {/* ================= LEFT ================= */}

          <div className="max-w-2xl">

            <BlurReveal delay={0.15}>
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 shadow-md backdrop-blur-md">

                <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />

                <span className="label-mono font-medium text-primary">
                  Open to 2027 Software Engineering Opportunities
                </span>

              </div>
            </BlurReveal>

            <BlurReveal delay={0.25}>
              <div className="mb-6 flex flex-wrap items-center gap-5 text-sm text-zinc-600 dark:text-zinc-400">

                <div className="flex items-center gap-2">

                  <MapPin className="h-4 w-4" />

                  Bangalore, India

                </div>

                <div className="flex items-center gap-2">

                  <GraduationCap className="h-4 w-4" />

                  Class of {SITE.graduation}

                </div>

              </div>
            </BlurReveal>

            <BlurReveal delay={0.35}>

              <span className="label-mono mb-4 inline-block text-primary">

                {SITE.role}

              </span>

            </BlurReveal>

            <BlurReveal delay={0.45}>

              <h1 className="display-heading mb-6 text-zinc-900 dark:text-white leading-[1.05] text-[clamp(3rem,7vw,5.4rem)]">

                Hi, I'm

                <br />

                <span className="gradient-text drop-shadow-sm">

                  {SITE.name}

                </span>

              </h1>

            </BlurReveal>

            <div className="mb-8 h-12 overflow-hidden">

              <AnimatePresence mode="wait">

                <motion.div
                  key={roleIndex}
                  initial={{
                    opacity: 0,
                    y: 22,
                    filter: "blur(10px)",
                    scale: 0.98,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    y: -22,
                    filter: "blur(10px)",
                    scale: 0.98,
                  }}
                  transition={{
                    duration: 0.45,
                  }}
                >

                  <p className="text-2xl font-semibold text-primary">

                    {ROLES[roleIndex]}

                  </p>

                </motion.div>

              </AnimatePresence>

            </div>

                        <BlurReveal delay={0.6}>

              <p className="reading-width mb-10 max-w-xl text-lg leading-8 text-zinc-700 dark:text-zinc-300">

                {PROFILE.tagline}

              </p>

            </BlurReveal>

            <BlurReveal delay={0.75}>

              <div className="flex flex-wrap gap-4">

                <MagneticButton href="#projects">

                  <span className="flex items-center gap-2">

                    Explore Projects

                    <ArrowRight className="h-4 w-4" />

                  </span>

                </MagneticButton>

                <MagneticButton
                  href={SITE.resumePath}
                  variant="secondary"
                >

                  <span className="flex items-center gap-2">

                    <Download className="h-4 w-4" />

                    Resume

                  </span>

                </MagneticButton>

                <MagneticButton
                  href="#contact"
                  variant="ghost"
                >

                  Let's Connect

                </MagneticButton>

              </div>

            </BlurReveal>

            <BlurReveal delay={0.9}>

              <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-4">

                {[
                  {
                    value: "3+",
                    label: "Internships",
                  },
                  {
                    value: "5+",
                    label: "AI Projects",
                  },
                  {
                    value: "8.7",
                    label: "CGPA",
                  },
                  {
                    value: "2027",
                    label: "Graduate",
                  },
                ].map((item) => (

                  <motion.div
                    key={item.label}
                    whileHover={{
                      y: -6,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/80 p-5 shadow-lg backdrop-blur-md"
                  >

                    <h3 className="text-3xl font-bold text-zinc-900 dark:text-white">

                      {item.value}

                    </h3>

                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">

                      {item.label}

                    </p>

                  </motion.div>

                ))}

              </div>

            </BlurReveal>

                        <BlurReveal delay={1.05}>

              <div className="mt-10 flex flex-wrap gap-3">

                {PROFILE.interests.map((interest) => (

                  <motion.div
                    key={interest}
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                    className="flex items-center gap-2 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 py-2 text-sm text-zinc-700 dark:text-zinc-300 shadow-sm backdrop-blur-sm hover:border-primary/40 hover:shadow-md"
                  >

                    <Sparkles className="h-3.5 w-3.5 text-primary" />

                    {interest}

                  </motion.div>

                ))}

              </div>

            </BlurReveal>

          </div>

          {/* ================= RIGHT ================= */}

          <BlurReveal
            delay={0.45}
            className="relative hidden lg:flex items-center justify-center"
          >

            <div className="relative">

              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

              <HeroIllustration />

            </div>

          </BlurReveal>

        </div>

      </div>

    </section>

  );
}

function AnimatedGrid() {
  return (
    <>
      {/* ================= Background Gradients ================= */}

      <div className="absolute inset-0 -z-20 overflow-hidden">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[42rem]
            w-[42rem]
            -translate-x-1/2
            rounded-full
            bg-primary/5
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0
            h-[30rem]
            w-[30rem]
            rounded-full
            bg-secondary/5
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            left-0
            top-1/2
            h-[22rem]
            w-[22rem]
            rounded-full
            bg-primary/[0.03]
            blur-[180px]
          "
        />

      </div>

      {/* ================= Grid ================= */}

      <div
        className="
          absolute
          inset-0
          -z-10
          opacity-[0.02]
          [background-image:linear-gradient(to_right,#94a3b8_1px,transparent_1px),linear-gradient(to_bottom,#94a3b8_1px,transparent_1px)]
          [background-size:52px_52px]
        "
      />

      {/* ================= Radial Fade ================= */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_center,transparent_25%,theme(colors.background)_100%)]
        "
      />

            {/* ================= Floating Shapes ================= */}

      <motion.div
        className="absolute left-[10%] top-[20%] h-5 w-5 rounded-full border border-primary/40"
        animate={{
          y: [0, -18, 0],
          x: [0, 10, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute right-[18%] top-[30%] h-3 w-3 rounded-full bg-primary/60"
        animate={{
          y: [0, 18, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[18%] left-[14%] h-8 w-8 rounded-xl border border-primary/25"
        animate={{
          rotate: [0, 360],
          y: [0, -12, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-[22%] right-[12%] h-6 w-6 rounded-full border border-secondary/30"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ================= Noise Texture ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.01]
          mix-blend-overlay
          [background-image:url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22 viewBox=%220 0 200 200%22%3E%3Cfilter id=%22noise%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22/%3E%3C/filter%3E%3Crect width=%22200%22 height=%22200%22 filter=%22url(%23noise)%22/%3E%3C/svg%3E')]
        "
      />

    </>
  );
}