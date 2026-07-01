"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "Next.js", "★", "React.js", "★", "TypeScript", "★", "Node.js", "★",
  "Tailwind CSS", "★", "MongoDB", "★", "PostgreSQL", "★", "Optimizely CMS", "★",
  "Full-Stack Developer", "★", "Surat, India", "★", "Open to Work", "★",
  "Next.js", "★", "React.js", "★", "TypeScript", "★", "Node.js", "★",
  "Tailwind CSS", "★", "MongoDB", "★", "PostgreSQL", "★", "Optimizely CMS", "★",
];

function Track({ reverse = false, speed = 30 }: { reverse?: boolean; speed?: number }) {
  return (
    <div className="overflow-hidden py-2">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        style={{ width: "max-content" }}
      >
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <span
            key={i}
            className={
              item === "★"
                ? "text-primary text-lg"
                : item === "Open to Work"
                ? "font-mono text-sm uppercase tracking-widest text-accent font-semibold"
                : "font-mono text-sm uppercase tracking-widest text-muted"
            }
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="py-6 border-y border-border relative overflow-hidden">
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg), transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg), transparent)" }} />
      <Track speed={28} />
      <Track reverse speed={22} />
    </div>
  );
}
