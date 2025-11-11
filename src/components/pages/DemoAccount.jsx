import React from "react";
import ImageTextBanner from "../common/ImageTextBanner";
import FeatureCardsSection from "../common/FeatureCardsSection";
import FaqSection from "../common/FaqSection";
import WhiteGradientBanner from "../common/WhiteGradientBanner";
import FeatureSection from "../common/FeatureSection";
import standardImg from "../../assets/standard1.png";
import platformImage from "../../assets/standard.png";

import { LuDollarSign } from "react-icons/lu";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Layers } from "lucide-react";

const DemoAccount = () => {
  const faqs = [
    {
      question: "Is copy trading profitable?",
      answer:
        "It can be profitable depending on the trader you follow and the strategy used, but risks are always involved.",
    },
    {
      question: "How does copy trading work?",
      answer:
        "You select experienced traders, allocate funds to automatically replicate their trades in real time.",
    },
    {
      question: "How do I choose a trader to copy?",
      answer:
        "Check performance stats, risk levels, and consistency before deciding who to follow.",
    },
    {
      question:
        "How can I increase my chances of making a profit in copy trading?",
      answer:
        "Diversify by following multiple traders and use stop-loss tools to manage risk.",
    },
    {
      question: "How do market conditions affect copy trading profitability?",
      answer:
        "Volatile markets can lead to higher gains or losses; ensure your trader adapts to conditions.",
    },
    {
      question: "Is copy trading legal?",
      answer:
        "Yes. It’s legal in most jurisdictions when done through regulated brokers.",
    },
    {
      question: "What are the risks associated with copy trading?",
      answer:
        "All trading carries risk. You can lose money if the traders you follow perform poorly.",
    },
    {
      question: "Can I copy multiple traders simultaneously?",
      answer:
        "Yes, you can diversify by allocating different portions of your balance to multiple traders.",
    },
    {
      question: "How many payment cycles are there?",
      answer:
        "Payment cycles depend on your broker—usually weekly, bi-weekly, or monthly.",
    },
  ];
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
  return (
    <>
      {/* 🔹 Hero Section */}
      <ImageTextBanner
        subtitle="Standard STP Account"
        title="START WITH"
        highlight="CERTAINTY"
        description="With no dealing desk and ultra-fast execution, our Standard STP account gives you direct access to global markets."
        image={platformImage}
      />

      <FeatureSection
        image={standardImg}
        title="Closer Than You Think"
        description="Stay closer to the action with tight spreads that bring you a clearer, more efficient trading experience."
        subtitle="The account that grows with you"
        features={[
          "Real market prices with no hidden markups",
          "Access forex, indices, commodities, and more.",
          "Use up to 500:1 leverage for ultimate flexibility.",
          "Build your strategies with precision tools across MT4, MT5, and TradingView.",
        ]}
      />

      <WhiteGradientBanner
        title="Effortless Trading"
        description="Built around the MetaTrader 4 and MetaTrader 5 platforms, Expert Advisors are designed for quick and easy setup."
        buttonText="Learn More"
        // backgroundImage={whitewave}
        onButtonClick={() => window.open("/metatrader-setup", "_blank")}
      />

      <FeatureCardsSection title="Always One Step Ahead" features={features} />

      <FaqSection title="Frequently Asked Questions" faqs={faqs} />
    </>
  );
};

export default DemoAccount;
