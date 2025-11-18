// src/components/pages/Home.jsx
import React from "react";
import HeroSection from "../common/HeroSection";
import MarketPossibilitiesSection from "../common/MarketPossibilitiesSection";
import AppPromotionSection from "../common/AppPromotionSection";
import TradingPlatformsSection from "../common/TradingPlatformsSection";
import WhyTradersChooseUs from "../common/WhyTradersChooseUs";
import PartnershipsSection from "../common/PartnershipsSection";
import StartTradingSection from "../common/StartTradingSection";
import WhatsappChatButton from "../common/WhatsappChatButton";
import FaqSection from "../common/FaqSection";
import Footer from "../common/Footer";
import { FaChartLine, FaLock, FaGlobe } from "react-icons/fa";
import partnership1 from "../../assets/homepage11.png";
import partnership2 from "../../assets/homepage12.png";
import card1 from "../../assets/homepage7.png";
import card2 from "../../assets/homepage8.png";
import card3 from "../../assets/homepage9.png";

import award1 from "../../assets/award1.svg";
import award2 from "../../assets/award2.svg";
import award3 from "../../assets/award3.svg";
import award4 from "../../assets/award4.svg";
import award5 from "../../assets/award5.svg";
import award6 from "../../assets/award6.svg";

import qrCode from "../../assets/homepage1.svg";
import appStore from "../../assets/homepage2.svg";
import playStore from "../../assets/homepage3.svg";
import apkFile from "../../assets/homepage4.svg";
import phoneImage from "../../assets/homepage5.png";

// optional: if you host the video locally, import it like:
// import startVideo from "../../assets/page_steps_video2.mp4";

