import { useState, useEffect, useRef } from "react";
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
  FaRobot,
  FaInfoCircle,
  FaBalanceScale,
  FaHeadset,
  FaChartPie,
  FaIndustry,
  FaGem,
  FaLeaf,
  FaLayerGroup,
  FaShareAlt,
  FaUniversity,
  FaMobileAlt,
  FaDesktop,
  FaLaptop,
  FaChartLine as FaTradingView,
  FaGlobeEurope,
  FaExchangeAlt,
  FaPercent,
  FaMoneyBillAlt,
  FaChartBar,
  FaUndo,
  FaUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpeg";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isNavItemHovered, setIsNavItemHovered] = useState(false);
  const [isDropdownHovered, setIsDropdownHovered] = useState(false);
  const [persistDropdown, setPersistDropdown] = useState(false);
  const closeTimeoutRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => (document.body.style.overflow = "unset");
  }, [isMobileMenuOpen]);

  // desktop dropdown close on hover out
  useEffect(() => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    if (!isNavItemHovered && !isDropdownHovered && !persistDropdown) {
      closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 100);
    }
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, [isNavItemHovered, isDropdownHovered, persistDropdown]);

  // close dropdown if click outside
  useEffect(() => {
    const handleDocumentClick = (e) => {
      if (!dropdownRef.current) return;
      if (dropdownRef.current.contains(e.target)) return;
      setOpenDropdown(null);
      setPersistDropdown(false);
    };
    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const navItems = [
    { name: "Trading", dropdown: true },
    { name: "Tools", dropdown: true },
    { name: "Markets", dropdown: true },
    { name: "Platforms", dropdown: true },
    { name: "Company", dropdown: true },
  ];

  const tradingAccountSubItems = [
    {
      icon: <FaExchangeAlt className="text-[#0040FF] text-lg" />,
      title: "Standard STP",
      link: "/standard-stp",
    },
    {
      icon: <FaPercent className="text-[#0040FF] text-lg" />,
      title: "RAW ECN",
      link: "/raw-ecn",
    },
    {
      icon: <FaChartBar className="text-[#0040FF] text-lg" />,
      title: "PRO ECN",
      link: "/pro-ecn",
    },
    {
      icon: <FaUndo className="text-[#0040FF] text-lg" />,
      title: "Swap Free",
      link: "/swap-free",
    },
    {
      icon: <FaMoneyBillAlt className="text-[#0040FF] text-lg" />,
      title: "Cent Account",
      link: "/cent-account",
    },
    {
      icon: <FaUserCircle className="text-[#0040FF] text-lg" />,
      title: "Demo Account",
      link: "/demo-account",
    },
  ];

  const tradingDropdownItems = [
    {
      icon: <FaUserAlt className="text-[#0040FF] text-xl" />,
      title: "Trading Accounts",
      description: "For all levels",
      link: "/trading-accounts",
      subItems: tradingAccountSubItems,
    },
    {
      icon: <FaCopy className="text-[#0040FF] text-xl" />,
      title: "Copy Trading",
      description: "Copy pros",
      link: "/copy-trading",
    },
  ];

  const toolsDropdownItems = [
    {
      icon: <FaCheckCircle className="text-[#0040FF] text-xl" />,
      title: "Overview",
      description: "Tools suite",
      link: "/tools-overview",
    },
    {
      icon: <FaBullhorn className="text-[#0040FF] text-xl" />,
      title: "Market Buzz",
      description: "AI insights",
      link: "/market-buzz",
    },
    {
      icon: <FaCalendarAlt className="text-[#0040FF] text-xl" />,
      title: "Economic Calendar",
      description: "Events",
      link: "/economic-calendar",
    },
    {
      icon: <FaRobot className="text-[#0040FF] text-xl" />,
      title: "Expert Advisor",
      description: "Automation",
      link: "/expert-advisor",
    },
  ];

  const marketsDropdownItems = [
    {
      icon: <FaChartPie className="text-[#0040FF] text-lg" />,
      title: "Markets",
      link: "/markets",
    },
    {
      icon: <FaChartLine className="text-[#0040FF] text-lg" />,
      title: "Forex",
      link: "/forex",
    },
    {
      icon: <FaIndustry className="text-[#0040FF] text-lg" />,
      title: "Indices",
      link: "/indices",
    },
    {
      icon: <FaGem className="text-[#0040FF] text-lg" />,
      title: "Precious Metals",
      link: "/precious-metals",
    },
    {
      icon: <FaLeaf className="text-[#0040FF] text-lg" />,
      title: "Soft Commodities",
      link: "/soft-commodities",
    },
    {
      icon: <FaLayerGroup className="text-[#0040FF] text-lg" />,
      title: "ETFs",
      link: "/etfs",
    },
    {
      icon: <FaShareAlt className="text-[#0040FF] text-lg" />,
      title: "CFD Shares",
      link: "/cfd-shares",
    },
    {
      icon: <FaUniversity className="text-[#0040FF] text-lg" />,
      title: "CFD Bonds",
      link: "/cfd-bonds",
    },
  ];

  const platformsDropdownItems = [
    {
      icon: <FaCogs className="text-[#0040FF] text-lg" />,
      title: "Platforms",
      link: "/platforms",
    },
    {
      icon: <FaMobileAlt className="text-[#0040FF] text-lg" />,
      title: "Valtradex App",
      link: "/valtradex-app",
    },
    {
      icon: <FaDesktop className="text-[#0040FF] text-lg" />,
      title: "MetaTrader 5",
      link: "/metatrader-5",
    },
    {
      icon: <FaLaptop className="text-[#0040FF] text-lg" />,
      title: "MetaTrader 4",
      link: "/metatrader-4",
    },
    {
      icon: <FaTradingView className="text-[#0040FF] text-lg" />,
      title: "TradingView",
      link: "/tradingview",
    },
    {
      icon: <FaGlobeEurope className="text-[#0040FF] text-lg" />,
      title: "WebTrader",
      link: "/webtrader",
    },
  ];

  const companyDropdownItems = [
    {
      icon: <FaInfoCircle className="text-[#0040FF] text-xl" />,
      title: "About Us",
      description: "Who we are",
      link: "/about-us",
    },
    {
      icon: <FaHeadset className="text-[#0040FF] text-xl" />,
      title: "Help Centre",
      description: "Support",
      link: "/help-centre",
    },
    {
      icon: <FaBalanceScale className="text-[#0040FF] text-xl" />,
      title: "Legal Hub",
      description: "Legal",
      link: "/legal-hub",
    },
  ];

  const renderDropdown = (type) => {
    let items = [];
    if (type === "Trading") items = tradingDropdownItems;
    else if (type === "Tools") items = toolsDropdownItems;
    else if (type === "Markets") items = marketsDropdownItems;
    else if (type === "Platforms") items = platformsDropdownItems;
    else if (type === "Company") items = companyDropdownItems;

    return (
      <div
        ref={dropdownRef}
        className="absolute left-0 top-full mt-2 w-[280px] bg-white text-black rounded-2xl shadow-xl py-3 z-50"
        onMouseEnter={() => setIsDropdownHovered(true)}
        onMouseLeave={() => setIsDropdownHovered(false)}
      >
        {items.map((drop, index) => (
          <div key={index} className="relative">
            <div className="flex items-start gap-3 px-5 py-3 hover:bg-gray-100 transition cursor-pointer">
              <div className="mt-1">{drop.icon}</div>
              <div className="flex flex-col">
                <Link
                  to={drop.link}
                  onClick={() => setOpenDropdown(null)}
                  className="font-semibold text-[15px] hover:text-[#0040FF]"
                >
                  {drop.title}
                </Link>
                {drop.description && (
                  <p className="text-gray-500 text-xs mt-0.5">
                    {drop.description}
                  </p>
                )}
                {drop.subItems && (
                  <div className="mt-2 flex flex-col gap-1">
                    {drop.subItems.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.link}
                        className="flex items-center gap-2 pl-1 py-1 hover:bg-[#E8F3FF] rounded-md transition px-2"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="text-[#0040FF]">{sub.icon}</div>
                        <span className="text-[13px] text-gray-700 hover:text-[#0040FF]">
                          {sub.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  // ✅ Each mobile dropdown managed separately
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#030B17]/90 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          {/* ✅ Increased logo size & removed white background */}
          <img
            src={logo}
            alt="VALTRADEX"
            className="w-[70px] h-auto object-contain bg-transparent"
          />
          <div className="flex flex-col leading-tight">
            <h1 className="text-[#00CFFF] text-lg font-bold">VALTRADEX</h1>
            <span className="text-xs text-gray-400 tracking-widest">
              GLOBAL TRADING
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-white relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current)
                  clearTimeout(closeTimeoutRef.current);
                setIsNavItemHovered(true);
                setOpenDropdown(item.name);
              }}
              onMouseLeave={() => setIsNavItemHovered(false)}
            >
              <span
                className={`cursor-pointer transition ${
                  openDropdown === item.name
                    ? "text-[#00CFFF]"
                    : "hover:text-[#00CFFF]"
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  if (openDropdown === item.name && persistDropdown) {
                    setOpenDropdown(null);
                    setPersistDropdown(false);
                  } else {
                    setOpenDropdown(item.name);
                    setPersistDropdown(true);
                  }
                }}
              >
                {item.name}
              </span>
              {item.dropdown &&
                openDropdown === item.name &&
                renderDropdown(item.name)}
            </div>
          ))}

          <Link
            to="/login"
            className="hover:text-[#00CFFF] transition font-semibold"
          >
            Login
          </Link>

          <button className="bg-[#0040FF] hover:bg-[#0059FF] text-white font-semibold px-5 py-2 rounded-md transition-all">
            Trade now
          </button>

          <div className="flex items-center gap-1 cursor-pointer">
            <FaGlobe className="text-[#00CFFF] text-sm" />
            <span className="text-sm">EN</span>
          </div>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
          className="lg:hidden text-white text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* ✅ Mobile Menu (Fixed Dropdown Expansion) */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden absolute left-0 right-0 top-full bg-[#030B17] text-white z-40 overflow-y-auto h-[100vh] transition-all duration-300"
          role="dialog"
          aria-hidden={!isMobileMenuOpen}
        >
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.name} className="border-b border-[#0B1320] pb-3">
                  <button
                    className="w-full flex items-center justify-between text-left text-lg font-semibold py-2"
                    onClick={() =>
                      setOpenMobileDropdown(
                        openMobileDropdown === item.name ? null : item.name
                      )
                    }
                  >
                    <span>{item.name}</span>
                    <span className="text-xl">
                      {openMobileDropdown === item.name ? "−" : "+"}
                    </span>
                  </button>

                  {item.dropdown && openMobileDropdown === item.name && (
                    <div className="mt-2 pl-4 space-y-2">
                      {(item.name === "Trading"
                        ? tradingDropdownItems
                        : item.name === "Tools"
                        ? toolsDropdownItems
                        : item.name === "Markets"
                        ? marketsDropdownItems
                        : item.name === "Platforms"
                        ? platformsDropdownItems
                        : companyDropdownItems
                      ).map((drop, i) => (
                        <div key={i} className="mb-2">
                          <Link
                            to={drop.link}
                            className="flex items-center gap-3 py-2 text-gray-200 hover:text-[#00CFFF]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {drop.icon}
                            <span>{drop.title}</span>
                          </Link>

                          {drop.subItems && (
                            <div className="pl-6 mt-1 flex flex-col gap-1">
                              {drop.subItems.map((sub, j) => (
                                <Link
                                  key={j}
                                  to={sub.link}
                                  className="py-1 text-gray-400 hover:text-[#00CFFF]"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {sub.title}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="pt-4">
                <Link
                  to="/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 font-semibold hover:text-[#00CFFF]"
                >
                  Login
                </Link>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full mt-3 bg-[#0040FF] hover:bg-[#0059FF] text-white font-semibold py-3 rounded-md"
                >
                  Trade now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
