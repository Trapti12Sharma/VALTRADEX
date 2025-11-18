import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { y: 80, opacity: 0 },
  visible: (delay = 0) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: "easeOut", delay },
  }),
};

const AppPromotionSection = ({
  title = "Everything you need",
  highlight = "",
  subtitle = "Now delivering powerful trading tools, real-time insights, and a seamless experience for traders on the go.",
  bottomTitle = "Always ready for your next move",
  bottomSubtitle = "Wherever the market takes you, our suite of trading platforms ensures your preparedness at every stage.",
  qrImage,
  qrText = "Scan to download \n VARTRADEX app",
  phoneImage,
  appStoreImage,
  playStoreImage,
  apkImage,
  appStoreLink = "#",
  playStoreLink = "#",
  apkLink = "#",
}) => {
  return (
    <section className="relative bg-black text-white py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16 lg:gap-20">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 text-center md:text-left space-y-5 md:space-y-6"
        >
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            custom={0.1}
            className="text-2xl sm:text-3xl md:text-5xl font-extrabold leading-snug"
          >
            {title}
            <br className="hidden sm:block" />
            <span className="text-[#00CFFF]">{highlight}</span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            custom={0.2}
            className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            {subtitle}
          </motion.p>

          {/* QR + Downloads */}
          <motion.div
            variants={fadeUp}
            custom={0.3}
            className="flex flex-col sm:flex-row items-center md:items-start gap-6 sm:gap-10 justify-center md:justify-start"
          >
            {/* QR Code */}
            <div className="flex flex-col items-center sm:items-start">
              {qrImage && (
                <img
                  src={qrImage}
                  alt="QR Code"
                  className="w-24 sm:w-28 md:w-32 h-auto object-contain"
                />
              )}
              <p className="text-gray-400 text-xs sm:text-sm mt-2 text-center sm:text-left whitespace-pre-line">
                {qrText}
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex flex-wrap justify-center sm:justify-start gap-3">
                {appStoreImage && (
                  <a href={appStoreLink} target="_blank" rel="noreferrer">
                    <img
                      src={appStoreImage}
                      alt="App Store"
                      className="h-10 sm:h-12 w-auto object-contain hover:opacity-80 transition"
                    />
                  </a>
                )}

                {playStoreImage && (
                  <a href={playStoreLink} target="_blank" rel="noreferrer">
                    <img
                      src={playStoreImage}
                      alt="Google Play"
                      className="h-10 sm:h-12 w-auto object-contain hover:opacity-80 transition"
                    />
                  </a>
                )}
              </div>

              {apkImage && (
                <a href={apkLink} target="_blank" rel="noreferrer">
                  <img
                    src={apkImage}
                    alt="APK File"
                    className="h-10 sm:h-12 w-auto object-contain hover:opacity-80 transition"
                  />
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT PHONE IMAGE */}
        <motion.div
          variants={fadeUp}
          custom={0.2}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex-1 flex justify-center md:justify-end items-center"
        >
          {phoneImage && (
            <img
              src={phoneImage}
              alt="Trading App"
              className="w-[220px] sm:w-[280px] md:w-[340px] lg:w-[420px] object-contain drop-shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            />
          )}
        </motion.div>
      </div>

      {/* BOTTOM SECTION */}
      <motion.div
        variants={fadeUp}
        custom={0.4}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-16 md:mt-24 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-center md:text-left"
      >
        <h3 className="text-xl sm:text-2xl md:text-4xl font-extrabold leading-snug">
          {bottomTitle}
          <span className="text-[#00CFFF]">{highlight}</span>
        </h3>

        <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mx-auto md:mx-0">
          {bottomSubtitle}
        </p>
      </motion.div>
    </section>
  );
};

export default AppPromotionSection;
