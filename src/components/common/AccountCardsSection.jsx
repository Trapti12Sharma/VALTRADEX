import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const accountsData = [
  {
    title: "STANDARD STP",
    subtitle: "Your direct line to the markets",
    description:
      "Enjoy ultra-fast execution, competitive spreads, and zero dealing desk interference. Transparent, seamless, and built for every trader.",
    bgColor: "#0A33D3",
    link: "https://www.vtmarkets.com/raw-ecn/",
  },
  {
    title: "RAW ECN",
    subtitle: "Precision trading with zero compromise",
    description:
      "Experience razor-thin spreads straight from liquidity providers, ultra-fast execution, and transparent pricing. Designed for pros who demand the edge.",
    bgColor: "#00D8F6",
    link: "https://www.vtmarkets.com/raw-ecn/",
  },
  {
    title: "PRO ECN",
    subtitle: "Optimized for high-volume traders",
    description:
      "Unlock ultra-low commissions, raw pricing, and top-tier execution, exclusively built for the pros who demand performance and scale.",
    bgColor: "#0A33D3",
    link: "https://www.vtmarkets.com/raw-ecn/",
  },
  {
    title: "SWAP FREE",
    subtitle: "Trading without limits",
    description:
      "Say goodbye to overnight fees and hello to a cleaner, simpler way to trade. Tailored for long-term traders and Shariah-compliant needs.",
    bgColor: "#00D8F6",
    link: "https://www.vtmarkets.com/raw-ecn/",
  },
  {
    title: "CENT",
    subtitle: "Your launchpad to bigger things",
    description:
      "Start trading with less and learn as you go. Trade with cents, not dollars, and minimise your risk while experiencing the real market.",
    bgColor: "#0A33D3",
    link: "https://www.vtmarkets.com/raw-ecn/",
  },
];

const AccountCardsSection = () => {
  return (
    <section className="py-20 bg-[#0B0E17] text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-14"
        >
          Choose Your Account
        </motion.h2>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {accountsData.map((acc, index) => (
            <motion.a
              key={index}
              href={acc.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{ backgroundColor: acc.bgColor }}
              className={`rounded-2xl p-8 flex flex-col justify-between h-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
            >
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-3">
                  {acc.title}
                </h3>
                <p className="text-base font-semibold mb-3 text-white/90">
                  {acc.subtitle}
                </p>
                <p className="text-sm text-white/80 leading-relaxed">
                  {acc.description}
                </p>
              </div>

              {/* Button Icon */}
              <div className="flex justify-end mt-6">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <FiArrowRight className="text-white text-lg" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AccountCardsSection;
