import { notFound } from "next/navigation";
import HomeAvatar from "@/components/HomeAvatar";
import { thoughts } from "@/content";

export function generateStaticParams() {
  return thoughts.map((thought) => ({ slug: thought.slug }));
}

export default async function ThoughtPage(props: PageProps<"/thoughts/[slug]">) {
  const { slug } = await props.params;
  const thought = thoughts.find((item) => item.slug === slug);
  if (!thought) notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <HomeAvatar />
      <h1 className="mt-8 text-3xl font-extrabold leading-tight text-neutral-900">
        {thought.title}
      </h1>
      <p className="mt-2 text-neutral-500">Last updated: {thought.date}</p>
      <div className="mt-10 space-y-8">
        {thought.body.map((paragraph, index) => (
          <p key={index} className="text-2xl font-light leading-[38px] text-neutral-900">
            {paragraph}
          </p>
        ))}
      </div>
    </main>
  );
}
