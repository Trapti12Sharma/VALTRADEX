import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const HeroSection = ({
  title = "START\nTRADING",
  subtitle = "with an Award-Winning Broker.",
  buttonText = "Get Started",
  onButtonClick = () => {},
  videoMp4,
  videoWebm,
  showArrow = true,
}) => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        {videoWebm && <source src={videoWebm} type="video/webm" />}
        {videoMp4 && <source src={videoMp4} type="video/mp4" />}
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* ✨ Content */}
      <div className="relative z-10 text-white px-4">
        {/* Dynamic Title (supports line breaks) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 whitespace-pre-line"
        >
          {title}
        </motion.h1>

        {/* Dynamic Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-base md:text-lg text-gray-300 mb-8"
        >
          {subtitle}
        </motion.p>

        {/* Dynamic Button */}
        {buttonText && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonClick}
            className="bg-white text-[#0040FF] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            {buttonText}
          </motion.button>
        )}

        {/* Down Arrow (optional) */}
        {showArrow && (
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="mt-12 text-2xl text-gray-300"
          >
            <FaChevronDown />
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
