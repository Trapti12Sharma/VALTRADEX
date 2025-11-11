import React from "react";
import ImageTextCtaBanner from "../common/ImageTextCtaBanner";
import ImageTextUpAnimationSection from "../common/ImageTextUpAnimationSection";
import FeatureTabsSection from "../common/FeatureTabsSection";
import FaqSection from "../common/FaqSection";
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

import copyTradeImage from "../../assets/copytrading1.png";
import smartTradeImage from "../../assets/copytrading2.png";

const SoftCommodities = () => {
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

  const featureTabs = [
    {
      title: "Following Trades",
      buttonText: "Start Copy Trading",
      buttonLink: "#",
      cards: [
        {
          icon: <LineChart />,
          heading: "Birds-Eye View",
          description:
            "Pick a trader, check their stats—like performance and risk—and start copying instantly.",
        },
        {
          icon: <Move />,
          heading: "Know Their Every Move",
          description:
            "Explore top traders, track their performance, and follow their strategies with total transparency.",
        },
        {
          icon: <User />,
          heading: "Just Like the Pros",
          description:
            "Leverage the expertise of seasoned professionals and trade like the best in the business.",
        },
        {
          icon: <Clock />,
          heading: "Save Time",
          description:
            "No time to watch the markets? Let the experts do the work while you stay in control.",
        },
        {
          icon: <Shield />,
          heading: "Safe and Sound",
          description:
            "Secure from the second you sign up and copy with VTrade.",
        },
      ],
    },
    {
      title: "Providing Signals",
      buttonText: "Become a Signal Provider",
      buttonLink: "#",
      cards: [
        {
          icon: <DollarSign />,
          heading: "Extra Income Without Extra Effort",
          description:
            "Trade as you always do while followers replicate your success automatically.",
        },
        {
          icon: <Percent />,
          heading: "Zero Fees",
          description:
            "Create tailored offers for each strategy and earn performance-based income your way.",
        },
        {
          icon: <User />,
          heading: "Build Your Reputation",
          description:
            "Stand out in the trading community and take your personal brand to the next level.",
        },
        {
          icon: <BarChart3 />,
          heading: "Flexible Profit Sharing",
          description:
            "Set your profit share anywhere from 0% to 100%—the choice is yours.",
        },
        {
          icon: <ArrowDownUp />,
          heading: "Payouts Your Way",
          description:
            "Pick a payment cycle that works for you: weekly, bi-weekly, monthly, or even yearly.",
        },
      ],
    },
  ];

  return (
    <>
      {/*  Top Hero Section */}
      <ImageTextCtaBanner
        subtitle="Copy Trading"
        title="FOLLOW"
        highlight="THE LEAD"
        description="Step into smarter trading with VTrade."
        buttonText="Start Copying"
        buttonLink="#"
        demoLink="#"
        image={copyTradeImage}
      />

      {/*  Trading Smarter Section (Bottom-to-Up Animation) */}
      <ImageTextUpAnimationSection
        image={smartTradeImage}
        title="Trading Now Made Smarter"
        description="VTrade makes copy trading effortless. Follow top traders, replicate their strategies in real-time, and grow your portfolio without needing market expertise."
        reverse={false} //  Text on right, image on left (like your screenshot)
      />

      {/*  Following Trades / Providing Signals Section */}
      <FeatureTabsSection
        tabs={featureTabs}
        buttonText="Start Copy Trading"
        buttonLink="#"
      />

      <FaqSection title="Frequently Asked Questions" faqs={faqs} />
    </>
  );
};

export default SoftCommodities;
