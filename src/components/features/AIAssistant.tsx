"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  MessageCircle,
  X,
  Send,
  Sparkles,
  Loader2,
} from "lucide-react";

import {
  getAIResponse,
  getSuggestedQuestions,
} from "@/lib/ai-assistant";


interface Message {
  role: "user" | "assistant";
  content: string;
}


export function AIAssistant() {

  const [open, setOpen] = useState(false);

  const [input, setInput] = useState("");

  const [loading, setLoading] = useState(false);


  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Priyanka's AI assistant. Ask me about her projects, skills, experience, achievements, or how to get in touch.",
    },
  ]);


  const bottomRef = useRef<HTMLDivElement>(null);



  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });

  }, [messages, loading]);



  async function send(text: string) {

    if (!text.trim() || loading) return;


    const userMessage = text.trim();


    setInput("");


    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
      },
    ]);


    setLoading(true);


    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );


    const answer = getAIResponse(userMessage);


    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: answer,
      },
    ]);


    setLoading(false);

  }
    return (

    <>

      {/* Floating AI Button */}

      <motion.button

        onClick={() => setOpen((prev) => !prev)}

        whileHover={{
          scale: 1.08,
        }}

        whileTap={{
          scale: 0.95,
        }}

        className="
        fixed
        bottom-6
        right-20
        z-50
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-primary
        text-white
        shadow-xl
        shadow-primary/30
        md:bottom-8
        md:right-24
        "

        aria-label="AI Assistant"

        data-cursor="button"

      >

        {
          open
          ?
          <X className="h-5 w-5" />
          :
          <MessageCircle className="h-5 w-5" />
        }


      </motion.button>



      <AnimatePresence>

        {
          open && (

            <motion.div

              initial={{
                opacity:0,
                y:20,
                scale:0.95,
              }}

              animate={{
                opacity:1,
                y:0,
                scale:1,
              }}

              exit={{
                opacity:0,
                y:20,
                scale:0.95,
              }}

              transition={{
                duration:0.25,
              }}

              className="
              fixed
              bottom-20
              right-6
              z-50
              flex
              w-[calc(100%-3rem)]
              max-w-sm
              flex-col
              overflow-hidden
              rounded-3xl
              border
              border-border
              bg-card
              shadow-2xl
              md:bottom-24
              md:right-8
              "

            >


              {/* Header */}

              <div
                className="
                flex
                items-center
                gap-3
                border-b
                border-border
                px-5
                py-4
                "
              >

                <div
                  className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-full
                  bg-primary/10
                  "
                >

                  <Sparkles
                    className="
                    h-4
                    w-4
                    text-primary
                    "
                  />

                </div>


                <div>

                  <p className="text-sm font-semibold">
                    Ask about Priyanka
                  </p>


                  <p className="text-xs text-muted">
                    AI Portfolio Assistant
                  </p>

                </div>


              </div>
                            {/* Messages */}

              <div

                className="
                h-80
                space-y-3
                overflow-y-auto
                p-4
                "

                data-lenis-prevent

              >


                {messages.map((msg, index) => (

                  <div

                    key={index}

                    className={`
                    max-w-[85%]
                    whitespace-pre-wrap
                    rounded-2xl
                    px-4
                    py-3
                    text-sm
                    leading-relaxed

                    ${
                      msg.role === "user"

                      ?

                      "ml-auto bg-primary text-white rounded-br-md"

                      :

                      "mr-auto border border-border bg-background text-foreground rounded-bl-md"

                    }

                    `}

                  >

                    {msg.content}

                  </div>

                ))}





                {loading && (

                  <div

                    className="
                    flex
                    items-center
                    gap-2
                    rounded-2xl
                    border
                    border-border
                    bg-background
                    px-4
                    py-3
                    text-sm
                    text-muted
                    "

                  >

                    <Loader2

                      className="
                      h-4
                      w-4
                      animate-spin
                      "

                    />

                    Thinking...

                  </div>

                )}



                <div ref={bottomRef} />


              </div>





              {/* Suggested Questions */}

              {
                messages.length === 1 && (

                  <div

                    className="
                    flex
                    flex-wrap
                    gap-2
                    px-4
                    pb-3
                    "

                  >

                    {
                      getSuggestedQuestions().map((question) => (

                        <button

                          key={question}

                          onClick={() => send(question)}

                          className="
                          rounded-full
                          border
                          border-border
                          px-3
                          py-1.5
                          text-xs
                          text-muted
                          transition-all
                          hover:border-primary
                          hover:text-primary
                          "

                          data-cursor="button"

                        >

                          {question}

                        </button>

                      ))
                    }


                  </div>

                )
              }
                            {/* Input */}

              <form

                onSubmit={(e) => {

                  e.preventDefault();

                  send(input);

                }}

                className="
                flex
                gap-3
                border-t
                border-border
                p-3
                "

              >


                <input

                  value={input}

                  onChange={(e) =>
                    setInput(e.target.value)
                  }

                  placeholder="Ask anything..."

                  disabled={loading}

                  className="
                  flex-1
                  bg-transparent
                  px-2
                  text-sm
                  outline-none
                  placeholder:text-muted
                  "

                />



                <button

                  type="submit"

                  disabled={loading}

                  className="
                  text-primary
                  transition-opacity
                  hover:opacity-70
                  disabled:opacity-40
                  "

                  data-cursor="button"

                >

                  <Send className="h-4 w-4" />

                </button>


              </form>


            </motion.div>

          )

        }

      </AnimatePresence>


    </>

  );

}