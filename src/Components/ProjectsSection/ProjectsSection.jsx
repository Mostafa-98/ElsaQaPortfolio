import React from "react";
import { motion } from "framer-motion";
import HomeSlider from "../HomeSilder/HomeSlider";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-[#F4EFED] dark:bg-[#1C1C1C] text-center px-6 relative overflow-hidden"
    >
      {/* subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')]"></div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-4xl md:text-5xl font-extrabold uppercase text-[#222222] dark:text-[#F4EFED] mb-12 tracking-wide"
      >
        Featured <span className="text-primary">Projects</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14 text-base md:text-lg"
      >
        Here’s a quick look at some of the projects I’ve built — blending clean UI, smooth UX, and modern front-end tech.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HomeSlider />
      </motion.div>
    </section>
  );
}
