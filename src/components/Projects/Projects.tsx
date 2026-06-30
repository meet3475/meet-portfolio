"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

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
          <p className="font-mono text-[11px] text-primary uppercase tracking-widest">
            ← Tap to flip back
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="container-px py-28">
      <SectionHeading
        eyebrow="04 — Projects"
        title="Selected work"
        description="Two builds that show the range &mdash; real-time communication and structured enterprise data."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 gap-6 mt-14"
      >
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </motion.div>
    </section>
  );
}
