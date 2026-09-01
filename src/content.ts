// All site content lives here. Edit this file to update the page —
// no need to touch the components in src/app or src/components.

export const profile = {
  name: "Alan Lapid",
  initials: "AL",
  location: "PLACEHOLDER — e.g. Madrid, Spain",
  tagline: "PLACEHOLDER — one-line thing you believe or care about",
  email: "PLACEHOLDER@alanlapid.com",
  bio: `PLACEHOLDER bio. A couple of sentences about who you are, what you
  build, and what you care about. This is the first thing people read.`,
  socials: [
    { label: "GitHub", href: "https://github.com/alanlapid" },
    { label: "LinkedIn", href: "https://linkedin.com/in/PLACEHOLDER" },
    { label: "X", href: "https://x.com/PLACEHOLDER" },
  ],
};

export type Project = {
  slug: string;
  title: string;
  initials: string; // shown in the dock nav icon
  color: string; // tailwind bg class for the dock nav icon
  period: string;
  status?: string; // e.g. "Acquired", "Closed"
  description: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "project-one",
    title: "PLACEHOLDER Project One",
    initials: "P1",
    color: "bg-blue-500",
    period: "2024–Present",
    description:
      "PLACEHOLDER description of the project — what it is, what problem it solves, and your role building it. Add a few more sentences here so the section has enough height for the sticky title effect to be visible while scrolling.",
    link: { label: "Visit site", href: "https://example.com" },
  },
  {
    slug: "project-two",
    title: "PLACEHOLDER Project Two",
    initials: "P2",
    color: "bg-orange-500",
    period: "2022–2023",
    status: "Acquired",
    description:
      "PLACEHOLDER description of the project — what it is, what problem it solves, and your role building it. Add a few more sentences here so the section has enough height for the sticky title effect to be visible while scrolling.",
  },
  {
    slug: "project-three",
    title: "PLACEHOLDER Project Three",
    initials: "P3",
    color: "bg-violet-500",
    period: "2019–2022",
    description:
      "PLACEHOLDER description of the project — what it is, what problem it solves, and your role building it. Add a few more sentences here so the section has enough height for the sticky title effect to be visible while scrolling.",
  },
];

export type Thought = {
  slug: string;
  title: string;
  date: string;
  body: string[]; // paragraphs, PLACEHOLDER
};

export const thoughts: Thought[] = [
  {
    slug: "a-short-essay-title",
    title: "PLACEHOLDER — a short essay title",
    date: "2026",
    body: [
      "PLACEHOLDER paragraph one of the article. Replace with the real essay text.",
      "PLACEHOLDER paragraph two of the article.",
    ],
  },
  {
    slug: "another-essay-title",
    title: "PLACEHOLDER — another essay title",
    date: "2025",
    body: [
      "PLACEHOLDER paragraph one of the article. Replace with the real essay text.",
      "PLACEHOLDER paragraph two of the article.",
    ],
  },
];

export type Appearance = {
  title: string;
  source: string;
  href: string;
};

export const appearances: Appearance[] = [
  {
    title: "PLACEHOLDER — interview or podcast title",
    source: "PLACEHOLDER Publication",
    href: "#",
  },
];
