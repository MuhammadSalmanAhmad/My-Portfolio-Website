import type { Skill } from "@/data/skills";
import { cn, iconUrl } from "@/lib/utils";

export function SkillBadge({ skill, size = "md" }: { skill: Skill; size?: "sm" | "md" }) {
  const inner = (
    <>
      {skill.icon && (
        <img
          src={iconUrl(skill.icon, skill.color)}
          alt=""
          loading="lazy"
          width={size === "sm" ? 14 : 18}
          height={size === "sm" ? 14 : 18}
          className={cn("shrink-0", !skill.color && "dark:invert")}
        />
      )}
      <span>{skill.name}</span>
    </>
  );

  const cls = cn(
    "inline-flex items-center gap-2 rounded-lg border border-border bg-bg-elevated font-medium text-fg transition",
    size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm",
    skill.url && "hover:border-accent hover:-translate-y-0.5",
  );

  if (skill.url) {
    return (
      <a href={skill.url} target="_blank" rel="noreferrer" className={cls} title={skill.name}>
        {inner}
      </a>
    );
  }
  return <span className={cls}>{inner}</span>;
}
