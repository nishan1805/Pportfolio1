import { Code2, Briefcase, Users } from "lucide-react";
import { aboutPillars, stats } from "@/lib/data";
import StatCounter from "@/components/StatCounter";

const icons = { Architecture: Code2, Ownership: Briefcase, Communication: Users };

export default function About() {
  return (
    <section id="about" className="border-t border-ink-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-mono-label text-xs uppercase text-mint">About</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-ivory sm:text-4xl">
          Enterprise software, crafted end to end.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-ink-line bg-ink-soft/30 p-8">
            <p className="text-lg leading-relaxed text-ivory">
              Full Stack Developer experienced in building scalable enterprise applications using
              React.js, Next.js, Node.js and the Frappe Framework.
            </p>
            <p className="mt-4 leading-relaxed text-muted">
              I work across the whole product surface — client communication, requirement
              gathering, project ownership, API integration, backend development and modern
              frontend architecture. Based in Raipur, India, working with teams everywhere.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {aboutPillars.map((pillar) => {
                const Icon = icons[pillar.title as keyof typeof icons];
                return (
                  <div key={pillar.title} className="rounded-xl border border-ink-line bg-ink/60 p-5 transition-all duration-300 hover:border-mint/40 hover:shadow-[0_0_24px_-12px_#2DD4EE]">
                    <Icon size={18} className="text-mint" />
                    <h3 className="mt-3 font-display text-base font-semibold text-ivory">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">{pillar.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <StatCounter key={stat.label} value={stat.value} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
