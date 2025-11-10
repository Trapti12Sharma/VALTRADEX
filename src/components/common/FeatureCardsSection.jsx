import React from "react";
import { motion } from "framer-motion";

const FeatureCardsSection = ({
  title = "Always One Step Ahead",
  features = [],
}) => {
  return (
    <section className="py-20 bg-[#0B0E17] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
        >
          {title}
        </motion.h2>

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
              {/* Icon */}
              <div className="flex justify-center mb-6 text-[#00CFFF] text-5xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-400 text-base">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCardsSection;
