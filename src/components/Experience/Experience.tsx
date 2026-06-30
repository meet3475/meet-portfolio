"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="container-px py-28">
      <SectionHeading eyebrow="03 — Experience" title="Where the work happened" />

      <div className="mt-14 relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border hidden sm:block" />
        <div className="space-y-12">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={fadeUp}
              className="relative sm:pl-12"
            >
              <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-primary glow-primary hidden sm:block" />

              <div className="glass rounded-2xl p-7">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl text-text">{item.role}</h3>
                  <span className="font-mono text-xs text-primary">{item.period}</span>
                </div>
                <p className="text-muted mt-1">{item.company}</p>

                <ul className="mt-4 space-y-2 text-muted text-sm leading-relaxed">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2">
                      <span className="text-primary">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-5">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase tracking-wide px-3 py-1 rounded-full border border-border text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
