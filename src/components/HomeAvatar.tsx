import Link from "next/link";
import { profile } from "@/content";

export default function HomeAvatar() {
  return (
    <Link
      href="/"
      title="Back to home"
      className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-neutral-900 text-white text-[11px] font-medium hover:opacity-80 transition-opacity"
    >
      {profile.initials}
    </Link>
  );
}
