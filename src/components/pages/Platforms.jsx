import React from "react";
import ImageTextBanner from "../common/ImageTextBanner";
import PlatformCardsSection from "../common/PlatformCardsSection";
import platformImage from "../../assets/platforms1.jpg";

const Platforms = () => {
  return (
    <>
      {/* 🔹 Hero Section */}
      <ImageTextBanner
        subtitle="Platforms"
        title="BUILT FOR"
        highlight="WINNERS"
        description="Race to the top with trading platforms engineered for speed and performance."
        image={platformImage}
      />

      {/* 🔹 Second Section – Choose Your Platform */}
      <PlatformCardsSection />
    </>
  );
};

export default Platforms;
