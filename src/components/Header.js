import { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = {
    HOME: ["HOME 01", "HOME 02", "HOME 03", "HOME 04", "HOME 05"],
    "ABOUT US": ["OUR STORY", "OUR TEAM", "OUR VALUES", "TESTIMONIALS"],
    SHOP: ["PRODUCTS", "SERVICES", "SPECIAL OFFERS", "GIFT CARDS"],
    PAGES: ["FAQ", "GALLERY", "PRICING", "BEFORE/AFTER", "APPOINTMENTS"],
    BLOG: ["BLOG GRID", "BLOG LIST", "BLOG SINGLE", "CATEGORIES"],
    CONTACT: ["CONTACT 01", "CONTACT 02", "CONTACT 03"]
  };

  const handleMouseEnter = (menuName) => {
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };
  
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
    <header className="w-full">
      {/* Top Navigation Bar - Hidden on mobile */}
      <div className="hidden md:block bg-navy-dark text-white py-3">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center">
            <FaPhone className="mr-2 text-turquoise" />
            <span>ST. LAMBOR, NEW YORK (US)</span>
          </div>
          
          <div className="flex items-center overflow-hidden">
            <span className="bg-turquoise px-2 py-1 text-white font-bold mr-2">NEWS</span>
            <div className="news-ticker-container">
              <span className="news-ticker">THIS IS THE LATEST NEWS ABOUT OUR CLINIC SERVICES AND PROMOTIONS</span>
            </div>
          </div>
          
          <div className="flex items-center">
            <FaEnvelope className="mr-2 text-turquoise" />
            <span>CLINIC: +31 2349334972</span>
          </div>
        </div>
      </div>

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

          {/* Desktop Menu (Hidden on mobile) */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6">
              {Object.keys(menuItems).map((menuName) => (
                <li 
                  key={menuName} 
                  className="relative py-2 cursor-pointer"
                  onMouseEnter={() => handleMouseEnter(menuName)}
                  onMouseLeave={handleMouseLeave}
                >
                  <span className="font-medium hover:text-turquoise transition">{menuName}</span>
                  {activeDropdown === menuName && (
                    <DropdownMenu items={menuItems[menuName]} />
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button 
              className="bg-turquoise hover:bg-turquoise/80 text-white font-bold py-2 px-4 rounded transition mr-2"
            >
              BOOK
            </button>
            <button
              onClick={toggleMobileMenu}
              className="text-navy-dark p-2 focus:outline-none"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>

          {/* Book Now Button (Hidden on mobile) */}
          <button className="hidden md:block bg-turquoise hover:bg-turquoise/80 text-white font-bold py-2 px-6 rounded transition">
            BOOK NOW
          </button>
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
          <div className="flex">
            <span className="bg-turquoise text-white px-2 py-1 text-sm font-bold">ESTE</span>
            <span className="bg-navy-dark text-white px-2 py-1 text-sm font-bold">SIRIUS</span>
          </div>
          <button 
            onClick={toggleMobileMenu} 
            className="text-navy-dark focus:outline-none"
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
                    <span className="font-medium text-navy-dark">{menuName}</span>
                    <span className="text-xs text-gray-400">+</span>
                  </div>
                  <ul className="mt-2 pl-4 space-y-2">
                    {menuItems[menuName].map((subItem) => (
                      <li key={subItem} className="text-gray-600 text-sm hover:text-turquoise transition">
                        <a href="#">{subItem}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8">
            <button className="w-full bg-turquoise hover:bg-turquoise/80 text-white font-bold py-3 rounded transition">
              BOOK CONSULTATION
            </button>
          </div>
          
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center">
              <FaPhone className="mr-2 text-turquoise" />
              <span>+31 2349334972</span>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-turquoise" />
              <span>info@estesirius.com</span>
            </div>
            <p className="text-gray-600">
              ST. LAMBOR, NEW YORK (US)
            </p>
          </div>
        </div>
      </div>

      {/* Notification Badge */}
      <div className="fixed bottom-8 right-8 z-40">
        <div className="notification-badge bg-turquoise text-white rounded-full w-14 h-14 flex flex-col items-center justify-center">
          <span className="text-xs">NEW</span>
          <span className="font-bold">'54</span>
        </div>
      </div>
    </header>
  );
}
