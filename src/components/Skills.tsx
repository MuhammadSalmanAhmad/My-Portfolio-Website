import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { SkillBadge } from "./ui/SkillBadge";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I reach for."
      intro="Grouped by where they sit in the stack. Every badge links to the official docs."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.04}>
            <div className="card h-full p-6">
              <h3 className="font-semibold">{g.name}</h3>
              {g.blurb && <p className="mt-1 text-sm text-muted">{g.blurb}</p>}
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <SkillBadge key={s.name} skill={s} />
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
