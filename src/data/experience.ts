export type Role = {
  title: string;
  period: string;
};

export type Project = {
  name: string;
  subtitle: string;
  bullets: string[];
  stack: string[];
};

export type Experience = {
  company: string;
  location: string;
  period: string;
  roles: Role[];
  current?: boolean;
  summary?: string;
  bullets?: string[];
  projects?: Project[];
  stack?: string[];
};

export const experience: Experience[] = [
  {
    company: "RipeSeed",
    location: "Lahore, Pakistan",
    period: "Jun 2025 – Present",
    current: true,
    roles: [
      { title: "Software Engineer", period: "Jul 2026 – Present" },
      { title: "Associate Software Engineer", period: "Jun 2025 – Jul 2026" },
    ],
    projects: [
      {
        name: "PRGRSS",
        subtitle: "Technical Lead / Product Engineer · Mentorship Platform",
        bullets: [
          "Own end-to-end product development across technical architecture, full-stack engineering, UI/UX, AI integration, and technical decision-making. I look beyond feature delivery to find product opportunities that improve engagement and adoption.",
          "Designed and maintain a scalable cloud architecture on React Native, Node.js/Express.js, Firebase Firestore, Cloud Functions, Firebase Cloud Messaging, and Google Cloud Run, with Firestore modeled around user, mentorship, social, and engagement workflows.",
          "Operate RESTful backend services on Cloud Run built for independent deployment and horizontal scalability.",
          "Implemented event-driven workflows with Cloud Functions plus a push-notification system over FCM for user activity, social interactions, and mentorship events.",
          "Designed and shipped the PRGRSS Social Feed: achievements, questions, likes, and comments, adding a community layer around mentorship.",
          "Built in-app subscription and monetization with payment infrastructure supporting multiple membership and access models.",
          "Built and maintain the Admin Dashboard for user management, account review, report investigation, and platform oversight.",
          "Currently developing an AI-powered mentorship-call agent that turns conversations into post-call insights: summaries, action items, next steps, and feedback.",
        ],
        stack: [
          "React Native",
          "Node.js",
          "Express.js",
          "Firebase Firestore",
          "Cloud Functions",
          "FCM",
          "Google Cloud Run",
          "LLM Agents",
        ],
      },
      {
        name: "CALLI",
        subtitle: "Retrieval-Augmented Generation Platform",
        bullets: [
          "Built and scaled a production-grade RAG platform with a Next.js chat interface and admin dashboard, powered by Google Gemini embeddings and Neon PostgreSQL.",
          "Engineered hybrid search combining semantic search (pgvector) and keyword search (tsvector) with Reciprocal Rank Fusion for materially better retrieval accuracy.",
          "Designed an event-driven ingestion pipeline on AWS S3, EventBridge, and webhooks to automate document parsing, chunking, and indexing; tuned retrieval with LangChain JS and recursive character splitting.",
          "Developed a containerized FastAPI microservice (PyMuPDF, Pydantic) for asynchronous PDF processing and dynamic AI source highlighting.",
          "Integrated Upstash Redis as a distributed cache for embeddings and signed S3 URLs, significantly improving API response times.",
        ],
        stack: [
          "Next.js",
          "Gemini Embeddings",
          "Neon PostgreSQL",
          "pgvector",
          "LangChain JS",
          "FastAPI",
          "AWS S3",
          "EventBridge",
          "Upstash Redis",
        ],
      },
    ],
  },
  {
    company: "TAG Solutions (TAGS)",
    location: "Lahore, Pakistan",
    period: "Jan 2025 – Jun 2025",
    roles: [{ title: "Associate Software Engineer", period: "Jan 2025 – Jun 2025" }],
    bullets: [
      "Built scalable backend services and microservices with FastAPI.",
      "Designed and managed cloud infrastructure on Google Cloud Platform.",
      "Developed and maintained frontend web applications in React.js and .NET technologies.",
    ],
    stack: ["FastAPI", "GCP", "React.js", ".NET"],
  },
  {
    company: "CodeSuite",
    location: "Lahore, Pakistan",
    period: "Jun 2024 – Jan 2025",
    roles: [{ title: "Associate Software Engineer", period: "Jun 2024 – Jan 2025" }],
    bullets: [
      "Built reusable component libraries shared across mobile and web applications.",
      "Developed responsive frontend interfaces in React.js and React Native, backed by RESTful APIs implemented in Django.",
      "Wrote clean, maintainable, testable code and participated in code reviews and technical discussions.",
    ],
    stack: ["React.js", "React Native", "Django", "REST APIs"],
  },
  {
    company: "Servizio.AI",
    location: "Remote",
    period: "Aug 2023 – Jan 2024",
    roles: [{ title: "Co-Founder", period: "Aug 2023 – Jan 2024" }],
    bullets: [
      "Led AI-driven product innovation and technical direction for an early-stage venture.",
      "Built Flutter applications with polished UI, increasing user engagement by 40%.",
      "Introduced agile practices that cut development cycle time by 20% and lifted on-time delivery by 15%; instituted code reviews that reduced bug occurrences by 30%.",
    ],
    stack: ["Flutter", "AI Products", "Agile"],
  },
  {
    company: "Arbisoft",
    location: "Lahore, Pakistan",
    period: "Jul 2022 – Sep 2022",
    roles: [{ title: "Software Engineering Intern", period: "Jul 2022 – Sep 2022" }],
    bullets: [
      "Ranked 3rd in the 2022 internship program; built an intercity carpooling application end to end.",
      "Designed wireframes and UI in Adobe XD, modeled the relational schema, and developed the app with Flutter, Django, and Django REST Framework.",
      "Integrated RESTful APIs that improved app performance by 30% and reduced server response time by 50%; deployed via Docker containers.",
    ],
    stack: ["Flutter", "Django", "DRF", "Docker", "Adobe XD"],
  },
];

export const education = [
  {
    degree: "BS, Computer Science",
    school: "Air University, Islamabad",
    period: "2020 – 2024",
  },
  {
    degree: "A-Levels, Computer Science",
    school: "LACAS",
    period: "2015 – 2019",
  },
];
