import { iconMap } from "@/lib/icons";

export default function SkillIconBadge({ name, icon }: { name: string; icon: string }) {
  const Icon = iconMap[icon];

  return (
    <div className="group/icon flex flex-col items-center gap-2 text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-full border border-mint/40 text-mint transition-all duration-300 group-hover/icon:scale-110 group-hover/icon:border-mint group-hover/icon:bg-mint/10 group-hover/icon:shadow-[0_0_22px_-2px_#2DD4EE]">
        <Icon size={22} />
      </span>
      <span className="text-xs text-muted transition-colors group-hover/icon:text-ivory">{name}</span>
    </div>
  );
}
