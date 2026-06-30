"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    const hide = () => setVisible(false);

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", hide);
    };
  }, []);

  return (
    <motion.div
      className="hidden md:block fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[70] mix-blend-screen"
      style={{
        background: "radial-gradient(circle, rgba(0,229,255,0.45), transparent 70%)",
      }}
      animate={{ x: pos.x - 16, y: pos.y - 16, opacity: visible ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.3 }}
    />
  );
}
