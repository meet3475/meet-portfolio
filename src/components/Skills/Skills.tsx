"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { skills } from "@/data/portfolio";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

function SkillCard({ name, tag }: { name: string; tag: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: py * -12, y: px * 12 });
  };

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      onMouseMove={handleMove}
      onMouseLeave={() => setRotate({ x: 0, y: 0 })}
      style={{ transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)` }}
      className="glass rounded-2xl p-6 transition-transform duration-200 ease-out cursor-default [transform-style:preserve-3d] hover:border-primary/40"
    >
      <span className="font-mono text-xs text-primary">{tag}</span>
      <p className="font-display text-lg mt-3 text-text">{name}</p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="container-px py-28">
      <SectionHeading
        eyebrow="02 — Skills"
        title="Tools I reach for"
        description="A working set, not a checklist &mdash; everything here ships in real projects."
      />

      <div className="mt-14 space-y-10">
        {skills.map((group) => (
          <div key={group.group}>
            <p className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
              {group.group}
            </p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              variants={staggerContainer}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {group.items.map((item) => (
                <SkillCard key={item.name} name={item.name} tag={item.tag} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
