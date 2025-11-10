import { Routes, Route } from "react-router-dom";

// Common Layout Components
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";

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
import LoyaltyProgram from "./components/pages/LoyaltyProgram";
import WelcomeBonus from "./components/pages/WelcomeBonus";
import DepositBonus from "./components/pages/DepositBonus";
import ReferFriend from "./components/pages/ReferFriend";
import AboutUs from "./components/pages/AboutUs";
import HelpCentre from "./components/pages/HelpCentre";
import OurAwards from "./components/pages/OurAwards";
import LegalHub from "./components/pages/LegalHub";

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

          {/* 🔹 Tools Section */}
          <Route path="/tools-overview" element={<ToolsOverview />} />
          <Route path="/market-buzz" element={<MarketBuzz />} />
          <Route path="/economic-calendar" element={<EconomicCalendar />} />
          <Route path="/trading-glossary" element={<TradingGlossary />} />
          <Route path="/expert-advisor" element={<ExpertAdvisor />} />

          {/* 🔹 Promotions Section */}
          <Route path="/loyalty-program" element={<LoyaltyProgram />} />
          <Route path="/welcome-bonus" element={<WelcomeBonus />} />
          <Route path="/deposit-bonus" element={<DepositBonus />} />
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
    </div>
  );
}

export default App;
