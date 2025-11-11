import React from "react";
import VideoBanner from "../common/VideoBanner";
import marketsBannerVideo from "../../assets/markets_banner_video.mp4";

const Markets = () => {
  return (
    <div className="bg-[#f9f9f9] text-gray-800">
      {/* 🔹 Hero Video Banner */}
      {/* 🔹 Hero Video Banner (from your uploaded video) */}
      <VideoBanner
        videoMp4={marketsBannerVideo}
        title="Markets"
        highlight="YOUR PLAYGROUND"
        description="The world is your oyster with VT Markets.
Click on any of the trading instruments above to learn more."
        buttonText="Start Your Journey"
        onButtonClick={() => window.open("/trading-journey", "_blank")}
      />
    </div>
  );
};

export default Markets;
