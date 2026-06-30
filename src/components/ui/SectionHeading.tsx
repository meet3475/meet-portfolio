"use client";

import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }: Props) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={fadeUp}
      className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}
    >
      <span className="font-mono text-xs tracking-[0.25em] uppercase text-primary">
        {eyebrow}
      </span>
      <h2 className="font-display text-3xl md:text-4xl font-semibold mt-3 text-text">
        {title}
      </h2>
      {description && (
        <p className="text-muted mt-4 leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
