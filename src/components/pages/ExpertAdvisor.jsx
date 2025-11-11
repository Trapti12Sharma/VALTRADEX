import React from "react";
import ImageTextDarkSmallBanner from "../common/ImageTextDarkSmallBanner";
import ImageTextUpAnimationSection from "../common/ImageTextUpAnimationSection";
import WhiteGradientBanner from "../common/WhiteGradientBanner";
import FaqSection from "../common/FaqSection";
import smartTradeImage from "../../assets/copytrading2.png";
// import whitewave from "../../assets/whitewave.png";

const ExpertAdvisor = () => {
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
  return (
    <>
      <ImageTextDarkSmallBanner
        subtitle="Expert advisor"
        title="TAKE OUT"
        highlight="THE EMOTION"
        description="True freedom is trading without being tied to your screen."
        reverse={false}
      />

      <ImageTextUpAnimationSection
        image={smartTradeImage}
        title="Your Helpful Trading Assistant"
        description="Made to help you save time, Expert Advisors (EAs) automatically execute trades based on your pre-set rules."
        reverse={false}
      />

      {/* ✅ Reusable White Gradient Banner Section */}
      <WhiteGradientBanner
        title="Effortless Trading"
        description="Built around the MetaTrader 4 and MetaTrader 5 platforms, Expert Advisors are designed for quick and easy setup."
        buttonText="Learn More"
        // backgroundImage={whitewave}
        onButtonClick={() => window.open("/metatrader-setup", "_blank")}
      />

      <FaqSection title="Frequently Asked Questions" faqs={faqs} />
    </>
  );
};

export default ExpertAdvisor;
