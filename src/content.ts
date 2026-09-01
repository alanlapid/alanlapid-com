// All site content lives here. Edit this file to update the page —
// no need to touch the components in src/app or src/components.

export const profile = {
  name: "Alan Lapid",
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
  title: string;
  period: string;
  status?: string; // e.g. "Acquired", "Closed"
  description: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    title: "PLACEHOLDER Project One",
    period: "2024–Present",
    description:
      "PLACEHOLDER description of the project — what it is, what problem it solves, and your role building it.",
    link: { label: "Visit site", href: "https://example.com" },
  },
  {
    title: "PLACEHOLDER Project Two",
    period: "2022–2023",
    status: "Acquired",
    description:
      "PLACEHOLDER description of the project — what it is, what problem it solves, and your role building it.",
  },
  {
    title: "PLACEHOLDER Project Three",
    period: "2019–2022",
    description:
      "PLACEHOLDER description of the project — what it is, what problem it solves, and your role building it.",
  },
];

export type Thought = {
  title: string;
  date: string;
  href: string;
};

export const thoughts: Thought[] = [
  {
    title: "PLACEHOLDER — a short essay title",
    date: "2026",
    href: "#",
  },
  {
    title: "PLACEHOLDER — another essay title",
    date: "2025",
    href: "#",
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
