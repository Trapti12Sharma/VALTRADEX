import {
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";
import visa from "../../assets/footer1.svg";
import mastercard from "../../assets/footer2.svg";
import neteller from "../../assets/footer3.svg";
import skrill from "../../assets/footer4.svg";
import unionpay from "../../assets/footer5.svg";
import fasapay from "../../assets/footer6.svg";
import partner1 from "../../assets/footer8.svg";
import partner2 from "../../assets/footer9.svg";
import badge1 from "../../assets/footer10.svg";
import badge2 from "../../assets/footer11.svg";

const Footer = () => {
  return (
    <footer className="bg-[#02060F] text-gray-300 pt-16 pb-10 text-sm leading-relaxed border-t border-[#1a1a1a]">
      {/* Main Top Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-left">
        {/* MARKETS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Markets</h4>
          <ul className="space-y-2">
            <li>Forex</li>
            <li>Indices</li>
            <li>Energies</li>
            <li>Precious Metals</li>
            <li>Soft Commodities</li>
            <li>ETFs</li>
            <li>CFD Shares</li>
            <li>CFD Bonds</li>
          </ul>
        </div>

        {/* PLATFORM */}
        <div>
          <h4 className="text-white font-semibold mb-4">Platform</h4>
          <ul className="space-y-2">
            <li>VALTRADEX App</li>
            <li>MetaTrader 5</li>
            <li>MetaTrader 4</li>
            <li>TradingView</li>
            <li>WebTrader</li>
            <li>Copy Trading</li>
            <li>Economic Calendar</li>
            <li>Market Buzz</li>
          </ul>
        </div>

        {/* ACCOUNTS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Accounts</h4>
          <ul className="space-y-2">
            <li>Standard STP</li>
            <li>RAW ECN</li>
            <li>PRO ECN</li>
            <li>Swap Free</li>
            <li>Cent Account</li>
            <li>Demo Account</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Sponsorship</li>
            <li>Our Partners</li>
            <li>Our Awards</li>
            <li>Press Release</li>
            <li>Trading Notifications</li>
            <li>Legal Hub</li>
            <li>Careers</li>
            <li>Help Centre</li>
          </ul>
        </div>
      </div>

      {/* Logos and Partners */}
      <div className="max-w-7xl mx-auto mt-12 px-6 flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10">
        {/* Left: Payment Icons */}
        <div className="flex flex-wrap gap-5 justify-center lg:justify-start">
          {[visa, mastercard, neteller, skrill, unionpay, fasapay].map(
            (img, i) => (
              <img
                key={i}
                src={img}
                alt="payment"
                className="w-12 h-8 object-contain opacity-80"
              />
            )
          )}
        </div>

        {/* Right: Partners and Badges */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
          <div className="flex flex-col items-center lg:items-start text-gray-400 text-xs">
            <span className="font-semibold text-white mb-2">
              Official partners:
            </span>
            <div className="flex gap-6">
              <img src={partner1} alt="partner1" className="h-10" />
              <img src={partner2} alt="partner2" className="h-10" />
            </div>
          </div>

          <div className="flex gap-6">
            <img src={badge1} alt="badge1" className="h-16" />
            <img src={badge2} alt="badge2" className="h-16" />
          </div>
        </div>
      </div>

      {/* Social + Contact */}
      <div className="max-w-7xl mx-auto mt-10 px-6 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[#1a1a1a] pt-6">
        <div className="flex items-center gap-4">
          <span className="font-medium text-white">Follow us on:</span>
          <div className="flex gap-4 text-white text-lg">
            <FaLinkedin className="hover:text-gold transition" />
            <FaYoutube className="hover:text-gold transition" />
            <FaXTwitter className="hover:text-gold transition" />
            <FaFacebookF className="hover:text-gold transition" />
            <FaInstagram className="hover:text-gold transition" />
          </div>
        </div>

        <div className="text-gray-400">
          Customer Service:{" "}
          <span className="text-[#00CFFF] hover:underline cursor-pointer">
            info@valtradex.com
          </span>
        </div>
      </div>

      {/* Risk Warning */}
      <div className="max-w-7xl mx-auto mt-10 px-6">
        <h5 className="text-white font-semibold mb-2">Risk Warning</h5>
        <p className="text-gray-400 text-xs leading-relaxed">
          Trading Contracts for Difference (CFDs) carries a high level of risk
          and may not be suitable for all investors. The use of leverage can
          significantly magnify gains and losses and may result in losses
          exceeding your initial investment. You should ensure that you fully
          understand the risks involved and seek independent advice where
          necessary. Past performance is not indicative of future results.
        </p>

        <h5 className="text-white font-semibold mt-6 mb-2">
          General Disclaimer
        </h5>
        <p className="text-gray-400 text-xs leading-relaxed">
          The information on this website is for general informational purposes
          only and does not take into account your specific investment
          objectives, financial situation, or particular needs.
        </p>

        <h5 className="text-white font-semibold mt-6 mb-2">
          Regulatory Information
        </h5>
        <p className="text-gray-400 text-xs leading-relaxed">
          VALTRADEX is a global trading brand authorized and regulated in
          multiple jurisdictions. Trading services are provided under the laws
          of respective financial authorities. For further details, please refer
          to our legal documents available on our website.
        </p>
      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-10 border-t border-[#1a1a1a] pt-6 text-center text-gray-500 text-xs">
        © 2025 VALTRADEX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
