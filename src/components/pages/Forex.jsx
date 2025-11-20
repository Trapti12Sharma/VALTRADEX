import React from "react";
import WhiteGradientBanner from "../common/WhiteGradientBanner";
import VideoBanner from "../common/VideoBanner";
import FaqSection from "../common/FaqSection";
import AnimatedStatsSection from "../common/AnimatedStatsSection";
import FeatureCardsSection from "../common/FeatureCardsSection";
import StartTradingSection from "../common/StartTradingSection";
import RelatedArticlesSection from "../common/RelatedArticlesSection";
import { LuDollarSign } from "react-icons/lu";
import { BsGrid3X3Gap } from "react-icons/bs";
import { Layers } from "lucide-react";

import forexImg from "../../assets/forex.png";
import marketsBannerVideo from "../../assets/forex_banner_video.mp4";
import whitewave from "../../assets/bgimage.png";
import article1 from "../../assets/forexn1.jpg";
import article2 from "../../assets/forexn2.png";
import article3 from "../../assets/forexn3.png";

const Forex = () => {
  const articles = [
    {
      image: article1,
      category1: "Trade 40+ FX Pairs",
      // category2: "",
      title:
        "Discover the majors, minors, and exotics through a dependable forex trading platform that is not only fast but also stable.",
      // readTime: "8 mins",
      // date: "Nov 11, 2025",
      // daysAgo: "2 days ago",
    },
    {
      image: article2,
      category1: "Leverage Up to 500:1",
      // category2: "Yen",
      title:
        "Use your trading power with the help of flexible leverage which is also quite suitable for a professional trader to a beginner.",
      // readTime: "8 mins",
      // date: "Nov 10, 2025",
      // daysAgo: "3 days ago",
    },
    {
      image: article3,
      category1: "Spreads From 0.0",
      // category2: "Forex",
      title:
        "Assist yourself by extremely tight spreads, in that way, you will be able to realize opportunities with exactness.",
      // readTime: "8 mins",
      // date: "Oct 23, 2025",
      // daysAgo: "3 weeks ago",
    },
  ];

  const features = [
    {
      icon: <LuDollarSign />,
      title: "1. Effortless Trading",
      description:
        "The Expert Advisors on MetaTrader 4 and MetaTrader 5 facilitate a quick installation and automatically carry out the strategy. Traders are allowed by this automation to do their operations 24 hours a day, 7 days a week, with a minimum of intervention thus it is an easy way to implement the best forex trading platform for beginners that is still suitable for professionals.",
    },
    {
      icon: <BsGrid3X3Gap />,
      title: "2. Always One Step Ahead",
      description:
        "Prepare yourself for market changes through the use of state-of-the-art charting tools, quick execution, and up-to-the-minute market insights. These instruments assist you in foreseeing market movement, pinpointing the starting of new trends, and thus positioning yourself for the most optimal setups which are in complete harmony with advanced trading techniques.",
    },
    {
      icon: <Layers />,
      title: "3. Zero to Low Commissions",
      description:
        "Our extremely competitive pricing plan is such that you will be able to retain more of your earnings. Traders with a high volume of operations will find that they may execute their strategies at zero cost while still receiving long-term investment opportunities since the spread starts from 0.0.",
    },
    {
      icon: <BsGrid3X3Gap />,
      title: "4. Over 1,000+ Ways to Trade",
      description:
        "The Online Forex Trading Platform we offer has the capability to trade the following assets: forex, indices, metals, commodities, stocks, futures, and ETFs. The broad choice of these assets gives traders the power to not only diversify but also to protect their holdings (hedge) and modify (adapt) their strategies in numerous markets.",
    },
    {
      icon: <Layers />,
      title: "5. Accounts That Fit Your Style",
      description:
        "The types of accounts that we provide through our platform are tailored to meet the requirements of you whether you are a novice who is merely testing the waters or an expert who is perfecting the system. The trading environment that suits every style will be ensured by features such as clear pricing, adjustable leverage, and different execution models‌ .",
    },
  ];

  const faqs = [
    {
      question:
        "1.​‍​‌‍​‍‌​‍​‌‍​‍‌ What features make Valtradex the Best Forex Trading Platform?",
      answer:
        "Valtradex brings to the table quick execution, low spreads (starting from 0.0), sophisticated charting tools, and MT4/MT5 compatibility—thus, it is a facility of equally both beginners and professional traders.",
    },
    {
      question: "2. Is forex trading good for new traders?",
      answer:
        "Definitely. The presence of educational resources, demo accounts, and user-friendly platforms make it possible for beginners to start trading safely and learn at their own pace.",
    },
    {
      question: "3. What are the trading platforms available at Valtradex?",
      answer:
        "There are four platforms through which you can execute your trades: MetaTrader 4, MetaTrader 5, Web Trader as well as TradingView. Each one aims at providing you with a smooth online forex trading experience.",
    },
    {
      question: "4. What leverage level is allowed for me in forex trading?",
      answer:
        "Valtradex grants up to 500:1 flexible leverage which is a trader's ability to use a small amount of capital to control a much larger position.",
    },
    {
      question: "5. Is there any commission or hidden charges?",
      answer:
        "Absolutely no hidden fees! Our brokerage model is characterized by zero to low commission charges along with very competitive spreads.",
    },
    {
      question: "6. Besides forex, can I trade in other markets?",
      answer:
        "Definitely. Valtradex equips you with the access of over 1,000+ instruments such as commodities, indices, CFDs, shares, ETFs, bonds, and a lot more.",
    },
    {
      question: "7. How much money do I need to open an account?",
      answer:
        "With a small initial deposit, you can carry on with your first steps of trading regardless if you are just testing the forex market.",
    },
    {
      question: "8. Is Valtradex a trustworthy platform for forex trading?",
      answer:
        "Indeed. Valtradex supports the above claim by securing dealings, having reputable liquidity partners, and creating a steady trading environment for long-term ​‍​‌‍​‍‌​‍​‌‍​‍‌success.",
    },
  ];

  const startDescription = `The​‍​‌‍​‍‌​‍​‌‍​‍‌ world financial system is a very fast mover and every change is bringing new opportunities for the traders who are ready. Being one of the Top Forex Trading Platforms Valtradex provides you with the means to use the most advanced instruments and achieve the most accurate execution so as to understand market movement and be the first to react. Forex market is still the core of global finance and with the right platform, small changes can be converted into your strategic ​‍​‌‍​‍‌​‍​‌‍​‍‌moves.
`;

  const backgroundVideoUrl =
    "https://d3a7kndgi8x4pg.cloudfront.net/vt/video/page_steps_video2.mp4";

  return (
    <>
      {/*  Top Hero Section */}
      <VideoBanner
        videoMp4={marketsBannerVideo}
        title="Markets Move Nonstop,Creating "
        highlight="Opportunity"
        description="Where constant shifts unlock new trading potential."
        buttonText="Start Trading Forex"
        onButtonClick={() => window.open("/trading-journey", "_blank")}
      />

      <AnimatedStatsSection
        title="Start forex  trading with Valtradex today."
        description="Step into the largest financial market on earth with tools that are not only clear but also fast and intelligent in ​‍​‌‍​‍‌​‍​‌‍​‍‌decision-making.MetaTrader​‍​‌‍​‍‌​‍​‌‍​‍‌ 4 and MetaTrader 5, which are among the most robust platforms in the industry, form the base of our infrastructure. These platforms allow the use of Expert Advisors, intelligent indicators, sophisticated charting, as well as extensive backtesting. If you are creating your own strategy or simply taking advantage of the top forex trading solutions, MT4 and MT5 provide an incomparable range of possibilities for manual and algorithmic ​‍​‌‍​‍‌​‍​‌‍​‍‌trading."
        image={forexImg}
        stats={[
          { label: "Access forex pairs", value: "40+" },
          { label: "Leverage up to", value: "500:1" },
          { label: "FX spread from", value: "0.0" },
        ]}
      />

      <WhiteGradientBanner
        title="DISCOVER YOUR TRADING EDGE AND STAY A STEP AHEAD"
        description="With​‍​‌‍​‍‌​‍​‌‍​‍‌ Valtradex, you can trade forex like an institution and still keep the currency trading strategy you are using at its best. In addition to that, top liquidity will bring lower spreads, quicker fills, and less slippage—very important that type of advantages are for scalpers and algorithmic ​‍​‌‍​‍‌​‍​‌‍​‍‌traders."
        buttonText="Learn More"
        backgroundImage={whitewave}
        onButtonClick={() => window.open("/metatrader-setup", "_blank")}
      />

      <FeatureCardsSection
        title="ADVANCE YOUR TRADING JOURNEY WITH SMARTER TOOLS"
        description="We​‍​‌‍​‍‌​‍​‌‍​‍‌ base our system on MetaTrader 4 and MetaTrader 5, two of the most robust platforms in the market. These platforms are in line with Expert Advisors, intelligent indicators, advanced charting, and extensive backtesting. In case you are creating your own strategy or simply employing the top forex trading tools, MT4 and MT5 provide the highest degree of adaptability for technical and algorithmic ​‍​‌‍​‍‌​‍​‌‍​‍‌trading."
        features={features}
      />

      <StartTradingSection
        title="MARKETS MOVE NONSTOP, CREATING NEW TRADING CHANCES"
        highlight="Where constant market shifts unlock unlimited potential through top forex trading brokers and fast-execution online trading platforms."
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
      <RelatedArticlesSection
        title="Related ArticlesUNLOCK FULL ACCESS TO THE GLOBAL FOREX MARKET TODAY"
        buttonText="Learn more"
        onButtonClick={() => window.open("/blog", "_blank")}
        articles={articles}
      />
    </>
  );
};

export default Forex;
