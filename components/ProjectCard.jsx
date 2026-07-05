"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE, makeItemVariants } from "./motion";

function StatusBadge({ status }) {
  const isDone = status === "Completed";
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-body">
      <span
        className={`h-1.5 w-1.5 rounded-full ${isDone ? "bg-green-500" : "bg-blue-500"}`}
        aria-hidden="true"
      />
      {status}
    </span>
  );
}

function ArrowUpRight() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export default function ProjectCard({ project, index }) {
  const reduce = useReducedMotion();
  const { title, description, stack, type, status, link, github } = project;

  return (
    <motion.article
      variants={makeItemVariants(reduce)}
      whileHover={reduce ? undefined : { scale: 1.015 }}
      transition={{ duration: 0.2, ease: EASE }}
      className="reveal-child rounded-lg border border-border bg-surface p-6 transition-[border-color,box-shadow] duration-200 hover:border-accent/40 hover:shadow-card"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-baseline gap-2.5">
          <span className="font-mono text-xs text-secondary">{index}</span>
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
        </div>
        <span className="shrink-0 rounded bg-chip px-2 py-0.5 font-mono text-[11px] text-body">
          {type}
        </span>
      </div>

      <p className="mt-3 text-sm leading-[1.7] text-body">{description}</p>

      {stack.length > 0 && (
        <ul className="mt-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <li
              key={tech}
              className="rounded bg-chip px-2 py-0.5 font-mono text-xs text-body"
            >
              {tech}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-6 flex items-center justify-between gap-3">
        <StatusBadge status={status} />

        {(link || github) && (
          <div className="flex items-center gap-4">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Live <ArrowUpRight />
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                GitHub <ArrowUpRight />
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
