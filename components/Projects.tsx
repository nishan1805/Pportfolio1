import { Sparkles } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-ink-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-mono-label text-xs uppercase text-mint">Projects</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold text-ivory sm:text-4xl">
          Selected work.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.name}
              className="group overflow-hidden rounded-2xl border border-ink-line bg-ink-soft/30 transition-all duration-300 hover:-translate-y-1 hover:border-mint/40 hover:shadow-[0_20px_40px_-20px_rgba(45,212,238,0.35)]"
            >
              <div className={`flex h-40 items-center justify-center bg-gradient-to-br ${project.gradient}`}>
                <h3 className="font-display text-2xl font-bold text-white">{project.name}</h3>
              </div>

              <div className="p-6">
                <p className="flex items-center gap-1.5 text-sm font-medium text-mint">
                  <Sparkles size={14} />
                  {project.tagline}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{project.body}</p>

                {project.outcome && (
                  <p className="mt-3 rounded-lg border border-mint/30 bg-mint/5 px-3 py-2 text-xs font-medium text-mint">
                    {project.outcome}
                  </p>
                )}

                <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                  {project.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-xs text-muted">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-mint" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-ink-line px-2 py-1 font-mono text-[10px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
