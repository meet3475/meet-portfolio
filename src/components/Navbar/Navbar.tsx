"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as Element[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${scrolled ? "glass border-b" : "bg-transparent"}`}>
      <nav className="container-px flex items-center justify-between h-16">
        {/* Logo */}
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="font-display text-base font-bold tracking-tight"
        >
          <span className="text-text">M.</span>
          <span className="text-primary">DOBARIYA</span>
        </motion.a>

        {/* Desktop nav */}
        <motion.ul
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="hidden md:flex items-center gap-1"
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`relative font-mono text-[11px] uppercase tracking-[0.15em] px-3.5 py-2 rounded-lg transition-colors ${
                  active === link.href ? "text-primary" : "text-muted hover:text-text"
                }`}
              >
                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-lg bg-primary/8"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </motion.ul>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="hidden md:flex items-center"
        >
          <a
            href={profile.resumeUrl}
            download
            className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-bg transition-all duration-300"
          >
            <FiDownload size={12} /> Resume
          </a>
        </motion.div>

        {/* Mobile burger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden text-text p-2 rounded-lg hover:bg-surface transition-colors"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden glass border-t overflow-hidden"
          >
            <ul className="flex flex-col px-5 py-5 gap-2">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`block font-mono text-sm uppercase tracking-widest py-3 border-b border-border last:border-0 transition-colors ${
                      active === link.href ? "text-primary" : "text-muted"
                    }`}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
              <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                <a
                  href={profile.resumeUrl}
                  download
                  className="mt-3 flex items-center gap-2 text-primary font-mono text-sm uppercase tracking-widest"
                >
                  <FiDownload size={13} /> Download Resume
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
