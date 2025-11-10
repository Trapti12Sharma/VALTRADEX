import React from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaChartBar,
  FaChartLine,
  FaMobileAlt,
} from "react-icons/fa";
import { SiTradingview } from "react-icons/si";

const PlatformCardsSection = () => {
  // 🔹 Data for each card
  const platforms = [
    {
      title: "VAVTRADEX",
      subtitle: "Unparalleled Range",
      description:
        "The award-winning all-terrain. Suited for traders that need to execute trades, monitor markets, and stay ahead of the pack—no matter where the road takes them.",
      icon: <FaMobileAlt size={36} className="text-[#00CFFF]" />,
    },
    {
      title: "MetaTrader 5",
      subtitle: "Ultimate Control",
      description:
        "The next-gen powerhouse. With multi-asset capabilities, it’s designed to bring you to the finish line. Best for new traders getting the hang of trading.",
      icon: <FaChartLine size={36} className="text-[#00CFFF]" />,
    },
    {
      title: "MetaTrader 4",
      subtitle: "Timeless Performance",
      description:
        "The classic contender. Packed with advanced tools, it handles every turn in the trading circuit with ease. Perfect for traders who know what they are doing.",
      icon: <FaChartBar size={36} className="text-[#00CFFF]" />,
    },
    {
      title: "TradingView",
      subtitle: "The Precision-Tuned",
      description:
        "The trailblazer that thrives on tech. Designed for traders who live on strategy, it’s the perfect partner for those who map out every move.",
      icon: <SiTradingview size={36} className="text-[#00CFFF]" />,
    },
  ];

  return (
    <section className="bg-[#0D111A] text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Choose Your <span className="text-[#00CFFF]">Platform</span>
        </h2>
      </div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {platforms.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#141922] hover:bg-[#1C2230] transition-all rounded-2xl p-8 flex flex-col justify-between shadow-lg border border-[#1F2A3A]"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <h4 className="text-gray-300 font-semibold mb-3">
                  {item.subtitle}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                  {item.description}
                </p>
              </div>
              <div className="ml-4">{item.icon}</div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-4 flex items-center justify-center bg-transparent border border-gray-400 text-white py-2 px-5 rounded-md hover:bg-[#00CFFF] hover:text-black hover:border-[#00CFFF] transition-all w-fit"
            >
              Start Now <FaArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlatformCardsSection;
