import React from "react";
import { motion } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      {/* 🎥 Background Video with both MP4 + WEBM */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/home_banner_video_new.webm"
          type="video/webm"
        />
        <source
          src="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/home_banner_video_new.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* ✨ Text & Button Section */}
      <div className="relative z-10 text-white px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold mb-4"
        >
          START <br /> TRADING
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-base md:text-lg text-gray-300 mb-8"
        >
          with an{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CFFF] to-[#007BFF] font-semibold">
            Award-Winning
          </span>{" "}
          Broker.
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#0040FF] px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </motion.button>

        {/* Down arrow animation */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-12 text-2xl text-gray-300"
        >
          <FaChevronDown />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
