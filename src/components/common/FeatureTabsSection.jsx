import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**
 * Dynamic Two-Tab Feature Section
 * Props:
 * - tabs: [
 *    { title: "Following Trades", cards: [{ icon, heading, description }], buttonText, buttonLink },
 *    { title: "Providing Signals", cards: [{ icon, heading, description }], buttonText, buttonLink }
 *   ]
 */
const FeatureTabsSection = ({ tabs = [] }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="bg-[#0B0E17] text-white py-20 px-6 md:px-16 lg:px-28 overflow-hidden">
      {/* 🔹 Tabs Header with underline animation */}
      <div className="relative flex justify-center items-center gap-12 border-b border-gray-700 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`relative pb-3 text-xl md:text-2xl font-semibold transition-all ${
              activeTab === index
                ? "text-[#00CFFF]"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {tab.title}
            {activeTab === index && (
              <motion.div
                layoutId="underline"
                className="absolute left-0 bottom-0 h-[2px] w-full bg-[#00CFFF] rounded-full"
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* 🔹 Animated Card Slider Section */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, x: activeTab === 0 ? -50 : 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        {tabs[activeTab].cards.map((card, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0F121A] border border-gray-800 hover:border-[#00CFFF] rounded-2xl p-8 text-center shadow-md w-full max-w-sm"
          >
            {/* Icon */}
            <div className="flex justify-center text-[#00CFFF] text-4xl mb-4">
              {card.icon}
            </div>
            {/* Heading */}
            <h3 className="text-lg md:text-xl font-bold mb-3">
              {card.heading}
            </h3>
            {/* Description */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* 🔹 CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
        className="flex justify-center mt-12"
      >
        <a
          href={tabs[activeTab].buttonLink || "#"}
          className="flex items-center gap-2 bg-[#0040FF] hover:bg-[#002ECF] transition-all text-white font-semibold px-8 py-3 rounded-md"
        >
          {tabs[activeTab].buttonText || "Get Started"} <ArrowRight size={18} />
        </a>
      </motion.div>
    </section>
  );
};

export default FeatureTabsSection;
