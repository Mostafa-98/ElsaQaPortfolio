import React from "react";
import { motion } from "framer-motion";

import daniels from "../../assets/images/danielsProj.jpg";
import crud from "../../assets/images/crudProj.png";
import ecommerce from "../../assets/images/e-commerceWep.png";
import first from "../../assets/images/firstReact.jpg";
import random from "../../assets/images/randomQuote.png";
import recipe from "../../assets/images/recipeProj.png";
import smart from "../../assets/images/smartLogin.jpg";
import game from "../../assets/images/gameApp.jpg";
import weather from "../../assets/images/weatherProj.jpg";

const projects = [
  {
    title: "Game Reviews",
    desc: "Free-to-play games browser by category, using the FreeToGame API.",
    img: game,
    link: "https://mostafa-98.github.io/Game_App/",
  },
  {
    title: "E-commerce Platform",
    desc: "Online store front end with product listing and cart.",
    img: ecommerce,
    link: "https://mostafa-98.github.io/Elsaqqa-E-commerce/#/",
  },
  {
    title: "Smart Login",
    desc: "Login and sign-up forms with validation, saved in the browser.",
    img: smart,
    link: "https://mostafa-98.github.io/Smart-Login/",
  },
  {
    title: "Recipe Finder",
    desc: "Search recipes and browse results from a public API.",
    img: recipe,
    link: "https://mostafa-98.github.io/Recipe-Project/",
  },
  {
    title: "Weather Forecast",
    desc: "Search any city and see a 3-day forecast from WeatherAPI.",
    img: weather,
    link: "https://mostafa-98.github.io/Weather-App/",
  },
  {
    title: "CRUD Dashboard",
    desc: "Create, read, update and delete records in the browser.",
    img: crud,
    link: "https://mostafa-98.github.io/Crud-Project/",
  },
  {
    title: "Random Quotes",
    desc: "Fetches a new random quote on each click.",
    img: random,
    link: "https://mostafa-98.github.io/Random-Quotes-Project/",
  },
  {
    title: "Daniel Portfolio",
    desc: "Bootstrap one-page portfolio template, restyled by me.",
    img: daniels,
    link: "https://mostafa-98.github.io/Daniel-Project/",
  },
  {
    title: "React Starter App",
    desc: "Freelancer theme rebuilt with React and Vite.",
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
            className="relative group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1 bg-white transition-all duration-500"
          >
            {/* Project Image */}
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
            />

            {/* Caption */}
            <div className="p-4 bg-white dark:bg-[#1c1c1c] text-left">
              <h3 className="font-bold text-lg">{proj.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{proj.desc}</p>
            </div>

            {/* Overlay */}
            <div className="absolute inset-x-0 top-0 h-60 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center text-white">
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
        Each project has a live demo. The source code is on GitHub.
      </motion.p>
    </section>
  );
}
