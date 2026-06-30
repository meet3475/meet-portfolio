import { profile } from "@/data/portfolio";
import { FiGithub, FiLinkedin, FiArrowUp } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="container-px py-10 border-t border-border flex flex-wrap items-center justify-between gap-4">
      <p className="font-mono text-xs text-muted">
        © {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Three.js.
      </p>

      <div className="flex items-center gap-4">
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="text-muted hover:text-primary transition-colors"
        >
          <FiGithub />
        </a>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          className="text-muted hover:text-primary transition-colors"
        >
          <FiLinkedin />
        </a>
        <a
          href="#"
          aria-label="Back to top"
          className="text-muted hover:text-primary transition-colors"
        >
          <FiArrowUp />
        </a>
      </div>
    </footer>
  );
}
