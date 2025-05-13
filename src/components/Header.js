// import { useState, useEffect, useRef } from "react";
// import Link from "next/link";
// import { FaBars } from "react-icons/fa";
// import DropdownMenu from "./DropdownMenu";
// import MobileSidebar from "./MobileSidebar";
// import { useTranslation } from "react-i18next";
// import Image from "next/image";

// export default function Header() {
//    const { t } = useTranslation();
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isHidden, setIsHidden] = useState(false);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const menuRefs = useRef({});
//   const headerRef = useRef(null);
//   const [headerBgClass, setHeaderBgClass] = useState(
//     "bg-white/80 backdrop-blur-sm"
//   );

//   const menuItems = {
//     HOME: [{ name: "HOME", link: "/", key: "home" }],
//     ABOUT: [
//       { name: "OUR STORY", link: "/about", key: "our-story" },
//       { name: "SHOP", link: "/shop", key: "shop" }
//     ],
//     "HAIR TRANSPLANT": [
//       {
//         name: "Hair Transplant For Men",
//         link: "/hair/hair-transplant-for-men",
//         key: "hair-transplant-for-men"
//       },
//       {
//         name: "Hair Transplant For Women",
//         link: "/hair/hair-transplant-for-women",
//         key: "hair-transplant-for-women"
//       },
//       {
//         name: "Beard Transplant",
//         link: "/hair/beard",
//         key: "beard-transplant"
//       }
//     ],

//     "ESTHETIC MEDICINE": [
//       {
//         name: "FILLER",
//         link: "/operations/dermal-filler-injection",
//         key: "esthetic1"
//       },
//       { name: "BOTOX", link: "/operations/botox-injection", key: "esthetic1" },
//       { name: "THREADS", link: "/operations/thread-lift", key: "esthetic1" },
//       { name: "PRP", link: "/operations/prp-injection", key: "esthetic1" },
//       {
//         name: "MESOTHERAPY",
//         link: "/operations/mesotherapy",
//         key: "esthetic1"
//       },
//       {
//         name: "IMMUNE SYSTEM BOOSTER TREATMENTS",
//         link: "/operations/Immune-System-Booster-Treatment",
//         key: "esthetic1"
//       },
//       {
//         name: "STEM CELLS",
//         link: "/operations/Stem-Cell-Therapy",
//         key: "esthetic1"
//       }
//     ],

//     "COSMETIC SURGERIES": [
//       {
//         name: "FACIAL SURGERY",
//         link: "/facial/facial-surgery",
//         key: "gallery"
//       },
//       {
//         name: "BODY CONTOURING",
//         link: "/facial/Body-Contouring",
//         key: "gallery"
//       },
//       { name: "BREAST SURGERY", link: "/facial/Breast-Surgery", key: "gallery" }
//     ],
//     MACHINES: [
//       { name: "HYDRAFACIAL", link: "/machines/HYDRAFACIAL", key: "face-l" },
//       {
//         name: "GOLDEN NEEDLE (SCARLET)",
//         link: "/machines/GOLDEN-NEEDLE",
//         key: "face-l"
//       },
//       {
//         name: "HIFU (ULTHERA)",
//         link: "/machines/HIFU-(ULTHERA)",
//         key: "face-l"
//       },
//       { name: "ENDOLIFT", link: "/machines/ENDOLIFT", key: "face-l" },
//       { name: "OZON", link: "/machines/OZON", key: "face-l" },
//       { name: "HYDRAPEN", link: "/machines/HYDRAPEN", key: "face-l" },
//       { name: "DERMAPEN", link: "/machines/DERMAPEN", key: "face-l" },
//       {
//         name: "PLAZMAPEN (PLEXER)",
//         link: "/machines/PLAZMAPEN-(PLEXER)",
//         key: "face-l"
//       },
//       { name: "G8", link: "/machines/G8", key: "face-l" }
//     ]
//   };

//   useEffect(() => {
//     const controlHeader = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > 50) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }

//       // Hide header when scrolling down, show when scrolling up
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         setIsHidden(true);
//       } else {
//         setIsHidden(false);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", controlHeader);

//     // Cleanup
//     return () => {
//       window.removeEventListener("scroll", controlHeader);
//     };
//   }, [lastScrollY]);

//   const handleMouseEnter = (menuName, event) => {
//     // Only show dropdown if menu has more than one item or the item doesn't point to the menu name
//     if (
//       menuItems[menuName].length <= 1 &&
//       menuItems[menuName][0].name === menuName
//     )
//       return;
//     const rect = event.currentTarget.getBoundingClientRect();
//     setActiveDropdown(menuName);
//   };

//   const handleMouseLeave = () => {
//     setActiveDropdown(null);
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//     // Prevent scrolling when menu is open
//     if (!mobileMenuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   };

