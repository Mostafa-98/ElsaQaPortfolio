import React from "react";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaBootstrap, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiJquery, SiTypescript } from "react-icons/si";
import Reveal from "../Reveal";

const skills = [
  { icon: <FaHtml5 className="text-[#E44D26]" />, label: "HTML5" },
  { icon: <FaCss3Alt className="text-[#2d7cf0]" />, label: "CSS3" },
  { icon: <FaJsSquare className="text-[#F7DF1E]" />, label: "JavaScript" },
  { icon: <FaReact className="text-[#61DAFB]" />, label: "React" },
  { icon: <SiTailwindcss className="text-[#06B6D4]" />, label: "Tailwind" },
  { icon: <FaBootstrap className="text-[#9b5cf6]" />, label: "Bootstrap" },
  { icon: <SiTypescript className="text-[#3178C6]" />, label: "TypeScript" },
  { icon: <SiJquery className="text-[#0865A7]" />, label: "jQuery" },
  { icon: <FaGitAlt className="text-[#E84E31]" />, label: "Git" },
  { icon: <FaGithub />, label: "GitHub" },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="section bg-[var(--bg2)]">
      <div className="wrap">
        <Reveal className="text-center">
          <span className="eyebrow">Toolbox</span>
          <h2 className="h2">Skills and tools</h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((s, i) => (
            <Reveal key={s.label} delay={(i % 5) * 0.06} y={20} className="card card-hover flex flex-col items-center gap-3 px-4 py-7">
              <div className="text-5xl">{s.icon}</div>
              <p className="text-sm font-semibold">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
