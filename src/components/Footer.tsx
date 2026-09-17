import { Mail } from "lucide-react";
import { Github, Linkedin, XIcon } from "./ui/BrandIcons";
import { navItems, profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title} · {profile.location}</p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted">
          {navItems.map((n) => (
            <li key={n.href}>
              <a href={n.href} className="hover:text-fg">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2">
          {[
            { href: profile.social.github, icon: Github, label: "GitHub" },
            { href: profile.social.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: profile.social.twitter, icon: XIcon, label: "X" },
            { href: `mailto:${profile.email}`, icon: Mail, label: "Email" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              aria-label={s.label}
              className="grid h-9 w-9 place-items-center rounded-lg border border-border text-muted transition hover:border-border-strong hover:text-fg"
            >
              <s.icon size={16} />
            </a>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-4 text-center font-mono text-xs text-subtle">
        © {new Date().getFullYear()} {profile.name}. Built with React, Vite and Tailwind.
      </div>
    </footer>
  );
}
