import HeroSection from "../common/HeroSection";
import MarketPossibilitiesSection from "../common/MarketPossibilitiesSection";
import AppPromotionSection from "../common/AppPromotionSection";
import TradingPlatformsSection from "../common/TradingPlatformsSection";
import WhyTradersChooseUs from "../common/WhyTradersChooseUs";
import PartnershipsSection from "../common/PartnershipsSection";
import StartTradingSection from "../common/StartTradingSection";
import WhatsappChatButton from "../common/WhatsappChatButton";
import Footer from "../common/Footer";
import { FaChartLine, FaLock, FaGlobe } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      title: "Advanced Trading",
      description: "Powerful tools for global markets.",
      icon: FaChartLine,
    },
    {
      title: "Secure Transactions",
      description: "Your assets are protected by industry-grade security.",
      icon: FaLock,
    },
    {
      title: "Worldwide Access",
      description: "Trade anywhere, anytime with multi-device support.",
      icon: FaGlobe,
    },
  ];

  return (
    <>
      <HeroSection />
      <WhatsappChatButton />
      <MarketPossibilitiesSection />
      <AppPromotionSection />
      <TradingPlatformsSection />
      <WhyTradersChooseUs />
      <PartnershipsSection />
      <StartTradingSection />
      <Footer />
    </>
  );
};

export default Home;
