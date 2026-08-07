"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const duration = 1200;
            const start = performance.now();

            const tick = (now: number) => {
              const progress = Math.min((now - start) / duration, 1);
              setCount(Math.round(progress * value));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-ink-line bg-ink-soft/30 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-mint/40 hover:shadow-[0_0_30px_-14px_#2DD4EE]"
    >
      <div className="font-display text-4xl font-extrabold text-ivory">
        {count}
        <span className="text-mint">{suffix}</span>
      </div>
      <div className="mt-2 text-mono-label text-xs uppercase text-muted">{label}</div>
    </div>
  );
}
