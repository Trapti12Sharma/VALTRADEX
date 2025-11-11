import React from "react";
import HeroImageBanner from "../common/HeroImageBanner";
import FaqCategoryGrid from "../common/FaqCategoryGrid";
import RiskWarningSection from "../common/RiskWarningSection";

import {
  FaInfoCircle,
  FaUserAlt,
  FaMoneyBillWave,
  FaGift,
  FaHandshake,
  FaMobileAlt,
  FaChartBar,
  FaCopy,
} from "react-icons/fa";

import helpBg from "../../assets/help1.jpeg";

const HelpCentre = () => {
  // 🔹 Dynamic FAQ categories
  const faqCategories = [
    {
      icon: <FaInfoCircle className="text-[#0040FF] text-5xl" />,
      label: "About Valtradex",
      link: "#",
    },
    {
      icon: <FaUserAlt className="text-[#0040FF] text-5xl" />,
      label: "Accounts",
      link: "#",
    },
    {
      icon: <FaMoneyBillWave className="text-[#0040FF] text-5xl" />,
      label: "Deposits and Withdrawals",
      link: "#",
    },
    {
      icon: <FaGift className="text-[#0040FF] text-5xl" />,
      label: "Promotions",
      link: "#",
    },
    {
      icon: <FaHandshake className="text-[#0040FF] text-5xl" />,
      label: "Partnerships",
      link: "#",
    },
    {
      icon: <FaMobileAlt className="text-[#0040FF] text-5xl" />,
      label: "Valtradex App Tutorials",
      link: "#",
    },
    {
      icon: <FaChartBar className="text-[#0040FF] text-5xl" />,
      label: "Trading Condition",
      link: "#",
    },
    {
      icon: <FaCopy className="text-[#0040FF] text-5xl" />,
      label: "Copy Trading",
      link: "#",
    },
  ];

  // 🔹 Risk Warning Content
  const riskParagraphs = [
    "Trading CFDs carries a high level of risk and may not be suitable for all investors. Leverage in CFD trading can magnify gains and losses, potentially exceeding your original capital. It’s crucial to fully understand and acknowledge the associated risks before trading CFDs. Consider your financial situation, investment goals, and risk tolerance before making trading decisions. Past performance is not indicative of future results. Refer to our legal documents for a comprehensive understanding of CFD trading risks.",
    "The information on this website is general and doesn’t account for your individual goals, financial situation, or needs. Valtradex cannot be held liable for the relevance, accuracy, timeliness, or completeness of any website information.",
    "Our services and information on this website are not provided to residents of certain countries, including the United States, Singapore, Russia, and jurisdictions listed on the FATF and global sanctions lists. They are not intended for distribution or use in any location where such distribution or use would contravene local law or regulation.",
    "Valtradex is a brand name with multiple entities authorised and registered in various jurisdictions. · Valtradex (Pty) Ltd is an authorised Financial Service Provider (FSP) registered and regulated by the Financial Sector Conduct Authority (FSCA) of South Africa under license number 50865. · Valtradex Limited is an investment dealer authorised and regulated by the Mauritius Financial Services Commission (FSC) under license number GB232022269.",
    "Valtradex Ltd, registered in the Republic of Cyprus with registration number HE436466 and registered address at Archbishop Makarios III, 160, Floor 1, 3026, Limassol, Cyprus.",
  ];

  return (
    <>
      {/* 🔹 Hero Section */}
      <HeroImageBanner
        backgroundImage={helpBg}
        subtitle=""
        title="Your questions, our answers."
        accentDot={true}
        description=""
        height="min-h-[40vh]"
        align="left"
        overlayOpacity={0.45}
      />

      {/* 🔹 FAQ Section */}
      <FaqCategoryGrid
        title="Frequently asked questions"
        description="If you’re looking for immediate answers, our Help Centre provides a comprehensive overview on all aspects of trading on our platform."
        categories={faqCategories}
      />

      {/* 🔹 Risk Warning Section */}
      <RiskWarningSection
        title="Risk Warning:"
        paragraphs={riskParagraphs}
        brandName="Valtradex"
        copyrightYear="2025"
      />
    </>
  );
};

export default HelpCentre;
