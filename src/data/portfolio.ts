export const profile = {
  name: "Meet Dobariya",
  role: "Frontend Developer",
  location: "Surat, Gujarat, India",
  tagline: "1.5 Years of Building Real Products",
  summary:
    "I'm a frontend developer who ships things people actually use — from CMS-driven marketing sites for international clients to full ERP reporting modules. Next.js and React are home base; Node, Express, and SQL/NoSQL round out the stack when a project needs it.",
  email: "meetdobariya480@gmail.com",
  phone: "+91 90167 58258",
  github: "https://github.com/meet3475",
  githubUsername: "meet3475",
  linkedin: "https://www.linkedin.com/in/meet-dobariya-1496a3226",
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
  { value: 1.5, decimals: 1, suffix: "+", label: "Years experience" },
  { value: 8, decimals: 0, suffix: "+", label: "Projects delivered" },
  { value: 3, decimals: 0, suffix: "", label: "Companies worked at" },
  { value: 20, decimals: 0, suffix: "+", label: "Technologies used" },
];

export type SkillCategory = {
  group: string;
  items: { name: string; tag: string }[];
};

export const skills: SkillCategory[] = [
  {
    group: "Frontend",
    items: [
      { name: "Next.js", tag: "NX" },
      { name: "React.js", tag: "RX" },
      { name: "JavaScript", tag: "JS" },
      { name: "TypeScript", tag: "TS" },
      { name: "Redux / Toolkit", tag: "RDX" },
      { name: "Tailwind CSS", tag: "TW" },
      { name: "Bootstrap 5", tag: "BS5" },
      { name: "Shadcn", tag: "SHCN" },
      { name: "HTML", tag: "HTML" },
      { name: "CSS / CSS3", tag: "CSS" },
    ],
  },
  {
    group: "Backend & Databases",
    items: [
      { name: "Node.js", tag: "NODE" },
      { name: "Express", tag: "EXP" },
      { name: "Python", tag: "PY" },
      { name: "MongoDB", tag: "MDB" },
      { name: "PostgreSQL", tag: "PG" },
      { name: "MySQL", tag: "SQL" },
    ],
  },
  {
    group: "CMS & Platforms",
    items: [
      { name: "Optimizely CMS", tag: "OPT" },
      { name: "Znode CMS", tag: "ZND" },
      { name: "CMS", tag: "CMS" },
    ],
  },
  {
    group: "Tools & Hosting",
    items: [
      { name: "Git / GitHub", tag: "GIT" },
      { name: "GitLab", tag: "GL" },
      { name: "Bitbucket", tag: "BB" },
      { name: "Vercel", tag: "VC" },
      { name: "Hostinger", tag: "HSTG" },
      { name: "Netlify", tag: "NTLY" },
    ],
  },
];

export type ExperienceItem = {
  period: string;
  company: string;
  role: string;
  current?: boolean;
  points: string[];
  tags: string[];
};

export const experience: ExperienceItem[] = [
  {
    period: "June 2025 — Present",
    company: "AppWorld Infotech",
    role: "Frontend Developer",
    current: true,
    points: [
      "Currently building and maintaining frontend systems for enterprise clients.",
      "Working with modern React and Next.js stacks to deliver production-grade interfaces.",
    ],
    tags: ["React.js", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    period: "May 2024 — May 2025",
    company: "Bitfront Infotech",
    role: "Frontend Developer",
    points: [
      "Built and maintained a dual-site travel platform for Altudo's client OAT Travel, sharing one Next.js + Tailwind codebase and Optimizely CMS across both properties.",
      "Set up Optimizely CMS content models so marketing teams could update pages without developer involvement.",
      "Developed the Home and Solutions pages for Jensen Precast using Znode CMS drag-and-drop Page Builder components.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "Shadcn", "Optimizely CMS", "Znode CMS"],
  },
  {
    period: "Nov 2023 — May 2024",
    company: "SridixTechnology",
    role: "Frontend Developer",
    points: [
      "Built the accounting module of an in-house ERP system covering purchase & sales invoice reports, voucher reports, and ledger reports.",
      "Implemented data-heavy report screens with React.js and Bootstrap, focused on clarity for finance teams.",
    ],
    tags: ["React.js", "Bootstrap", "JavaScript", "CSS"],
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
    title: "OAT Travel",
    description:
      "Built and maintained a dual-site international travel platform for Altudo's client, sharing one Next.js + Tailwind codebase and Optimizely CMS for dynamic content management across both properties.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Shadcn", "Optimizely CMS"],
    href: "https://www.oattravel.com/",
  },
  {
    title: "Marriage Biodata Maker",
    description:
      "Fill in your details on a guided form and generate a print-ready PDF marriage biodata instantly. Built with full SEO — metadata and sitemap throughout.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    href: "https://marriagebiodatamaker.com/",
  },
  {
    title: "Famebharat",
    description:
      "A social platform connecting stars and brands, with profile pages and brand-facing features built for scale on Next.js.",
    stack: ["Next.js", "Tailwind CSS", "JavaScript"],
    href: "https://famebharat.com/",
  },
  {
    title: "Kesariya",
    description:
      "A multi-page saree catalogue site with full product browsing, built with metadata and a sitemap for organic discovery.",
    stack: ["React.js", "JavaScript", "Bootstrap"],
    href: "https://kesariatextile.com/",
  },
  {
    title: "Fruit Ecommerce System",
    description:
      "A storefront frontend with cart and catalogue state handled through Redux Toolkit and Context API, styled with MUI.",
    stack: ["React.js", "Redux Toolkit", "Context API", "MUI"],
    href: "https://fruitable-client.vercel.app/",
    github: "https://github.com/meet3475/fruitable_client",
  },
  {
    title: "Movie Booking",
    description:
      "A seat-booking flow with separate admin and user panels for managing shows and reservations, built in vanilla JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/meet3475/js_movie",
  },
];

export const services = [
  { title: "Frontend Development", description: "Next.js and React apps built with TypeScript and Tailwind." },
  { title: "Full-Stack Web Apps", description: "End-to-end builds with Node, Express, and SQL/NoSQL databases." },
  { title: "CMS-Driven Websites", description: "Marketer-friendly setups on Optimizely, Znode, or custom CMS." },
  { title: "API Integration", description: "Clean, typed connections between frontend and backend services." },
  { title: "Performance & SEO", description: "Metadata, sitemaps, and clean markup that Lighthouse rewards." },
];
