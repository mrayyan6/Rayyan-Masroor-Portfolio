"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "./motion";
import HeroBackdrop from "./HeroBackdrop";

const meta = [
  { label: "Based in", value: "Islamabad, Pakistan" },
  { label: "Focus", value: "Applied AI · Agentic Systems" },
  { label: "Studying", value: "BS Computer Science · Final Year" },
];

const RESUME = "/Muhammad_Rayyan_Resume.pdf";

export default function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.08, delayChildren: 0.08 },
    },
  };
  const item = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
  };
  const nameGroup = { hidden: {}, show: {} };
  const bar = {
    hidden: reduce ? { opacity: 0 } : { scaleY: 0 },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.7, ease: EASE },
    },
  };
  const name = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, x: -24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
  };

  return (
    <section id="top" className="relative isolate overflow-hidden">
      <HeroBackdrop />
      <div className="relative z-10 mx-auto max-w-content px-6 pb-20 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
        <motion.div className="reveal" variants={container} initial="hidden" animate="show">
        <motion.p variants={item} className="reveal-child eyebrow">
          Aspiring Full-Stack Developer &amp; AI Automation Engineer
        </motion.p>

        <motion.div variants={nameGroup} className="relative mt-5 pl-6">
          <motion.span
            aria-hidden="true"
            variants={bar}
            style={{ transformOrigin: "top" }}
            className="reveal-child absolute inset-y-1 left-0 w-[3px] rounded-full bg-accent"
          />
          <motion.h1
            variants={name}
            className="reveal-child text-[36px] font-bold leading-[1.05] tracking-[-0.02em] text-primary sm:text-[56px]"
          >
            Muhammad Rayyan
            <br /> Masroor
          </motion.h1>
        </motion.div>

        <motion.p
          variants={item}
          className="reveal-child mt-6 text-lg font-medium text-primary sm:text-xl"
        >
          Full-Stack Developer <span className="text-secondary">&amp;</span> AI
          Automation Engineer
        </motion.p>

        <motion.p
          variants={item}
          className="reveal-child mt-4 max-w-2xl text-base leading-[1.75] text-body"
        >
          I build production web apps and agentic workflows. I&apos;m a
          final-year CS student turning real-world problems into shipped
          software.
        </motion.p>

        <motion.div variants={item} className="reveal-child mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-[#2563EB] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
          >
            View Projects
          </a>
          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-5 py-2.5 text-sm font-medium text-accent transition-colors hover:border-accent hover:bg-accent/[0.04]"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path d="M12 3v12M7 10l5 5 5-5M5 21h14" />
            </svg>
            Download Résumé
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-accent"
          >
            Contact
            <span className="transition-transform group-hover:translate-x-0.5" aria-hidden="true">
              →
            </span>
          </a>
        </motion.div>

        <motion.dl
          variants={item}
          className="reveal-child mt-14 grid max-w-2xl grid-cols-1 border-t border-border sm:grid-cols-3"
        >
          {meta.map((m, i) => (
            <div
              key={m.label}
              className={`py-4 sm:px-5 sm:py-5 ${
                i === 0 ? "sm:pl-0" : "border-t border-border sm:border-l sm:border-t-0"
              }`}
            >
              <dt className="font-mono text-[11px] uppercase tracking-wider text-secondary">
                {m.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-primary">{m.value}</dd>
            </div>
          ))}
        </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
