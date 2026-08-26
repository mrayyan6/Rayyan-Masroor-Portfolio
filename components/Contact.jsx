"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import NetworkCanvas from "./NetworkCanvas";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/muhammad-rayyan6/" },
  { label: "GitHub", href: "https://github.com/mrayyan6" },
];

const EMAIL = "rayyanmasroor8@gmail.com";
const MARQUEE_TEXT = "OPEN TO OPPORTUNITIES • ";

export default function Contact() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion || !marqueeRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        duration: 40,
        ease: "none",
        repeat: -1,
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <footer id="contact" className="relative overflow-hidden bg-bg pb-8 pt-16 md:pb-12 md:pt-20">
      <div className="absolute inset-0 z-0">
        <NetworkCanvas flipped dense />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10">
        <div className="overflow-hidden py-10 md:py-16">
          <div ref={marqueeRef} className="flex w-max whitespace-nowrap">
            {Array.from({ length: 10 }).map((_, i) => (
              <span
                key={i}
                className="px-2 font-display text-5xl italic text-text-primary/90 md:text-7xl"
              >
                {MARQUEE_TEXT}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-content px-6 text-center md:px-10 lg:px-16">
          <p className="eyebrow mb-6">Contact</p>
          <a
            href={`mailto:${EMAIL}`}
            className="group relative inline-flex rounded-full"
          >
            <span
              className="absolute rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              style={{
                inset: "-2px",
                backgroundImage:
                  "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              }}
              aria-hidden="true"
            />
            <span className="relative rounded-full bg-text-primary px-8 py-4 text-base text-bg sm:text-lg">
              {EMAIL} ↗
            </span>
          </a>
        </div>

        <div className="mx-auto mt-16 flex max-w-content flex-col items-center justify-between gap-6 border-t border-white/10 px-6 pt-8 sm:flex-row md:px-10 lg:px-16">
          <nav className="flex items-center gap-6" aria-label="Social links">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted transition-colors hover:text-text-primary"
              >
                {s.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="text-sm text-muted">Available for work</span>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          © 2026 Muhammad Rayyan Masroor
        </p>
      </div>
    </footer>
  );
}
