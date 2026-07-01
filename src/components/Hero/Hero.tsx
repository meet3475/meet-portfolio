"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { FiGithub, FiDownload, FiLinkedin } from "react-icons/fi";

const Scene = dynamic(() => import("@/three/Scene"), { ssr: false });

const ROLES = [
  "Frontend Developer",
  "Next.js Developer",
  "React.js Developer",
  "Full-Stack Developer",
];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 32 : 60;
    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDeleting(true), 1600);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDeleting(false);
          setIndex((i) => i + 1);
        }
      }
    }, speed);
    return () => clearTimeout(timeout);
  }, [text, deleting, index, words]);

  return text;
}

// Split text into individual character spans for stagger animation
function SplitText({ text, className }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: -80 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.6 + i * 0.04,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
          style={{ transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00a0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* 3D Galaxy Scene */}
      <div className="absolute inset-0 z-0">
        <Scene />
      </div>

      {/* Gradient overlay — darker at bottom for text readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-bg/85 via-bg/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/20 via-transparent to-bg" />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-[1] pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(var(--color-primary) 1px, transparent 1px), linear-gradient(to right, var(--color-primary) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Hero content */}
      <div className="container-px relative z-10 w-full pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="max-w-3xl"
        >
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <span className="w-10 h-px bg-primary" />
            <span className="font-mono text-xs tracking-[0.3em] uppercase text-primary">
              Hello, I&apos;m
            </span>
          </motion.div>

          {/* Name with character split animation */}
          <h1 className="font-display font-bold leading-[1.0] overflow-hidden">
            <span className="block text-5xl sm:text-6xl lg:text-8xl [perspective:800px]">
              <SplitText text="MEET" className="text-text" />
            </span>
            <span className="block text-5xl sm:text-6xl lg:text-8xl [perspective:800px] mt-1">
              <SplitText text="DOBARIYA" className="text-gradient" />
            </span>
          </h1>

          {/* Typewriter role */}
          <div className="mt-6 h-9 flex items-center gap-3">
            <span className="w-6 h-px bg-muted" />
            <span className="font-mono text-lg sm:text-xl text-muted">
              {typed}
              <span className="inline-block w-[2px] h-5 bg-primary align-middle ml-1 animate-pulse" />
            </span>
          </div>

          {/* Summary */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
            className="text-muted mt-6 max-w-md leading-relaxed text-base sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.6 }}
            className="flex flex-wrap items-center gap-4 mt-10"
          >
            <a
              href={profile.resumeUrl}
              download
              className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-primary text-bg font-mono text-sm uppercase tracking-wide overflow-hidden"
            >
              <span className="absolute inset-0 bg-accent translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              <FiDownload className="relative z-10" />
              <span className="relative z-10">Resume</span>
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-border text-muted font-mono text-sm uppercase tracking-wide hover:border-primary hover:text-primary transition-colors duration-300"
            >
              View Projects
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary hover:glow-primary transition-all"
            >
              <FiGithub size={18} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border hover:border-primary hover:text-primary transition-all"
            >
              <FiLinkedin size={18} />
            </a>
          </motion.div>

          {/* Tech tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0, duration: 0.8 }}
            className="flex flex-wrap gap-2 mt-10"
          >
            {["Next.js", "React.js", "TypeScript", "Node.js", "Tailwind"].map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] uppercase tracking-wide px-3 py-1 rounded-full border border-border/60 text-muted/70 backdrop-blur-sm"
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted font-mono text-[10px] uppercase tracking-[0.3em]"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>Scroll</span>
          <span className="w-5 h-8 border border-border rounded-full flex items-start justify-center pt-1.5">
            <motion.span
              className="w-1 h-1.5 bg-primary rounded-full"
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            />
          </span>
        </motion.a>
      </div>

      {/* Diagonal separator */}
      <div className="absolute bottom-0 left-0 right-0 h-20 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
