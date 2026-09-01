import { profile } from "@/content";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Thoughts", href: "#thoughts" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur border-b border-neutral-100">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="font-medium">
          {profile.name}
        </a>
        <nav className="flex gap-6 text-sm text-neutral-600">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-neutral-900">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
