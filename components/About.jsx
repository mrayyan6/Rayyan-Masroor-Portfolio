import SectionHeading from "./SectionHeading";
import { Stagger, Item } from "./motion";

const skillGroups = [
  { label: "Frontend", skills: ["Next.js", "React", "Tailwind CSS", "JavaScript"] },
  { label: "Backend", skills: ["Supabase", "PostgreSQL", "Node.js", "REST APIs"] },
  {
    label: "AI & Automation",
    skills: ["n8n", "OpenRouter", "LLM API integration", "Prompt Engineering"],
  },
  { label: "Tools", skills: ["Git", "GitHub", "VS Code", "Vercel"] },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-content px-6 py-14 sm:px-8 sm:py-24">
        <Stagger>
          <SectionHeading eyebrow="About" title="Who I am" />

          <Item
            as="blockquote"
            className="mt-8 max-w-3xl border-l-2 border-border pl-6 text-lg leading-[1.7] text-primary sm:text-xl"
          >
            Final-year Computer Science student with hands-on experience across
            full-stack development and AI automation. I care about applied AI,
            agentic systems, and shipping real products, not demos that never
            leave localhost.
          </Item>

          <Item as="p" className="mt-6 max-w-2xl text-base leading-[1.75] text-body">
            Day to day that means Next.js and Supabase on the web side, and n8n,
            OpenRouter and LLM APIs on the automation side, wiring the two
            together into things people actually use.
          </Item>
        </Stagger>

        <Stagger as="div" className="mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <Item
              key={group.label}
              className="rounded-lg border border-border bg-surface p-6"
            >
              <h3 className="text-[11px] font-medium uppercase tracking-eyebrow text-secondary">
                {group.label}
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded bg-chip px-2.5 py-1 font-mono text-xs text-body"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </Item>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
