import React from "react";
import { motion } from "framer-motion";

/**
 * Reusable Hero Image Banner
 *
 * Props:
 * - backgroundImage: string (URL or imported image)
 * - subtitle: string (small text above heading)
 * - title: string (main heading)
 * - accentDot: boolean (show cyan dot at end of heading)
 * - description: string (optional paragraph)
 * - height: string (Tailwind height class or CSS value, default "min-h-[60vh]")
 * - align: "left" | "center" (alignment of text)
 * - overlayOpacity: number (0-1) overlay darkness (default 0.55)
 */
const HeroImageBanner = ({
  backgroundImage,
  subtitle = "",
  title = "Your questions, our answers.",
  accentDot = true,
  description = "",
  height = "min-h-[60vh]",
  align = "left",
  overlayOpacity = 0.55,
}) => {
  const textAlignClass = align === "center" ? "text-center" : "text-left";
  const justifyClass = align === "center" ? "items-center" : "items-start";
  const containerPadding = "px-6 md:px-12 lg:px-24";

  return (
    <section
      className={`relative w-full ${height} flex ${justifyClass} bg-cover bg-center bg-no-repeat`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
      aria-label="Hero banner"
    >
      {/* dark overlay for contrast */}
      <div
        className="absolute inset-0"
        style={{
          background: `rgba(0,0,0,${overlayOpacity})`,
        }}
        aria-hidden="true"
      />

      {/* content wrapper */}
      <div
        className={`relative z-10 w-full flex ${justifyClass} ${containerPadding}`}
      >
        <div className={`max-w-4xl py-20 ${textAlignClass} w-full`}>
          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-gray-200 text-sm md:text-base font-medium mb-3"
            >
              {subtitle}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className={`font-extrabold text-white leading-tight tracking-tight ${
              // responsive sizing like screenshot: huge on desktop, smaller on mobile
              "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl"
            }`}
            style={{ wordBreak: "break-word" }}
          >
            {title}
            {accentDot && (
              <span
                className="inline-block ml-2 align-middle"
                aria-hidden="true"
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: "999px",
                  background: "linear-gradient(180deg,#00CFFF,#007BFF)",
                  boxShadow: "0 0 12px rgba(0,207,255,0.45)",
                }}
              />
            )}
          </motion.h1>

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-6 text-gray-200 max-w-2xl text-sm sm:text-base"
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroImageBanner;
