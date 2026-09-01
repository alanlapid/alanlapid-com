"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "@/content";

// Easing + timing lifted from eikedrescher.com's sidebar hover animation.
const EASE = "cubic-bezier(0.474,-0.009,0.006,0.991)";

export default function ProjectDock() {
  const [activeSlug, setActiveSlug] = useState<string | null>(null);
  const [visited, setVisited] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const slug = entry.target.id;
          if (entry.isIntersecting) {
            setActiveSlug(slug);
            setVisited((prev) => {
              if (prev.has(slug)) return prev;
              return new Set(prev).add(slug);
            });
          }
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    for (const project of projects) {
      const el = document.getElementById(project.slug);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const visibleOnMobile = projects.filter((project) => visited.has(project.slug));

  return (
    <>
      {/* Desktop: fixed vertical dock, always showing every project, label reveals on hover */}
      <nav
        aria-label="Projects"
        className="hidden xl:flex fixed inset-y-0 left-0 z-20 flex-col justify-center items-start gap-1 pl-8"
      >
        {projects.map((project) => (
          <DockPillIcon
            key={project.slug}
            project={project}
            active={project.slug === activeSlug}
          />
        ))}
      </nav>

      {/* Mobile/tablet: fixed bar that builds up as sections are scrolled past */}
      {visibleOnMobile.length > 0 && (
        <nav
          aria-label="Projects"
          className="flex xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-20 gap-2 px-3 py-2 rounded-full bg-white/90 backdrop-blur border border-neutral-200 shadow-sm"
        >
          {visibleOnMobile.map((project) => (
            <DockIcon
              key={project.slug}
              project={project}
              active={project.slug === activeSlug}
            />
          ))}
        </nav>
      )}
    </>
  );
}

function DockPillIcon({ project, active }: { project: Project; active: boolean }) {
  return (
    <a
      href={`#${project.slug}`}
      className="group relative flex items-center h-12 w-[230px] rounded-2xl bg-transparent transition-all duration-[350ms] hover:bg-white hover:shadow-[0_1px_1px_rgba(0,0,0,0.03),0_3px_5px_rgba(0,0,0,0.03),0_5px_9px_rgba(0,0,0,0.05),0_7px_16px_rgba(0,0,0,0.05)]"
      style={{ transitionTimingFunction: EASE }}
    >
      <span
        className={`absolute left-2 flex items-center justify-center w-8 h-8 rounded-xl text-white text-xs font-medium transition-all duration-[350ms] ${project.color} ${
          active ? "ring-2 ring-offset-2 ring-neutral-900" : ""
        }`}
        style={{ transitionTimingFunction: EASE }}
      >
        {project.initials}
      </span>
      <span
        className="pl-[50px] pr-4 text-sm font-medium text-neutral-900 opacity-0 whitespace-nowrap overflow-hidden text-ellipsis max-w-[176px] transition-opacity duration-[350ms] group-hover:opacity-100"
        style={{ transitionTimingFunction: EASE }}
      >
        {project.title}
      </span>
    </a>
  );
}

function DockIcon({ project, active }: { project: Project; active: boolean }) {
  return (
    <a
      href={`#${project.slug}`}
      title={project.title}
      className={`flex items-center justify-center rounded-2xl text-white text-xs font-medium transition-all duration-300 w-8 h-8 ${
        project.color
      } ${active ? "opacity-100 scale-100 ring-2 ring-offset-2 ring-neutral-900" : "opacity-60 scale-95"}`}
    >
      {project.initials}
    </a>
  );
}
