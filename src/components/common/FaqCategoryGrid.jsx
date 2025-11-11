import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable FAQ Grid Section
 * Props:
 * - title: string (main heading)
 * - description: string (subheading paragraph)
 * - categories: array of { icon, label, link }
 * - accentDot: boolean (show cyan dot after title)
 */
const FaqCategoryGrid = ({
  title = "Frequently asked questions",
  description = "If you’re looking for immediate answers, our Help Centre provides a comprehensive overview on all aspects of trading on our platform.",
  categories = [],
  accentDot = true,
}) => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* 🔹 Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3"
        >
          {title}
          {accentDot && (
            <span className="inline-block ml-1 w-2.5 h-2.5 bg-[#00CFFF] rounded-full align-middle" />
          )}
        </motion.h2>

        {/* 🔹 Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base max-w-3xl mx-auto mb-10"
        >
          {description}
        </motion.p>

        {/* 🔹 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-8 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="text-5xl text-[#0040FF] mb-5">{item.icon}</div>

              {/* Label */}
              <h3 className="text-gray-900 font-semibold text-lg mb-3">
                {item.label}
              </h3>

              {/* Link */}
              <a
                href={item.link || "#"}
                className="text-[#0040FF] font-semibold text-sm hover:underline"
              >
                See more &gt;
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqCategoryGrid;
