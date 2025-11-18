import React, { useState } from "react";
import { motion } from "framer-motion";

const MarketPossibilitiesSection = ({
  title = "Every market shift brings",
  subtitle = "",
  subheading = "Trade global currencies with tight spreads, fast execution, and deep liquidity to maximize every market opportunity.",
  categories = [], // { name: "", description: "" }
}) => {
  const [active, setActive] = useState(categories[0]?.name);

  const activeDescription =
    categories.find((cat) => cat.name === active)?.description || "";

  return (
    <section className="relative w-full py-20 md:py-32 flex flex-col items-center text-center overflow-hidden bg-white">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover opacity-10"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/product_all.webm"
            type="video/webm"
          />
          <source
            src="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/product_all.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* 🔹 Dynamic Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-snug"
        >
          {title}
          <br className="hidden md:block" /> {subtitle}
        </motion.h2>

        {/* 🔹 Permanent Subheading (same always) */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gray-700 text-sm md:text-lg max-w-2xl mt-6"
        >
          {subheading}
        </motion.p>

        {/* 🔹 Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base font-semibold mt-10 mb-6">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActive(cat.name)}
              className={`transition ${
                active === cat.name
                  ? "text-[#0040FF] border-b-2 border-[#0040FF]"
                  : "text-gray-800 hover:text-[#0040FF]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* 🔹 Dynamic Paragraph BELOW Tabs */}
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-gray-700 text-sm md:text-lg max-w-2xl mb-16"
        >
          {activeDescription}
        </motion.p>

        {/* 3D Video */}
        <div className="relative flex justify-center items-center mb-20 w-full max-w-3xl">
          <video
            className="w-full h-auto object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/product_all.webm"
              type="video/webm"
            />
            <source
              src="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/product_all.mp4"
              type="video/mp4"
            />
          </video>
        </div>

        {/* Prices */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-left w-full max-w-6xl text-gray-800">
          {/* unchanged … */}
        </div>

        <p className="text-[11px] mt-8 text-[#0040FF] font-medium">
          LIVE (INDICATIVE) UPDATED: 14:59:07 GMT+5.5
        </p>
      </div>
    </section>
  );
};

export default MarketPossibilitiesSection;
