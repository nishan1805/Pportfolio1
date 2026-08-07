import { Mail, Linkedin, Github, Download, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: profile.linkedinLabel, href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: profile.githubLabel, href: profile.github, icon: Github },
  { label: "Resume", value: "Download PDF", href: profile.resumeUrl, icon: Download },
];

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-line py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <p className="text-mono-label text-xs uppercase text-mint">Contact</p>
        <h2 className="mt-3 max-w-xl font-display text-3xl font-extrabold text-ivory sm:text-4xl">
          Let&rsquo;s build something exceptional.
        </h2>

        <div className="mt-10 rounded-3xl border border-ink-line bg-ink-soft/20 p-8 sm:p-10">
          <p className="max-w-xl leading-relaxed text-muted">
            Open to senior full stack roles, enterprise product work and long-term collaborations.
            The fastest way to reach me is email.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="focus-ring group flex items-center justify-between rounded-xl border border-ink-line bg-ink/60 px-5 py-4 transition-colors hover:border-mint/40"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-mint">
                    <link.icon size={17} />
                  </span>
                  <div>
                    <div className="text-mono-label text-xs uppercase text-muted">{link.label}</div>
                    <div className="mt-0.5 text-sm font-medium text-ivory">{link.value}</div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-mint"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
