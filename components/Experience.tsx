import { experience } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import { Flag as FlagIcon, MapPin as MapPinIcon } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-mono-label text-xs uppercase text-mint">Experience</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-ivory sm:text-4xl">
          The road so far.
        </h2>

        <div className="relative mt-20">
          {/* center timeline line — desktop only */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 border-l border-dashed border-ink-line md:block" />
          <div
            className="pointer-events-none absolute left-1/2 top-0 hidden h-24 w-px -translate-x-1/2 md:block"
            style={{ background: "linear-gradient(to bottom, #2DD4EE, transparent)" }}
          />

          {/* START flag */}
          <div className="relative mb-14 hidden justify-center md:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-line bg-ink px-3 py-1.5 text-mono-label text-xs uppercase text-mint">
              <FlagIcon size={13} />
              Start
            </span>
          </div>

          <div className="space-y-14 md:space-y-24">
            {experience.map((role, i) => {
              const Icon = iconMap[role.icon];
              const isLeft = i % 2 === 0;
              const isCurrent = role.status === "Present";

              const card = (
                <div className="rounded-2xl border border-ink-line bg-ink-soft/30 p-7">
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
                      className={`flex h-12 w-12 items-center justify-center rounded-full border bg-ink ${
                        isCurrent ? "border-mint text-mint shadow-[0_0_24px_-4px_#2DD4EE]" : "border-ink-line text-muted"
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

          {/* NOW flag */}
          <div className="relative mt-14 hidden justify-center md:flex">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-line bg-ink px-3 py-1.5 text-mono-label text-xs uppercase text-mint">
              <MapPinIcon size={13} />
              Now
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
