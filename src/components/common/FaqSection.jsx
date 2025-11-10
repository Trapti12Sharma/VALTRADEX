import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/**
 * Reusable FAQ Section
 * Props:
 * - title: string
 * - faqs: array of { question, answer }
 */
const FaqSection = ({ title = "Frequently Asked Questions.", faqs = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="bg-[#0B0E17] text-white py-20 px-6 md:px-16 lg:px-28">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-extrabold text-center mb-12"
      >
        {title}
        <span className="text-[#00CFFF]">.</span>
      </motion.h2>

      {/* FAQ List */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto divide-y divide-gray-700 border border-gray-800 rounded-md overflow-hidden"
      >
        {faqs.map((item, index) => (
          <div key={index} className="bg-[#0B0E17]">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex justify-between items-center text-left py-5 px-6 hover:bg-[#0F121A] transition-colors"
            >
              <span className="text-base md:text-lg font-medium text-gray-100">
                {index + 1}. {item.question}
              </span>
              {openIndex === index ? (
                <Minus className="text-[#00CFFF]" size={18} />
              ) : (
                <Plus className="text-[#00CFFF]" size={18} />
              )}
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 text-gray-400 text-sm md:text-base leading-relaxed"
                >
                  {item.answer}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FaqSection;
