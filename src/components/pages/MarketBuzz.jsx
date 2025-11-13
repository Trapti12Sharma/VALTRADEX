import React from "react";
import ImageTextDarkBanner from "../common/ImageTextDarkBanner";
// import marketBuzzImage from "../../assets/market-buzz-banner.png"; // replace with your image

const MarketBuzz = () => {
  return (
    <>
      <ImageTextDarkBanner
        subtitle="Market Buzz"
        title="NO MORE"
        highlight="ENDLESS"
        title2="SCROLLING"
        description="Discover what’s moving the market today with Valtradex' Market Buzz."
        // image={marketBuzzImage}
        reverse={false}
      />
    </>
  );
};

export default MarketBuzz;
