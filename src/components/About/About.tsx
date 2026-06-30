"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile, stats } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export default function About() {
  return (
    <section id="about" className="container-px py-28">
      <SectionHeading eyebrow="01 — About" title="The person behind the pixels" />

      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 mt-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="space-y-5 text-muted leading-relaxed text-lg"
        >
          <motion.p custom={0} variants={fadeUp}>
            I&apos;m <span className="text-text font-medium">{profile.name}</span>, a frontend
            developer based in {profile.location}. I spend most of my time inside Angular and
            React codebases, turning product requirements into interfaces that hold up under
            real use.
          </motion.p>
          <motion.p custom={1} variants={fadeUp}>
            Lately I&apos;ve been pulling Three.js and Next.js into that mix &mdash; not as a
            trend, but because motion and structure both matter to how an interface feels.
          </motion.p>
          <motion.p custom={2} variants={fadeUp}>
            Outside of client work, I keep a running list of small experiments: WebGL scenes,
            animation studies, and anything that makes a browser tab feel less like a form and
            more like a place.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted mt-2">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass rounded-3xl p-8 h-full flex flex-col justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-primary">
                Currently
              </p>
              <p className="font-display text-2xl mt-3 text-text">Frontend Developer</p>
              <p className="text-muted mt-1">at AppWorld Infotech</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-y-4 font-mono text-xs">
              <span className="text-muted">Based in</span>
              <span className="text-text text-right">Surat, India</span>
              <span className="text-muted">Focus</span>
              <span className="text-text text-right">Angular · React</span>
              <span className="text-muted">GitHub</span>
              <span className="text-primary text-right">{profile.githubUsername}</span>
            </div>
          </div>
          <div className="absolute -inset-px rounded-3xl border border-primary/20 -z-10 blur-sm" />
        </motion.div>
      </div>
    </section>
  );
}
