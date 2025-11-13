import React from "react";
import VideoBanner from "../common/VideoBanner";
import ImageTextUpAnimationSection from "../common/ImageTextUpAnimationSection";
import WhiteGradientBanner from "../common/WhiteGradientBanner";
import StartTradingSection from "../common/StartTradingSection";
import RelatedArticlesSection from "../common/RelatedArticlesSection";
import FeatureCardsSection from "../common/FeatureCardsSection";
import FaqSection from "../common/FaqSection";
import { LuDollarSign } from "react-icons/lu";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Layers } from "lucide-react";
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

import marketsBannerVideo from "../../assets/indices_banner_video.mp4";
import smartTradeImage from "../../assets/indicesn1.png";
import whitewave from "../../assets/bgimage.png";
import article1 from "../../assets/forexn1.jpg";
import article2 from "../../assets/forexn2.png";
import article3 from "../../assets/forexn3.png";

const Indices = () => {
  const articles = [
    {
      image: article1,
      category1: "AUD",
      category2: "Forex",
      title: "Aussie Gains as Shutdown Nears Resolution",
      readTime: "8 mins",
      date: "Nov 11, 2025",
      daysAgo: "2 days ago",
    },
    {
      image: article2,
      category1: "Forex",
      category2: "Yen",
      title: "Yen Slides as Stimulus Bets Grow",
      readTime: "8 mins",
      date: "Nov 10, 2025",
      daysAgo: "3 days ago",
    },
    {
      image: article3,
      category1: "Euro",
      category2: "Forex",
      title: "Euro Holds Near $1.16 as Traders Await Key Data",
      readTime: "8 mins",
      date: "Oct 23, 2025",
      daysAgo: "3 weeks ago",
    },
  ];
  const features = [
    {
      icon: <LuDollarSign />,
      title: "Zero to Low Commissions",
      description: "Keep more of what you earn with spreads starting from 0.0.",
    },
    {
      icon: <BsGrid3X3Gap />,
      title: "Over 1,000+ Ways to Trade",
      description:
        "Trade your way. Dive into forex, stocks, commodities, ETFs, and more.",
    },
    {
      icon: <Layers />,
      title: "Accounts That Fit Your Style",
      description:
        "Choose an account tailored to your goals, experience, and trading preferences—because one size doesn’t fit all.",
    },
    {
      icon: <BsGrid3X3Gap />,
      title: "Over 1,000+ Ways to Trade",
      description:
        "Trade your way. Dive into forex, stocks, commodities, ETFs, and more.",
    },
    {
      icon: <Layers />,
      title: "Accounts That Fit Your Style",
      description:
        "Choose an account tailored to your goals, experience, and trading preferences—because one size doesn’t fit all.",
    },
  ];
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
        title="MEASURING"
        highlight="MOMENTUM"
        description="Chart the pulse of the global economy."
        buttonText="Start Trading Indices"
        onButtonClick={() => window.open("/trading-journey", "_blank")}
      />

      {/*  Trading Smarter Section (Bottom-to-Up Animation) */}
      <ImageTextUpAnimationSection
        image={smartTradeImage}
        title="Trading Now Made Smarter"
        description="VTrade makes copy trading effortless. Follow top traders, replicate their strategies in real-time, and grow your portfolio without needing market expertise."
        reverse={false} //  Text on right, image on left (like your screenshot)
      />

      <WhiteGradientBanner
        title="Speed, Precision, Power"
        description="Blister through the indices markets with cutting-edge fibre optic networks and the oneZero™ Liquidity Bridge."
        buttonText="Learn More"
        backgroundImage={whitewave}
        onButtonClick={() => window.open("/metatrader-setup", "_blank")}
      />

      <FeatureCardsSection title="Always One Step Ahead" features={features} />

      <StartTradingSection />

      <FaqSection title="Frequently Asked Questions" faqs={faqs} />
      <RelatedArticlesSection
        title="Related Articles"
        buttonText="Learn more"
        onButtonClick={() => window.open("/blog", "_blank")}
        articles={articles}
      />
    </>
  );
};

export default Indices;
