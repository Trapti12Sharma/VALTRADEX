import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable Dark Hero Banner (Valtradex style)
 */
const ImageTextDarkBanner = ({
  subtitle = "Market Buzz",
  title = "NO MORE",
  highlight = "ENDLESS",
  title2 = "SCROLLING",
  description = "Discover what’s moving the market today with Valtradex' Market Buzz.",
  image,
  reverse = false,
}) => {
  return (
    <section className="relative flex flex-col md:flex-row items-center justify-between min-h-[80vh] bg-[#000000] text-white overflow-hidden px-4 md:px-10 lg:px-20">
      {/* 🔹 Left Content */}
      <motion.div
        className={`w-full md:w-1/2 ${
          reverse ? "md:order-2 md:pl-12" : "md:pl-20"
        } text-left space-y-4 z-10`}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Subtitle */}
        <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
          {subtitle}
        </p>

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
          {title}
          <br />
          <span className="text-[#00CFFF]">{highlight}</span>
          <br />
          {title2}
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-sm md:text-base max-w-md leading-relaxed">
          {description}
        </p>
      </motion.div>

      {/* 🔹 Right Image */}
      <motion.div
        className={`w-full md:w-1/2 flex justify-center mt-10 md:mt-0 ${
          reverse ? "md:order-1" : ""
        }`}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <motion.img
          src={image}
          alt={highlight}
          className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain drop-shadow-[0_0_20px_rgba(0,207,255,0.5)]"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>

      {/* 🔽 Scroll Icon */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="white"
          className="w-6 h-6 opacity-70"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default ImageTextDarkBanner;
