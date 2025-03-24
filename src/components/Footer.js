import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaYoutube, FaVimeo, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobeAmericas, FaAward } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary">
      {/* Top Info Bar - Added from Header */}
      <div className="bg-secondary py-3">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-light">
            <div className="flex items-center mb-2 md:mb-0">
              <FaPhone className="mr-2 text-primary" />
              <span className="font-medium">ISTANBUL TÜRKİYE</span>
            </div>
            
            <div className="hidden md:block">
              <div className="flex items-center overflow-hidden">
                <div className="news-ticker-container">
                  <span className="news-ticker">
                    <span className="bg-primary px-2 py-1 text-white font-bold mr-2">
                      NEWS
                    </span>
                    THIS IS THE LATEST NEWS ABOUT OUR CLINIC SERVICES AND PROMOTIONS
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center">
              <FaEnvelope className="mr-2 text-primary" />
              <span className="font-medium">CLINIC: +31 2349334972</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Upper Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {/* Column 1 - Este Sirius */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-white text-secondary-dark font-bold px-4 py-2 text-xl">ESTE</div>
              <div className="bg-secondary-dark text-gray-light font-bold px-4 py-2 text-xl">SIRIUS</div>
            </div>
            <p className="text-gray-light mb-6">
              Specialized plastic surgery clinic delivering premium care with innovative techniques and personalized attention 
              to enhance natural beauty and restore confidence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={index}
                  href={social.link} 
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: 'var(--color-white)' }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-light hover:text-gray text-xl"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Our Customers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-6 relative text-gray-light">
              Our Customers
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gray-light"></span>
            </h2>
            <p className="text-gray-light mb-6">
              We take pride in our patients' satisfaction. Read what they have to say about their experience with us.
            </p>
            <motion.div 
              className="flex items-center bg-white bg-opacity-10 p-4 rounded-lg"
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex-shrink-0 mr-4">
                <Image 
                  src="/images/customer.jpg" 
                  alt="Customer" 
                  width={60} 
                  height={60} 
                  className="rounded-full border-2 border-gray-light"
                />
              </div>
              <div>
                <h3 className="font-bold text-gray-light">Emily Johnson</h3>
                <p className="text-sm text-gray">Designer, LA</p>
                <p className="text-sm mt-1 text-gray-light">"Incredible results and caring staff!"</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Column 3 - Quick Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="text-xl font-bold mb-6 relative text-gray-light">
              Quick Contacts
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gray-light"></span>
            </h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center mr-3 flex-shrink-0">
                    {info.icon}
                  </div>
                  <div>
                    <p className="font-medium text-gray-light">{info.label}</p>
                    <p className="text-gray text-sm">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 4 - Our Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-xl font-bold mb-6 relative text-gray-light">
              Our Gallery
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gray-light"></span>
            </h2>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((image, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)" }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden rounded-lg"
                >
                  <Image 
                    src={image} 
                    alt={`Gallery image ${index + 1}`} 
                    width={100} 
                    height={100} 
                    className="w-full h-auto object-cover rounded-lg"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Lower Section */}
      <div className="bg-secondary-dark py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div>
              <p className="text-sm text-gray-light">© Copyright 2024 Este Sirius. All Rights Reserved.</p>
            </div>

            {/* Award */}
            <div className="flex items-center">
              <FaAward className="text-primary mr-2" />
              <p className="text-sm text-gray-light">Premium Plastic Surgery Clinic</p>
            </div>

            {/* Email Form */}
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="form-input py-2 px-4 rounded-l-md outline-none text-gray-dark w-40 md:w-auto"
              />
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-gray-light px-4 py-2 rounded-r-md transition-colors"
              >
                SEND
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social media links data
const socialLinks = [
  { icon: <FaFacebook />, link: "https://facebook.com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
  { icon: <FaYoutube />, link: "https://youtube.com" },
  { icon: <FaVimeo />, link: "https://vimeo.com" }
];

// Contact information data
const contactInfo = [
  { 
    icon: <FaPhone className="text-gray-light" />, 
    label: "Phone", 
    value: "+36 4365 3980" 
  },
  { 
    icon: <FaEnvelope className="text-gray-light" />, 
    label: "Email", 
    value: "contact@estesirius.com" 
  },
  { 
    icon: <FaMapMarkerAlt className="text-gray-light" />, 
    label: "Address", 
    value: "123 Medical Plaza, Suite 456" 
  },
  { 
    icon: <FaGlobeAmericas className="text-gray-light" />, 
    label: "Country", 
    value: "United States" 
  }
];

// Gallery images data
const galleryImages = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
  "/images/gallery5.jpg",
  "/images/gallery6.jpg"
];

export default Footer;
