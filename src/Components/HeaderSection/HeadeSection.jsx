import React from "react";
import { motion } from "framer-motion";

export default function HeaderSection({ mypicture, onShowMore }) {
  return (
    <section className="relative min-h-screen py-24 flex justify-center items-center overflow-hidden bg-gradient-to-b from-[#F4EFED] to-white dark:from-[#1c1c1c] dark:to-[#222222]">
      {/* Background Accent */}
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="w-[500px] h-[500px] bg-[#222222]/5 dark:bg-[#F4EFED]/5 blur-3xl rounded-full" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center px-6">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative"
        >
          <div className="absolute inset-0 blur-xl bg-gradient-to-tr from-[#222222]/20 to-transparent dark:from-[#F4EFED]/20 rounded-full scale-110"></div>
          <img
            className="relative w-[180px] sm:w-[220px] rounded-full shadow-2xl border-4 border-[#222222]/10 dark:border-[#F4EFED]/10 object-cover"
            src={mypicture}
            alt="Portrait of Moustafa Elsaqqa"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl sm:text-6xl font-extrabold mt-8 text-[#222222] dark:text-[#F4EFED] tracking-tight"
        >
          I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#222222] to-[#555555] dark:from-[#F4EFED] dark:to-[#aaa]">
            Moustafa Elsaqqa
          </span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="uppercase text-lg md:text-2xl mt-3 font-semibold text-gray-700 dark:text-gray-300 tracking-widest"
        >
          Front-End Developer
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 1 }}
          className="max-w-lg mx-auto mt-4 text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base"
        >
          I design and develop modern, responsive web interfaces that merge
          creativity with performance — turning ideas into digital experiences.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          onClick={onShowMore}
          className="mt-8 px-8 py-3 rounded-full border border-[#222222] dark:border-[#F4EFED]
          text-[#222222] dark:text-[#F4EFED] font-semibold text-sm sm:text-base
          hover:bg-[#222222] hover:text-[#F4EFED] dark:hover:bg-[#F4EFED] dark:hover:text-[#222222]
          shadow-md hover:shadow-lg transition-all duration-300"
        >
          View My Work
        </motion.button>

        <div className="mt-5 flex gap-5 text-sm font-medium text-gray-600 dark:text-gray-400">
          <a href="https://github.com/Mostafa-98" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          <a href="https://www.linkedin.com/in/moustafa-elsaqqa/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
          <a href="mailto:mostafaelsaqqa79@gmail.com" className="hover:underline">Email</a>
        </div>

        {/* Animated Arrow */}
        <motion.i
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{
            delay: 1.5,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="fa-solid fa-arrow-down text-3xl text-gray-500 mt-8 opacity-80"
        ></motion.i>
      </div>
    </section>
  );
}
