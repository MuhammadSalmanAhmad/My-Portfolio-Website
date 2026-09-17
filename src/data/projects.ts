export type ProjectCategory = "AI" | "Platform" | "Mobile" | "Web" | "Infra";

export type ShowcaseProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  stack: string[];
  categories: ProjectCategory[];
  role?: string;
  featured?: boolean;
  links?: { label: string; href: string }[];
  /** Tailwind gradient classes for the card header */
  gradient: string;
};

export const projects: ShowcaseProject[] = [
  {
    slug: "prgrss",
    name: "PRGRSS",
    tagline: "Mentorship platform with a social layer and an AI call agent",
    role: "Technical Lead / Product Engineer",
    description:
      "A cross-platform mentorship product I lead end to end: React Native app, Node.js services on Cloud Run, Firestore data model, event-driven Cloud Functions, push notifications, subscriptions, and an admin dashboard.",
    highlights: [
      "Social feed with achievements, questions, likes and comments",
      "In-app subscriptions and multiple membership models",
      "AI mentorship-call agent generating summaries, action items and next steps",
      "Admin dashboard for moderation, reports and platform oversight",
    ],
    stack: ["React Native", "Node.js", "Express", "Firestore", "Cloud Functions", "Cloud Run", "FCM", "LLM Agents"],
    categories: ["Platform", "Mobile", "AI"],
    featured: true,
    gradient: "from-violet-500/30 via-fuchsia-500/10 to-transparent",
  },
  {
    slug: "calli",
    name: "CALLI",
    tagline: "Production RAG platform with hybrid search and source highlighting",
    role: "Full-Stack & AI Engineer",
    description:
      "A retrieval-augmented generation platform with a Next.js chat UI and admin dashboard. Documents flow through an event-driven ingestion pipeline into Neon PostgreSQL, where hybrid semantic and keyword search with Reciprocal Rank Fusion powers grounded answers.",
    highlights: [
      "Hybrid pgvector + tsvector retrieval fused with RRF",
      "S3 → EventBridge → webhook ingestion for parsing, chunking and indexing",
      "FastAPI microservice for async PDF processing and AI source highlighting",
      "Upstash Redis cache for embeddings and signed URLs",
    ],
    stack: ["Next.js", "Gemini Embeddings", "Neon", "pgvector", "LangChain JS", "FastAPI", "AWS S3", "EventBridge", "Redis"],
    categories: ["AI", "Platform", "Web"],
    featured: true,
    gradient: "from-cyan-500/30 via-sky-500/10 to-transparent",
  },
  {
    slug: "rag-pdf-highlighter",
    name: "rag-pdf-highlighter",
    tagline: "Open-source FastAPI microservice and library, published on PyPI",
    role: "Author & Maintainer",
    description:
      "Locates retrieved text chunks inside a PDF and returns an annotated copy with those passages highlighted. Built for RAG pipelines that need to show users exactly where an answer came from.",
    highlights: [
      "Three-tier matching: exact → sentence-level → collapsed whitespace",
      "Async PDF fetching with httpx, stateless per request",
      "Runs as a Docker service or a plain Python library",
      "LangChain Document compatible input",
    ],
    stack: ["Python", "FastAPI", "PyMuPDF", "httpx", "LangChain Core", "Docker"],
    categories: ["AI", "Infra"],
    featured: true,
    links: [
      { label: "PyPI", href: "https://pypi.org/project/rag-pdf-highlighter/" },
      { label: "GitHub", href: "https://github.com/MuhammadSalmanAhmad/rag-pdf-highlighter" },
    ],
    gradient: "from-emerald-500/30 via-teal-500/10 to-transparent",
  },
  {
    slug: "stoic",
    name: "Stoic",
    tagline: "Automated crypto trading platform, backend and infrastructure",
    role: "Backend & Infrastructure",
    description:
      "System architecture for an automated trading platform built around Freqtrade as the core engine, integrated as an independent microservice with per-user isolation.",
    highlights: [
      "Multi-tenancy via isolated Docker containers, one Freqtrade instance per user",
      "NGINX reverse proxy for secure, efficient routing",
      "APIs for accounts, strategies and trading sessions on GCP Compute Engine",
    ],
    stack: ["Freqtrade", "Docker", "NGINX", "GCP Compute Engine", "REST APIs"],
    categories: ["Infra", "Platform"],
    gradient: "from-amber-500/30 via-orange-500/10 to-transparent",
  },
  {
    slug: "watchdogs",
    name: "WatchDogs",
    tagline: "Analytics dashboard over large datasets",
    description:
      "A responsive React frontend on Vite with Chart.js visualizations and TanStack Table for sorting, pagination and filtering over large datasets, with a fully custom UI.",
    highlights: ["Chart.js visualizations", "TanStack Table sorting, pagination and filtering", "Fully custom component UI"],
    stack: ["React", "Vite", "Chart.js", "TanStack Table"],
    categories: ["Web"],
    gradient: "from-rose-500/30 via-pink-500/10 to-transparent",
  },
  {
    slug: "deliveroo-clone",
    name: "Deliveroo Clone",
    tagline: "Food-delivery app in React Native",
    description:
      "A food-delivery app with Tailwind styling, animated transitions, interactive map views and Redux-managed cart state, backed by Sanity CMS with GROQ queries.",
    highlights: ["react-native-maps integration", "Redux cart state", "Sanity CMS + GROQ backend cut response times by 40%"],
    stack: ["React Native", "Tailwind CSS", "Redux", "Sanity CMS", "GROQ"],
    categories: ["Mobile"],
    gradient: "from-lime-500/30 via-green-500/10 to-transparent",
  },
  {
    slug: "chashmart",
    name: "Chashmart",
    tagline: "AI eyewear try-on app, final year project",
    description:
      "A Flutter app that reimagines eyewear shopping with virtual try-on via Google ML Vision, CNN-based recommendations by face shape, in-app eye tests, and Stripe payments.",
    highlights: ["Virtual try-on with Google ML Vision", "CNN face-shape recommendations", "Stripe payments"],
    stack: ["Flutter", "Firebase", "Flask", "CNN", "Stripe"],
    categories: ["Mobile", "AI"],
    gradient: "from-indigo-500/30 via-blue-500/10 to-transparent",
  },
];
