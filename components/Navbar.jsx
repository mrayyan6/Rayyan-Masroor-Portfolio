"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Home", href: "#top", id: "top" },
  { label: "Work", href: "#work", id: "work" },
];

const RESUME = "/Muhammad_Rayyan_Resume.pdf";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("top");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = ["top", "work", "toolbox", "contact"];
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (els.length === 0) return;
    const visible = new Set();
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) visible.add(e.target.id);
          else visible.delete(e.target.id);
        });
        const current = ids.find((id) => visible.has(id));
        if (current) setActive(current);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-50 flex justify-center px-4 pt-4 md:pt-6">
      <nav
        className={`inline-flex items-center rounded-full border border-white/10 bg-surface/90 px-2 py-2 backdrop-blur-md transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/10" : ""
        }`}
      >
        <a
          href="#top"
          aria-label="Muhammad Rayyan Masroor, home"
          className="group flex h-9 w-9 shrink-0 items-center justify-center rounded-full p-[1.5px] transition-transform duration-200 hover:scale-110"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
          }}
        >
          <span className="flex h-full w-full items-center justify-center rounded-full bg-bg font-display text-[13px] italic text-text-primary transition-[background-image] duration-200 group-hover:[background-image:linear-gradient(270deg,#89AACC_0%,#4E85BF_100%)]">
            RM
          </span>
        </a>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" aria-hidden="true" />

        <ul className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`rounded-full px-3 py-1.5 text-xs transition-colors sm:px-4 sm:py-2 sm:text-sm ${
                    isActive
                      ? "bg-stroke/50 text-text-primary"
                      : "text-muted hover:bg-stroke/50 hover:text-text-primary"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href={RESUME}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-3 py-1.5 text-xs text-muted transition-colors hover:bg-stroke/50 hover:text-text-primary sm:px-4 sm:py-2 sm:text-sm"
            >
              Resume
            </a>
          </li>
        </ul>

        <span className="mx-1 hidden h-5 w-px bg-stroke sm:block" aria-hidden="true" />

        <a href="#contact" className="group relative rounded-full">
          <span
            className="absolute rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
            style={{
              inset: "-2px",
              backgroundImage:
                "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
            }}
            aria-hidden="true"
          />
          <span className="relative flex items-center gap-1 rounded-full bg-surface px-3 py-1.5 text-xs text-text-primary backdrop-blur-md sm:px-4 sm:py-2 sm:text-sm">
            Say hi
            <motion.span aria-hidden="true">↗</motion.span>
          </span>
        </a>
      </nav>
    </div>
  );
}
