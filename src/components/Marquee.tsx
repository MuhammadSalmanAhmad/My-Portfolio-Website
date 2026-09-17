import { marqueeStack } from "@/data/skills";
import { iconUrl, cn } from "@/lib/utils";

export function Marquee() {
  const items = [...marqueeStack, ...marqueeStack];
  return (
    <div className="overflow-hidden border-y border-border bg-surface/60 py-4">
      <div
        className="flex w-max animate-marquee gap-10 whitespace-nowrap px-5 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
        aria-hidden
      >
        {items.map((s, i) => (
          <span key={`${s.name}-${i}`} className="flex items-center gap-2 font-mono text-sm text-muted">
            {s.icon && (
              <img src={iconUrl(s.icon, s.color)} alt="" width={18} height={18} className={cn(!s.color && "dark:invert")} />
            )}
            {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}
