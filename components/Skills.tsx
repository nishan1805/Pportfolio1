import { skillGroups } from "@/lib/data";
import { iconMap } from "@/lib/icons";
import SkillIconBadge from "@/components/SkillIconBadge";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-mono-label text-xs uppercase text-mint">Skills</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-ivory sm:text-4xl">
          The stack I ship with.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group) => {
            const CategoryIcon = iconMap[group.categoryIcon];
            return (
              <div
                key={group.name}
                className="group relative overflow-hidden rounded-2xl border border-ink-line bg-ink-soft/30 p-7 transition-all duration-300 hover:border-mint/40 hover:shadow-[0_0_40px_-12px_#2DD4EE]"
              >
                <div
                  className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                  style={{ background: "radial-gradient(circle, #2DD4EE, transparent 70%)" }}
                />
                <div className="relative mb-6 flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-mint/30 bg-ink text-mint">
                      <CategoryIcon size={20} />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-ivory">{group.name}</h3>
                      <p className="text-sm text-muted">{group.tag}</p>
                    </div>
                  </div>
                  <span className="font-mono text-2xl font-semibold text-ink-line">{group.index}</span>
                </div>

                <div className="relative grid grid-cols-4 gap-x-4 gap-y-6">
                  {group.skills.map((skill) => (
                    <SkillIconBadge key={skill.name} name={skill.name} icon={skill.icon} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
