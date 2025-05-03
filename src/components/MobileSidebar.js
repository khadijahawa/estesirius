import { FaPhone, FaEnvelope, FaTimes } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function MobileSidebar({
  isOpen,
  onClose,
  menuItems,
  hasDropdown
}) {
  // Animation variants
  const sidebarVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: {
      x: 20,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  const contactVariants = {
    closed: {
      y: 20,
      opacity: 0
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  // Use CSS variable instead of hardcoded color
  const turquoiseColor = "var(--color-primary)"; // Replace hardcoded value with CSS variable

  return (
    <>
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Slide-in Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-xs bg-white z-50 shadow-xl"
            variants={sidebarVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Header with logo and close button */}
            <div className="flex justify-between items-center p-4 border-b">
              <Link href="/">
                <div className="flex">
                  {/* <span className="bg-primary text-white px-2 py-1 text-sm font-bold font-sans">
                    ESTE
                  </span>
                  <span className="bg-secondary text-white px-2 py-1 text-sm font-bold font-sans">
                    SIRIUS
                  </span> */}
                  <Image
                    src="/images/clinic/newlogo2.png"
                    alt="Logo"
                    width={100}
                    height={50}
                  />
                </div>
              </Link>
              <motion.button
                onClick={onClose}
                className="text-secondary focus:outline-none"
                aria-label="Close menu"
                whileHover={{ scale: 1.1, color: turquoiseColor }}
                whileTap={{ scale: 0.95 }}
              >
                <FaTimes className="text-2xl" />
              </motion.button>
            </div>

            {/* Menu and contact information */}
            <div className="py-4 px-6 overflow-y-auto h-[calc(100%-60px)]">
              {/* Navigation menu */}
              <nav>
                <motion.ul className="space-y-6" variants={itemVariants}>
                  {Object.keys(menuItems).map((menuName, index) => (
                    <motion.li
                      key={menuName}
                      className="border-b border-gray-100 pb-4 group"
                      variants={itemVariants}
                      custom={index}
                    >
                      <div className="flex justify-between items-center">
                        {!hasDropdown(menuName) ? (
                          <Link href={menuItems[menuName][0].link}>
                            <motion.span
                              className="font-medium text-secondary inline-block"
                              whileHover={{
                                x: 5,
                                color: turquoiseColor,
                                transition: { duration: 0.2 }
                              }}
                              onClick={onClose}
                            >
                              {menuName}
                            </motion.span>
                          </Link>
                        ) : (
                          <motion.span
                            className="font-medium text-secondary"
                            whileHover={{ color: turquoiseColor }}
                          >
                            {menuName}
                          </motion.span>
                        )}
                        {hasDropdown(menuName) && (
                          <motion.span
                            className="text-xs text-gray-light"
                            whileHover={{ rotate: 45, color: turquoiseColor }}
                          >
                            +
                          </motion.span>
                        )}
                      </div>
                      {/* Only show submenu items for dropdowns */}
                      {hasDropdown(menuName) && (
                        <motion.ul
                          className="mt-2 pl-4 space-y-3"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          {menuItems[menuName].map((subItem) => (
                            <motion.li
                              key={subItem.key}
                              className="text-gray-dark text-sm"
                              variants={itemVariants}
                            >
                              <Link href={subItem.link}>
                                <motion.span
                                  className="inline-block py-1"
                                  whileHover={{
                                    x: 8,
                                    color: turquoiseColor,
                                    transition: { duration: 0.2 }
                                  }}
                                  onClick={onClose}
                                >
                                  {subItem.name}
                                </motion.span>
                              </Link>
                            </motion.li>
                          ))}
                        </motion.ul>
                      )}
                    </motion.li>
                  ))}
                </motion.ul>
              </nav>

              {/* Book consultation button */}
              <motion.div className="mt-8" variants={contactVariants}>
                <motion.button
                  className="w-full bg-primary text-white font-bold py-3 rounded-lg"
                  whileHover={{
                    scale: 1.02,
                    backgroundColor: turquoiseColor,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  BOOK CONSULTATION
                </motion.button>
              </motion.div>

              {/* Contact information */}
              <motion.div
                className="mt-8 space-y-5 text-sm"
                variants={contactVariants}
              >
                <motion.div
                  className="flex items-center bg-gray-50 p-3 rounded-md"
                  whileHover={{
                    backgroundColor: "#f3f4f6",
                    y: -2,
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <FaPhone className="mr-3 text-primary" />
                  </motion.div>
                  <motion.span
                    className="font-medium"
                    whileHover={{ color: turquoiseColor }}
                  >
                    +905395204530
                  </motion.span>
                </motion.div>

                {/* <motion.div 
                  className="flex items-center bg-gray-50 p-3 rounded-md"
                  whileHover={{ 
                    backgroundColor: "#f3f4f6", 
                    y: -2,
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <FaEnvelope className="mr-3 text-primary" />
                  </motion.div>
                  <motion.span 
                    className="font-medium"
                    whileHover={{ color: turquoiseColor }}
                  >
                    info@estesirius.com
                  </motion.span>
                </motion.div> */}

                <motion.div
                  className="bg-gray-50 p-3 rounded-md text-center"
                  whileHover={{
                    backgroundColor: "#f3f4f6",
                    y: -2,
                    boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.05)"
                  }}
                >
                  <motion.p
                    className="text-gray-dark font-medium"
                    whileHover={{ color: turquoiseColor }}
                  >
                    Turkey, Istanbul
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
