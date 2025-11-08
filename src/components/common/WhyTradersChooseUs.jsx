import React from "react";
import { motion } from "framer-motion";

// Import your downloaded images
import card1 from "../../assets/homepage7.png";
import card2 from "../../assets/homepage8.png";
import card3 from "../../assets/homepage9.png";

import award1 from "../../assets/award1.svg";
import award2 from "../../assets/award2.svg";
import award3 from "../../assets/award3.svg";
import award4 from "../../assets/award4.svg";
import award5 from "../../assets/award5.svg";
import award6 from "../../assets/award6.svg";

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

const WhyTradersChooseUs = () => {
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
        Why traders choose us
        <span className="text-[#00CFFF]">.</span>
      </motion.h2>

      {/* ===== Card Section ===== */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        <motion.div
          variants={fadeUp}
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <img
            src={card1}
            alt="Your key to staying ahead"
            className="w-full max-w-[380px] object-contain hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <img
            src={card2}
            alt="Support whenever wherever"
            className="w-full max-w-[380px] object-contain hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        <motion.div
          variants={fadeUp}
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full flex justify-center"
        >
          <img
            src={card3}
            alt="Your capital is protected"
            className="w-full max-w-[380px] object-contain hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>

      {/* ===== Awards Section ===== */}
      <div className="max-w-7xl mx-auto px-6 mt-20 flex flex-wrap justify-center items-center gap-10">
        {[award1, award2, award3, award4, award5, award6].map((award, i) => (
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
