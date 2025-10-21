import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <section className="relative py-24 md:py-32 bg-[#F4EFED] dark:bg-[#1C1C1C] overflow-hidden">
      {/* Decorative Glow Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#222222]/5 dark:bg-[#F4EFED]/5 blur-3xl rounded-full"></div>

      <div className="relative z-10 container mx-auto flex flex-col items-center justify-center text-center px-6 max-w-4xl">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[#222222] dark:text-[#F4EFED] mb-8 leading-tight"
        >
          What I Do
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed"
        >
          I craft high-quality front-end experiences using React — ensuring seamless performance,
          intuitive interactions, and visually stunning designs. My approach is built around three
          key principles:
        </motion.p>

        {/* Key Points */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4 text-base md:text-lg text-gray-700 dark:text-gray-300 text-left md:text-center"
        >
          <li>
            <span className="font-semibold text-[#222222] dark:text-[#F4EFED]">1. Technical –</span>{" "}
            Clean, optimized code following best practices for speed, accessibility, and reliability.
          </li>
          <li>
            <span className="font-semibold text-[#222222] dark:text-[#F4EFED]">2. Beautiful –</span>{" "}
            Thoughtful UI/UX that balances simplicity with a modern, visually engaging aesthetic.
          </li>
          <li>
            <span className="font-semibold text-[#222222] dark:text-[#F4EFED]">3. Easy to Use –</span>{" "}
            Every interface is designed to be intuitive, seamless, and enjoyable to interact with.
          </li>
        </motion.ul>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-10"
        >
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="font-semibold uppercase text-sm tracking-widest border-2 border-[#222222] dark:border-[#F4EFED]
              text-[#222222] dark:text-[#F4EFED] px-8 py-3 rounded-full hover:bg-[#222222] hover:text-[#F4EFED]
              dark:hover:bg-[#F4EFED] dark:hover:text-[#222222] transition-all duration-300 shadow-md"
            >
              Read More
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
