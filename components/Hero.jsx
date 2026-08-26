"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import NetworkCanvas from "./NetworkCanvas";

const ROLES = ["Full-Stack Dev", "Automation Engineer", "CS Student", "Builder"];
const RESUME = "/Muhammad_Rayyan_Resume.pdf";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const rootRef = useRef(null);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".name-reveal",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
      ).fromTo(
        ".blur-in",
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1,
          stagger: 0.1,
          delay: -0.9,
        }
      );
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={rootRef} className="relative isolate overflow-hidden">
      <div className="absolute inset-0 z-0">
        <NetworkCanvas />
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-content flex-col items-center justify-center px-6 pb-24 pt-32 text-center sm:px-8">
        <p className="blur-in eyebrow mb-8">Class of &apos;27</p>

        <h1 className="name-reveal mb-6 font-display text-6xl italic leading-[0.9] tracking-tight text-text-primary md:text-8xl lg:text-9xl">
          Muhammad Rayyan
        </h1>

        <p className="blur-in mb-6 text-lg text-muted md:text-xl">
          A{" "}
          <span
            key={roleIndex}
            className="inline-block animate-role-fade-in font-display italic text-text-primary"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          based in Islamabad.
        </p>

        <p className="blur-in mb-12 max-w-md text-sm text-muted md:text-base">
          I build production web apps and AI agent workflows, turning
          real-world problems into shipped software, not demos that never
          leave localhost.
        </p>

        <div className="blur-in inline-flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="group relative overflow-hidden rounded-full bg-text-primary px-7 py-3.5 text-sm text-bg transition-transform hover:scale-105"
          >
            <span className="relative z-10 transition-colors group-hover:text-text-primary">
              See Work
            </span>
            <span
              className="absolute inset-0 z-0 scale-y-0 rounded-full bg-bg transition-transform duration-300 group-hover:scale-y-100"
              aria-hidden="true"
            />
            <span
              className="pointer-events-none absolute rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                inset: "-2px",
                zIndex: -1,
                backgroundImage:
                  "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              }}
              aria-hidden="true"
            />
          </a>

          <a
            href="#contact"
            className="group relative rounded-full border-2 border-stroke bg-bg px-7 py-3.5 text-sm text-text-primary transition-transform hover:scale-105 hover:border-transparent"
          >
            Reach out
            <span
              className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              }}
              aria-hidden="true"
            />
          </a>

          <a
            href={RESUME}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-text-primary"
          >
            Download résumé ↓
          </a>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-8 z-10 flex flex-col items-center gap-3">
        <span className="eyebrow tracking-[0.2em]">Scroll</span>
        <div className="relative h-10 w-px overflow-hidden bg-stroke">
          <span className="absolute inset-x-0 top-0 h-1/2 animate-scroll-down bg-text-primary" />
        </div>
      </div>
    </section>
  );
}
