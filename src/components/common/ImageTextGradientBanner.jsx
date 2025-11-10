import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable Gradient Banner Section
 * Props:
 * - subtitle: string
 * - title: string
 * - highlight: string (colored part)
 * - description: string
 * - image: image URL
 * - reverse: boolean (swap image/text sides)
 * - bgGradient: string (custom gradient background)
 */
const ImageTextGradientBanner = ({
  subtitle = "Tools Overview",
  title = "IT’S TIME TO",
  highlight = "GEAR UP",
  description = "We match your ambition. Explore our suite of powerful, intuitive trading tools designed to unlock your fullest potential.",
  image,
  reverse = false,
  bgGradient = "bg-gradient-to-r from-[#030616] via-[#071A2E] to-[#000]",
}) => {
  return (
    <section
      className={`relative w-full flex flex-col md:flex-row items-center justify-between min-h-[80vh] text-white overflow-hidden ${bgGradient}`}
    >
      {/* Optional Wave Background Pattern */}
      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/wavecut.png')] bg-cover bg-center"></div>

      {/* Content Section */}
      <motion.div
        className={`relative z-10 w-full md:w-1/2 px-8 md:px-16 lg:px-24 py-20 ${
          reverse ? "md:order-2 text-left" : "text-left"
        }`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Subtitle */}
        <p className="text-gray-400 text-base md:text-lg font-semibold mb-2 tracking-wide">
          {subtitle}
        </p>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-4">
          {title} <br />
          <span className="text-[#00CFFF]">{highlight}</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg max-w-lg">{description}</p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className={`relative z-10 w-full md:w-1/2 flex justify-center items-center p-8 ${
          reverse ? "md:order-1" : ""
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={image}
          alt={highlight}
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default ImageTextGradientBanner;
