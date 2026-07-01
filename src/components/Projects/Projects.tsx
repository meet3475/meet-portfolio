"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { viewportOnce } from "@/lib/motion";
import { FiExternalLink, FiGithub, FiArrowUpRight } from "react-icons/fi";

export default function Projects() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="projects" className="container-px py-28">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Selected work"
        description="Personal and client builds — each with a live demo or repo. Hover to explore."
      />

      {/* Featured list layout */}
      <div className="mt-14">
        {/* Header row */}
        <div className="hidden md:grid grid-cols-[0.5fr_2fr_1.5fr_1fr] gap-6 pb-4 border-b border-border font-mono text-[11px] uppercase tracking-widest text-muted px-4">
          <span>#</span>
          <span>Project</span>
          <span>Stack</span>
          <span>Link</span>
        </div>

        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            className={`relative grid md:grid-cols-[0.5fr_2fr_1.5fr_1fr] gap-6 items-center py-6 px-4 border-b border-border cursor-default transition-all duration-300 group ${
              active === i ? "bg-surface" : ""
            }`}
          >
            {/* Hover left accent bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-[2px] bg-primary transition-all duration-300 ${active === i ? "opacity-100" : "opacity-0"}`} />

            {/* Number */}
            <span className={`font-mono text-sm transition-colors ${active === i ? "text-primary" : "text-muted/40"}`}>
              0{i + 1}
            </span>

            {/* Title + description */}
            <div>
              <h3 className={`font-display text-xl transition-colors ${active === i ? "text-primary" : "text-text"}`}>
                {project.title}
              </h3>
              <AnimatePresence>
                {active === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-muted text-sm mt-2 leading-relaxed overflow-hidden"
                  >
                    {project.description}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Stack */}
            <div className="flex flex-wrap gap-2 hidden md:flex">
              {project.stack.slice(0, 3).map((tech) => (
                <span key={tech} className="font-mono text-[11px] uppercase tracking-wide px-2.5 py-1 rounded-full border border-border text-muted">
                  {tech}
                </span>
              ))}
              {project.stack.length > 3 && (
                <span className="font-mono text-[11px] text-muted">+{project.stack.length - 3}</span>
              )}
            </div>

            {/* Links */}
            <div className="flex items-center gap-3">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-primary transition-colors"
                >
                  <FiExternalLink size={14} />
                  <span className="hidden sm:inline">Live</span>
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-primary transition-colors"
                >
                  <FiGithub size={14} />
                  <span className="hidden sm:inline">Code</span>
                </a>
              )}
              <span className={`ml-auto transition-all duration-300 ${active === i ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}`}>
                <FiArrowUpRight className="text-primary" size={18} />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Card grid for mobile (below md) */}
      <div className="grid sm:grid-cols-2 gap-5 mt-8 md:hidden">
        {projects.map((project, i) => (
          <motion.div
            key={`card-${project.title}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportOnce}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="glass rounded-2xl p-6 flex flex-col justify-between gap-4"
          >
            <div>
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="font-display text-lg text-text mt-2">{project.title}</h3>
              <p className="text-muted text-sm mt-2 leading-relaxed">{project.description}</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.stack.slice(0, 2).map((t) => (
                  <span key={t} className="font-mono text-[10px] uppercase tracking-wide px-2 py-0.5 rounded-full border border-border text-muted">{t}</span>
                ))}
              </div>
              <div className="flex gap-3">
                {project.href && <a href={project.href} target="_blank" rel="noreferrer" className="text-muted hover:text-primary"><FiExternalLink size={15} /></a>}
                {project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-muted hover:text-primary"><FiGithub size={15} /></a>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
