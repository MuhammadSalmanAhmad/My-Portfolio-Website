export type Skill = {
  name: string;
  /** simpleicons.org slug; omit for text-only badge */
  icon?: string;
  /** hex color (no #) for the icon */
  color?: string;
  url?: string;
};

export type SkillGroup = {
  name: string;
  blurb: string;
  items: Skill[];
};

export const skillGroups: SkillGroup[] = [
  {
    name: "Languages",
    blurb: "The languages I write production code in.",
    items: [
      { name: "JavaScript", icon: "javascript", color: "F7DF1E", url: "https://developer.mozilla.org/docs/Web/JavaScript" },
      { name: "TypeScript", icon: "typescript", color: "3178C6", url: "https://www.typescriptlang.org" },
      { name: "Python", icon: "python", color: "3776AB", url: "https://www.python.org" },
      { name: "Dart", icon: "dart", color: "0175C2", url: "https://dart.dev" },
      { name: "C++", icon: "cplusplus", color: "00599C", url: "https://isocpp.org" },
      { name: "SQL", icon: "postgresql", color: "4169E1" },
    ],
  },
  {
    name: "Backend & Frameworks",
    blurb: "APIs and services built to deploy independently and scale horizontally.",
    items: [
      { name: "Node.js", icon: "nodedotjs", color: "5FA04E", url: "https://nodejs.org" },
      { name: "Express", icon: "express", url: "https://expressjs.com" },
      { name: "Django", icon: "django", color: "092E20", url: "https://www.djangoproject.com" },
      { name: "Django REST Framework", icon: "django", color: "A30000", url: "https://www.django-rest-framework.org" },
      { name: "FastAPI", icon: "fastapi", color: "009688", url: "https://fastapi.tiangolo.com" },
      { name: "REST API design" },
      { name: "WebSockets" },
      { name: "Microservices" },
    ],
  },
  {
    name: "Frontend & Mobile",
    blurb: "Cross-platform apps with real design attention.",
    items: [
      { name: "React", icon: "react", color: "61DAFB", url: "https://react.dev" },
      { name: "React Native", icon: "react", color: "61DAFB", url: "https://reactnative.dev" },
      { name: "Next.js", icon: "nextdotjs", url: "https://nextjs.org" },
      { name: "Flutter", icon: "flutter", color: "02569B", url: "https://flutter.dev" },
      { name: "Redux", icon: "redux", color: "764ABC", url: "https://redux.js.org" },
      { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4", url: "https://tailwindcss.com" },
      { name: "TanStack Table", icon: "reacttable", color: "FF4154", url: "https://tanstack.com/table" },
      { name: "Chart.js", icon: "chartdotjs", color: "FF6384", url: "https://www.chartjs.org" },
      { name: "Vite", icon: "vite", color: "646CFF", url: "https://vite.dev" },
    ],
  },
  {
    name: "Cloud",
    blurb: "Event-driven infrastructure on the major clouds.",
    items: [
      { name: "AWS", icon: "amazonwebservices", color: "FF9900", url: "https://aws.amazon.com" },
      { name: "Google Cloud Platform", icon: "googlecloud", color: "4285F4", url: "https://cloud.google.com" },
      { name: "Google Cloud Run", icon: "googlecloud", color: "4285F4", url: "https://cloud.google.com/run" },
      { name: "Cloud Functions", icon: "firebase", color: "DD2C00", url: "https://firebase.google.com/docs/functions" },
      { name: "AWS S3", icon: "amazons3", color: "569A31" },
      { name: "AWS EventBridge", icon: "amazonwebservices", color: "FF4F8B" },
    ],
  },
  {
    name: "Databases",
    blurb: "Relational, document and vector stores.",
    items: [
      { name: "Firebase (Firestore)", icon: "firebase", color: "DD2C00", url: "https://firebase.google.com" },
      { name: "PostgreSQL", icon: "postgresql", color: "4169E1", url: "https://www.postgresql.org" },
      { name: "pgvector", icon: "postgresql", color: "4169E1", url: "https://github.com/pgvector/pgvector" },
      { name: "Neon", icon: "neon", color: "00E599", url: "https://neon.tech" },
      { name: "Sanity CMS", icon: "sanity", color: "F03E2F", url: "https://www.sanity.io" },
    ],
  },
  {
    name: "AI & ML",
    blurb: "Production RAG and agents, not just notebooks.",
    items: [
      { name: "RAG architecture" },
      { name: "LangChain", icon: "langchain", color: "1C3C3C", url: "https://www.langchain.com" },
      { name: "Google Gemini", icon: "googlegemini", color: "8E75B2", url: "https://ai.google.dev" },
      { name: "Hybrid search (RRF)" },
      { name: "LLM agents" },
      { name: "CrewAI" },
      { name: "Prompt & context engineering" },
    ],
  },
  {
    name: "Tools & Technologies",
    blurb: "",
    items: [
      { name: "Redis", icon: "redis", color: "FF4438", url: "https://redis.io" },
      { name: "Upstash", icon: "upstash", color: "00E9A3", url: "https://upstash.com" },
      { name: "Docker", icon: "docker", color: "2496ED", url: "https://www.docker.com" },
      { name: "NGINX", icon: "nginx", color: "009639", url: "https://nginx.org" },
      { name: "Git", icon: "git", color: "F05032", url: "https://git-scm.com" },
      { name: "GitHub", icon: "github", url: "https://github.com" },
      { name: "Stripe", icon: "stripe", color: "635BFF", url: "https://stripe.com" },
      { name: "Adobe XD", icon: "adobe", color: "FF61F6" },
      { name: "Figma", icon: "figma", color: "F24E1E", url: "https://www.figma.com" },
    ],
  },
];

export const practices = [
  "System architecture",
  "Event-driven design",
  "Technical leadership",
  "UI/UX design",
  "Code review",
  "Agile delivery",
];

/** Flat list for the scrolling marquee strip */
export const marqueeStack: Skill[] = [
  { name: "TypeScript", icon: "typescript", color: "3178C6" },
  { name: "Python", icon: "python", color: "3776AB" },
  { name: "React Native", icon: "react", color: "61DAFB" },
  { name: "Next.js", icon: "nextdotjs" },
  { name: "Node.js", icon: "nodedotjs", color: "5FA04E" },
  { name: "FastAPI", icon: "fastapi", color: "009688" },
  { name: "Django", icon: "django", color: "44B78B" },
  { name: "Firebase", icon: "firebase", color: "DD2C00" },
  { name: "Google Cloud", icon: "googlecloud", color: "4285F4" },
  { name: "AWS", icon: "amazonwebservices", color: "FF9900" },
  { name: "PostgreSQL", icon: "postgresql", color: "4169E1" },
  { name: "LangChain", icon: "langchain", color: "1C3C3C" },
  { name: "Gemini", icon: "googlegemini", color: "8E75B2" },
  { name: "Redis", icon: "redis", color: "FF4438" },
  { name: "Docker", icon: "docker", color: "2496ED" },
  { name: "Flutter", icon: "flutter", color: "02569B" },
  { name: "Tailwind CSS", icon: "tailwindcss", color: "06B6D4" },
];
