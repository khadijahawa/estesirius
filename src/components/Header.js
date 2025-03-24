import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import DropdownMenu from "./DropdownMenu";
import MobileSidebar from "./MobileSidebar";

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
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
        link: "/hair/hair-transplant-for-men",
        key: "hair-transplant-for-men"
      },
      {
        name: "Hair Transplant For Women",
        link: "/hair/hair-transplant-for-women",
        key: "hair-transplant-for-women"
      },
      {
        name: "Beard Transplant",
        link: "/hair/beard",
        key: "beard-transplant"
      }
    ],
    OPERATIONS: [{ name: "GALLERY", link: "/gallery", key: "gallery" }],
    ESTHETIC: [{ name: "ESTHETIC 1", link: "/esthetic1", key: "esthetic1" }],
    FACIAL: [{ name: "FACE LIFT", link: "/", key: "face-l" }]
  };

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
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
    // Only show dropdown if menu has more than one item or the item doesn't point to the menu name
    if (menuItems[menuName].length <= 1 && 
        menuItems[menuName][0].name === menuName) return;
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

  // Helper function to check if a menu needs a dropdown
  const hasDropdown = (menuName) => {
    return !(menuItems[menuName].length === 1 && 
            (menuItems[menuName][0].name === menuName || 
             menuItems[menuName][0].name === menuName + " 01"));
  };

  return (
    <>
      {/* Wrapper div that contains the header with animation */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isHidden ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* Main Header */}
        <header ref={headerRef} className="w-full pt-4">
          <div
            className={`mx-auto max-w-[95%] md:max-w-[90%] rounded-xl overflow-visible ${headerBgClass} shadow-lg transition-all duration-300`}
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
                        {/* Make any menu without dropdown directly clickable */}
                        {!hasDropdown(menuName) ? (
                          <Link href={menuItems[menuName][0].link}>
                            <span className="font-medium hover:text-primary transition text-sm lg:text-base font-sans">
                              {menuName}
                            </span>
                          </Link>
                        ) : (
                          <span className="font-medium hover:text-primary transition text-sm lg:text-base font-sans">
                            {menuName}
                          </span>
                        )}
                        {activeDropdown === menuName && (
                          <DropdownMenu
                            items={menuItems[menuName].map((item) => (
                              <Link href={item?.link} key={item?.key}>
                                {item.name}
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
                  <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition mr-2 transform hover:scale-[1.02] active:scale-[0.98]">
                    BOOK
                  </button>
                  <button
                    onClick={toggleMobileMenu}
                    className="text-secondary p-2 focus:outline-none hover:text-primary transition-colors duration-200"
                    aria-label="Open menu"
                  >
                    <FaBars className="text-2xl" />
                  </button>
                </div>

                {/* Book Now Button (Hidden on mobile) */}
                <button className="hidden md:block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition shrink-0 transform hover:scale-[1.02] active:scale-[0.98]">
                  BOOK NOW
                </button>
              </div>
            </div>
          </div>
        </header>
      </div>

      {/* Mobile Sidebar Component */}
      <MobileSidebar 
        isOpen={mobileMenuOpen} 
        onClose={toggleMobileMenu} 
        menuItems={menuItems}
        hasDropdown={hasDropdown}
      />

      {/* Notification Badge */}
      <div className="fixed bottom-8 right-8 z-50">
        <div className="notification-badge bg-primary text-white rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-lg cursor-pointer hover:bg-primary-dark transition-all transform hover:scale-105 active:scale-95">
          <span className="text-xs">NEW</span>
          <span className="font-bold">&apos;54</span>
        </div>
      </div>
    </>
  );
}
