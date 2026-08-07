"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-4 z-50 px-4">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-6 rounded-full border border-ink-line/80 bg-ink/85 px-3 py-2 backdrop-blur-md sm:px-5">
        <a href="#home" className="focus-ring rounded px-2 font-display text-base font-extrabold tracking-tight text-ivory">
          PS<span className="text-mint">.</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="focus-ring relative rounded text-sm text-muted transition-colors hover:text-ivory after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-mint after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="focus-ring hidden rounded-full bg-ivory px-4 py-2 text-sm font-semibold text-ink transition-all hover:scale-[1.03] hover:shadow-[0_0_24px_-6px_#2DD4EE] md:inline-block"
        >
          Let&rsquo;s talk
        </a>

        <button
          className="focus-ring rounded p-2 text-ivory md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <nav className="mx-auto mt-2 flex max-w-3xl flex-col gap-1 rounded-2xl border border-ink-line bg-ink px-5 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="focus-ring rounded px-2 py-2 text-sm text-muted hover:text-ivory"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
