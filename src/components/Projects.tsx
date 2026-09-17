import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Star } from "lucide-react";
import { Section } from "./ui/Section";
import { projects, type ProjectCategory } from "@/data/projects";
import { cn } from "@/lib/utils";

type Filter = "All" | "Featured" | ProjectCategory;
const filters: Filter[] = ["All", "Featured", "AI", "Platform", "Mobile", "Web", "Infra"];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    if (filter === "Featured") return projects.filter((p) => p.featured);
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Things I've shipped."
      intro="Production platforms, AI systems and a few side builds. Filter by what you care about."
    >
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full border px-4 py-1.5 text-sm font-medium transition",
              filter === f ? "border-fg bg-fg text-bg" : "border-border text-muted hover:border-border-strong hover:text-fg",
            )}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.25 }}
              className="card flex flex-col overflow-hidden"
            >
              <div className={cn("relative bg-gradient-to-br px-6 pt-6 pb-4", p.gradient)}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    {p.role && <p className="mt-0.5 font-mono text-xs text-muted">{p.role}</p>}
                  </div>
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-fg/10 px-2 py-0.5 text-[11px] font-semibold">
                      <Star size={11} /> Featured
                    </span>
                  )}
                </div>
                <p className="mt-2 text-sm font-medium text-fg/80">{p.tagline}</p>
              </div>

              <div className="flex flex-1 flex-col px-6 pt-4 pb-6">
                <p className="text-sm leading-relaxed text-muted">{p.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm text-muted">
                  {p.highlights.map((h) => (
                    <li key={h} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-5">
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                  {p.links && (
                    <div className="mt-4 flex gap-3">
                      {p.links.map((l) => (
                        <a
                          key={l.href}
                          href={l.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
                        >
                          {l.label} <ExternalLink size={13} />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}
