"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Loader2,
} from "lucide-react";

import { SITE } from "@/lib/constants/site";
import { Input, Textarea, Label } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { TextReveal, BlurReveal } from "@/components/ui/Reveal";


export function Contact() {

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");


  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {

    e.preventDefault();

    setStatus("sending");


    const form = e.currentTarget;

    const formData = new FormData(form);


    try {

      const response = await fetch(
        "https://formspree.io/f/YOUR_FORM_ID",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );


      if (!response.ok) {
        throw new Error("Failed");
      }


      setStatus("success");

      form.reset();


      setTimeout(() => {
        setStatus("idle");
      }, 4000);


    } catch (error) {

      console.error(error);

      setStatus("error");


      setTimeout(() => {
        setStatus("idle");
      }, 4000);

    }

  }


  return (

    <section
      id="contact"
      className="section-spacing section-padding"
    >

      <div className="mx-auto max-w-6xl">


        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">


          {/* LEFT CONTENT */}

          <div>

            <span className="label-mono mb-4 block text-primary">
              Contact
            </span>


            <h2
              className="
              display-heading
              mb-6
              text-[clamp(2rem,5vw,3.5rem)]
              "
            >

              <TextReveal>
                Let&apos;s build something
              </TextReveal>

            </h2>



            <BlurReveal delay={0.1}>

              <p
                className="
                mb-10
                max-w-md
                text-muted
                leading-relaxed
                "
              >

                Open to internships, collaborations, and
                conversations about AI, product, and design.
                Based in Bangalore, available remotely.

              </p>

            </BlurReveal>



            <BlurReveal delay={0.15}>

              <div className="space-y-5">


                {[
                  {
                    icon: Mail,
                    label: "Email",
                    value: SITE.email,
                    href:`mailto:${SITE.email}`,
                  },

                  {
                    icon: MapPin,
                    label:"Location",
                    value:SITE.location,
                  },

                  {
                    icon:Linkedin,
                    label:"LinkedIn",
                    value:"Connect on LinkedIn",
                    href:SITE.social.linkedin,
                  },

                  {
                    icon:Github,
                    label:"GitHub",
                    value:"View my code",
                    href:SITE.social.github,
                  },

                ].map((item)=>(

                  <div
                    key={item.label}
                    className="
                    flex
                    items-center
                    gap-4
                    "
                  >

                    <div
                      className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-border
                      bg-card
                      "
                    >

                      <item.icon
                        className="
                        h-5
                        w-5
                        text-primary
                        "
                      />

                    </div>


                    <div>

                      <p className="label-mono">
                        {item.label}
                      </p>


                      {
                        item.href ?

                        <a
                          href={item.href}
                          target={
                            item.href.startsWith("http")
                            ? "_blank"
                            : undefined
                          }
                          rel="noopener noreferrer"
                          className="
                          text-sm
                          transition-colors
                          hover:text-primary
                          "
                          data-cursor="button"
                        >
                          {item.value}
                        </a>

                        :

                        <p className="text-sm">
                          {item.value}
                        </p>

                      }


                    </div>


                  </div>


                ))}


              </div>


            </BlurReveal>


          </div>

                    {/* FORM */}

          <BlurReveal delay={0.2}>

            <form
              onSubmit={handleSubmit}
              className="
              card
              space-y-6
              p-6
              md:p-8
              "
            >

              <div>

                <Label htmlFor="name">
                  Name
                </Label>

                <Input
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />

              </div>


              <div>

                <Label htmlFor="email">
                  Email
                </Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  required
                />

              </div>


              <div>

                <Label htmlFor="subject">
                  Subject
                </Label>

                <Input
                  id="subject"
                  name="subject"
                  placeholder="What's this about?"
                  required
                />

              </div>


              <div>

                <Label htmlFor="message">
                  Message
                </Label>

                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or opportunity..."
                  required
                  className="min-h-[150px]"
                />

              </div>



              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="
                w-full
                transition-all
                duration-300
                "
              >

                {status === "sending" && (

                  <Loader2
                    className="
                    mr-2
                    h-4
                    w-4
                    animate-spin
                    "
                  />

                )}


                {
                  status === "sending"
                    ? "Sending..."
                    : status === "success"
                    ? "Message Sent ✓"
                    : status === "error"
                    ? "Try Again"
                    : "Send Message"
                }


              </Button>



              {status === "success" && (

                <motion.p
                  initial={{
                    opacity:0,
                    y:10,
                  }}
                  animate={{
                    opacity:1,
                    y:0,
                  }}
                  className="
                  text-center
                  text-sm
                  text-green-500
                  "
                >

                  Thanks! I&apos;ll get back to you soon.

                </motion.p>

              )}



              {status === "error" && (

                <motion.p
                  initial={{
                    opacity:0,
                  }}
                  animate={{
                    opacity:1,
                  }}
                  className="
                  text-center
                  text-sm
                  text-red-500
                  "
                >

                  Something went wrong. Please try again.

                </motion.p>

              )}



            </form>

          </BlurReveal>


        </div>

      </div>

    </section>

  );

}