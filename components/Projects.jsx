import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

const SPANS = ["md:col-span-7", "md:col-span-5", "md:col-span-5", "md:col-span-7"];

export default function Projects() {
  return (
    <section id="work" className="scroll-mt-24 bg-bg py-12 md:py-16">
      <div className="mx-auto max-w-content px-6 md:px-10 lg:px-16">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured"
          italic="projects"
          subtext="A selection of projects I've worked on, from concept to launch."
          action={
            <a
              href="https://github.com/mrayyan6"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative hidden shrink-0 rounded-full md:inline-flex"
            >
              <span
                className="absolute rounded-full opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                style={{
                  inset: "-2px",
                  backgroundImage:
                    "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
                }}
                aria-hidden="true"
              />
              <span className="relative flex items-center gap-2 rounded-full border border-stroke bg-bg px-4 py-2 text-sm text-text-primary">
                View all work ↗
              </span>
            </a>
          }
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              spanClass={SPANS[i % SPANS.length]}
              aspectClass="aspect-[4/3] md:aspect-auto md:min-h-[320px]"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
