import React from "react";
import { motion } from "framer-motion";
import globe from "./../../assets/images/globe.png";

const About = () => {
  return (
    <section
      id="about"
      className="relative flex flex-col md:flex-row justify-center items-center bg-[#F4EFED] dark:bg-[#111111] dark:text-[#F4EFED] px-6 py-16 md:py-24 overflow-hidden"
    >
      {/* خلفية خفيفة */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00000005] to-[#00000010] dark:via-[#ffffff05] dark:to-[#ffffff10]" />
      <div className="absolute -top-24 -right-32 w-[300px] h-[300px] bg-gradient-to-br from-[#a1c4fd]/20 to-[#c2e9fb]/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-32 w-[300px] h-[300px] bg-gradient-to-br from-[#ff9a9e]/20 to-[#fad0c4]/10 blur-[120px] rounded-full" />

      <div className="container max-w-6xl mx-auto relative z-10">
        {/* العنوان */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-extrabold text-center uppercase mb-10 md:mb-16 text-[#222222] dark:text-[#F4EFED]"
        >
          About Me
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
          {/* الصورة */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[40%] flex justify-center"
          >
            <img
              src={globe}
              alt="About Illustration"
              className="rounded-3xl shadow-2xl w-[80%] md:w-[100%] object-cover"
            />
          </motion.div>

          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[60%] leading-relaxed text-gray-700 dark:text-gray-300 space-y-4"
          >
            <p className="text-lg">
              <span className="font-extrabold text-xl dark:text-white text-[#222]">
                Welcome, friend.
              </span>{" "}
              I’m <span className="font-bold">Moustafa Elsaqqa</span>, a
              freelance <span className="font-bold">Web Developer</span> who
              specializes in{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                front-end development
              </span>
              . I create modern, fast, and beautiful digital experiences from
              scratch — blending design, performance, and code craftsmanship.
            </p>

            <p>
              I’ve worked with startups, agencies, and established tech
              companies to build scalable React and Next.js applications. I’m
              passionate about creating web interfaces that are both{" "}
              <span className="font-bold">intuitive</span> and{" "}
              <span className="font-bold">highly performant</span>.
            </p>

            <p>
              My expertise includes animation, micro-interactions, data
              visualization, and delivering pixel-perfect implementations from
              Figma or design systems like MUI. I’m also experienced in managing
              complex app states, optimizing rendering, and improving UX flow.
            </p>

            <p>
              Beyond coding, I love exploring creative technology — from 3D
              graphics with Three.js to interactive storytelling on the web.
            </p>

            <p className="font-semibold text-[#222222] dark:text-[#F4EFED] mt-4">
              If you’re looking for a React/Next.js developer who can turn your
              vision into a polished, high-quality experience — let’s build
              something great together 🚀
            </p>
          </motion.div>
        </div>

        {/* Clients Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#222222] dark:text-[#F4EFED]">
            My Clients Include:
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Startups & Small Businesses:</strong> Robust, scalable web
              apps built with React and Tailwind — from landing pages to complex
              dashboards.
            </li>
            <li>
              <strong>Design Agencies:</strong> Pixel-perfect conversions from
              Figma/Sketch with strong focus on performance and accessibility.
            </li>
            <li>
              <strong>Tech Companies & SaaS Providers:</strong> Interactive
              interfaces, real-time data updates, and seamless user experience
              with React + Next.js.
            </li>
            <li>
              <strong>Nonprofits & Charities:</strong> Affordable, accessible
              websites that empower their mission and community reach.
            </li>
          </ul>
        </motion.div>

        {/* Closing Statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-gray-600 dark:text-gray-400 italic"
        >
          “Every line of code should tell a story — clean, purposeful, and
          inspiring.”
        </motion.p>
      </div>
    </section>
  );
};

export default About;
