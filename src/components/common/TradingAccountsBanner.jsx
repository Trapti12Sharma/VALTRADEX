import React from "react";
import { motion } from "framer-motion";

const TradingAccountsBanner = ({
  subtitle = "Trading Accounts",
  title = "YOUR GOALS",
  highlight = "MATTER",
  description = "You're one of a kind. Whatever your trading objectives, we have an account type to match.",
  videoSrc = "https://www.vtmarkets.com/wp-content/themes/vt/video/tradingaccounts_banner_video.mp4",
}) => {
  return (
    <section className="relative w-full h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* ✨ Animated Content */}
      <div className="relative z-10 px-4 md:px-8 text-white">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl text-gray-300 font-medium mb-3"
        >
          {subtitle}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4"
        >
          {title} <span className="text-[#00CFFF]">{highlight}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto"
        >
          {description}
        </motion.p>

        {/* Down Arrow Animation */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-10 text-2xl text-gray-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-8 h-8 mx-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default TradingAccountsBanner;
