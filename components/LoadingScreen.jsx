"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const WORDS = ["Design", "Create", "Inspire"];
const DURATION_MS = 2700;

export default function LoadingScreen({ onComplete }) {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const startRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const tick = (now) => {
      if (startRef.current === null) startRef.current = now;
      const elapsed = now - startRef.current;
      const progress = Math.min(elapsed / DURATION_MS, 1);
      setCount(Math.floor(progress * 100));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      } else {
        setCount(100);
        setTimeout(() => onComplete?.(), 400);
      }
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [onComplete]);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % WORDS.length);
    }, 900);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-between bg-bg px-6 py-8 sm:px-10 sm:py-10">
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="eyebrow"
      >
        Portfolio
      </motion.p>

      <div className="flex flex-1 items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.span
            key={WORDS[wordIndex]}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="font-display text-4xl italic text-text-primary/80 md:text-6xl lg:text-7xl"
          >
            {WORDS[wordIndex]}
          </motion.span>
        </AnimatePresence>
      </div>

      <div className="flex items-end justify-end">
        <span className="tabular-nums font-display text-6xl text-text-primary md:text-8xl lg:text-9xl">
          {String(count).padStart(3, "0")}
        </span>
      </div>

      <div className="relative mt-6 h-[3px] w-full overflow-hidden rounded-full bg-stroke/50">
        <div
          className="accent-gradient h-full origin-left rounded-full"
          style={{
            transform: `scaleX(${count / 100})`,
            boxShadow: "0 0 8px rgba(137, 170, 204, 0.35)",
          }}
        />
      </div>
    </div>
  );
}
