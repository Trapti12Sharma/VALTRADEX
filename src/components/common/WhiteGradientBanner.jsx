import React from "react";

const WhiteGradientBanner = ({
  title = "Empower Your Trading Journey",
  description = "Experience reliable trading infrastructure with Valtradex — where innovation meets execution.",
  buttonText = "Get Started",
  backgroundImage,
  onButtonClick,
}) => {
  console.log("Background image received:", backgroundImage); // Debug check

  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 py-32 md:py-48"
      style={{
        backgroundImage: backgroundImage
          ? `url("${backgroundImage}")`
          : "linear-gradient(white, #f0f0f0)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* ✅ Overlay */}
      <div className="absolute inset-0 "></div>

      {/* ✅ Content */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-bold text-black mb-4">
          {title}
        </h1>

        <p className="text-gray-700 text-base md:text-lg mb-8 leading-relaxed">
          {description}
        </p>

        {buttonText && (
          <button
            onClick={onButtonClick}
            className="bg-[#0040FF] hover:bg-[#0059FF] text-white font-semibold px-6 py-3 rounded-md text-lg transition-all"
          >
            {buttonText}
          </button>
        )}
      </div>
    </section>
  );
};

export default WhiteGradientBanner;
