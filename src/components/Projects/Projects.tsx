"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="[perspective:1200px] h-72"
      onClick={() => setFlipped((f) => !f)}
    >
      <motion.div
        className="relative w-full h-full [transform-style:preserve-3d] cursor-pointer"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Front */}
        <div className="absolute inset-0 glass rounded-2xl p-7 [backface-visibility:hidden] flex flex-col justify-between">
          <div>
            <span className="font-mono text-xs text-primary">0{index + 1}</span>
            <h3 className="font-display text-2xl text-text mt-3">{project.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="font-mono text-[11px] uppercase tracking-wide px-3 py-1 rounded-full border border-border text-muted"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="font-mono text-[11px] text-muted uppercase tracking-widest">
            Tap to read more →
          </p>
        </div>

        {/* Back */}
        <div className="absolute inset-0 glass rounded-2xl p-7 [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col justify-between">
          <p className="text-muted leading-relaxed text-sm">{project.description}</p>

          <div className="flex items-center justify-between">
            <div className="flex gap-3">
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-full border border-primary text-primary hover:bg-primary hover:text-bg transition-colors"
                >
                  <FiExternalLink size={12} /> Live
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-wide px-3 py-1.5 rounded-full border border-border text-muted hover:border-primary hover:text-primary transition-colors"
                >
                  <FiGithub size={12} /> Code
                </a>
              )}
            </div>
            <p className="font-mono text-[11px] text-muted uppercase tracking-widest">← Flip</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container-px py-28">
      <SectionHeading
        eyebrow="05 — Projects"
        title="Selected work"
        description="Personal and freelance builds, each with a live demo or repo &mdash; tap a card to flip it."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
