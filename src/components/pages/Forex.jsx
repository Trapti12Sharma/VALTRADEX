import React from "react";
import ImageTextCtaBanner from "../common/ImageTextCtaBanner";

import FeatureTabsSection from "../common/FeatureTabsSection";
import VideoBanner from "../common/VideoBanner";
import FaqSection from "../common/FaqSection";
import AnimatedStatsSection from "../common/AnimatedStatsSection";
import {
  LineChart,
  Move,
  User,
  Clock,
  Shield,
  DollarSign,
  Percent,
  BarChart3,
  ArrowDownUp,
} from "lucide-react";

import forexImg from "../../assets/forex.png";
import marketsBannerVideo from "../../assets/forex_banner_video.mp4";

const Forex = () => {
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
      {/*  Top Hero Section */}
      <VideoBanner
        videoMp4={marketsBannerVideo}
        title="MONEY IN"
        highlight="MOTION"
        description="Where price speculation meets limitless potential."
        buttonText="Start Trading Forex"
        onButtonClick={() => window.open("/trading-journey", "_blank")}
      />

      <AnimatedStatsSection
        title="Stake Your Claim"
        description="With a daily turnover of $7.5 trillion, the sheer size of the forex market impacts all tradable markets, including futures, bonds, and stocks."
        image={forexImg}
        stats={[
          { label: "Access forex pairs", value: "40+" },
          { label: "Leverage up to", value: "500:1" },
          { label: "FX spread from", value: "0.0" },
        ]}
      />

      <FaqSection title="Frequently Asked Questions" faqs={faqs} />
    </>
  );
};

export default Forex;