const Home = () => {
  const faqs = [
    {
      question: "1. What makes Valtradex the Best Forex Trading Broker?",
      answer:
        "Valtradex is the forex broker that offers all these benefits: fast deal execution, tight spreads, advanced tools, and a safe, transparent environment, all trusted by global traders.",
    },
    {
      question: "2. Is Valtradex a Safe and Trusted Forex Broker?",
      answer:
        "Yes. We abide by very stringent regulations, and to guarantee the utmost security, we partner with the esteemed providers of liquidity.",
    },
    {
      question: "3. Can beginners trade forex with Valtradex?",
      answer:
        "That is right! A straightforward platform, tutorial videos, and expert opinions — with all these at hand, a novice can take off confidently right away.",
    },
    {
      question: "4. What forex pairs can I trade?",
      answer:
        "You will find the platforms we use for online forex trading open up trading to major, minor, and exotic currency pairs.",
    },
    {
      question: "5. Does Valtradex offer fast trade execution?",
      answer:
        "Certainly. As a broker who is committed to fast execution, we carry out your trading activities within milliseconds so as to lessen the slippage.",
    },
    {
      question: "6. What platforms do you support?",
      answer:
        "We offer state of the art forex trading platforms suitable for web, iOS, and Android users.",
    },
    {
      question: "7. Can I use my own currency trading strategy on Valtradex?",
      answer:
        "Of course. With full freedom and tools that you can tailor, you can carry out the most effective currency trading strategy.",
    },
    {
      question: "8. Is Valtradex suitable for traders in India?",
      answer:
        "Indeed. Due to the use of excellent technology, being open, and giving support, Valtradex is regarded as one of the best forex brokers in India.",
    },
  ];

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

  const startDescription = `Enjoy powerful platforms, tight spreads, and quality support.
Immerse​‍​‌‍​‍‌​‍​‌‍​‍‌ yourself in a global standard setting that is designed equally well for beginners and advanced traders. Step up your skill, carry out your trades swiftly, and make use of the top online forex trading platform technology that is at your disposal today. 
`;

  const backgroundVideoUrl =
    "https://d3a7kndgi8x4pg.cloudfront.net/vt/video/page_steps_video2.mp4";

  return (
    <>
      <HeroSection
        title={"Your Gateway to the \nGlobal Markets"}
        subtitle={
          <>
            Experience seamless{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CFFF] to-[#007BFF] font-semibold">
              FOREX
            </span>{" "}
            trading.
          </>
        }
        buttonText="Get Started"
        onButtonClick={() => window.open("/signup", "_blank")}
        videoWebm="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/home_banner_video_new.webm"
        videoMp4="https://d3a7kndgi8x4pg.cloudfront.net/vt/video/home_banner_video_new.mp4"
        showArrow={true}
      />
      <WhatsappChatButton />
      <MarketPossibilitiesSection
        title="Every second the world’s markets move, unlocking new potential."
        subheading="Being​‍​‌‍​‍‌​‍​‌‍​‍‌ a Top Forex Trading Broker, we know how crucial it is to be always prepared. Fluctuations in the market, rumors about the price, and incidents in the world are the main reasons for powerful setups that occur almost every day—which are the ones clever traders can spot and make money out of by having the proper instruments and the most efficient online forex trading ​‍​‌‍​‍‌​‍​‌‍​‍‌platform."
        categories={[
          {
            name: "Forex",
            description:
              "Trade ‌​‍​‌‍​‍‌​‍​‌‍​‍‌ currency pairs from around the world with tight spreads and a fast execution which opens you up to one of the most liquid and dynamic markets in the world.",
          },
          {
            name: "Indices",
            description:
              "Drive market momentum through trading major global indices that are structured to show the performance of the largest stock exchanges.",
          },
          {
            name: "Energies",
            description:
              "Fuel your trades with volatile and fast-moving energy markets like crude oil and natural gas.",
          },
          {
            name: "Precious Metals",
            description:
              "Use precious metals like gold, silver, and other metals to shelter your portfolio during market turbulence.",
          },
          {
            name: "Soft Commodities",
            description:
              "Trade in agricultural assets such as coffee, cocoa, sugar, and cotton—the markets impacted by global supply, climate, and seasonal demand.",
          },
          {
            name: "ETFs",
            description:
              "Through ETFs, you can easily trade sectors, regions, and strategies by gaining exposure to diversified baskets of assets.",
          },
          {
            name: "CFD Shares",
            description:
              "Use CFDs to trade price movements of company stocks in the global market both in the case of rising and falling markets without the need for ownership.",
          },
          {
            name: "CFD Bonds",
            description:
              "Engage in the fixed-income market by using CFDs to trade government and corporate bond price movements, thus giving you the option to ​‍​‌‍​‍‌​‍​‌‍​‍‌leverage.",
          },
        ]}
      />

      <AppPromotionSection
        title="Everything that matters, and everything beyond it."
        // highlight="."
        subtitle="It is a platform built with the aim of meeting the requirements of traders who seek quickness, adaptability, and exactness. By being a Fast Execution Forex Broker, Valtradex offers to its customers a trade execution that is ultra-fast, thus, the moment your orders are to be sent to the market, they are there instantly. With such a high-performance level, it is still possible for you to be accurate both in the case of markets that trend as well as in the case of fast ​‍​‌‍​‍‌​‍​‌‍​‍‌reversals."
        bottomTitle="Always Ready for Every Move You Make."
        bottomSubtitle="No​‍​‌‍​‍‌​‍​‌‍​‍‌ matter where the market leads you, our range of online forex trading platforms keeps you ready at all times. Get to your trading with MT4, MT5, Web Trader, and TradingView—these are platforms that are designed to be fast, clear, and to help you with your ​‍​‌‍​‍‌​‍​‌‍​‍‌analysis."
        qrImage={qrCode}
        qrText="Scan to download\n VALTRADEX app"
        phoneImage={phoneImage}
        appStoreImage={appStore}
        playStoreImage={playStore}
        apkImage={apkFile}
        appStoreLink="https://apple.com"
        playStoreLink="https://play.google.com"
        apkLink="#"
      />

      <TradingPlatformsSection
        platforms={[
          {
            title: "MetaTrader 5",
            description:
              "By providing advanced charting, a wide range of analytical tools, and multi-asset trading capabilities, MetaTrader 5 is the right choice for traders who value speed, flexibility, and accuracy.",
          },
          {
            title: "Web Trader",
            description:
              "With our Web Trader platform, you can trade instantly from any browser without the need for downloading or installing. Just fast, secure, and seamless trading wherever you happen to be.",
          },
          {
            title: "MetaTrader 4",
            description:
              "MetaTrader 4 features reliable execution, customizable charts, and Expert Advisors support — making it the top choice for performance-driven traders.",
          },
          {
            title: "TradingView",
            description:
              "TradingView gives you advanced charts, social-trading insights, and powerful tools to identify opportunities and sharpen your trading strategies.",
          },
        ]}
      />

      <WhyTradersChooseUs
        title="REASONS WHY TRADERS TRUST US"
        highlight="."
        cards={[
          {
            image: card1,
            alt: "Your key to staying ahead",
            title: "Lightning-Fast​‍​‌‍​‍‌​‍​‌‍​‍‌ Execution",
            description:
              "In a Fast Execution Forex Broker manner, we provide the fastest possible times of less than a millisecond - these are the perfect times for scalpers, day traders, and automated trading strategies.",
          },
          {
            image: card2,
            alt: "Support whenever wherever",
            title: "A Truly Trusted Environment",
            description:
              "Our operations as a Trusted Forex Broker consist of providing transparent pricing, multiple liquidity providers from around the world, and secure protection of customer funds.",
          },
          {
            image: card3,
            alt: "Your capital is protected",
            title: "Advanced Trading Technology",
            description:
              "As an Advanced Forex Trading Broker, we offer powerful instruments, clever analytics, and multi-device compatibility that can easily be used to implement the best forex trading ​‍​‌‍​‍‌​‍​‌‍​‍‌solutions.",
          },
        ]}
        awards={[award1, award2, award3, award4, award5, award6]}
      />

      <PartnershipsSection
        title="OUR GLOBAL PARTNERSHIPS"
        highlight="."
        // subheading="Global collaborations with powerful brands"
        paragraph="We​‍​‌‍​‍‌​‍​‌‍​‍‌ are structured to work with the top financial institutions, liquidity providers, and tech innovators. As a result, we offer very accurate pricing, executions that can be trusted, and a platform that is always stable. These are the main reasons why we rank as one of the Best Forex Brokers in India as well as ​‍​‌‍​‍‌​‍​‌‍​‍‌worldwide."
        images={[
          {
            src: partnership1,
            alt: "Portugal Football Federation Partnership",
          },
          { src: partnership2, alt: "Valtradex Global Sponsorship" },
        ]}
      />

      <StartTradingSection
        title="Start your Forex Trading Journey with"
        highlight="Valtradex — The Best Forex Trading Broker Today."
        description={startDescription}
        videoUrl={backgroundVideoUrl}
        steps={[
          { num: "1", label: "Register" },
          { num: "2", label: "Deposit" },
          { num: "3", label: "Trade" },
        ]}
        buttonText="Trade Now"
        demoText="Try Demo"
        onButtonClick={() => window.open("/trading-journey", "_blank")}
        onDemoClick={() => window.open("/demo-account", "_blank")}
      />

      <FaqSection title="Frequently Asked Questions" faqs={faqs} />
      <Footer />
    </>
  );
};

export default Home;
