import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";
import { Stagger } from "./motion";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-content px-6 py-14 sm:px-8 sm:py-28">
        <Stagger>
          <SectionHeading eyebrow="Projects" title="Selected work" />
        </Stagger>

        <Stagger
          as="div"
          className="mt-12 grid grid-cols-1 items-start gap-5 md:grid-cols-2"
        >
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={String(i + 1).padStart(2, "0")}
            />
          ))}
        </Stagger>
      </div>
    </section>
  );
}
