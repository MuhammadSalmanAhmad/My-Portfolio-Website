export const profile = {
  name: "Muhammad Salman Ahmad",
  shortName: "Salman",
  title: "Full-Stack & AI Engineer",
  tagline:
    "I design and ship production systems across mobile, web, backend and cloud, and I build the AI layer that makes them smarter.",
  location: "Lahore, Pakistan",
  email: "isalman.ahmad01@gmail.com",
  phone: "+92 332 4993525",
  whatsapp: "https://wa.me/923324993525",
  resumeUrl: "/Muhammad_Salman_Ahmad_Resume.pdf",
  availability: "Open to senior full-stack / AI engineering roles",
  roles: ["Full-Stack Engineer", "AI Engineer", "Technical Lead", "Mobile Developer", "Cloud Architect"],
  social: {
    github: "https://github.com/MuhammadSalmanAhmad",
    linkedin: "https://www.linkedin.com/in/muhammadsalmanahmad/",
    twitter: "https://x.com/IsalmanAhmad",
    pypi: "https://pypi.org/project/rag-pdf-highlighter/",
  },
  summary: [
    "Software Engineer with 2+ years of full-time experience building and shipping production systems across mobile, web, backend, and cloud. I am currently the technical lead on PRGRSS, a mentorship platform, where I own product development end to end: architecture, full-stack engineering, UI/UX, AI integration, and technical decision-making.",
    "I work in event-driven cloud architecture on Firebase and Google Cloud, scalable REST APIs with Node.js and FastAPI, cross-platform apps in React Native and Flutter, and production AI systems including Retrieval-Augmented Generation and LLM-powered agents.",
    "I care about the whole product, not just the ticket in front of me. That means finding the opportunities that improve engagement, designing the experience, and then building it to scale.",
  ],
  highlights: [
    { value: "2+", label: "years shipping production software" },
    { value: "3", label: "platforms architected end to end" },
    { value: "1", label: "open-source package on PyPI" },
    { value: "5", label: "teams and companies" },
  ],
};

export type NavItem = { label: string; href: string };

export const navItems: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Open Source", href: "#open-source" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];
