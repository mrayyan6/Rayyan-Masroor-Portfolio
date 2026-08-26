"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/projects";

const EASE = [0.25, 0.1, 0.25, 1];

const techCount = new Set(projects.flatMap((p) => p.stack)).size;

const stats = [
  { value: `${projects.length}`, label: "Projects Shipped" },
  { value: `${techCount}+`, label: "Technologies Used" },
  { value: "2027", label: "Graduating BS CS" },
];

export default function Stats() {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="mx-auto grid max-w-content grid-cols-1 gap-10 px-6 sm:grid-cols-3 md:px-10 lg:px-16">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
            className="text-center sm:text-left"
          >
            <p className="font-display text-5xl italic text-text-primary md:text-6xl">
              {s.value}
            </p>
            <p className="eyebrow mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
