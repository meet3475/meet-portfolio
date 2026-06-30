"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";
import { FiArrowDown, FiGithub, FiDownload } from "react-icons/fi";

const Scene = dynamic(() => import("@/three/Scene"), { ssr: false });

const ROLES = ["Frontend Developer", "Next.js Developer", "React.js Developer", "Full-Stack Enthusiast"];

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const speed = deleting ? 35 : 65;

    const timeout = setTimeout(() => {
      if (!deleting) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) {
          setTimeout(() => setDeleting(true), 1400);
        }
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

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Scene />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-bg/10 via-bg/40 to-bg pointer-events-none" />

      <div className="container-px relative z-10 w-full grid lg:grid-cols-2 gap-10 items-center pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-mono text-sm text-primary mb-4">Hello 👋, I&apos;m</p>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            {profile.name}
          </h1>
          <div className="h-9 mt-4 font-mono text-lg sm:text-xl text-muted">
            <span>{typed}</span>
            <span className="inline-block w-[2px] h-5 bg-primary align-middle ml-1 animate-pulse" />
          </div>
          <p className="text-muted mt-6 max-w-md leading-relaxed">{profile.summary}</p>

          <div className="flex flex-wrap items-center gap-4 mt-9">
            <a
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-bg font-mono text-sm uppercase tracking-wide glow-primary hover:-translate-y-0.5 transition-transform"
            >
              <FiDownload /> Resume
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border text-text font-mono text-sm uppercase tracking-wide hover:border-primary hover:text-primary transition-colors"
            >
              View Projects
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="inline-flex items-center justify-center w-11 h-11 rounded-full border border-border hover:border-primary hover:text-primary transition-colors"
            >
              <FiGithub size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-muted font-mono text-xs uppercase tracking-widest"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        Scroll
        <FiArrowDown />
      </motion.a>
    </section>
  );
}
