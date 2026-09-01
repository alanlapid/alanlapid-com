import type { Project } from "@/content";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <section
      id={project.slug}
      className="relative border-b border-neutral-100 last:border-0 scroll-mt-16"
    >
      <div
        className="sticky top-16 bg-white/95 backdrop-blur py-4 flex items-baseline justify-between gap-4"
        style={{ zIndex: index + 1 }}
      >
        <h3 className="text-lg font-medium">{project.title}</h3>
        <span className="text-sm text-neutral-500 whitespace-nowrap">
          {project.period}
          {project.status ? ` · ${project.status}` : ""}
        </span>
      </div>
      <div className="pb-16">
        <p className="text-neutral-600 leading-relaxed">{project.description}</p>
        {project.link && (
          <a
            href={project.link.href}
            target="_blank"
            rel="noreferrer"
            className="mt-2 inline-block text-sm text-neutral-900 hover:underline"
          >
            {project.link.label} ↗
          </a>
        )}
      </div>
    </section>
  );
}
