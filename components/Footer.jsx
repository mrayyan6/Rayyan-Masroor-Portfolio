import { Reveal } from "./motion";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
  { label: "Résumé", href: "/Muhammad_Rayyan_Resume.pdf", external: true },
];

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <Reveal className="mx-auto flex max-w-content flex-col gap-10 px-6 py-14 sm:flex-row sm:items-start sm:justify-between sm:px-8">
        <div>
          <p className="border-l-2 border-accent pl-2.5 text-sm font-semibold tracking-tight text-primary">
            Muhammad Rayyan Masroor
          </p>
          <p className="mt-3 text-sm text-secondary">
            Full-Stack Developer &amp; AI Automation Engineer
          </p>
          <p className="mt-6 text-xs text-secondary">
            © 2026 · Designed &amp; built with Next.js and Tailwind CSS.
          </p>
        </div>

        <nav className="flex flex-col gap-2.5" aria-label="Footer">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="text-sm text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#top"
            className="mt-1 text-sm font-medium text-accent transition-colors hover:text-accent-hover"
          >
            Back to top ↑
          </a>
        </nav>
      </Reveal>
    </footer>
  );
}
