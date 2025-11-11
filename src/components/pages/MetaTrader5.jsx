import React from "react";
import { FaChartBar, FaAward, FaRocket, FaGlobe } from "react-icons/fa";
import VideoTextBanner from "../common/VideoTextBanner";
import ImageTextStatsSection from "../common/ImageTextStatsSection";
import WhiteGradientBanner from "../common/WhiteGradientBanner";
import IconCardsAnimatedSection from "../common/IconCardsAnimatedSection";
import aboutusVideo from "../../assets/aboutus.mp4";
import simpleBars from "../../assets/aboutus1.png";

const MetaTrader5 = () => {
  return (
    <>
      {/* 🔹 Top video banner section */}
      <VideoTextBanner
        subtitle="About VT Markets"
        title="TRADING"
        highlight="MADE EASY"
        description="Since 2015, VT Markets has been dedicated to simplifying trading by making it more intuitive, accessible, and efficient for traders worldwide."
        buttonText="Start Your Trading Journey with VT Markets →"
        videoSrc={aboutusVideo}
        onButtonClick={() => window.open("/trading-journey", "_blank")}
      />

      {/* 🔹 “We Make It Simple” dynamic reusable section */}
      <ImageTextStatsSection
        image={simpleBars}
        title="We Make it Simple"
        description="Trading isn’t just for the experts—it’s for everyone. We’re creating a trusted, cutting-edge environment where traders of all levels can thrive."
        stats={[
          "Over 600,000+ active clients",
          "60M+ trades per month",
          "720B+ trading volume per month",
        ]}
        background="#0D0D0D"
      />
      {/* 🔹 “Effortless Trading” Section */}
      <WhiteGradientBanner
        title="Effortless Trading"
        description="Built around the MetaTrader 4 and MetaTrader 5 platforms, Expert Advisors are designed for quick and easy setup."
        buttonText="Learn More"
        onButtonClick={() => window.open("/metatrader-setup", "_blank")}
      />

      {/* 🔹 “It’s Easy, We’re Different” animated reusable section */}
      <IconCardsAnimatedSection
        title="It's Easy, We're Different"
        background="#0D0D0D"
        cards={[
          {
            icon: <FaChartBar />,
            title: "Infinite Possibilities",
            description:
              "The future is what you make it. With the right tools, support, and innovation, you're equipped to shape a world that's uniquely yours.",
          },
          {
            icon: <FaAward />,
            title: "Rewards Driven",
            description:
              "We don't just reward trading—we reward drive, creativity, and results. Every contribution matters, and we amplify success at every level.",
          },
          {
            icon: <FaRocket />,
            title: "Stay Hungry, Ambitious",
            description:
              "Being ambitious for us is a mindset. With top-tier education and trading conditions, we're here to empower your next big leap.",
          },
          {
            icon: <FaGlobe />,
            title: "A Better Place",
            description:
              "We’re breaking barriers and building bridges. From ESG initiatives to accessible trading, we connect people, markets, and opportunities globally.",
          },
        ]}
      />
    </>
  );
};

export default MetaTrader5;
