import React from "react";
import { motion } from "framer-motion";

const IconCardsAnimatedSection = ({
  title,
  cards = [],
  background = "#0D0D0D",
}) => {
  return (
    <section
      className="w-full py-20 px-6 text-center"
      style={{ backgroundColor: background }}
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold text-white mb-16"
      >
        {title}
      </motion.h2>

      {/* Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: index * 0.2,
              type: "spring",
              stiffness: 100,
            }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-start bg-transparent border border-gray-700 rounded-2xl p-8 text-white hover:shadow-[0_0_20px_rgba(0,207,255,0.3)] hover:scale-105 transition-all duration-300"
          >
            {/* Icon */}
            <div className="text-[#00CFFF] text-4xl mb-5">{card.icon}</div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-bold mb-3">{card.title}</h3>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IconCardsAnimatedSection;