//   // Helper function to check if a menu needs a dropdown
//   const hasDropdown = (menuName) => {
//     return !(
//       menuItems[menuName].length === 1 &&
//       (menuItems[menuName][0].name === menuName ||
//         menuItems[menuName][0].name === menuName + " 01")
//     );
//   };

//   const handleWhatsAppRedirect = () => {
//     const whatsappURL = `https://wa.me/+905395204530`;
//     window.open(whatsappURL, "_blank");
//   };

//   return (
//     <>
//       {/* Wrapper div that contains the header with animation */}
//       <div
//         className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//           isHidden ? "-translate-y-full" : "translate-y-0"
//         }`}
//       >
//         {/* Main Header */}
//         <header ref={headerRef} className="w-full pt-4">
//           <div
//             className={`mx-auto max-w-[95%] md:max-w-[90%] rounded-xl overflow-visible ${headerBgClass} shadow-lg transition-all duration-300`}
//           >
//             {/* Logo and Main Menu */}
//             <div className="bg-transparent py-4 px-6">
//               <div className="container mx-auto flex justify-between items-center">
//                 {/* Logo */}
//                 <Link href="/">
//                   <div className="flex shrink-0">
//                     {/* <span className="bg-primary text-white px-3 py-2 font-bold font-sans">
//                       ESTE
//                     </span>
//                     <span className="bg-secondary text-white px-3 py-2 font-bold font-sans">
//                       SIRIUS
//                     </span> */}
//                     <Image
//                       src="/images/clinic/newlogo2.png"
//                       alt="Logo"
//                       width={100}
//                       height={50}
//                     />
//                   </div>
//                 </Link>

//                 {/* Desktop Menu (Hidden on mobile) */}
//                 <nav className="hidden md:flex flex-1 justify-center">
//                   <ul className="flex justify-between w-full max-w-3xl">
//                     {Object.keys(menuItems).map((menuName) => (
//                       <li
//                         key={menuName}
//                         className="relative py-2 cursor-pointer px-1 whitespace-nowrap text-center"
//                         onMouseEnter={(e) => handleMouseEnter(menuName, e)}
//                         onMouseLeave={handleMouseLeave}
//                         ref={(el) => (menuRefs.current[menuName] = el)}
//                       >
//                         {/* Make any menu without dropdown directly clickable */}
//                         {!hasDropdown(menuName) ? (
//                           <Link href={menuItems[menuName][0].link}>
//                             <span className="font-medium hover:text-primary transition text-sm lg:text-base font-sans">
//                               {menuName}
//                             </span>
//                           </Link>
//                         ) : (
//                           <span className="font-medium hover:text-primary transition text-sm lg:text-base font-sans">
//                             {menuName}
//                           </span>
//                         )}
//                         {activeDropdown === menuName && (
//                           <DropdownMenu
//                             items={menuItems[menuName]}
//                             parentRef={menuRefs.current[menuName]}
//                             className={headerBgClass}
//                           />
//                         )}
//                       </li>
//                     ))}
//                   </ul>
//                 </nav>

//                 {/* Mobile Menu Button */}
//                 <div className="md:hidden flex items-center">
//                   <button className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded transition mr-2 transform hover:scale-[1.02] active:scale-[0.98]">
//                     BOOK
//                   </button>
//                   <button
//                     onClick={toggleMobileMenu}
//                     className="text-secondary p-2 focus:outline-none hover:text-primary transition-colors duration-200"
//                     aria-label="Open menu"
//                   >
//                     <FaBars className="text-2xl" />
//                   </button>
//                 </div>

//                 {/* Book Now Button (Hidden on mobile) */}
//                 <button
//                   onClick={() => handleWhatsAppRedirect()}
//                   className="hidden md:block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition shrink-0 transform hover:scale-[1.02] active:scale-[0.98]"
//                 >
//                   BOOK NOW
//                 </button>
//               </div>
//             </div>
//           </div>
//         </header>
//       </div>

//       {/* Mobile Sidebar Component */}
//       <MobileSidebar
//         isOpen={mobileMenuOpen}
//         onClose={toggleMobileMenu}
//         menuItems={menuItems}
//         hasDropdown={hasDropdown}
//       />
//     </>
//   );
// }

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import i18n hook
import DropdownMenu from "./DropdownMenu";
import MobileSidebar from "./MobileSidebar";
import Image from "next/image";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { FormattedMessage } from "react-intl";

