import React from "react";
import VideoBanner from "../common/VideoBanner";

const Markets = () => {
  return (
    <div className="bg-[#f9f9f9] text-gray-800">
      {/* 🔹 Hero Video Banner */}
      <VideoBanner
        subtitle="Markets"
        title="THE MARKETS, YOUR PLAYGROUND"
        description="The world is your oyster with VALTRADEX. Click on any of the trading instruments above to learn more."
        videoMp4="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/home_banner_video_new.mp4"
        videoWebm="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/home_banner_video_new.webm"
      />
    </div>
  );
};

export default Markets;
