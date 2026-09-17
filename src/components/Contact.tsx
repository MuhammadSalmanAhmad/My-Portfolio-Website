import { useState, type FormEvent } from "react";
import { Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Github, Linkedin } from "./ui/BrandIcons";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/data/profile";

const methods = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: MessageCircle, label: "WhatsApp", value: profile.phone, href: profile.whatsapp },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: Linkedin, label: "LinkedIn", value: "in/muhammadsalmanahmad", href: profile.social.linkedin },
  { icon: Github, label: "GitHub", value: "MuhammadSalmanAhmad", href: profile.social.github },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || `Hello from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const update = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something."
      intro="Open to full-time roles, technical leadership, and interesting AI or platform work. The fastest way to reach me is email or WhatsApp."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {methods.map((m) => {
              const inner = (
                <>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent-2/20 text-accent">
                    <m.icon size={18} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-subtle">{m.label}</span>
                    <span className="block truncate text-sm font-medium">{m.value}</span>
                  </span>
                </>
              );
              return (
                <li key={m.label}>
                  {m.href ? (
                    <a href={m.href} target={m.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="card flex items-center gap-3 p-4">
                      {inner}
                    </a>
                  ) : (
                    <div className="card flex items-center gap-3 p-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        <Reveal delay={0.08}>
          <form onSubmit={onSubmit} className="card space-y-4 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block text-sm">
                <span className="mb-1.5 block text-muted">Name</span>
                <input className="input" required value={form.name} onChange={update("name")} placeholder="Your name" />
              </label>
              <label className="block text-sm">
                <span className="mb-1.5 block text-muted">Email</span>
                <input className="input" type="email" required value={form.email} onChange={update("email")} placeholder="you@company.com" />
              </label>
            </div>
            <label className="block text-sm">
              <span className="mb-1.5 block text-muted">Subject</span>
              <input className="input" value={form.subject} onChange={update("subject")} placeholder="What's this about?" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block text-muted">Message</span>
              <textarea className="input min-h-32 resize-y" required value={form.message} onChange={update("message")} placeholder="Tell me about the project or role." />
            </label>
            <button type="submit" className="btn-primary w-full sm:w-auto">
              <Send size={16} /> Send message
            </button>
            <p className="text-xs text-subtle">Opens your email client with the message pre-filled.</p>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
