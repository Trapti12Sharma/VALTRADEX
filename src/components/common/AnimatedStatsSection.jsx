import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut", delay },
  }),
};

/**
 * ✅ Reusable Animated Section with Image + Text + Stats Bar
 * Props:
 * - title: main heading
 * - description: paragraph under title
 * - image: right-side image
 * - stats: [{ label: "Access forex pairs", value: "40+" }, ...]
 * - reverse: swaps image/text sides
 */
const AnimatedStatsSection = ({
  title = "Stake Your Claim",
  description = "With a daily turnover of $7.5 trillion, the sheer size of the forex market impacts all tradable markets, including futures, bonds, and stocks.",
  image,
  stats = [
    { label: "Access forex pairs", value: "40+" },
    { label: "Leverage up to", value: "500:1" },
    { label: "FX spread from", value: "0.0" },
  ],
  reverse = false,
}) => {
  return (
    <section className="bg-black text-white py-14 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12 lg:px-20 overflow-hidden">
      <div
        className={`max-w-7xl mx-auto flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between gap-10 sm:gap-14 md:gap-20`}
      >
        {/* ✅ Left Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full md:w-1/2 text-center md:text-left space-y-4 sm:space-y-5 px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug tracking-tight">
            {title}
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm md:text-base lg:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            {description}
          </p>
        </motion.div>

        {/* ✅ Right Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="w-full md:w-1/2 flex justify-center items-center px-4 sm:px-6 md:px-8 lg:px-10"
        >
          <img
            src={image}
            alt={title}
            className="w-[200px] sm:w-[260px] md:w-[360px] lg:w-[440px] xl:w-[480px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>

      {/* ✅ Stats Bar */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="mt-10 sm:mt-12 md:mt-16 flex flex-wrap justify-center items-center gap-5 sm:gap-8 md:gap-10 bg-gradient-to-r from-[#001F3F] via-[#0034A5] to-[#001F3F] rounded-xl border border-[#007bff80] shadow-[0_0_25px_rgba(0,123,255,0.3)] max-w-5xl mx-auto px-6 sm:px-10 md:px-14 lg:px-16 py-6 sm:py-8 md:py-10"
      >
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center min-w-[100px] sm:min-w-[120px]"
          >
            <p className="text-gray-300 text-xs sm:text-sm md:text-base mb-1 sm:mb-2">
              {item.label}
            </p>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
              {item.value}
            </h3>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AnimatedStatsSection;
