"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/portfolio";
import { viewportOnce } from "@/lib/motion";

export default function Experience() {
  return (
    <section id="experience" className="container-px py-28">
      <SectionHeading eyebrow="03 — Experience" title="Where the work happened" />

      <div className="mt-14 relative">
        {/* Animated vertical line */}
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-secondary to-accent origin-top hidden sm:block"
        />

        <div className="space-y-10">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative sm:pl-12"
            >
              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.4, delay: i * 0.12 + 0.3 }}
                className={`absolute left-0 top-6 w-3.5 h-3.5 rounded-full border-2 hidden sm:block ${
                  item.current
                    ? "bg-accent border-accent shadow-[0_0_12px_rgba(20,241,149,0.6)]"
                    : "bg-primary border-primary shadow-[0_0_12px_rgba(0,229,255,0.4)]"
                }`}
              />

              <div className="glass rounded-2xl p-7 hover:border-primary/40 transition-colors group">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="font-display text-xl text-text">{item.role}</h3>
                      {item.current && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/30 font-mono text-[10px] uppercase tracking-wide text-accent">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-muted mt-1 font-medium">{item.company}</p>
                  </div>
                  <span className={`font-mono text-xs ${item.current ? "text-accent" : "text-primary"}`}>
                    {item.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5 text-muted text-sm leading-relaxed">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2.5">
                      <span className="text-primary mt-0.5 flex-shrink-0">›</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] uppercase tracking-wide px-3 py-1 rounded-full border border-border text-muted group-hover:border-border/80 transition-colors"
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
