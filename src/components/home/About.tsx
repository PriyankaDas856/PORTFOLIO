"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

import { PROFILE, TIMELINE } from "@/types/profile";
import { BlurReveal, TextReveal } from "@/components/ui/Reveal";

export function About() {
  const [activeIndex, setActiveIndex] = useState(0);

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
    margin: "-10%",
  });

  return (
    <section
      id="about"
      className="section-spacing section-padding bg-gradient-to-b from-background via-card/30 to-background"
    >
      <div
        ref={ref}
        className="mx-auto max-w-6xl"
      >
        <div className="grid grid-cols-1 gap-20 lg:grid-cols-12">

          {/* ================= LEFT ================= */}

          <div className="lg:col-span-5">

            <BlurReveal delay={0.1}>

              <span
                className="
                  label-mono
                  mb-5
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/10
                  px-4
                  py-2
                  text-primary
                "
              >

                <Sparkles className="h-3.5 w-3.5" />

                About Me

              </span>

            </BlurReveal>

            <h2
              className="
                display-heading
                mb-8
                text-[clamp(2.4rem,5vw,4rem)]
                leading-tight
                text-zinc-900
                dark:text-white
              "
            >

              <TextReveal>

                Building intelligent software that creates real-world impact.

              </TextReveal>

            </h2>

            <BlurReveal delay={0.15}>

              <p
                className="
                  reading-width
                  mb-6
                  text-lg
                  leading-8
                  text-zinc-700
                  dark:text-zinc-300
                "
              >

                {PROFILE.summary}

              </p>

              <div
                className="
                  rounded-2xl
                  border
                  border-primary/15
                  bg-primary/5
                  p-5
                  shadow-sm
                "
              >

                <p
                  className="
                    text-[15px]
                    italic
                    leading-7
                    text-zinc-600
                    dark:text-zinc-400
                  "
                >

                  {PROFILE.goal}

                </p>

              </div>

            </BlurReveal>

            <BlurReveal delay={0.25}>

              <div className="mt-10 grid grid-cols-2 gap-4">

                {[
                  "3+ Internships",
                  "AI & Full Stack",
                  "Patent Filed",
                  "Open to Opportunities",
                ].map((item) => (

                  <div
                    key={item}
                    className="
                      rounded-xl
                      border
                      border-zinc-200
                      dark:border-zinc-800
                      bg-white/80
                      dark:bg-zinc-900/70
                      px-4
                      py-3
                      text-sm
                      font-medium
                      text-zinc-700
                      dark:text-zinc-300
                      shadow-sm
                    "
                  >

                    {item}

                  </div>

                ))}

              </div>

            </BlurReveal>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="lg:col-span-6 lg:col-start-7">

            <div className="relative">

              <div
                className="
                  absolute
                  bottom-0
                  left-4
                  top-0
                  w-[2px]
                  rounded-full
                  bg-zinc-200
                  dark:bg-zinc-800
                "
              />

              <motion.div
                className="
                  absolute
                  left-4
                  top-0
                  w-[2px]
                  rounded-full
                  bg-primary
                  origin-top
                "
                initial={{
                  scaleY: 0,
                }}
                animate={
                  isInView
                    ? {
                        scaleY: 1,
                      }
                    : {}
                }
                transition={{
                  duration: 1.2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{
                  height: `${((activeIndex + 1) / TIMELINE.length) * 100}%`,
                }}
              />

              <div className="space-y-3">

                                {TIMELINE.map((item, i) => (
                  <motion.button
                    key={item.id}
                    onClick={() => setActiveIndex(i)}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    animate={
                      isInView
                        ? {
                            opacity: 1,
                            x: 0,
                          }
                        : {}
                    }
                    transition={{
                      delay: i * 0.08,
                      duration: 0.45,
                    }}
                    whileHover={{
                      x: 6,
                    }}
                    data-cursor="button"
                    className={`relative w-full rounded-3xl border pl-14 pr-6 py-6 text-left transition-all duration-300 ${
                      activeIndex === i
                        ? "border-primary/20 bg-primary/5 shadow-xl"
                        : "border-transparent hover:border-zinc-200 hover:bg-white/70 hover:shadow-md dark:hover:border-zinc-800 dark:hover:bg-zinc-900/60"
                    }`}
                  >

                    <span
                      className={`absolute left-2.5 top-8 h-4 w-4 rounded-full border-[3px] transition-all duration-300 ${
                        activeIndex === i
                          ? "border-primary bg-primary scale-110"
                          : "border-zinc-300 dark:border-zinc-700 bg-background"
                      }`}
                    />

                    <span className="label-mono mb-2 block text-primary">

                      {item.year}

                    </span>

                    <h3 className="display-heading mb-2 text-2xl text-zinc-900 dark:text-white">

                      {item.title}

                    </h3>

                    <motion.div
                      initial={false}
                      animate={{
                        height: activeIndex === i ? "auto" : 0,
                        opacity: activeIndex === i ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.3,
                      }}
                      className="overflow-hidden"
                    >

                      <p
                        className="
                          pt-2
                          text-base
                          leading-7
                          text-zinc-600
                          dark:text-zinc-400
                        "
                      >

                        {item.description}

                      </p>

                    </motion.div>

                  </motion.button>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

