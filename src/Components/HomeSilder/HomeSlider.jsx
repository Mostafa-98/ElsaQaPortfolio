import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import daniels from "../../assets/images/danielsProj.png";
import crud from "../../assets/images/crudProj.png";
import ecommerce from "../../assets/images/e-commerceWep.png";
import first from "../../assets/images/firstReact.png";
import random from "../../assets/images/randomQuote.png";
import recipe from "../../assets/images/recipeProj.png";
import smart from "../../assets/images/smartLogin.png";
import weather from "../../assets/images/weatherProj.png";

export default function HomeSlider() {
  const projects = [
    { img: daniels, link: "https://mostafa-98.github.io/Daniel-Project/", title: "Daniel Project" },
    { img: crud, link: "https://mostafa-98.github.io/Crud-Project/", title: "CRUD Dashboard" },
    { img: ecommerce, link: "https://mostafa-98.github.io/Elsaqqa-E-commerce/#/", title: "E-Commerce Platform" },
    { img: random, link: "https://mostafa-98.github.io/Random-Quotes-Project/", title: "Quotes Generator" },
    { img: weather, link: "https://mostafa-98.github.io/Weather-App/", title: "Weather Forecast" },
    { img: smart, link: "https://mostafa-98.github.io/Smart-Login/", title: "Smart Login System" },
    { img: recipe, link: "https://mostafa-98.github.io/Recipe-Project/", title: "Recipe Finder" },
    { img: first, link: "https://mostafa-98.github.io/First-React/", title: "React Starter App" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    arrows: false,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <motion.div
      className="relative py-12 md:py-16 rounded-[2rem] bg-gradient-to-br from-[#fafafa] via-[#f1f1f1] to-[#e8e8e8] dark:from-[#181818] dark:via-[#121212] dark:to-[#0e0e0e] shadow-inner"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <Slider {...settings}>
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block rounded-3xl overflow-hidden shadow-[0_0_30px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_0_45px_-10px_rgba(0,0,0,0.35)] transition-all duration-500 backdrop-blur-sm"
              >
                {/* image wrapper */}
                <div className="overflow-hidden bg-gradient-to-br from-[#fafafa] to-[#f0f0f0] dark:from-[#1c1c1c] dark:to-[#111]">
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="w-full h-52 object-cover rounded-3xl transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* overlay on hover */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <p className="text-white text-sm md:text-base font-medium tracking-wide uppercase">
                    View Project ↗
                  </p>
                </div>

                {/* title */}
                <div className="pt-5 text-center">
                  <h3 className="text-[16px] font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary transition-colors duration-300">
                    {proj.title}
                  </h3>
                </div>
              </a>
            </motion.div>
          ))}
        </Slider>
      </div>
    </motion.div>
  );
}
