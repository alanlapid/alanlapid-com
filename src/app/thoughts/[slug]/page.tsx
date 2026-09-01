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
    <>
      <HomeAvatar />
      <main className="max-w-2xl mx-auto px-6 py-24">
        <p className="text-sm text-neutral-500">{thought.date}</p>
        <h1 className="mt-2 text-2xl font-medium leading-snug">{thought.title}</h1>
        <div className="mt-6 space-y-4 text-neutral-600 leading-relaxed">
          {thought.body.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </main>
    </>
  );
}
