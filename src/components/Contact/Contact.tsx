"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/portfolio";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a visitor"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="container-px py-28">
      <SectionHeading
        eyebrow="07 — Contact"
        title="Let's build something"
        description="Have a project, a role, or just a question about how a section was built? Reach out."
      />

      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-10 mt-14">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          className="space-y-5"
        >
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/40 transition-colors"
          >
            <FiMail className="text-primary" />
            <span className="text-sm text-muted">{profile.email}</span>
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/40 transition-colors"
          >
            <FiPhone className="text-primary" />
            <span className="text-sm text-muted">{profile.phone}</span>
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/40 transition-colors"
          >
            <FiGithub className="text-primary" />
            <span className="text-sm text-muted">github.com/{profile.githubUsername}</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 glass rounded-xl p-4 hover:border-primary/40 transition-colors"
          >
            <FiLinkedin className="text-primary" />
            <span className="text-sm text-muted">LinkedIn profile</span>
          </a>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={fadeUp}
          custom={1}
          className="glass rounded-2xl p-7 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="font-mono text-xs uppercase tracking-wide text-muted">
                Name
              </label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full mt-2 bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-xs uppercase tracking-wide text-muted">
                Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full mt-2 bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors"
                placeholder="you@email.com"
              />
            </div>
          </div>
          <div>
            <label className="font-mono text-xs uppercase tracking-wide text-muted">
              Message
            </label>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full mt-2 bg-transparent border border-border rounded-lg px-4 py-3 text-sm text-text focus:outline-none focus:border-primary transition-colors resize-none"
              placeholder="What are you building?"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-bg font-mono text-sm uppercase tracking-wide glow-primary hover:-translate-y-0.5 transition-transform"
          >
            <FiSend /> Send message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
