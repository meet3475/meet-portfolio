"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Education() {
  return (
    <section id="education" className="container-px py-28">
      <SectionHeading eyebrow="04 — Education" title="How I got here" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid sm:grid-cols-3 gap-5 mt-14"
      >
        {education.map((item) => (
          <motion.div
            key={item.title}
            variants={fadeUp}
            className="glass rounded-2xl p-6 flex flex-col justify-between min-h-36"
          >
            <span className="font-mono text-xs text-primary">{item.period}</span>
            <div className="mt-3">
              <p className="font-display text-lg text-text">{item.title}</p>
              <p className="text-muted text-sm mt-1">{item.institute}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
