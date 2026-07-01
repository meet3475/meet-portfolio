"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { profile, stats } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

function TiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({ rotateX: 0, rotateY: 0 });

  const handle = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    setStyle({ rotateX: y * -14, rotateY: x * 14 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handle}
      onMouseLeave={() => setStyle({ rotateX: 0, rotateY: 0 })}
      style={{
        transform: `perspective(900px) rotateX(${style.rotateX}deg) rotateY(${style.rotateY}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative [transform-style:preserve-3d]"
    >
      <div className="glass rounded-3xl p-8 h-full flex flex-col justify-between min-h-[340px]">
        {/* Glow orb */}
        <div className="absolute top-4 right-4 w-28 h-28 rounded-full opacity-20 blur-2xl bg-primary" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-4">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="font-mono text-xs text-accent uppercase tracking-wide">Currently at AppWorld Infotech</span>
          </div>
          <p className="font-display text-2xl text-text mt-2">Frontend Developer</p>
          <p className="text-muted mt-1 text-sm">June 2025 — Present</p>
        </div>

        <div className="relative z-10 mt-8 grid grid-cols-2 gap-y-4 font-mono text-xs">
          <span className="text-muted">Based in</span>
          <span className="text-text text-right">Surat, India</span>
          <span className="text-muted">Focus</span>
          <span className="text-text text-right">Next.js · React</span>
          <span className="text-muted">GitHub</span>
          <a href={profile.github} target="_blank" rel="noreferrer" className="text-primary text-right hover:underline">
            {profile.githubUsername}
          </a>
          <span className="text-muted">Education</span>
          <span className="text-text text-right">M. Full Stack Dev</span>
        </div>
      </div>

      {/* Glowing border */}
      <div className="absolute -inset-[1px] rounded-3xl border border-primary/25 blur-[2px] -z-10" />
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="container-px py-28">
      <SectionHeading eyebrow="01 — About" title="The person behind the pixels" />

      <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 mt-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={staggerContainer}
          className="space-y-5 text-muted leading-relaxed text-lg"
        >
          <motion.p custom={0} variants={fadeUp}>
            I&apos;m <span className="text-text font-semibold">{profile.name}</span>, a frontend
            developer from Surat. I always want to learn new skills, I enjoy working as part of a
            team, and I take pride in delivering high-quality results.
          </motion.p>
          <motion.p custom={1} variants={fadeUp}>
            Over the past 1.5 years I&apos;ve shipped ERP dashboards at SridixTechnology,
            built dual-site CMS-driven platforms for international clients at Bitfront Infotech,
            and I&apos;m currently working at AppWorld Infotech.
          </motion.p>
          <motion.p custom={2} variants={fadeUp}>
            Next.js and React are home base. On my own time I explore Three.js, WebGL,
            and anything that turns a browser tab into an experience worth stopping for.
          </motion.p>

          {/* Stats */}
          <motion.div custom={3} variants={fadeUp} className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8">
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl p-5 text-center group hover:border-primary/40 transition-colors">
                <AnimatedCounter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted mt-2 leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <TiltCard />
      </div>
    </section>
  );
}
