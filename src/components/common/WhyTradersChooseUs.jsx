import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay },
  }),
};

const slideRight = {
  hidden: { x: 80, opacity: 0 },
  visible: (delay = 0) => ({
    x: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay },
  }),
};

const WhyTradersChooseUs = ({
  title = "Why traders choose us",
  highlight = ".",
  cards = [],
  awards = [],
}) => {
  return (
    <section className="bg-black text-white py-20 md:py-32 overflow-hidden relative">
      {/* ===== Title ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-center text-3xl md:text-5xl font-extrabold mb-16"
      >
        {title}
        <span className="text-[#00CFFF]">{highlight}</span>
      </motion.h2>

      {/* ===== Dynamic Cards Section (Image + Text) ===== */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 place-items-center">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={0.15 * (i + 1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full text-center flex flex-col items-center"
          >
            {/* Image */}
            <img
              src={card.image}
              alt={card.alt}
              className="w-full max-w-[380px] object-contain hover:scale-105 transition-transform duration-500"
            />

            {/* Title */}
            {card.title && (
              <h3 className="mt-6 text-lg md:text-xl font-semibold text-white">
                {card.title}
              </h3>
            )}

            {/* Description */}
            {card.description && (
              <p className="mt-3 text-gray-400 text-sm md:text-base leading-relaxed max-w-[350px]">
                {card.description}
              </p>
            )}
          </motion.div>
        ))}
      </div>

      {/* ===== Dynamic Awards Section ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-20 flex flex-wrap justify-center items-center gap-10">
        {awards.map((award, i) => (
          <motion.div
            key={i}
            variants={slideRight}
            custom={i * 0.2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-28 md:w-36 lg:w-40 opacity-90 hover:opacity-100 transition"
          >
            <img
              src={award}
              alt={`Award ${i + 1}`}
              className="w-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyTradersChooseUs;
