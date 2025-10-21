import React from "react";
import { motion } from "framer-motion";

import daniels from "../../assets/images/danielsProj.png";
import crud from "../../assets/images/crudProj.png";
import ecommerce from "../../assets/images/e-commerceWep.png";
import first from "../../assets/images/firstReact.png";
import random from "../../assets/images/randomQuote.png";
import recipe from "../../assets/images/recipeProj.png";
import smart from "../../assets/images/smartLogin.png";
import weather from "../../assets/images/weatherProj.png";

const projects = [
  {
    title: "E-commerce Platform",
    img: ecommerce,
    link: "https://mostafa-98.github.io/Elsaqqa-E-commerce/#/",
  },
  {
    title: "Smart Login",
    img: smart,
    link: "https://mostafa-98.github.io/Smart-Login/",
  },
  {
    title: "Recipe Finder",
    img: recipe,
    link: "https://mostafa-98.github.io/Recipe-Project/",
  },
  {
    title: "Weather Forecast",
    img: weather,
    link: "https://mostafa-98.github.io/Weather-App/",
  },
  {
    title: "CRUD Dashboard",
    img: crud,
    link: "https://mostafa-98.github.io/Crud-Project/",
  },
  {
    title: "Random Quotes",
    img: random,
    link: "https://mostafa-98.github.io/Random-Quotes-Project/",
  },
  {
    title: "Daniel Portfolio",
    img: daniels,
    link: "https://mostafa-98.github.io/Daniel-Project/",
  },
  {
    title: "React Starter App",
    img: first,
    link: "https://mostafa-98.github.io/First-React/",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-[#F4EFED] dark:bg-[#121212] text-[#222] dark:text-[#F4EFED]"
    >
      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-4xl md:text-5xl font-extrabold uppercase mb-14 tracking-wide"
      >
        Selected Works
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <motion.a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
          >
            {/* Project Image */}
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
              <h3 className="text-xl font-bold uppercase tracking-wide mb-2">
                {proj.title}
              </h3>
              <span className="text-sm border border-white px-3 py-1 rounded-full hover:bg-white hover:text-black transition-all duration-300">
                View Project ↗
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a
          href="https://github.com/mostafa-98"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#222] dark:bg-[#F4EFED] text-[#F4EFED] dark:text-[#222] px-8 py-3 rounded-full font-semibold tracking-wide hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          View All Projects on GitHub
        </a>
      </motion.div>

      {/* Sub Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-10 text-gray-700 dark:text-gray-400 text-sm"
      >
        Each project is built with a focus on performance, design, and clean
        code — crafted with passion 💻✨
      </motion.p>
    </section>
  );
}
