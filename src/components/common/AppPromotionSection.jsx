import React from "react";
import { motion } from "framer-motion";
import qrCode from "../../assets/homepage1.svg";
import appStore from "../../assets/homepage2.svg";
import playStore from "../../assets/homepage3.svg";
import apkFile from "../../assets/homepage4.svg";
import phoneImage from "../../assets/homepage5.png";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay },
  }),
};

const AppPromotionSection = () => {
  return (
    <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* ✅ Left Content with Staggered Animation */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 text-left space-y-6"
        >
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-3xl md:text-5xl font-extrabold leading-snug"
          >
            Everything you need <br /> and more
            <span className="text-[#00CFFF]">.</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md"
          >
            Now delivering powerful trading tools, real-time insights, and a
            seamless experience for traders on the go.
          </motion.p>

          {/* QR + App Download Buttons */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
          >
            {/* QR Code */}
            <div className="flex flex-col items-center">
              <img
                src={qrCode}
                alt="QR Code"
                className="w-28 h-28 object-contain"
              />
              <p className="text-gray-400 text-xs mt-2">
                Scan to download <br /> VARTRADEX app
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <a href="#" target="_blank">
                  <img
                    src={appStore}
                    alt="App Store"
                    className="h-10 w-auto object-contain hover:opacity-80 transition"
                  />
                </a>
                <a href="#" target="_blank">
                  <img
                    src={playStore}
                    alt="Google Play"
                    className="h-10 w-auto object-contain hover:opacity-80 transition"
                  />
                </a>
              </div>
              <a href="#" target="_blank">
                <img
                  src={apkFile}
                  alt="APK File"
                  className="h-10 w-auto object-contain hover:opacity-80 transition"
                />
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* ✅ Right Phone Animation */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex justify-center items-center"
        >
          <img
            src={phoneImage}
            alt="Trading App"
            className="w-[260px] md:w-[360px] lg:w-[420px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
          />
        </motion.div>
      </div>

      {/* ✅ Bottom Section - Also Animates from Bottom to Top */}
      <motion.div
        variants={fadeUp}
        custom={0.4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mt-24 flex flex-col md:flex-row md:items-center md:justify-between text-left md:text-left gap-4"
      >
        <h3 className="text-2xl md:text-4xl font-extrabold leading-snug mb-0 md:mb-0 whitespace-nowrap">
          Always ready for your next move
          <span className="text-[#00CFFF]">.</span>
        </h3>

        <p className="text-gray-400 text-sm md:text-base max-w-2xl leading-relaxed md:ml-8">
          Wherever the market takes you, our suite of trading platforms ensures
          your preparedness at every stage.
        </p>
      </motion.div>
    </section>
  );
};

export default AppPromotionSection;
