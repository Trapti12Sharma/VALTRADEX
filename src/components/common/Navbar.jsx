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

  // ref to the currently rendered dropdown (if any)
  const dropdownRef = useRef(null);

  // scroll shadow
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // mobile body lock
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // close dropdown when both not hovered (with small delay) — respect persistDropdown
  useEffect(() => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    if (!isNavItemHovered && !isDropdownHovered && !persistDropdown) {
      closeTimeoutRef.current = setTimeout(() => {
        setOpenDropdown(null);
      }, 100);
    }

    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
    };
  }, [isNavItemHovered, isDropdownHovered, persistDropdown]);

  // outside click listener: close dropdown if click is outside the currently open dropdown
  useEffect(() => {
    const handleDocumentClick = (e) => {
      const target = e.target;
      // If there's no open dropdown, nothing to do
      if (!dropdownRef.current) return;
      // If click is inside the currently rendered dropdown, ignore
      if (dropdownRef.current.contains(target)) return;
      // Otherwise close dropdown and clear persisted state
      setOpenDropdown(null);
      setPersistDropdown(false);
    };

    document.addEventListener("click", handleDocumentClick);
    return () => document.removeEventListener("click", handleDocumentClick);
  }, []);

  const navItems = [
    { name: "Trading", dropdown: true },
    { name: "Tools", dropdown: true },
    { name: "Promotions", dropdown: true },
    { name: "Company", dropdown: true },
  ];

  const tradingDropdownItems = [
    {
      icon: <FaChartLine className="text-[#0040FF] text-xl" />,
      title: "Markets",
      description: "A world of opportunity",
      link: "/markets",
    },
    {
      icon: <FaCogs className="text-[#0040FF] text-xl" />,
      title: "Platforms",
      description: "Cutting-edge",
      link: "/platforms",
    },
    {
      icon: <FaUserAlt className="text-[#0040FF] text-xl" />,
      title: "Trading Accounts",
      description: "For all levels",
      link: "/trading-accounts",
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
      icon: <FaBook className="text-[#0040FF] text-xl" />,
      title: "Trading Glossary",
      description: "Terms explained",
      link: "/trading-glossary",
    },
    {
      icon: <FaRobot className="text-[#0040FF] text-xl" />,
      title: "Expert Advisor",
      description: "Automation",
      link: "/expert-advisor",
    },
  ];

  const promotionsDropdownItems = [
    {
      icon: <FaMedal className="text-[#0040FF] text-xl" />,
      title: "Loyalty Program",
      description: "Rewards",
      link: "/loyalty-program",
    },
    {
      icon: <FaGift className="text-[#0040FF] text-xl" />,
      title: "Welcome Bonus",
      description: "New user bonus",
      link: "/welcome-bonus",
    },
    {
      icon: <FaCoins className="text-[#0040FF] text-xl" />,
      title: "Deposit Bonus",
      description: "More on deposits",
      link: "/deposit-bonus",
    },
    {
      icon: <FaHandshake className="text-[#0040FF] text-xl" />,
      title: "Refer a Friend",
      description: "Share rewards",
      link: "/refer-a-friend",
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
      icon: <FaMedal className="text-[#0040FF] text-xl" />,
      title: "Our Awards",
      description: "Recognition",
      link: "/our-awards",
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
    else if (type === "Promotions") items = promotionsDropdownItems;
    else if (type === "Company") items = companyDropdownItems;

    return (
      <div
        ref={dropdownRef}
        className="absolute left-0 top-full mt-2 w-[360px] bg-white text-black rounded-2xl shadow-xl py-4 z-50"
        onMouseEnter={() => {
          if (closeTimeoutRef.current) {
            clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
          }
          setIsDropdownHovered(true);
        }}
        onMouseLeave={() => {
          setIsDropdownHovered(false);
        }}
        role="menu"
      >
        {items.map((drop, index) => (
          <Link
            key={index}
            to={drop.link}
            className="flex items-start gap-3 px-5 py-3 hover:bg-gray-100 transition"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setOpenDropdown(null);
              setPersistDropdown(false);
            }}
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
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="VALTRADEX" className="w-[55px] object-contain" />
          <div className="flex flex-col leading-tight">
            <h1 className="text-[#00CFFF] text-lg font-bold">VALTRADEX</h1>
            <span className="text-xs text-gray-400 tracking-widest">
              GLOBAL TRADING
            </span>
          </div>
        </Link>

        {/* desktop nav */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-white relative">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setIsNavItemHovered(true);
                // only set openDropdown if not already persist-click-opened by the same item
                setOpenDropdown(item.name);
              }}
              onMouseLeave={() => {
                setIsNavItemHovered(false);
              }}
            >
              <span
                className="cursor-pointer hover:text-[#00CFFF] transition"
                onClick={(e) => {
                  // stop propagation so document click handler doesn't run immediately
                  e.stopPropagation();
                  if (openDropdown === item.name && persistDropdown) {
                    // toggle off if already persisted
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

        {/* mobile toggle */}
        <button
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          className="lg:hidden text-white text-2xl"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#030B17] text-white px-6 py-6 space-y-4">
          {navItems.map((item) => (
            <div key={item.name}>
              <p
                className="font-semibold text-lg mb-2 cursor-pointer flex justify-between items-center"
                onClick={() =>
                  setOpenDropdown(openDropdown === item.name ? null : item.name)
                }
              >
                {item.name}
                <span className="text-[#00CFFF]">
                  {openDropdown === item.name ? "-" : "+"}
                </span>
              </p>
              {openDropdown === item.name && (
                <div className="bg-[#0F1626] rounded-md my-2 mx-4 py-3">
                  {(item.name === "Trading"
                    ? tradingDropdownItems
                    : item.name === "Tools"
                    ? toolsDropdownItems
                    : item.name === "Promotions"
                    ? promotionsDropdownItems
                    : companyDropdownItems
                  ).map((d, i) => (
                    <Link
                      key={i}
                      to={d.link}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block text-left px-6 py-2 text-sm hover:text-[#00CFFF]"
                    >
                      {d.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link to="/login" className="block py-2 hover:text-[#00CFFF]">
            Login
          </Link>
          <button className="w-full bg-[#0040FF] hover:bg-[#0059FF] text-white font-semibold px-5 py-3 rounded-md transition-all">
            Trade now
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
