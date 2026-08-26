"use client";

import { motion } from "framer-motion";

const EASE = [0.25, 0.1, 0.25, 1];

export default function SectionHeading({
  eyebrow,
  title,
  italic,
  subtext,
  action,
  className = "",
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1, ease: EASE }}
      className={`flex flex-col items-start justify-between gap-6 md:flex-row md:items-end ${className}`}
    >
      <div>
        <div className="mb-4 flex items-center gap-3">
          <span className="h-px w-8 bg-stroke" aria-hidden="true" />
          <span className="eyebrow">{eyebrow}</span>
        </div>
        <h2 className="font-body text-3xl font-medium tracking-tight text-text-primary sm:text-4xl">
          {title} <span className="font-display italic">{italic}</span>
        </h2>
        {subtext && (
          <p className="mt-3 max-w-md text-sm text-muted sm:text-base">{subtext}</p>
        )}
      </div>
      {action}
    </motion.div>
  );
}
