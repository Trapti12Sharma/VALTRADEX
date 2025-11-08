import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaGlobe,
  FaChartLine,
  FaCopy,
  FaUserAlt,
  FaCogs,
  FaCalendarAlt,
  FaBullhorn,
  FaCheckCircle,
  FaBook,
  FaRobot,
  FaGift,
  FaHandshake,
  FaMedal,
  FaCoins,
  FaUsers,
  FaServer,
  FaInfoCircle,
  FaBell,
  FaBalanceScale,
  FaHeadset,
  FaHandHoldingUsd,
  FaLeaf,
} from "react-icons/fa";
import logo from "../../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Trading", dropdown: true },
    { name: "Tools", dropdown: true },
    { name: "Promotions", dropdown: true },
    { name: "Company", dropdown: true },
  ];

  // === Dropdown Content Arrays ===
  const tradingDropdownItems = [
    {
      icon: <FaChartLine className="text-[#0040FF] text-xl" />,
      title: "Markets",
      description: "A world of opportunity in every market",
      link: "/markets",
    },
    {
      icon: <FaCogs className="text-[#0040FF] text-xl" />,
      title: "Platforms",
      description: "Trade with cutting-edge technology",
      link: "/platforms",
    },
    {
      icon: <FaUserAlt className="text-[#0040FF] text-xl" />,
      title: "Trading Accounts",
      description: "Built for every level of expertise",
      link: "/trading-accounts",
    },
    {
      icon: <FaCopy className="text-[#0040FF] text-xl" />,
      title: "Copy Trading",
      description: "Trade smarter with top-performing traders",
      link: "/copy-trading",
    },
  ];

  const toolsDropdownItems = [
    {
      icon: <FaCheckCircle className="text-[#0040FF] text-xl" />,
      title: "Overview",
      description: "Our suite of powerful, intuitive trading tools",
      link: "/tools-overview",
    },
    {
      icon: <FaBullhorn className="text-[#0040FF] text-xl" />,
      title: "Market Buzz",
      description: "Stay ahead of market trends using AI",
      link: "/market-buzz",
    },
    {
      icon: <FaCalendarAlt className="text-[#0040FF] text-xl" />,
      title: "Economic Calendar",
      description: "Chart the next economic event",
      link: "/economic-calendar",
    },
    {
      icon: <FaBook className="text-[#0040FF] text-xl" />,
      title: "Trading Glossary",
      description: "Find out what it all means",
      link: "/trading-glossary",
    },
    {
      icon: <FaRobot className="text-[#0040FF] text-xl" />,
      title: "Expert Advisor",
      description: "Let technology do the heavy lifting",
      link: "/expert-advisor",
    },
  ];

  const promotionsDropdownItems = [
    {
      icon: <FaCheckCircle className="text-[#0040FF] text-xl" />,
      title: "Overview",
      description: "Make the most out of your trades",
      link: "/promotions-overview",
    },
    {
      icon: <FaMedal className="text-[#0040FF] text-xl" />,
      title: "Loyalty Program",
      description: "There's always something more with us",
      link: "/loyalty-program",
    },
    {
      icon: <FaHandshake className="text-[#0040FF] text-xl" />,
      title: "Refer a Friend",
      description: "Trading is always better with friends",
      link: "/refer-a-friend",
    },
    {
      icon: <FaGift className="text-[#0040FF] text-xl" />,
      title: "Welcome Bonus",
      description: "A welcome gift for you",
      link: "/welcome-bonus",
    },
    {
      icon: <FaCoins className="text-[#0040FF] text-xl" />,
      title: "Deposit Bonus",
      description: "More on every deposit you make",
      link: "/deposit-bonus",
    },
    {
      icon: <FaUsers className="text-[#0040FF] text-xl" />,
      title: "Active Trader Program",
      description: "Bonuses for staying active",
      link: "/active-trader-program",
    },
    {
      icon: <FaServer className="text-[#0040FF] text-xl" />,
      title: "VPS Refund",
      description: "More reasons to stay connected",
      link: "/vps-refund",
    },
  ];

  const companyDropdownItems = [
    {
      icon: <FaInfoCircle className="text-[#0040FF] text-xl" />,
      title: "About Us",
      description: "We make trading easy",
      link: "/about-us",
    },
    {
      icon: <FaHandshake className="text-[#0040FF] text-xl" />,
      title: "Our Partners",
      description: "How we work together",
      link: "/our-partners",
    },
    {
      icon: <FaMedal className="text-[#0040FF] text-xl" />,
      title: "Our Awards",
      description: "We do better, every time",
      link: "/our-awards",
    },
    {
      icon: <FaBell className="text-[#0040FF] text-xl" />,
      title: "Trading Notifications",
      description: "Updates on trading conditions",
      link: "/trading-notifications",
    },
    {
      icon: <FaBalanceScale className="text-[#0040FF] text-xl" />,
      title: "Legal Hub",
      description: "How we protect you",
      link: "/legal-hub",
    },
    {
      icon: <FaHeadset className="text-[#0040FF] text-xl" />,
      title: "Help Centre",
      description: "Questions? Find solutions here",
      link: "/help-centre",
    },
    {
      icon: <FaHandHoldingUsd className="text-[#0040FF] text-xl" />,
      title: "Sponsorship",
      description: "For those who share our passion",
      link: "/sponsorship",
    },
    {
      icon: <FaLeaf className="text-[#0040FF] text-xl" />,
      title: "ESG",
      description: "Putting our philosophy into action",
      link: "/esg",
    },
  ];

  // === Dropdown Renderer ===
  const renderDropdown = (type) => {
    let items = [];
    if (type === "Trading") items = tradingDropdownItems;
    else if (type === "Tools") items = toolsDropdownItems;
    else if (type === "Promotions") items = promotionsDropdownItems;
    else if (type === "Company") items = companyDropdownItems;

    return (
      <div className="absolute left-0 top-[2.8rem] w-[360px] bg-white text-black rounded-2xl shadow-xl py-4 animate-fadeIn">
        {items.map((drop, index) => (
          <Link
            key={index}
            to={drop.link}
            className="flex items-start gap-3 px-5 py-3 hover:bg-gray-100 transition"
          >
            <div className="mt-1">{drop.icon}</div>
            <div>
              <h4 className="font-semibold text-[15px]">{drop.title}</h4>
              <p className="text-gray-500 text-xs mt-0.5">{drop.description}</p>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030B17]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="VALTRADEX"
            className="w-[55px] h-auto object-contain"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-gold text-lg font-bold tracking-wide">
              VALTRADEX
            </h1>
            <span className="text-xs text-gray-400 tracking-widest">
              GLOBAL TRADING
            </span>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-white relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() =>
                item.dropdown ? setOpenDropdown(item.name) : null
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={`/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="hover:text-gold transition"
              >
                {item.name}
              </Link>

              {/* DROPDOWN */}
              {item.dropdown &&
                openDropdown === item.name &&
                renderDropdown(item.name)}
            </div>
          ))}

          <button className="ml-4 bg-[#0040FF] hover:bg-[#0059FF] text-white font-semibold px-5 py-2 rounded-md transition-all">
            Trade now
          </button>

          <Link
            to="/login"
            className="ml-4 hover:text-gold transition font-semibold"
          >
            Login
          </Link>

          <div className="flex items-center gap-1 cursor-pointer">
            <FaGlobe className="text-gold text-sm" />
            <span className="text-sm">EN</span>
          </div>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="lg:hidden text-white text-2xl"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
