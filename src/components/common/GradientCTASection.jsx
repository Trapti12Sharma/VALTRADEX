import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 60, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

/**
 * ✅ Reusable Gradient CTA Section
 * Props:
 * - title: main heading
 * - description: subtext
 * - buttonText: CTA button label
 * - onButtonClick: button handler
 * - gradientColors: optional custom background (default matches screenshot)
 */
const GradientCTASection = ({
  title = "Looking for Even Lower Commissions?",
  description = "Step up to Pro ECN — our most cost-effective account built for high-volume traders.",
  buttonText = "Upgrade to Pro ECN",
  onButtonClick,
  gradientColors = "bg-gradient-to-b from-black via-[#001A3E] to-[#1B1464]",
}) => {
  return (
    <section
      className={`relative flex flex-col items-center justify-center text-center text-white px-6 py-32 md:py-44 ${gradientColors}`}
    >
      {/* ✅ Content with animation */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-3xl mx-auto"
      >
        <h1 className="text-3xl md:text-5xl font-extrabold mb-6">{title}</h1>

        <p className="text-gray-300 text-base md:text-lg mb-10">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-white hover:bg-gray-200 text-black font-semibold px-8 py-3 rounded-lg text-base md:text-lg transition-all"
          >
            {buttonText}
          </button>
        )}
      </motion.div>
    </section>
  );
};

export default GradientCTASection;
