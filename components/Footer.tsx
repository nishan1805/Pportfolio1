import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between md:px-10">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>
          {profile.location} — {profile.role}
        </p>
      </div>
    </footer>
  );
}
