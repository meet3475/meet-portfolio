"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { services } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function Services() {
  return (
    <section id="services" className="container-px py-28">
      <SectionHeading eyebrow="06 — Services" title="What I can take off your plate" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={staggerContainer}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-14"
      >
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            custom={i}
            variants={fadeUp}
            className="rounded-2xl p-6 border border-border hover:border-primary/40 hover:bg-surface transition-colors"
          >
            <span className="font-mono text-xs text-primary">{`0${i + 1}`}</span>
            <h3 className="font-display text-lg text-text mt-3">{service.title}</h3>
            <p className="text-muted text-sm mt-2 leading-relaxed">{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
