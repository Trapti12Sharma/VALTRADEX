import React from "react";
import ImageTextGradientBanner from "../common/ImageTextGradientBanner";
import PlatformCardsSection from "../common/PlatformCardsSection";
import FeatureCardsSection from "../common/FeatureCardsSection";
import TrustedProvidersSection from "../common/TrustedProvidersSection"; // ✅ newly added

// Icons
import { LuDollarSign } from "react-icons/lu";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Layers } from "lucide-react";

// Images
// import toolsImage from "../../assets/tools-banner.png"; // ✅ add your gradient hero image
import tradingCentralLogo from "../../assets/tools1.png";
import metaQuotesLogo from "../../assets/tools2.png";

const ToolsOverview = () => {
  // Feature cards section
  const features = [
    {
      icon: <LuDollarSign className="text-[#00CFFF] text-4xl" />,
      title: "Zero to Low Commissions",
      description: "Keep more of what you earn with spreads starting from 0.0.",
    },
    {
      icon: <BsGrid3X3Gap className="text-[#00CFFF] text-4xl" />,
      title: "Over 1,000+ Ways to Trade",
      description:
        "Trade your way. Dive into forex, stocks, commodities, ETFs, and more.",
    },
    {
      icon: <Layers className="text-[#00CFFF] text-4xl" />,
      title: "Accounts That Fit Your Style",
      description:
        "Choose an account tailored to your goals, experience, and trading preferences—because one size doesn’t fit all.",
    },
  ];

  // Preferred providers section
  const logos = [
    {
      src: tradingCentralLogo,
      alt: "Trading Central",
      width: 220,
    },
    {
      src: metaQuotesLogo,
      alt: "MetaQuotes",
      width: 220,
    },
  ];

  const disclaimer =
    "Disclaimer: VT Markets does not provide its own trading signals for clients. The signal service is provided by 3rd parties, and their advice does not constitute and should not be regarded as investment advice from VT Markets. All clients are advised to act on signals at their own discretion.";

  return (
    <>
      {/* 🔹 Hero Gradient Banner */}
      <ImageTextGradientBanner
        subtitle="Tools Overview"
        title="IT’S TIME TO"
        highlight="GEAR UP"
        description="We match your ambition. Explore our suite of powerful, intuitive trading tools designed to unlock your fullest potential."
        // image={toolsImage}
        reverse={false}
      />

      {/* 🔹 Platform Cards Section */}
      <PlatformCardsSection />

      {/* 🔹 Features Section */}
      <FeatureCardsSection title="Always One Step Ahead" features={features} />

      {/* 🔹 Preferred Forex Signal Providers Section */}
      <TrustedProvidersSection
        title="Our preferred forex signal providers"
        logos={logos}
        disclaimer={disclaimer}
      />
    </>
  );
};

export default ToolsOverview;
