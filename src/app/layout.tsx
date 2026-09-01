import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { profile } from "@/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: profile.name,
  description: profile.tagline,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} antialiased`}>
      <body className="min-h-screen bg-white text-neutral-900 font-sans">
        {children}
      </body>
    </html>
  );
}
