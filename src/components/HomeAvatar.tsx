import Link from "next/link";
import { profile } from "@/content";

export default function HomeAvatar() {
  return (
    <Link
      href="/"
      title="Back to home"
      className="fixed top-6 left-6 md:left-10 z-20 flex items-center justify-center w-10 h-10 rounded-full bg-neutral-900 text-white text-xs font-medium hover:opacity-80 transition-opacity"
    >
      {profile.initials}
    </Link>
  );
}
