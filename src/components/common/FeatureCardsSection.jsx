import React from "react";
import { motion } from "framer-motion";

const FeatureCardsSection = ({
  title = "Always One Step Ahead",
  subtitle = "",
  description = "",
  features = [],
}) => {
  return (
    <section className="py-20 bg-[#0B0E17] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title (smaller now) */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-4"
        >
          {title}
        </motion.h2>

        {/* Subtitle */}
        {subtitle && (
          <motion.h3
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-center text-[#00CFFF] mb-3"
          >
            {subtitle}
          </motion.h3>
        )}

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center max-w-3xl mx-auto mb-14 text-base md:text-lg"
          >
            {description}
          </motion.p>
        )}

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#111319] rounded-2xl border border-gray-800 p-10 text-center hover:border-[#00CFFF] transition-all duration-300 hover:shadow-[0_0_15px_#00CFFF]/30"
            >
              <div className="flex justify-center mb-6 text-[#00CFFF] text-5xl">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              <p className="text-gray-400 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
