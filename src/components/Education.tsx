import { GraduationCap, Trophy } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { education } from "@/data/experience";

const recognition = [
  { title: "Ranked 3rd, Arbisoft Internship Program 2022", text: "Built an intercity carpooling app end to end during the internship." },
  { title: "Co-founded Servizio.AI", text: "Led AI product direction; lifted engagement 40% and cut cycle time 20%." },
  { title: "Published on PyPI", text: "rag-pdf-highlighter, an open-source tool used in RAG pipelines." },
];

export function Education() {
  return (
    <Section id="education" eyebrow="Education & Recognition" title="Background.">
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-semibold">Education</h3>
            </div>
            <ul className="mt-4 divide-y divide-border">
              {education.map((e) => (
                <li key={e.degree} className="flex items-start justify-between gap-4 py-3">
                  <div>
                    <p className="font-medium">{e.degree}</p>
                    <p className="text-sm text-muted">{e.school}</p>
                  </div>
                  <span className="font-mono text-xs text-subtle">{e.period}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2">
              <Trophy size={18} className="text-accent" />
              <h3 className="font-semibold">Recognition</h3>
            </div>
            <ul className="mt-4 divide-y divide-border">
              {recognition.map((r) => (
                <li key={r.title} className="py-3">
                  <p className="font-medium">{r.title}</p>
                  <p className="text-sm text-muted">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
