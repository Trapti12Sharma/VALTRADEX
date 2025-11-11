import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

/**
 * 🔹 Reusable full-screen video hero section
 * Props:
 * - videoMp4: video file (local or remote)
 * - videoWebm: optional fallback
 * - title: main text
 * - highlight: gradient text line
 * - description: short text
 * - buttonText: optional CTA button
 * - onButtonClick: click handler for CTA
 */
const VideoBanner = ({
  videoMp4,
  videoWebm,
  title = "Discover Trading",
  highlight = "With Confidence",
  description = "Experience cutting-edge technology and seamless access to the global markets with Valtradex.",
  buttonText = "Start Trading Now",
  onButtonClick,
}) => {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center overflow-hidden">
      {/* 🔹 Background Video */}
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

      {/* 🔹 Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* 🔹 Text Content */}
      <div className="relative z-10 text-white px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          {title}
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CFFF] to-[#007BFF]">
            {highlight}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto mb-8"
        >
          {description}
        </motion.p>

        {buttonText && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onButtonClick}
            className="bg-white text-[#0040FF] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition-all"
          >
            {buttonText}
          </motion.button>
        )}

        {/* 🔽 Scroll Icon Animation */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-10 text-2xl text-gray-300"
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </section>
  );
};

export default VideoBanner;
