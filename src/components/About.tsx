import { Brain, Cloud, Layers, Smartphone } from "lucide-react";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/data/profile";
import { practices } from "@/data/skills";

const pillars = [
  { icon: Brain, title: "AI systems", text: "RAG platforms, hybrid retrieval, LLM agents and post-call intelligence in production." },
  { icon: Cloud, title: "Cloud architecture", text: "Event-driven services on Firebase, Cloud Run, AWS S3 and EventBridge, built to scale horizontally." },
  { icon: Layers, title: "Backend APIs", text: "Node.js, Express and FastAPI services with clean boundaries, pagination, caching and async workflows." },
  { icon: Smartphone, title: "Mobile & web", text: "React Native, Flutter, React and Next.js apps designed with real UI/UX attention." },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer who owns the whole product.">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-4 text-base leading-relaxed text-muted sm:text-lg">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
          <div className="flex flex-wrap gap-2 pt-2">
            {practices.map((p) => (
              <span key={p} className="chip">
                {p}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="card h-full p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                  <p.icon size={20} />
                </span>
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
