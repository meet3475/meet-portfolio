"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/data/portfolio";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex items-center justify-between h-18 py-4">
        <a href="#" className="font-display text-lg font-semibold tracking-tight">
          M<span className="text-primary">.</span>Dobariya
        </a>

        <ul className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-wider">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`transition-colors hover:text-primary ${
                  active === link.href ? "text-primary" : "text-muted"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="hidden md:inline-flex items-center font-mono text-xs uppercase tracking-wider px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-bg transition-colors"
        >
          Resume
        </a>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-text text-2xl"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass overflow-hidden"
          >
            <ul className="flex flex-col gap-4 px-6 py-6 font-mono text-sm uppercase tracking-wider">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} onClick={() => setOpen(false)} className="text-muted hover:text-primary">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={profile.resumeUrl} download className="text-primary">
                  Resume ↓
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
