import React from "react";
import { motion } from "framer-motion";

const ImageTextCtaBanner = ({
  subtitle = "Copy Trading",
  title = "FOLLOW",
  highlight = "THE LEAD",
  description = "Step into smarter trading with VTrade.",
  buttonText = "Start Copying",
  buttonLink = "#",
  demoLink = "#",
  image,
  reverse = false,
}) => {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-center justify-between bg-[#0B0E17] text-white overflow-hidden px-6 md:px-20 lg:px-32">
      {/* 🔹 Left Content */}
      <motion.div
        className={`w-full md:w-1/2 ${
          reverse ? "md:order-2" : ""
        } text-center md:text-left space-y-5 md:pl-16 lg:pl-24`}
        initial={{ opacity: 0, x: reverse ? 100 : -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Subtitle */}
        <p className="text-gray-400 text-lg font-medium">{subtitle}</p>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
          {title} <br />
          <span className="text-[#00CFFF]">{highlight}</span>
        </h1>

        {/* Description */}
        <p className="text-gray-300 text-lg">{description}</p>

        {/* CTA Buttons */}
        <div className="mt-6">
          <a
            href={buttonLink}
            className="inline-block bg-[#0040FF] hover:bg-[#002ECF] transition-all text-white font-semibold px-8 py-3 rounded-md"
          >
            {buttonText}
          </a>
          <p className="mt-2 text-sm text-gray-400">
            try{" "}
            <a href={demoLink} className="text-[#00CFFF] hover:underline">
              demo
            </a>
          </p>
        </div>
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
          className="max-w-xs md:max-w-md lg:max-w-lg object-contain"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default ImageTextCtaBanner;
