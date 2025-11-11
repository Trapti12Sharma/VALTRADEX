import React from "react";
import { motion } from "framer-motion";

const ImageTextStatsSection = ({
  image,
  title,
  description,
  stats = [],
  reverse = false,
  background = "#0D0D0D",
}) => {
  return (
    <section
      className="w-full py-20 md:py-28 px-6"
      style={{ backgroundColor: background }}
    >
      <div
        className={`max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center md:w-1/2"
        >
          <img
            src={image}
            alt={title}
            className="max-w-[300px] md:max-w-[400px] lg:max-w-[450px] object-contain"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left md:w-1/2"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto md:mx-0">
            {description}
          </p>
        </motion.div>
      </div>

      {/* Stats cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        viewport={{ once: true }}
        className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center text-white border border-gray-700 rounded-xl py-8 px-4 transition-transform hover:scale-105 duration-300"
            style={{
              borderImage:
                "linear-gradient(to right, #00CFFF, #0040FF) 1 round",
            }}
          >
            <p className="text-base md:text-lg font-medium">{stat}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default ImageTextStatsSection;
