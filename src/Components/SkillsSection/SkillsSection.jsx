import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaBootstrap,
  FaReact,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJquery,
  SiTypescript,
} from "react-icons/si";

export default function SkillsSection() {
  const skills = [
    { icon: <FaHtml5 className="text-[#E44D26]" />, label: "HTML5" },
    { icon: <FaCss3Alt className="text-[#264DE4]" />, label: "CSS3" },
    { icon: <FaJsSquare className="text-[#F7DF1E]" />, label: "JavaScript" },
    { icon: <FaBootstrap className="text-[#7910f2]" />, label: "Bootstrap" },
    { icon: <SiJquery className="text-[#0865A7]" />, label: "jQuery" },
    { icon: <SiTailwindcss className="text-[#06B6D4]" />, label: "Tailwind" },
    { icon: <SiTypescript className="text-[#3178C6]" />, label: "TypeScript" },
    { icon: <FaReact className="text-[#61DAFB]" />, label: "React" },
    { icon: <FaGitAlt className="text-[#E84E31]" />, label: "Git" },
    { icon: <FaGithub className="text-gray-200 dark:text-gray-700" />, label: "GitHub" },
  ];

  return (
    <section
      id="skills"
      className="py-24 bg-[#222222] dark:bg-[#F4EFED] text-center text-white dark:text-[#222222]"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold uppercase mb-14 tracking-wide"
      >
        My Skills
      </motion.h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 px-6 md:px-12">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center gap-2 p-5 rounded-xl 
                       bg-white/10 dark:bg-black/5 backdrop-blur-sm 
                       hover:scale-110 hover:bg-white/20 dark:hover:bg-black/10 
                       hover:shadow-xl transition-all duration-300"
          >
            <div className="text-6xl">{skill.icon}</div>
            <p className="font-semibold text-lg tracking-wide">{skill.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
