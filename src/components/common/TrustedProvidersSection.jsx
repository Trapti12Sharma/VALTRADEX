import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable Trusted Providers Section
 * Props:
 * - title: string
 * - logos: array of { src, alt, width, height }
 * - disclaimer: string
 */
const TrustedProvidersSection = ({
  title = "Our preferred forex signal providers",
  logos = [],
  disclaimer = "Disclaimer: VT Markets does not provide its own trading signals for clients. The signal service is provided by 3rd parties, and their advice does not constitute and should not be regarded as investment advice from VT Markets. All clients are advised to act on signals at their own discretion.",
}) => {
  return (
    <section className="bg-white text-center py-20 px-6 md:px-16 lg:px-28">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-12"
      >
        {title}
      </motion.h2>

      {/* Logos Row */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mb-10"
      >
        {logos.map((logo, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center items-center"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              width={logo.width || 180}
              height={logo.height || 80}
              className="object-contain"
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Disclaimer */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="text-gray-700 text-sm md:text-base leading-relaxed max-w-5xl mx-auto"
      >
        {disclaimer}
      </motion.p>
    </section>
  );
};

export default TrustedProvidersSection;
