import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable feature section with image on left & content on right
 * Props:
 * - image: image source
 * - title: main heading
 * - description: sub text under title
 * - subtitle: middle bold section heading (like "The account that grows with you")
 * - features: array of 4 feature text strings
 * - reverse: boolean → to reverse layout
 */
const FeatureSection = ({
  image,
  title = "Closer Than You Think",
  description = "Stay closer to the action with tight spreads that bring you a clearer, more efficient trading experience.",
  subtitle = "The account that grows with you",
  features = [
    "Real market prices with no hidden markups",
    "Access forex, indices, commodities, and more.",
    "Use up to 500:1 leverage for ultimate flexibility.",
    "Build your strategies with precision tools across MT4, MT5, and TradingView.",
  ],
  reverse = false,
}) => {
  return (
    <section className="w-full bg-[#0B0D0F] text-white py-20 px-6 md:px-16 flex flex-col items-center">
      {/* 🔹 Top Section */}
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } items-center justify-between max-w-7xl w-full`}
      >
        {/* Left Image with bottom-to-up animation */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={image}
            alt={title}
            className="w-[80%] md:w-[70%] lg:w-[65%] object-contain drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-gray-300 text-base md:text-lg max-w-md mx-auto md:mx-0">
            {description}
          </p>
        </motion.div>
      </div>

      {/* 🔹 Middle Subtitle */}
      <motion.h3
        className="text-2xl md:text-3xl font-bold mt-16  px-4 py-2 rounded-sm text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {subtitle}
      </motion.h3>

      {/* 🔹 Bottom Feature Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full max-w-6xl"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {features.map((feature, i) => (
          <div
            key={i}
            className="border border-[#00CFFF] rounded-xl p-6 text-center text-sm md:text-base bg-[#0F121A] hover:bg-[#11161F] transition-all duration-300"
          >
            {feature}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FeatureSection;
