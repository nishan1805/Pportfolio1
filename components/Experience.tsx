"use client";

import { useEffect, useRef, useState } from "react";
import { experience } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import { Flag as FlagIcon, MapPin as MapPinIcon } from "lucide-react";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iconRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [fillHeight, setFillHeight] = useState(0);
  // vertical offset (from container top) of each timeline icon's center —
  // the fill line "touches" an icon once fillHeight reaches its offset
  const [iconOffsets, setIconOffsets] = useState<number[]>([]);

  useEffect(() => {
    let ticking = false;

    const compute = () => {
      const el = containerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const triggerY = window.innerHeight * 0.55;
        // progress reaches 1 exactly when the container's bottom (the START flag)
        // passes the trigger line, and 0 when its top hasn't reached it yet —
        // scrolling back up shrinks it right back down.
        const progress = Math.min(Math.max((triggerY - rect.top) / rect.height, 0), 1);
        setFillHeight(progress * rect.height);
      }
      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        requestAnimationFrame(compute);
        ticking = true;
      }
    };

    compute();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  useEffect(() => {
    // measure where each icon actually sits relative to the container —
    // this only needs to run on mount/resize since icon and container
    // scroll together (their relative offset doesn't change on scroll)
    const measure = () => {
      const containerEl = containerRef.current;
      if (!containerEl) return;
      const containerRect = containerEl.getBoundingClientRect();
      const offsets = iconRefs.current.map((iconEl) => {
        if (!iconEl) return Infinity;
        const r = iconEl.getBoundingClientRect();
        // hidden (display:none) elements report a zero-size rect — ignore those
        if (r.width === 0 && r.height === 0) return Infinity;
        return r.top - containerRect.top + r.height / 2;
      });
      setIconOffsets(offsets);
    };

    measure();
    // re-measure shortly after mount too — swapped-in webfonts can reflow
    // the layout slightly after the first paint, which would otherwise
    // leave the icon offsets very slightly stale until the next resize
    const settleTimeout = setTimeout(measure, 300);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(settleTimeout);
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section id="experience" className="border-t border-ink-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-mono-label text-xs uppercase text-mint">Experience</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-ivory sm:text-4xl">
          The road so far.
        </h2>

        <div ref={containerRef} className="relative mt-20">
          {/* base dashed line — always present */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 border-l border-dashed border-ink-line md:block" />

          {/* glowing fill line — tracks scroll position exactly, both directions */}
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden w-px -translate-x-1/2 bg-mint md:block"
            style={{
              height: `${fillHeight}px`,
              boxShadow: "0 0 10px 1px #2DD4EE, 0 0 28px 4px rgba(45,212,238,0.45)",
            }}
          />

          {/* PRESENT flag — top of timeline */}
          <div className="relative mb-14 hidden justify-center md:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-line bg-ink px-3 py-1.5 text-mono-label text-xs uppercase text-mint">
              <FlagIcon size={13} />
              Present
            </span>
          </div>

          <div className="space-y-14 md:space-y-24">
            {experience.map((role, i) => {
              const Icon = iconMap[role.icon];
              const isLeft = i % 2 === 0;
              // mobile compact icon has no visible line to react to, so it just
              // reflects the role's own "Present" status as before
              const isCurrent = role.status === "Present";
              // desktop icon glows only once the animated line has actually
              // reached it, and turns back off if you scroll back above it
              const isActive = fillHeight >= (iconOffsets[i] ?? Infinity);

              const card = (
                <div className="rounded-2xl border border-ink-line bg-ink-soft/30 p-7 transition-all duration-300 hover:border-mint/40 hover:shadow-[0_0_40px_-16px_#2DD4EE]">
                  <div className="flex flex-wrap items-center gap-3">
                    <p className="text-mono-label text-xs uppercase text-mint">Milestone {role.milestone}</p>
                    {role.status && (
                      <span className="rounded-full border border-mint/40 px-2.5 py-0.5 text-mono-label text-[10px] uppercase text-mint">
                        {role.status}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-semibold text-ivory">
                    {role.role} <span className="text-mint">· {role.org}</span>
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted">{role.body}</p>

                  <ul className="mt-3 grid gap-x-4 gap-y-1.5 sm:grid-cols-2">
                    {role.points.map((point) => (
                      <li key={point} className="flex items-start gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-mint" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {role.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-ink-line px-2.5 py-1 font-mono text-[11px] text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );

              return (
                <div key={role.milestone} className="relative grid gap-6 md:grid-cols-[1fr_4rem_1fr] md:items-center">
                  <div className="md:hidden">
                    <span
                      className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full border ${
                        isCurrent ? "border-mint text-mint shadow-[0_0_20px_-4px_#2DD4EE]" : "border-ink-line text-muted"
                      }`}
                    >
                      <Icon size={18} />
                    </span>
                    {card}
                  </div>

                  <div className="hidden md:block">{isLeft && card}</div>
                  <div className="hidden justify-self-center md:flex">
                    <span
                      ref={(el) => {
                        iconRefs.current[i] = el;
                      }}
                      className={`flex h-12 w-12 items-center justify-center rounded-full border bg-ink transition-all duration-300 ${
                        isActive ? "border-mint text-mint shadow-[0_0_24px_-4px_#2DD4EE]" : "border-ink-line text-muted"
                      }`}
                    >
                      <Icon size={20} />
                    </span>
                  </div>
                  <div className="hidden md:block">{!isLeft && card}</div>
                </div>
              );
            })}
          </div>

          {/* START flag — bottom of timeline, where the career began */}
          <div className="relative mt-14 hidden justify-center md:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-line bg-ink px-3 py-1.5 text-mono-label text-xs uppercase text-mint">
              <MapPinIcon size={13} />
              Start
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
