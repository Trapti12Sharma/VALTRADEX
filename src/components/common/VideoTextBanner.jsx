import React from "react";

const VideoTextBanner = ({
  subtitle,
  title,
  highlight,
  description,
  buttonText,
  videoSrc,
  reverse = false,
  onButtonClick,
}) => {
  return (
    <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-90"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      {/* Overlay for darker gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="md:w-1/2 text-white space-y-5">
          {subtitle && (
            <p className="text-gray-400 uppercase tracking-wide font-semibold">
              {subtitle}
            </p>
          )}

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {title}{" "}
            {highlight && (
              <span className="block text-[#00CFFF]">{highlight}</span>
            )}
          </h1>

          {description && (
            <p className="text-gray-300 text-base md:text-lg leading-relaxed">
              {description}
            </p>
          )}

          {buttonText && (
            <button
              onClick={onButtonClick}
              className="bg-[#0040FF] hover:bg-[#0059FF] text-white font-semibold px-6 py-3 rounded-md mt-4 transition-all shadow-md"
            >
              {buttonText}
            </button>
          )}
        </div>

        {/* Optional right-side space (for symmetry/future use) */}
        <div className="md:w-1/2"></div>
      </div>
    </section>
  );
};

export default VideoTextBanner;
