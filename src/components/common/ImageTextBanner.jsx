import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable left-text-right-image animated hero section
 * Props:
 * - subtitle: smaller label text
 * - title: main heading
 * - highlight: highlighted part of heading
 * - description: paragraph
 * - image: right-side image
 * - reverse: true to swap sides
 */
const ImageTextBanner = ({
  subtitle = "Platforms",
  title = "BUILT FOR",
  highlight = "WINNERS",
  description = "Race to the top with trading platforms engineered for speed and performance.",
  image,
  reverse = false,
}) => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-[#0D111A] text-white overflow-hidden px-6 md:px-20">
      {/* 🔹 Left Content */}
      <motion.div
        className={`w-full md:w-1/2 ${
          reverse ? "md:order-2 md:pl-10" : "md:ml-12"
        } text-center md:text-left space-y-5`}
        initial={{ opacity: 0, x: reverse ? 80 : -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Subtitle */}
        <p className="text-gray-400 text-lg font-medium">{subtitle}</p>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          {title} <br />
          <span className="text-[#00CFFF]">{highlight}</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-base md:text-lg max-w-lg mx-auto md:mx-0">
          {description}
        </p>
      </motion.div>

      {/* 🔹 Right Image — now larger and responsive */}
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
          className="w-[85%] sm:w-[70%] md:w-[90%] lg:w-[95%] xl:w-[100%] max-w-[750px] object-contain drop-shadow-2xl"
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
};

export default ImageTextBanner;
