import React from "react";
import { motion } from "framer-motion";

const StartTradingSection = ({
  title,
  highlight,
  description,
  videoUrl,
  steps = [],
  buttonText,
  demoText,
  onButtonClick,
  onDemoClick,
}) => {
  return (
    <section className="relative w-full h-auto py-32 md:py-40 flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 🎥 Background Video */}
      {videoUrl && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
        className="relative z-10 text-center md:text-left max-w-4xl px-6 md:px-12"
      >
        {/* Heading (SMALLER NOW) */}
        <h2 className="text-2xl md:text-4xl font-extrabold leading-tight mb-6">
          {title} <br />
          <span className="text-[#00CFFF] text-xl md:text-4xl">
            {highlight}
          </span>
        </h2>

        {/* Dynamic Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-300 text-sm md:text-lg leading-relaxed mb-10"
          >
            {description}
          </motion.p>
        )}

        {/* Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start gap-8 mb-10"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center text-xl md:text-2xl font-bold mb-2 shadow-md">
                {step.num}
              </div>
              <p className="text-gray-300 text-sm md:text-base font-medium">
                {step.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <button
            onClick={onButtonClick}
            className="bg-[#0040FF] hover:bg-[#0055FF] text-white px-8 py-3 rounded-md font-semibold transition duration-300"
          >
            {buttonText}
          </button>

          <button
            onClick={onDemoClick}
            className="text-[#00CFFF] text-sm md:text-base hover:underline"
          >
            {demoText}
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StartTradingSection;
