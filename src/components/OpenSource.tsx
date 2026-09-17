import { useState } from "react";
import { Check, Copy, ExternalLink, Package } from "lucide-react";
import { Github } from "./ui/BrandIcons";
import { Section } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { profile } from "@/data/profile";

const install = "pip install rag-pdf-highlighter";

const snippet = `from langchain_core.documents import Document
from rag_pdf_highlighter.utils.pdf_helpers import highlight_chunks_in_pdf

documents = [
    Document(page_content="Text to find", metadata={"page": 0}),
]

output_path = highlight_chunks_in_pdf(
    pdf_path="./report.pdf",
    documents=documents,
)`;

const features = [
  ["Three-tier matching", "Exact match first, then sentence-level, then collapsed-whitespace fallback."],
  ["Async by default", "Non-blocking PDF downloads with httpx; temp files cleaned per request."],
  ["Service or library", "Run it as a FastAPI microservice in Docker, or import the core helpers directly."],
  ["RAG-native input", "Accepts LangChain Document objects with page metadata straight from your retriever."],
];

export function OpenSource() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(install);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* clipboard unavailable */
    }
  };

  return (
    <Section
      id="open-source"
      eyebrow="Open Source"
      title="rag-pdf-highlighter"
      intro="A Python package on PyPI that highlights retrieved chunks inside the source PDF, so RAG answers can show users exactly where they came from. Extracted from the source-highlighting service I built for CALLI."
    >
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="card h-full p-6">
            <div className="flex items-center gap-2">
              <Package size={18} className="text-accent" />
              <span className="font-mono text-sm">rag-pdf-highlighter</span>
              <span className="chip ml-auto">MIT</span>
              <span className="chip">Python ≥ 3.10</span>
            </div>

            <button
              type="button"
              onClick={copy}
              className="mt-5 flex w-full items-center justify-between rounded-xl border border-border bg-bg-elevated px-4 py-3 text-left font-mono text-sm transition hover:border-border-strong"
            >
              <span>
                <span className="text-subtle">$ </span>
                {install}
              </span>
              {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-subtle" />}
            </button>

            <ul className="mt-6 space-y-4">
              {features.map(([title, text]) => (
                <li key={title}>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="mt-0.5 text-sm text-muted">{text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.social.pypi} target="_blank" rel="noreferrer" className="btn-primary">
                View on PyPI <ExternalLink size={14} />
              </a>
              <a
                href="https://github.com/MuhammadSalmanAhmad/rag-pdf-highlighter"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                <Github size={16} /> Source
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="card overflow-hidden">
            <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-400/80" />
              <span className="h-3 w-3 rounded-full bg-amber-400/80" />
              <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
              <span className="ml-2 font-mono text-xs text-subtle">highlight.py</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-relaxed text-fg">
              <code>{snippet}</code>
            </pre>
            <div className="border-t border-border px-5 py-3 font-mono text-xs text-subtle">
              POST /highlight · {"{"} pdf_url, documents[] {"}"} → annotated PDF
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
