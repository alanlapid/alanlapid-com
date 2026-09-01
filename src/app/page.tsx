import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ProjectDock from "@/components/ProjectDock";
import { profile, projects, thoughts, appearances } from "@/content";

export default function Home() {
  return (
    <>
      <Header />
      <ProjectDock />
      <main className="max-w-2xl mx-auto px-6">
        <section id="about" className="py-16 scroll-mt-16">
          <p className="text-sm text-neutral-500">{profile.location}</p>
          <h1 className="mt-2 text-2xl font-medium leading-snug">
            {profile.tagline}
          </h1>
          <p className="mt-4 text-neutral-600 leading-relaxed">{profile.bio}</p>
        </section>

        <section id="work" className="py-8 scroll-mt-16">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
            Work
          </h2>
          <div>
            {projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>

        <section id="thoughts" className="py-16 scroll-mt-16">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
            Thoughts
          </h2>
          <ul className="mt-4 space-y-3">
            {thoughts.map((thought) => (
              <li key={thought.slug}>
                <Link href={`/thoughts/${thought.slug}`} className="hover:underline">
                  {thought.title}
                </Link>
                <span className="ml-2 text-sm text-neutral-500">{thought.date}</span>
              </li>
            ))}
          </ul>
        </section>

        <section id="appearances" className="py-16">
          <h2 className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
            Appearances
          </h2>
          <ul className="mt-4 space-y-3">
            {appearances.map((appearance) => (
              <li key={appearance.title}>
                <a href={appearance.href} className="hover:underline">
                  {appearance.title}
                </a>
                <span className="ml-2 text-sm text-neutral-500">
                  {appearance.source}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
