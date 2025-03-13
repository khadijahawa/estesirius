import { useState } from 'react';
import Link from 'next/link';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import DropdownMenu from './DropdownMenu';

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState(null);

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

  return (
    <header className="w-full">
      {/* Top Navigation Bar */}
      <div className="bg-navy-dark text-white py-3">
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
              <span className="bg-turquoise text-white px-3 py-2 font-bold">CLINICA</span>
              <span className="bg-navy-dark text-white px-3 py-2 font-bold">WP</span>
            </div>
          </Link>

          {/* Main Menu */}
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
        </div>
      </div>
    </header>
  );
}
