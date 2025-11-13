import React from "react";
import { motion } from "framer-motion";

const StartTradingSection = () => {
  return (
    <section className="relative w-full h-[80vh] md:h-[90vh] flex items-center justify-center overflow-hidden bg-black text-white">
      {/* 🎥 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/page_steps_video2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* 🔲 Overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40"></div>

      {/* 💡 Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10 text-center md:text-left max-w-4xl px-6 md:px-12"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-8">
          Start trading forex with <br />
          <span className="text-[#00CFFF]">Valtradex</span> today.
        </h2>

        {/* 🪜 Steps Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center md:justify-start gap-8 mb-10"
        >
          {[
            { num: "1", label: "Register" },
            { num: "2", label: "Deposit" },
            { num: "3", label: "Trade" },
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white text-black flex items-center justify-center text-xl md:text-2xl font-bold mb-2 shadow-md">
                {step.num}
              </div>
              <p className="text-gray-300 text-sm md:text-base font-medium">
                {step.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-3"
        >
          <button className="bg-[#0040FF] hover:bg-[#0055FF] text-white px-8 py-3 rounded-md font-semibold transition duration-300">
            Trade Now
          </button>
          <a
            href="#"
            className="text-[#00CFFF] text-sm md:text-base hover:underline"
          >
            try demo
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StartTradingSection;
