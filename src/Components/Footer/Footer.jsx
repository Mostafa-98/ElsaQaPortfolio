import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function FooterSection() {
  const icon = "flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] muted hover:text-[var(--accent)] hover:border-[var(--accent)] transition-colors";
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg2)] px-6 py-10">
      <div className="wrap flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <Link to="/" className="font-display text-xl font-bold">Elsa<span className="gradient-text">Qa</span></Link>
          <p className="muted mt-1 text-sm">© {new Date().getFullYear()} Moustafa Elsaqqa. Front-end developer, Egypt.</p>
        </div>
        <nav className="flex gap-6 text-sm font-medium muted">
          <Link to="/" className="hover:text-[var(--text)]">Home</Link>
          <Link to="/about" className="hover:text-[var(--text)]">About</Link>
          <Link to="/projects" className="hover:text-[var(--text)]">Projects</Link>
          <Link to="/contact" className="hover:text-[var(--text)]">Contact</Link>
        </nav>
        <div className="flex gap-3">
          <a className={icon} href="https://github.com/Mostafa-98" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a className={icon} href="https://www.linkedin.com/in/moustafa-elsaqqa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
          <a className={icon} href="mailto:mostafaelsaqqa79@gmail.com" aria-label="Email"><FaEnvelope /></a>
        </div>
      </div>
    </footer>
  );
}
