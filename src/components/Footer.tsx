"use client";

import { useState } from "react";
import { profile } from "@/content";

export default function Footer() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <footer className="max-w-2xl mx-auto px-6 py-16 text-sm text-neutral-500">
      <div className="flex flex-wrap items-center gap-4">
        <button onClick={copyEmail} className="hover:text-neutral-900">
          {copied ? "Copied!" : "Copy email"}
        </button>
        {profile.socials.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-neutral-900"
          >
            {social.label}
          </a>
        ))}
      </div>
    </footer>
  );
}
