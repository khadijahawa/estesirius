import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaPhone, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const menuRefs = useRef({});
  const headerRef = useRef(null);
  const [headerBgClass, setHeaderBgClass] = useState(
    "bg-white/80 backdrop-blur-sm"
  );

  const menuItems = {
    HOME: [{ name: "HOME", link: "/", key: "home" }],
    ABOUT: [
      { name: "OUR STORY", link: "/about", key: "our-story" },
      { name: "TESTIMONIALS", link: "/testimonials", key: "testimonials" }
    ],
    HAIR: [
      {
        name: "Hair Transplant For Men",
        link: "/transplant/hair/hair-transplant-for-men",
        key: "hair-transplant-for-men"
      },
      {
        name: "Hair Transplant For Women",
        link: "/transplant/hair/hair-transplant-for-women",
        key: "hair-transplant-for-women"
      },
      {
        name: "Beard Transplant",
        link: "/transplant/hair/beard-transplant",
        key: "beard-transplant"
      }
    ],
    OPERATIONS: [{ name: "GALLERY", link: "/gallery", key: "gallery" }],
    ESTHETIC: [{ name: "ESTHETIC 1", link: "/esthetic1", key: "esthetic1" }],
    FACIAL: [{ name: "FACE LIFT", link: "/", key: "face-l" }],
    CONTACT: [{ name: "CONTACT 01", link: "/contact1", key: "contact1" }]
  };
  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
        setIsAtTop(false);
      } else {
        setIsScrolled(false);
        setIsAtTop(true);
      }

      // Hide header when scrolling down, show when scrolling up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [lastScrollY]);

  const handleMouseEnter = (menuName, event) => {
    if (menuName === "HOME" || menuName === "CONTACT") return;
    const rect = event.currentTarget.getBoundingClientRect();
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <>
      {/* Wrapper div that contains both nav elements with shared animation */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Top Navigation Bar - Only shows when at the top of the page */}
        <div
          className={`hidden md:block w-full bg-transparent py-3 px-6 mt-2 transition-all duration-300 ${
            isAtTop
              ? "opacity-100 max-h-20"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            <div className="flex items-center text-white">
              <FaPhone className="mr-2 text-primary" />
              <span>ISTANBUL TÜRKİYE</span>
            </div>

            <div className="flex items-center overflow-hidden">
              <div className="news-ticker-container">
                <span className="news-ticker text-white">
                  <span className="bg-primary px-2 py-1 text-white font-bold mr-2">
                    NEWS
                  </span>
                  THIS IS THE LATEST NEWS ABOUT OUR CLINIC SERVICES AND
                  PROMOTIONS
                </span>
              </div>
            </div>

            <div className="flex items-center text-white">
              <FaEnvelope className="mr-2 text-primary" />
              <span>CLINIC: +31 2349334972</span>
            </div>
          </div>
        </div>

        {/* Main Header - Adjust top margin when nav bar is hidden */}
        <header ref={headerRef} className={`w-full ${!isAtTop ? "mt-2" : ""}`}>
          <div
            className={`mx-auto max-w-[95%] md:max-w-[90%] ${
              isAtTop ? "mt-4" : "mt-0"
            } rounded-xl overflow-visible ${headerBgClass} shadow-lg transition-all duration-300`}
          >
            {/* Logo and Main Menu */}
            <div className="bg-transparent py-4 px-6">
              <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                  <div className="flex shrink-0">
                    <span className="bg-primary text-white px-3 py-2 font-bold font-sans">
                      ESTE
                    </span>
                    <span className="bg-secondary text-white px-3 py-2 font-bold font-sans">
                      SIRIUS
                    </span>
                  </div>
                </Link>

                {/* Desktop Menu (Hidden on mobile) */}
                <nav className="hidden md:flex flex-1 justify-center">
                  <ul className="flex justify-between w-full max-w-3xl">
                    {Object.keys(menuItems).map((menuName) => (
                      <li
                        key={menuName}
                        className="relative py-2 cursor-pointer px-1 whitespace-nowrap text-center"
                        onMouseEnter={(e) => handleMouseEnter(menuName, e)}
                        onMouseLeave={handleMouseLeave}
                        ref={(el) => (menuRefs.current[menuName] = el)}
                      >
                        <span className="font-medium hover:text-primary transition text-sm lg:text-base font-sans">
                          {menuName}
                        </span>
                        {activeDropdown === menuName && (
                          <DropdownMenu
                            items={menuItems[menuName].map((item) => (
                              <Link href={item?.link} key={item?.key}>
                                {/* <span className="block py-2"> */}
                                {item.name}
                                {/* </span> */}
                              </Link>
                            ))}
                            parentRef={menuRefs.current[menuName]}
                            className={headerBgClass}
                          />
                        )}
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                  <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition mr-2">
                    BOOK
                  </button>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-secondary p-2 focus:outline-none"
                  >
                    <FaBars className="text-2xl" />
                  </button>
                </div>

                {/* Book Now Button (Hidden on mobile) */}
                <button className="hidden md:block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition shrink-0">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Menu Overlay - Moved outside header */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu Slide-in Panel - Moved outside header */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex">
            <span className="bg-primary text-white px-2 py-1 text-sm font-bold font-sans">
              ESTE
            </span>
            <span className="bg-secondary text-white px-2 py-1 text-sm font-bold font-sans">
              SIRIUS
            </span>
          </div>
          <button
            onClick={toggleMobileMenu}
            className="text-secondary focus:outline-none"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <div className="py-4 px-6 overflow-y-auto h-[calc(100%-60px)]">
          <nav>
            <ul className="space-y-6">
              {Object.keys(menuItems).map((menuName) => (
                <li key={menuName} className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-secondary">
                      {menuName}
                    </span>
                    <span className="text-xs text-gray-light">+</span>
                  </div>
                  <ul className="mt-2 pl-4 space-y-2">
                    {menuItems[menuName].map((subItem) => (
                      <li
                        key={subItem}
                        className="text-gray-dark text-sm hover:text-primary transition"
                      >
                        <Link href={subItem.link}>
                          <span>{subItem.name}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8">
            <button className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3 rounded transition">
              BOOK CONSULTATION
            </button>
          </div>

          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-primary" />
              <span>+31 2349334972</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-primary" />
              <span>info@estesirius.com</span>
            </div>
            <p className="text-gray-dark">ST. LAMBOR, NEW YORK (US)</p>
          </div>
        </div>
      </div>

      {/* Notification Badge - Moved outside header */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="notification-badge bg-primary text-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-lg cursor-pointer hover:bg-primary-dark transition-all">
          <span className="text-xs">NEW</span>
          <span className="font-bold">&apos;54</span>
        </div>
      </div>
    </>
  );
}
