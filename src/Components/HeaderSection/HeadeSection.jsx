import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiJavascript } from "react-icons/si";
import { FiArrowRight, FiArrowDown } from "react-icons/fi";

const ease = [0.22, 1, 0.36, 1];
const up = (d) => ({ initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: d, ease } });

export default function HeaderSection({ mypicture, onShowMore }) {
  const social = "flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-lg hover:text-[var(--accent)] hover:border-[var(--accent)] hover:-translate-y-1 transition-all";
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-32">
      <div className="aurora" />
      <div className="grid-bg" />
      <div className="wrap relative z-10 grid items-center gap-14 md:grid-cols-[1.15fr_.85fr]">
        <div>
          <motion.div {...up(0.1)} className="chip">
            <span className="dot-live" /> Open to junior front-end roles and freelance work
          </motion.div>
          <motion.h1 {...up(0.25)} className="mt-6 text-[2.6rem] font-bold leading-[1.05] sm:text-6xl lg:text-7xl">
            Hi, I'm <span className="gradient-text">Moustafa</span>.<br />
            I build clean, fast web interfaces.
          </motion.h1>
          <motion.p {...up(0.4)} className="muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            Front-end developer from Menoufia, Egypt. I turn ideas into responsive, easy-to-use
            pages with React, JavaScript and Tailwind CSS.
          </motion.p>
          <motion.div {...up(0.55)} className="mt-9 flex flex-wrap gap-3">
            <button onClick={onShowMore} className="btn btn-primary">View my work <FiArrowRight /></button>
            <Link to="/contact" className="btn btn-ghost">Get in touch</Link>
          </motion.div>
          <motion.div {...up(0.7)} className="mt-8 flex gap-3">
            <a className={social} href="https://github.com/Mostafa-98" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
            <a className={social} href="https://www.linkedin.com/in/moustafa-elsaqqa/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            <a className={social} href="mailto:mostafaelsaqqa79@gmail.com" aria-label="Email"><FaEnvelope /></a>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease }} className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-[var(--accent)] to-[var(--accent2)] opacity-30 blur-2xl" />
          <div className="relative rounded-[2rem] bg-gradient-to-tr from-[var(--accent)] to-[var(--accent2)] p-[2px]">
            <img src={mypicture} alt="Portrait of Moustafa Elsaqqa" className="aspect-[4/5] w-full rounded-[calc(2rem-2px)] object-cover" />
          </div>
          <div className="chip float absolute -left-4 top-10 shadow-xl"><FaReact className="text-[#61DAFB]" /> React</div>
          <div className="chip float absolute -right-3 top-1/2 shadow-xl" style={{ animationDelay: "-2s" }}><SiTailwindcss className="text-[#06B6D4]" /> Tailwind</div>
          <div className="chip float absolute -bottom-3 left-8 shadow-xl" style={{ animationDelay: "-4s" }}><SiJavascript className="text-[#F7DF1E]" /> JavaScript</div>
        </motion.div>
      </div>
      <button onClick={onShowMore} aria-label="Scroll down" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 muted md:block">
        <FiArrowDown className="animate-bounce text-xl" />
      </button>
    </section>
  );
}
