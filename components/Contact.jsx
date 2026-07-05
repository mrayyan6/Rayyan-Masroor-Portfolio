"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { Stagger, Item, makeItemVariants, EASE } from "./motion";

const contacts = [
  {
    label: "Email",
    display: "rayyanmasroor8@gmail.com",
    href: "mailto:rayyanmasroor8@gmail.com",
    external: false,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    display: "in/muhammad-rayyan6",
    href: "https://www.linkedin.com/in/muhammad-rayyan6/",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    display: "github.com/mrayyan6",
    href: "https://github.com/mrayyan6",
    external: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.05-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58A12.01 12.01 0 0 0 24 12.5C24 5.87 18.63.5 12 .5z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-content px-6 py-14 sm:px-8 sm:py-24">
        <Stagger>
          <SectionHeading eyebrow="Contact" title="Let's build together" />
          <Item as="p" className="mt-8 max-w-2xl text-base leading-[1.75] text-body">
           Aspiring Full-Stack Developer &amp; AI Automation Engineer,open to freelance work, and interesting
            problems. Email is the fastest way to reach me or connect on the
            links below.
          </Item>
        </Stagger>

        <Stagger as="div" className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {contacts.map((c) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              variants={makeItemVariants(reduce)}
              whileHover={reduce ? undefined : { scale: 1.015 }}
              transition={{ duration: 0.2, ease: EASE }}
              className="reveal-child group flex items-center gap-4 rounded-lg border border-border bg-surface p-5 transition-[border-color,box-shadow] duration-200 hover:border-accent/40 hover:shadow-card"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-secondary transition-colors group-hover:text-accent">
                {c.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-[11px] font-medium uppercase tracking-eyebrow text-secondary">
                  {c.label}
                </span>
                <span className="mt-0.5 block truncate text-sm font-medium text-primary transition-colors group-hover:text-accent">
                  {c.display}
                </span>
              </span>
            </motion.a>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
