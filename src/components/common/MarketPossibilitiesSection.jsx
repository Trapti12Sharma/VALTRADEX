import React from "react";
import { motion } from "framer-motion";

const MarketPossibilitiesSection = () => {
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
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-6xl px-6 flex flex-col items-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl font-extrabold text-gray-900 leading-snug mb-10"
        >
          Every market shift brings
          <br className="hidden md:block" /> limitless possibilities.
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 text-sm md:text-base font-semibold mb-16">
          {[
            "Forex",
            "Indices",
            "Energies",
            "Precious Metals",
            "Soft Commodities",
            "ETFs",
            "CFD Shares",
            "CFD Bonds",
          ].map((item, idx) => (
            <button
              key={idx}
              className={`${
                item === "Forex"
                  ? "text-[#0040FF] border-b-2 border-[#0040FF]"
                  : "text-gray-800 hover:text-[#0040FF]"
              } transition`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* 3D Product Video */}
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
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Market Price Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-left w-full max-w-6xl text-gray-800">
          {[
            {
              pair: "CHFJPY",
              price: "$190.427",
              change: "0.671%",
              desc: "Swiss Franc vs JPY",
            },
            {
              pair: "USDCNH",
              price: "$7.124",
              change: "0.066%",
              desc: "US Dollar vs China Yuan",
            },
            {
              pair: "XAUUSD",
              price: "$4000.900",
              change: "0.501%",
              desc: "Gold vs US Dollar",
            },
            {
              pair: "EURUSD",
              price: "$1.156",
              change: "0.200%",
              desc: "Euro vs US Dollar",
            },
            {
              pair: "GBPUSD",
              price: "$1.316",
              change: "0.289%",
              desc: "Pound vs US Dollar",
            },
            {
              pair: "DJ30",
              price: "$47890",
              change: "0.088%",
              desc: "Dow Jones Index",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-start sm:items-center md:items-start text-xs md:text-sm"
            >
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-green-600 flex items-center justify-center text-white text-[10px]">
                  ▲
                </div>
                <span className="font-bold text-black">{item.pair}</span>
                <span className="font-semibold text-black">{item.price}</span>
              </div>
              <p className="text-gray-500">{item.desc}</p>
              <p className="text-[11px] text-gray-400">{item.change}</p>
            </div>
          ))}
        </div>

        {/* Time Update Text */}
        <p className="text-[11px] mt-8 text-[#0040FF] font-medium">
          LIVE (INDICATIVE) UPDATED: 14:59:07 GMT+5.5
        </p>
      </div>
    </section>
  );
};

export default MarketPossibilitiesSection;
