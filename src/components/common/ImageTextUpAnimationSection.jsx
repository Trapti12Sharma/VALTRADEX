import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable component for animated left/right image + text section
 * Props:
 * - image: Image URL
 * - title: Main heading
 * - description: Paragraph text
 * - reverse: Boolean (if true, swaps image and text sides)
 * - bgColor: Background color (default dark)
 */
const ImageTextUpAnimationSection = ({
  image,
  title = "Trading Now Made Smarter",
  description = "VTrade makes copy trading effortless. Follow top traders, replicate their strategies in real-time, and grow your portfolio without needing market expertise.",
  reverse = false,
  bgColor = "#0B0E17",
}) => {
  return (
    <section
      className={`w-full min-h-[70vh] flex flex-col md:flex-row items-center justify-between text-white px-6 md:px-16 lg:px-28 py-16`}
      style={{ backgroundColor: bgColor }}
    >
      {/* 🔹 Left / Right Image */}
      <div
        className={`w-full md:w-1/2 flex justify-center ${
          reverse ? "md:order-2" : ""
        }`}
      >
        <img
          src={image}
          alt={title}
          className="max-w-xs md:max-w-md lg:max-w-lg object-contain"
        />
      </div>

      {/* 🔹 Text Content (Bottom-to-Up Animation) */}
      <motion.div
        className={`w-full md:w-1/2 mt-10 md:mt-0 ${
          reverse ? "md:order-1 md:text-right" : "md:text-left"
        } text-center md:text-left space-y-6`}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-extrabold leading-snug text-white">
          {title}
        </h2>

        <p className="text-gray-400 text-lg md:text-[17px] leading-relaxed">
          {description}
        </p>
      </motion.div>
    </section>
  );
};

export default ImageTextUpAnimationSection;
