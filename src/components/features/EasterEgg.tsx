"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KONAMI = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a"];

export function EasterEgg() {
  const [, setClicks] = useState(0);
  const [showSecret, setShowSecret] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);

  useEffect(() => {
    const logo = document.getElementById("logo-easter-egg");
    if (!logo) return;

    const onClick = () => {
      setClicks((c) => {
        const next = c + 1;
        if (next >= 5) {
          setShowSecret(true);
          setTimeout(() => setShowSecret(false), 5000);
          return 0;
        }
        return next;
      });
    };

    logo.addEventListener("click", onClick);
    return () => logo.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === KONAMI[konamiIndex]) {
        const next = konamiIndex + 1;
        if (next === KONAMI.length) {
          setShowSecret(true);
          setTimeout(() => setShowSecret(false), 5000);
          setKonamiIndex(0);
        } else {
          setKonamiIndex(next);
        }
      } else {
        setKonamiIndex(0);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [konamiIndex]);

  return (
    <AnimatePresence>
      {showSecret && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-background/80 backdrop-blur-md"
          onClick={() => setShowSecret(false)}
        >
          <motion.div
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="card p-10 text-center max-w-sm mx-4"
          >
            <p className="text-4xl mb-4">✨</p>
            <h3 className="display-heading text-2xl mb-2">You found it!</h3>
            <p className="text-sm text-muted font-light">
              Priyanka believes the best products hide delightful details. Thanks for exploring with curiosity.
            </p>
            <p className="label-mono text-primary mt-4">Built with ♥ in Bangalore</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