export default function Header() {
  const { t } = useTranslation(); // Access the translation function
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

  const menuTranslationMapping = {
    HOME: "Navbar.HOME",
    ABOUT: "Navbar.ABOUT",
    "HAIR TRANSPLANT": "Navbar.HAIR",
    "ESTHETIC MEDICINE": "Navbar.Esthetic",
    MACHINES: "Navbar.MACHINES",
    "COSMETIC SURGERIES": "Navbar.COSMETICSURGERIES"
  };

  const menuItems = {
    HOME: [
      { name: <FormattedMessage id="Navbar.Home" />, link: "/", key: "home" }
    ],
    ABOUT: [
      {
        name: <FormattedMessage id="Navbar.dropdown.ourStory" />,
        link: "/about",
        key: "our-story"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.testimonials" />,
        link: "/shop",
        key: "shop"
      }
    ],
    "HAIR TRANSPLANT": [
      {
        name: <FormattedMessage id="Navbar.dropdown.hairForMen" />,
        link: "/hair/hair-transplant-for-men",
        key: "hair-transplant-for-men"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.hairForWomen" />,
        link: "/hair/hair-transplant-for-women",
        key: "hair-transplant-for-women"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.beard" />,
        link: "/hair/beard",
        key: "beard-transplant"
      }
    ],

    "ESTHETIC MEDICINE": [
      {
        name: <FormattedMessage id="Navbar.dropdown.fillers" />,
        link: "/operations/dermal-filler-injection",
        key: "esthetic1"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.botox" />,
        link: "/operations/botox-injection",
        key: "esthetic1"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.threads" />,
        link: "/operations/thread-lift",
        key: "esthetic1"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.prp" />,
        link: "/operations/prp-injection",
        key: "esthetic1"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.mesotherapy" />,
        link: "/operations/mesotherapy",
        key: "esthetic1"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.immune" />,
        link: "/operations/Immune-System-Booster-Treatment",
        key: "esthetic1"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.stem" />,
        link: "/operations/Stem-Cell-Therapy",
        key: "esthetic1"
      }
    ],
    "COSMETIC SURGERIES": [
      {
        name: <FormattedMessage id="Navbar.dropdown.faceLift" />,
        link: "/facial/facial-surgery",
        key: "gallery"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.bodyContouring" />,
        link: "/facial/Body-Contouring",
        key: "gallery"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.breastSurgery" />,
        link: "/facial/Breast-Surgery",
        key: "gallery"
      }
    ],
    MACHINES: [
      {
        name: <FormattedMessage id="Navbar.dropdown.hydraFacial" />,
        link: "/machines/HYDRAFACIAL",
        key: "face-l"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.goldenNeedle" />,
        link: "/machines/GOLDEN-NEEDLE",
        key: "face-l"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.hifu" />,
        link: "/machines/HIFU-(ULTHERA)",
        key: "face-l"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.endolift" />,
        link: "/machines/ENDOLIFT",
        key: "face-l"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.ozon" />,
        link: "/machines/OZON",
        key: "face-l"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.hydrapen" />,
        link: "/machines/HYDRAPEN",
        key: "face-l"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.dermapen" />,
        link: "/machines/DERMAPEN",
        key: "face-l"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.plazmapen" />,
        link: "/machines/PLAZMAPEN-(PLEXER)",
        key: "face-l"
      },
      {
        name: <FormattedMessage id="Navbar.dropdown.g8" />,
        link: "/machines/G8",
        key: "face-l"
      }
    ]
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
    if (
      menuItems[menuName].length <= 1 &&
      menuItems[menuName][0].name === menuName
    )
      return;
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
    return !(
      menuItems[menuName].length === 1 &&
      (menuItems[menuName][0].name === menuName ||
        menuItems[menuName][0].name === menuName + " 01")
    );
  };

  const handleWhatsAppRedirect = () => {
    const whatsappURL = `https://wa.me/+905395204530`;
    window.open(whatsappURL, "_blank");
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
                    <Image
                      src="/images/clinic/newlogo2.png"
                      alt="Logo"
                      width={100}
                      height={50}
                    />
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
                              <FormattedMessage
                                id={menuTranslationMapping[menuName]}
                              />
                            </span>
                          </Link>
                        ) : (
                          <span className="font-medium hover:text-primary transition text-sm lg:text-base font-sans">
                            <FormattedMessage
                              id={menuTranslationMapping[menuName]}
                            />
                          </span>
                        )}
                        {activeDropdown === menuName && (
                          <DropdownMenu
                            items={menuItems[menuName]}
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
                    {t("book_now")}
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

                <button
                  onClick={() => handleWhatsAppRedirect()}
                  className="hidden md:block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded transition shrink-0 transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  <FormattedMessage id="Navbar.BOOK" />
                </button>
                <LanguageSwitcher className="mx-4" />
              </div>
            </div>
          </div>
        </header>
      </div>

      <MobileSidebar
        isOpen={mobileMenuOpen}
        onClose={toggleMobileMenu}
        menuItems={menuItems}
        hasDropdown={hasDropdown}
      />
    </>
  );
}
