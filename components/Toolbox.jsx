"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

const EASE = [0.25, 0.1, 0.25, 1];

const GROUPS = [
  {
    title: "Web & Backend",
    tools: [
      { name: "JavaScript", note: "UI and in-browser models" },
      { name: "TypeScript", note: "Typed web apps" },
      { name: "React", note: "UI components" },
      { name: "Next.js", note: "Full-stack React" },
      { name: "Node.js", note: "Scripts and data imports" },
      { name: "Tailwind CSS", note: "Styling" },
      { name: "Supabase", note: "Postgres, Auth, Storage" },
      { name: "PostgreSQL", note: "Relational data" },
    ],
  },
  {
    title: "Data & Machine Learning",
    tools: [
      { name: "Python", note: "ML and data pipelines" },
      { name: "pandas", note: "Data wrangling" },
      { name: "scikit-learn", note: "Regression, clustering, PCA" },
      { name: "XGBoost", note: "Gradient-boosted trees" },
    ],
  },
  {
    title: "AI & Automation",
    tools: [
      { name: "Transformers.js", note: "AI models in the browser" },
      { name: "ONNX Runtime", note: "On-device inference" },
      { name: "Whisper", note: "Speech recognition" },
      { name: "n8n", note: "Workflow automation" },
    ],
  },
];

export default function Toolbox() {
  return (
    <section id="toolbox" className="bg-bg py-16 md:py-24">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Toolbox"
          title="What I"
          italic="build with"
          subtext="The stack behind the projects: web apps, machine learning and on-device AI."
        />

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {GROUPS.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: EASE, delay: gi * 0.1 }}
              className="rounded-2xl border border-stroke bg-surface p-5 shadow-card sm:p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span
                  className="h-3 w-3 rounded-full accent-gradient"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl italic text-text-primary">
                  {group.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <li
                    key={tool.name}
                    title={tool.note}
                    className="rounded-full border border-stroke px-3 py-1.5 text-sm text-text-primary transition-colors hover:border-muted"
                  >
                    {tool.name}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
