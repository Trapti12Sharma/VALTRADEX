import React from "react";
import { motion } from "framer-motion";
import laptopImage from "../../assets/homepage6.png";

const TradingPlatformsSection = ({ platforms = [] }) => {
  return (
    <section className="relative bg-black text-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex justify-center items-center">
        {/* Image With Tags */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center w-full"
        >
          <img
            src={laptopImage}
            alt="Trading Platforms"
            className="w-full max-w-[1100px] md:max-w-[1300px] object-contain rounded-lg shadow-2xl drop-shadow-[0_10px_40px_rgba(0,0,0,0.9)]"
          />

          {/* Floating Labels */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="absolute left-[5%] bottom-[25%] bg-gradient-to-r from-[#002b48] to-[#003b65] border border-[#00CFFF] rounded-md px-5 py-2 text-sm md:text-lg font-semibold shadow-lg"
          >
            MetaTrader 4
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute top-[10%] left-[35%] bg-gradient-to-r from-[#002b48] to-[#003b65] border border-[#00CFFF] rounded-md px-5 py-2 text-sm md:text-lg font-semibold shadow-lg"
          >
            MetaTrader 5
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="absolute right-[10%] top-[25%] bg-gradient-to-r from-[#002b48] to-[#003b65] border border-[#00CFFF] rounded-md px-5 py-2 text-sm md:text-lg font-semibold shadow-lg"
          >
            WebTrader
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute right-[18%] bottom-[18%] bg-gradient-to-r from-[#002b48] to-[#003b65] border border-[#00CFFF] rounded-md px-5 py-2 text-sm md:text-lg font-semibold shadow-lg"
          >
            TradingView
          </motion.div>
        </motion.div>
      </div>

      {/* ⚡ Dynamic Content With Infinite Animation */}
      <div className="max-w-5xl mx-auto px-6 mt-20 space-y-16">
        {platforms.map((item, index) => (
          <motion.div
            key={index}
            animate={{
              x: index % 2 === 0 ? [0, -20, 0] : [0, 20, 0], // left-right-left / right-left-right
            }}
            transition={{
              repeat: Infinity,
              duration: 4,
              ease: "easeInOut",
            }}
            className="text-center"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-[#00CFFF]">
              {item.title}
            </h3>

            <p className="text-gray-300 text-sm md:text-lg leading-relaxed max-w-3xl mx-auto">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>
    </section>
  );
};

export default TradingPlatformsSection;
