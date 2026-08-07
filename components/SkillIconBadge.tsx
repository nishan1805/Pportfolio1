import { iconMap } from "@/lib/icons";

export default function SkillIconBadge({ name, icon }: { name: string; icon: string }) {
  const Icon = iconMap[icon];

  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-mint/40 text-mint">
        <Icon size={22} />
      </span>
      <span className="text-xs text-ivory">{name}</span>
    </div>
  );
}
