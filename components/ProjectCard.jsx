"use client";

import ProjectArt from "./ProjectArt";

export default function ProjectCard({ project, index, spanClass, aspectClass }) {
  const { title, description, type, link, github } = project;
  const href = link || github;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative block overflow-hidden rounded-3xl border border-stroke bg-surface ${spanClass} ${aspectClass}`}
    >
      <div className="absolute inset-0 transition-transform duration-500 group-hover:scale-105">
        <ProjectArt index={index} />
      </div>

      <div className="absolute inset-0 bg-black/30" />

      <div className="absolute left-5 top-5 flex items-center gap-2">
        <span className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[11px] uppercase tracking-eyebrow text-white/80 backdrop-blur-sm">
          {type}
        </span>
      </div>

      <div className="absolute inset-0 flex flex-col justify-end bg-bg/0 p-6 opacity-0 backdrop-blur-0 transition-all duration-300 group-hover:bg-bg/70 group-hover:opacity-100 group-hover:backdrop-blur-lg">
        <p className="mb-4 line-clamp-3 text-sm text-white/80">{description}</p>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-4 py-2 text-sm text-bg">
          View &mdash; <span className="font-display italic">{title}</span> ↗
        </span>
      </div>
    </a>
  );
}
