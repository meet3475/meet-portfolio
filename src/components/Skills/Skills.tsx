"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import { viewportOnce } from "@/lib/motion";

function SkillCard({ name, tag, index }: { name: string; tag: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    setRotate({ x: (py - 0.5) * -16, y: (px - 0.5) * 16 });
    setGlow({ x: px * 100, y: py * 100 });
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={viewportOnce}
      transition={{ duration: 0.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={() => { setRotate({ x: 0, y: 0 }); setGlow({ x: 50, y: 50 }); }}
      style={{
        transform: `perspective(700px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
        transition: "transform 0.15s ease-out",
      }}
      className="relative glass rounded-2xl p-5 cursor-default [transform-style:preserve-3d] group overflow-hidden"
    >
      {/* Radial glow on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${glow.x}% ${glow.y}%, rgba(0,229,255,0.12) 0%, transparent 60%)`,
        }}
      />
      <span className="font-mono text-[10px] text-primary tracking-widest uppercase">{tag}</span>
      <p className="font-display text-base mt-2 text-text font-medium">{name}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="container-px py-28">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Tools I reach for"
        description="A working set, not a checklist — everything here ships in real projects."
      />

      <div className="mt-14 space-y-12">
        {skills.map((group) => (
          <div key={group.group}>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs uppercase tracking-widest text-muted">{group.group}</span>
              <span className="flex-1 h-px bg-border" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {group.items.map((item, i) => (
                <SkillCard key={item.name} name={item.name} tag={item.tag} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
