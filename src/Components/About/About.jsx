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
                Hi, I’m Moustafa.
              </span>{" "}
              I’m a <span className="font-bold">front-end developer</span> from
              Menoufia, Egypt. I build clean, responsive web apps with{" "}
              <span className="font-bold text-blue-600 dark:text-blue-400">
                React, JavaScript and Tailwind CSS
              </span>
              .
            </p>

            <p>
              I learned front-end development through training and by building
              real projects. Everything in this portfolio is something I built
              myself, and each project links to a live demo and its code on
              GitHub.
            </p>

            <p>
              My projects include an e-commerce store with sign-in, cart and
              checkout, a CRUD dashboard, a recipe finder, a weather app and a
              random quotes generator. I care about readable code, responsive
              layouts and interfaces that are easy to use.
            </p>

            <p className="font-semibold text-[#222222] dark:text-[#F4EFED] mt-4">
              I’m open to junior front-end roles and freelance work. If you have
              a page or a small app to build, get in touch.
            </p>
          </motion.div>
        </div>

        {/* What I work with */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-[#222222] dark:text-[#F4EFED]">
            What I Can Help With
          </h2>
          <ul className="list-disc pl-6 space-y-4 text-gray-700 dark:text-gray-300">
            <li>
              <strong>Responsive web pages:</strong> landing pages and small
              sites built with React and Tailwind CSS that work on phones and
              desktops.
            </li>
            <li>
              <strong>Design to code:</strong> turning a ready design into a
              clean React page.
            </li>
            <li>
              <strong>Data-driven interfaces:</strong> dashboards, forms and
              lists that talk to an API, like my CRUD dashboard and store.
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
          “Keep it simple, make it work, then make it nice.”
        </motion.p>
      </div>
    </section>
  );
};

export default About;
