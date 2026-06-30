export const profile = {
  name: "Meet Dobariya",
  role: "Frontend Developer",
  location: "Surat, Gujarat, India",
  tagline: "Building Modern Web Experiences",
  summary:
    "Frontend developer focused on Angular and React, with a growing specialty in Next.js and Three.js. I build enterprise dashboards, real-time communication tools, and interfaces that feel as good as they look.",
  email: "meetdobariya@example.com",
  github: "https://github.com/meet3475",
  githubUsername: "meet3475",
  linkedin: "https://www.linkedin.com/",
  resumeUrl: "/resume/meet-dobariya-resume.pdf",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: 2, suffix: "+", label: "Years experience" },
  { value: 25, suffix: "+", label: "Projects shipped" },
  { value: 100, suffix: "%", label: "Client satisfaction" },
  { value: 500, suffix: "+", label: "LinkedIn network" },
];

export type SkillCategory = {
  group: string;
  items: { name: string; tag: string }[];
};

export const skills: SkillCategory[] = [
  {
    group: "Frameworks",
    items: [
      { name: "Angular", tag: "NG" },
      { name: "React", tag: "RX" },
      { name: "Next.js", tag: "NX" },
    ],
  },
  {
    group: "Languages",
    items: [
      { name: "TypeScript", tag: "TS" },
      { name: "JavaScript", tag: "JS" },
    ],
  },
  {
    group: "3D & Motion",
    items: [
      { name: "Three.js", tag: "3JS" },
      { name: "Framer Motion", tag: "FM" },
    ],
  },
  {
    group: "Backend & Tools",
    items: [
      { name: "Node.js", tag: "NODE" },
      { name: "MongoDB", tag: "DB" },
      { name: "Git", tag: "GIT" },
      { name: "Docker", tag: "DKR" },
    ],
  },
];

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  points: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "2026 — Present",
    company: "AppWorld Infotech",
    role: "Frontend Developer",
    points: [
      "Build and maintain enterprise Angular applications used by real-time business teams.",
      "Develop SIP-based calling features on top of WebRTC for in-browser voice communication.",
      "Work closely with backend and QA teams to ship reliable, production-grade releases.",
    ],
    tags: ["Angular", "WebRTC", "SIP Calling", "Enterprise Apps"],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  href?: string;
  github?: string;
};

export const projects: Project[] = [
  {
    title: "SIP Calling Application",
    description:
      "A browser-based softphone built for enterprise teams, handling real-time voice calls over WebRTC with a SIP signalling layer connected to an Asterisk PBX.",
    stack: ["Angular", "SIP.js", "Asterisk", "WebRTC"],
  },
  {
    title: "Symphony CMS",
    description:
      "An internal content and workflow management dashboard with role-based views, built on Angular and PrimeNG with a typed REST API integration layer.",
    stack: ["Angular", "PrimeNG", "TypeScript", "REST API"],
  },
];

export const services = [
  {
    title: "Frontend Development",
    description: "Angular and React applications built for speed, structure, and longevity.",
  },
  {
    title: "Responsive Websites",
    description: "Interfaces that hold their layout and personality from desktop to mobile.",
  },
  {
    title: "Enterprise Dashboards",
    description: "Data-dense screens that stay readable: tables, charts, and real-time state.",
  },
  {
    title: "API Integration",
    description: "Clean, typed connections between your frontend and the services behind it.",
  },
  {
    title: "Performance Optimization",
    description: "Faster loads and smoother interactions through profiling, not guesswork.",
  },
];
