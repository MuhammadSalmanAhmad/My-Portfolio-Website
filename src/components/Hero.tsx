import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin, FileDown, Sparkles } from "lucide-react";
import { Github, Linkedin } from "./ui/BrandIcons";
import { profile } from "@/data/profile";
import { useTypewriter } from "@/hooks/useTypewriter";

export function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Hi, I&apos;m <span className="text-gradient">{profile.shortName}</span>.
            <br />
            <span className="text-fg">{profile.title}</span>
          </h1>

          <p className="mt-4 h-7 font-mono text-base text-accent sm:text-lg">
            <span aria-live="polite">{typed}</span>
            <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-accent align-middle" style={{ height: "1.1em" }} />
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">{profile.tagline}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="btn-primary">
              <Sparkles size={16} /> View my work
            </a>
            <a href={profile.resumeUrl} download className="btn-secondary">
              <FileDown size={16} /> Download resume
            </a>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border transition hover:border-border-strong"
              >
                <Github size={18} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border transition hover:border-border-strong"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-xl border border-border transition hover:border-border-strong"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {profile.highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-3xl font-bold tracking-tight">{h.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-muted">{h.label}</dd>
              </div>
            ))}
          </dl>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-gradient-to-br from-accent/40 via-accent-2/30 to-accent-3/30 blur-2xl" />
          <div className="card overflow-hidden p-2">
            <img
              src="/me.jpeg"
              alt={profile.name}
              width={400}
              height={400}
              className="aspect-square w-full rounded-xl object-cover object-center"
            />
          </div>
          <div className="card absolute -bottom-5 left-4 right-4 flex items-center justify-between px-4 py-3 text-sm">
            <span className="flex items-center gap-2 text-muted">
              <MapPin size={14} className="text-accent" /> {profile.location}
            </span>
            <span className="font-mono text-xs text-subtle">GMT+5</span>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="mx-auto mt-20 flex w-max items-center gap-2 text-xs text-subtle transition hover:text-fg"
        aria-label="Scroll to about"
      >
        <ArrowDown size={14} className="animate-bounce" /> scroll
      </a>
    </section>
  );
}
