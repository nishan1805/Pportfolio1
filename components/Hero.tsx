"use client";

import { useRef } from "react";
import { Mail, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/data";
import TypewriterRole from "@/components/TypewriterRole";

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen items-center overflow-hidden bg-grid-glow pt-24"
      style={{ ["--mx" as string]: "50%", ["--my" as string]: "50%" }}
    >
      {/* mouse-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-300"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx) var(--my), rgba(45,212,238,0.10), transparent 60%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #F3F5F8 1px, transparent 1px), linear-gradient(to bottom, #F3F5F8 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <svg
        className="pointer-events-none absolute bottom-16 right-0 hidden w-[55%] opacity-70 lg:block"
        viewBox="0 0 800 200"
        fill="none"
      >
        <path
          d="M0 140 C 180 40, 340 190, 520 90 S 760 10, 800 60"
          stroke="url(#swoosh)"
          strokeWidth="2"
          fill="none"
        />
        <defs>
          <linearGradient id="swoosh" x1="0" y1="0" x2="800" y2="0">
            <stop offset="0%" stopColor="#2DD4EE" stopOpacity="0" />
            <stop offset="50%" stopColor="#2DD4EE" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#2DD4EE" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-ink-line px-3 py-1.5 text-xs text-mint">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
          </span>
          {profile.status}
        </div>

        <h1 className="font-display text-6xl font-extrabold leading-[1.02] tracking-tight text-ivory sm:text-7xl lg:text-8xl">
          {profile.name}
        </h1>

        <TypewriterRole />

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

        <div className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-semibold text-ink transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_-6px_#2DD4EE]"
          >
            <Mail size={16} /> Hire Me
          </a>
          <a
            href={profile.resumeUrl}
            className="focus-ring inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3 text-sm font-semibold text-ivory transition-colors hover:border-mint/50 hover:text-mint"
          >
            <Download size={16} /> Download Resume
          </a>
          <span className="flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={15} className="text-mint" />
            {profile.location}
          </span>
        </div>
      </div>
    </section>
  );
}
