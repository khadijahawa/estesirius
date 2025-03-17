<<<<<<< HEAD
import { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
=======
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaBars, FaTimes, FaMapMarkerAlt } from 'react-icons/fa';
>>>>>>> seyfullah
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
<<<<<<< HEAD
=======
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
>>>>>>> seyfullah

  const menuItems = {
    HOME: ["HOME 01", "HOME 02", "HOME 03", "HOME 04", "HOME 05"],
    "ABOUT US": ["OUR STORY", "OUR TEAM", "OUR VALUES", "TESTIMONIALS"],
    SHOP: ["PRODUCTS", "SERVICES", "SPECIAL OFFERS", "GIFT CARDS"],
    PAGES: ["FAQ", "GALLERY", "PRICING", "BEFORE/AFTER", "APPOINTMENTS"],
    BLOG: ["BLOG GRID", "BLOG LIST", "BLOG SINGLE", "CATEGORIES"],
    CONTACT: ["CONTACT 01", "CONTACT 02", "CONTACT 03"]
  };

<<<<<<< HEAD
=======
  // Handle scroll event to change header styling when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

>>>>>>> seyfullah
  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
<<<<<<< HEAD

  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="bg-navy-dark text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaPhone className="mr-2 text-turquoise" />
=======
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-40">
      {/* Top Information Bar */}
      <div className="hidden md:block bg-white/90 backdrop-blur-sm py-3 border-b border-gray-100">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center text-gray-600">
            <FaMapMarkerAlt className="mr-2 text-turquoise" />
>>>>>>> seyfullah
            <span>ST. LAMBOR, NEW YORK (US)</span>
          </div>
          
          <div className="flex items-center overflow-hidden">
<<<<<<< HEAD
            <span className="bg-turquoise px-2 py-1 text-white font-bold mr-2">NEWS</span>
            <div className="news-ticker-container">
              <span className="news-ticker">THIS IS THE LATEST NEWS ABOUT OUR CLINIC SERVICES AND PROMOTIONS</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-turquoise" />
            <span>CLINIC: +31 2349334972</span>
=======
            <span className="bg-turquoise px-2 py-1 text-white font-bold mr-2 text-xs">NEWS</span>
            <div className="news-ticker-container">
              <span className="news-ticker text-gray-600">THIS IS THE LATEST NEWS ABOUT OUR CLINIC SERVICES AND PROMOTIONS</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600">
            <FaPhone className="mr-2 text-turquoise" />
            <span>+31 2349334972</span>
>>>>>>> seyfullah
          </div>
        </div>
      </div>

<<<<<<< HEAD
      {/* Logo and Main Menu */}
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <div className="flex">
              <span className="bg-turquoise text-white px-3 py-2 font-bold">ESTE</span>
              <span className="bg-navy-dark text-white px-3 py-2 font-bold">SIRIUS</span>
            </div>
          </Link>

          {/* Main Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
=======
      {/* Main Navigation Bar */}
      <div className={`${scrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'} transition-all duration-300`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center">
              <span className="text-turquoise font-bold text-2xl">ESTE</span>
              <span className="text-navy-dark font-bold text-2xl ml-1">SIRIUS</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-8">
>>>>>>> seyfullah
              {Object.keys(menuItems).map((menuName) => (
                <li 
                  key={menuName} 
                  className="relative py-2 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(menuName)}
                  onMouseLeave={handleMouseLeave}
                >
<<<<<<< HEAD
                  <span className="font-medium hover:text-turquoise transition">{menuName}</span>
=======
                  <span className="font-medium text-gray-700 hover:text-turquoise transition-colors">
                    {menuName}
                  </span>
>>>>>>> seyfullah
                  {activeDropdown === menuName && (
                    <DropdownMenu items={menuItems[menuName]} />
                  )}
                </li>
              ))}
            </ul>
          </nav>

<<<<<<< HEAD
          {/* Book Now Button */}
          <button className="bg-turquoise hover:bg-turquoise/80 text-white font-bold py-2 px-6 rounded transition">
            BOOK NOW
          </button>
        </div>
      </div>

      {/* Notification Badge */}
      <div className="fixed bottom-8 right-8">
        <div className="notification-badge bg-turquoise text-white rounded-full w-14 h-14 flex flex-col items-center justify-center">
          <span className="text-xs">NEW</span>
          <span className="font-bold">'54</span>
=======
          {/* Book Now & Mobile Menu Buttons */}
          <div className="flex items-center">
            <button className="bg-turquoise hover:bg-turquoise/90 text-white font-bold py-2 px-6 rounded transition-all hover:shadow-lg">
              BOOK NOW
            </button>
            
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-700 ml-4 p-2 focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      ></div>

      {/* Mobile Menu Slide-in Panel */}
      <div 
        className={`fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <div className="flex items-center">
            <span className="text-turquoise font-bold">ESTE</span>
            <span className="text-navy-dark font-bold ml-1">SIRIUS</span>
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <FaTimes className="text-2xl" />
          </button>
        </div>

        <div className="py-4 px-6 overflow-y-auto h-[calc(100%-60px)]">
          <nav>
            <ul className="space-y-5">
              {Object.keys(menuItems).map((menuName) => (
                <li key={menuName} className="border-b border-gray-100 pb-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-700">{menuName}</span>
                    <span className="text-xs text-gray-400">+</span>
                  </div>
                  <ul className="mt-2 pl-4 space-y-2">
                    {menuItems[menuName].map((subItem) => (
                      <li key={subItem} className="text-gray-600 text-sm hover:text-turquoise transition-colors">
                        <a href="#">{subItem}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8">
            <button className="w-full bg-turquoise hover:bg-turquoise/90 text-white font-bold py-3 rounded transition-all">
              BOOK CONSULTATION
            </button>
          </div>
          
          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-center text-gray-600">
              <FaMapMarkerAlt className="mr-2 text-turquoise" />
              <span>ST. LAMBOR, NEW YORK (US)</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaPhone className="mr-2 text-turquoise" />
              <span>+31 2349334972</span>
            </div>
            <div className="flex items-center text-gray-600">
              <FaEnvelope className="mr-2 text-turquoise" />
              <span>info@cestesirius.com</span>
            </div>
          </div>
>>>>>>> seyfullah
        </div>
      </div>
    </header>
  );
}
