import { useState } from "react";
import { Briefcase, ChevronDown, MapPin } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { experience, type Experience as Exp } from "@/data/experience";
import { cn } from "@/lib/utils";

const PREVIEW = 3;

function Bullets({ items }: { items: string[] }) {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? items : items.slice(0, PREVIEW);
  return (
    <>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
        {visible.map((b) => (
          <li key={b.slice(0, 40)} className="flex gap-2.5">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      {items.length > PREVIEW && (
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-accent hover:underline"
        >
          {expanded ? "Show less" : `Show ${items.length - PREVIEW} more`}
          <ChevronDown size={14} className={cn("transition", expanded && "rotate-180")} />
        </button>
      )}
    </>
  );
}

function Stack({ items }: { items: string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-1.5">
      {items.map((s) => (
        <span key={s} className="chip">
          {s}
        </span>
      ))}
    </div>
  );
}

function Entry({ e }: { e: Exp }) {
  return (
    <div className="card p-5 sm:p-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-bold">{e.company}</h3>
            {e.current && (
              <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[11px] font-semibold text-emerald-500">
                Current
              </span>
            )}
          </div>
          <div className="mt-1 space-y-0.5">
            {e.roles.map((r) => (
              <p key={r.title} className="text-sm text-fg">
                <span className="font-medium">{r.title}</span>
                <span className="text-subtle"> · {r.period}</span>
              </p>
            ))}
          </div>
        </div>
        <div className="text-right font-mono text-xs text-subtle">
          <p>{e.period}</p>
          <p className="mt-1 flex items-center justify-end gap-1">
            <MapPin size={12} /> {e.location}
          </p>
        </div>
      </div>

      {e.bullets && <Bullets items={e.bullets} />}
      {e.stack && <Stack items={e.stack} />}

      {e.projects?.map((p) => (
        <div key={p.name} className="mt-5 rounded-xl border border-border bg-bg-elevated p-4 sm:p-5">
          <div className="flex items-center gap-2">
            <Briefcase size={14} className="text-accent" />
            <h4 className="font-semibold">{p.name}</h4>
          </div>
          <p className="mt-0.5 text-xs text-subtle">{p.subtitle}</p>
          <Bullets items={p.bullets} />
          <Stack items={p.stack} />
        </div>
      ))}
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where I've built things."
      intro="From intern to technical lead in under four years, across product startups, agencies and my own venture."
    >
      <div className="relative space-y-6 before:absolute before:top-2 before:bottom-2 before:left-[7px] before:hidden before:w-px before:bg-border sm:before:block sm:pl-10">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.05}>
            <div className="relative">
              <span className="absolute top-7 -left-10 hidden h-[15px] w-[15px] rounded-full border-2 border-bg bg-accent sm:block" />
              <Entry e={e} />
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
