import { Routes, Route } from "react-router-dom";

// Common Layout Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import WhatsappChatButton from "./components/common/WhatsappChatButton";

// Pages
import Home from "./components/pages/Home";
import Markets from "./components/pages/Markets";
import Platforms from "./components/pages/Platforms";
import TradingAccounts from "./components/pages/TradingAccounts";
import CopyTrading from "./components/pages/CopyTrading";
import ToolsOverview from "./components/pages/ToolsOverview";
import MarketBuzz from "./components/pages/MarketBuzz";
import EconomicCalendar from "./components/pages/EconomicCalendar";
import TradingGlossary from "./components/pages/TradingGlossary";
import ExpertAdvisor from "./components/pages/ExpertAdvisor";
import ReferFriend from "./components/pages/ReferFriend";
import AboutUs from "./components/pages/AboutUs";
import HelpCentre from "./components/pages/HelpCentre";
import OurAwards from "./components/pages/OurAwards";
import LegalHub from "./components/pages/LegalHub";

// 🔹 Market Pages
import Forex from "./components/pages/Forex";
import Indices from "./components/pages/Indices";
import Energies from "./components/pages/Energies";
import PreciousMetals from "./components/pages/PreciousMetals";
import SoftCommodities from "./components/pages/SoftCommodities";
import ETFs from "./components/pages/ETFs";
import CFDShares from "./components/pages/CFDShares";
import CFDBonds from "./components/pages/CFDBonds";

// 🔹 Platform Pages
import ValtradexApp from "./components/pages/ValtradexApp";
import MetaTrader5 from "./components/pages/MetaTrader5";
import MetaTrader4 from "./components/pages/MetaTrader4";
import TradingView from "./components/pages/TradingView";
import WebTrader from "./components/pages/WebTrader";

// 🔹 Trading Account Pages (NEW)
import StandardSTP from "./components/pages/StandardSTP";
import RawECN from "./components/pages/RawECN";
import ProECN from "./components/pages/ProECN";
import SwapFree from "./components/pages/SwapFree";
import CentAccount from "./components/pages/CentAccount";
import DemoAccount from "./components/pages/DemoAccount";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#030B17] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow min-h-[80vh]">
        <Routes>
          {/* 🏠 Home Page */}
          <Route path="/" element={<Home />} />

          {/* 🔹 Trading Section */}
          <Route path="/markets" element={<Markets />} />
          <Route path="/platforms" element={<Platforms />} />
          <Route path="/trading-accounts" element={<TradingAccounts />} />
          <Route path="/copy-trading" element={<CopyTrading />} />

          {/* 🔹 Trading Account Sub Pages */}
          <Route path="/standard-stp" element={<StandardSTP />} />
          <Route path="/raw-ecn" element={<RawECN />} />
          <Route path="/pro-ecn" element={<ProECN />} />
          <Route path="/swap-free" element={<SwapFree />} />
          <Route path="/cent-account" element={<CentAccount />} />
          <Route path="/demo-account" element={<DemoAccount />} />

          {/* 🔹 Market Category Pages */}
          <Route path="/forex" element={<Forex />} />
          <Route path="/indices" element={<Indices />} />
          <Route path="/energies" element={<Energies />} />
          <Route path="/precious-metals" element={<PreciousMetals />} />
          <Route path="/soft-commodities" element={<SoftCommodities />} />
          <Route path="/etfs" element={<ETFs />} />
          <Route path="/cfd-shares" element={<CFDShares />} />
          <Route path="/cfd-bonds" element={<CFDBonds />} />

          {/* 🔹 Platform Category Pages */}
          <Route path="/valtradex-app" element={<ValtradexApp />} />
          <Route path="/metatrader-5" element={<MetaTrader5 />} />
          <Route path="/metatrader-4" element={<MetaTrader4 />} />
          <Route path="/tradingview" element={<TradingView />} />
          <Route path="/webtrader" element={<WebTrader />} />

          {/* 🔹 Tools Section */}
          <Route path="/tools-overview" element={<ToolsOverview />} />
          <Route path="/market-buzz" element={<MarketBuzz />} />
          <Route path="/economic-calendar" element={<EconomicCalendar />} />
          <Route path="/trading-glossary" element={<TradingGlossary />} />
          <Route path="/expert-advisor" element={<ExpertAdvisor />} />

          {/* 🔹 Promotions Section */}
          <Route path="/refer-a-friend" element={<ReferFriend />} />

          {/* 🔹 Company Section */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/help-centre" element={<HelpCentre />} />
          <Route path="/our-awards" element={<OurAwards />} />
          <Route path="/legal-hub" element={<LegalHub />} />

          {/* ⚠️ 404 Page Fallback */}
          <Route
            path="*"
            element={
              <div className="flex flex-col items-center justify-center text-center py-20 text-gray-400">
                <h2 className="text-3xl font-semibold mb-2">404</h2>
                <p className="text-lg">Page Not Found</p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
      <WhatsappChatButton />
    </div>
  );
}

export default App;
