import type { Project } from "@/content";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="py-8 border-b border-neutral-100 last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="text-lg font-medium">{project.title}</h3>
        <span className="text-sm text-neutral-500 whitespace-nowrap">
          {project.period}
          {project.status ? ` · ${project.status}` : ""}
        </span>
      </div>
      <p className="mt-2 text-neutral-600 leading-relaxed">{project.description}</p>
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
    </article>
  );
}
