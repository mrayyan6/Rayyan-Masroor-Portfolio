"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOOLS = [
  { name: "Python", note: "ML and data pipelines" },
  { name: "TypeScript", note: "Typed web apps" },
  { name: "JavaScript", note: "UI and in-browser models" },
  { name: "Next.js", note: "Full-stack React" },
  { name: "React", note: "UI components" },
  { name: "Node.js", note: "Scripts and data imports" },
  { name: "Supabase", note: "Postgres, Auth, Storage" },
  { name: "PostgreSQL", note: "Relational data" },
  { name: "Tailwind CSS", note: "Styling" },
  { name: "scikit-learn", note: "Regression, clustering, PCA" },
  { name: "XGBoost", note: "Gradient-boosted trees" },
  { name: "pandas", note: "Data wrangling" },
  { name: "Transformers.js", note: "AI models in the browser" },
  { name: "ONNX Runtime", note: "On-device inference" },
  { name: "Whisper", note: "Speech recognition" },
  { name: "n8n", note: "Workflow automation" },
];

const COL_A = TOOLS.filter((_, i) => i % 2 === 0);
const COL_B = TOOLS.filter((_, i) => i % 2 === 1);

function ToolCard({ tool, rotate }) {
  return (
    <div
      className="flex aspect-square w-full max-w-[320px] flex-col justify-between rounded-2xl border border-stroke bg-surface p-4 shadow-card transition-transform duration-300 hover:scale-[1.03] sm:p-6"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span
        className="h-8 w-8 rounded-full"
        style={{
          backgroundImage: "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
        }}
        aria-hidden="true"
      />
      <div>
        <p className="break-words font-display text-lg italic text-text-primary sm:text-2xl">{tool.name}</p>
        <p className="mt-1 text-xs text-muted">{tool.note}</p>
      </div>
    </div>
  );
}

export default function Toolbox() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const colARef = useRef(null);
  const colBRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (reduceMotion) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: contentRef.current,
        pinSpacing: false,
      });

      gsap.to(colARef.current, {
        y: -160,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(colBRef.current, {
        y: 160,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="toolbox" ref={sectionRef} className="relative bg-bg">
      <div ref={contentRef} className="relative z-10 flex h-screen items-center justify-center">
        <div className="mx-auto max-w-content px-6 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-stroke" aria-hidden="true" />
            <span className="eyebrow">Toolbox</span>
            <span className="h-px w-8 bg-stroke" aria-hidden="true" />
          </div>
          <h2 className="font-body text-3xl font-medium tracking-tight text-text-primary sm:text-4xl">
            What I <span className="font-display italic">build with</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-muted sm:text-base">
            The stack behind the projects: web apps, machine learning and
            on-device AI.
          </p>
        </div>
      </div>

      {/* In flow, pulled up over the pinned heading, so the section grows with the tool list */}
      <div className="relative z-20 -mt-[100vh] overflow-hidden py-[35vh]">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-2 gap-12 px-6 md:gap-40">
          <div ref={colARef} className="flex flex-col items-start gap-12">
            {COL_A.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} rotate={i % 2 === 0 ? -3 : 2} />
            ))}
          </div>
          <div ref={colBRef} className="flex flex-col items-end gap-12 pt-24">
            {COL_B.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} rotate={i % 2 === 0 ? 3 : -2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
