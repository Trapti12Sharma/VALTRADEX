import React from "react";
import TradingAccountsBanner from "../common/TradingAccountsBanner";
import AccountCardsSection from "../common/AccountCardsSection";
import AccountComparisonTable from "../common/AccountComparisonTable";
import FeatureCardsSection from "../common/FeatureCardsSection";
import { LuDollarSign } from "react-icons/lu";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Layers } from "lucide-react";

const TradingAccounts = () => {
  const columns = [
    { title: "Account Specification", headerType: "spec" },
    { title: "Standard STP", headerType: "account" },
    { title: "RAW ECN", headerType: "account" },
  ];

  const rows = [
    ["Spreads", "1.2 pips", "0.0 pips"],
    ["Minimum Deposit", "$100", "$100"],
    ["Commission", "$0", "$6 (per round turn)"],
    ["Minimum Trading Size", "0.01 lot", "0.01 lot"],
    [
      "Account Base Currencies",
      "$ AUD $ USD $ HKD £ GBP € EUR $ CAD",
      "$ AUD $ USD $ HKD £ GBP € EUR $ CAD",
    ],
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
  ];

  return (
    <>
      {/* 🎥 Hero Section */}
      <TradingAccountsBanner
        subtitle="Trading Accounts"
        title="YOUR GOALS"
        highlight="MATTER"
        description="You're one of a kind. Whatever your trading objectives, we have an account type to match."
      />

      {/* 💠 Animated Account Cards Section */}
      <AccountCardsSection />

      {/* 📊 Account Comparison Table Section */}
      <AccountComparisonTable
        title="Explore Trading Accounts"
        subtitle="Discover the right trading account for you. Compare models and find your perfect fit."
        columns={columns}
        rows={rows}
      />

      <AccountComparisonTable
        // title="Explore Trading Accounts"
        // subtitle="Discover the right trading account for you. Compare models and find your perfect fit."
        columns={columns}
        rows={rows}
      />

      <AccountComparisonTable
        // title="Explore Trading Accounts"
        // subtitle="Discover the right trading account for you. Compare models and find your perfect fit."
        columns={columns}
        rows={rows}
      />

      <FeatureCardsSection title="Always One Step Ahead" features={features} />
    </>
  );
};

export default TradingAccounts;
