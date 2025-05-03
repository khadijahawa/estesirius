import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebook,
  FaWhatsapp,
  FaTwitter,
  FaYoutube,
  FaVimeo,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobeAmericas,
  FaAward
} from "react-icons/fa";

const Footer = () => {
  const phoneNumber = "+905395204530";
  const message = "Hello, I would like more information about your services.";

  const handleRedirect = () => {
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <footer className="bg-primary relative">
      {/* Background Image with Transparency - positioned to cover entire footer */}
      <div className="absolute inset-0 opacity-10 z-0 overflow-hidden">
        <Image
          src="/images/footer/pr-02.jpg"
          alt="Footer Background"
          fill
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      {/* Upper Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-16 relative z-10"
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
              <Image
                src="/images/clinic/footerlogo2.png"
                alt="Logo"
                width={350}
                height={150}
              />
            </div>
            <p className="text-gray-light mb-6">
              Specialized plastic surgery clinic delivering premium care with
              innovative techniques and personalized attention to enhance
              natural beauty and restore confidence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, color: "var(--color-white)" }}
                  transition={{ duration: 0.2 }}
                  className="text-white text-xl hover:text-white bg-secondary-light p-2 rounded-full"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Our Doctors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-xl font-bold mb-6 relative text-gray-light">
              Our Doctors
              <span className="absolute bottom-0 left-0 w-16 h-1 bg-gray-light"></span>
            </h2>
            <p className="text-gray-light mb-6">
              Meet our expert team of plastic surgeons with years of experience
              in aesthetic and reconstructive procedures.
            </p>
            <motion.div
              className="flex items-center relative p-4 rounded-lg"
              whileHover={{
                y: -5,
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              {/* <div className="flex-shrink-0 mr-4">
                <Image
                  src="/images/footer/doctor.jpg"
                  alt="Doctor"
                  width={60}
                  height={60}
                  className="rounded-full border-2 border-secondary-light"
                />
              </div> */}
              {/* <div>
                <h3 className="font-bold text-gray-light">Dr. Robert Williams</h3>
                <p className="text-sm text-gray-light">Chief Plastic Surgeon</p>
                <p className="text-sm mt-1 text-gray-light">"Dedicated to aesthetic excellence."</p>
              </div> */}
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
                  <div className="w-10 h-10 rounded-full bg-secondary-light flex items-center justify-center mr-3 flex-shrink-0">
                    <span className="text-white text-lg">{info.icon}</span>
                  </div>
                  <div>
                    <p className="font-medium text-white">{info.label}</p>
                    <p className="text-gray-light text-sm">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <button onClick={handleRedirect} passHref>
              <motion.div
                className="mt-6 inline-block bg-secondary-light text-white px-6 py-2 rounded-md text-center"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "var(--color-secondary-dark)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Contact Us
              </motion.div>
            </button>
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
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.2)"
                  }}
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
      <div className="bg-secondary-dark py-6 relative z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div>
              <p className="text-sm text-gray-light">
                © Copyright 2025 Este Sirius. All Rights Reserved.
              </p>
            </div>

            {/* Award */}
            <div className="flex items-center">
              <FaAward className="text-primary mr-2" />
              <p className="text-sm text-gray-light">
                Premium Plastic Surgery Clinic
              </p>
            </div>

            {/* Email Form */}
            {/* <div className="flex items-center">
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
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

// Social media links data
const socialLinks = [
  { icon: <FaWhatsapp />, link: "https://wa.me/+905395204530" }
  // { icon: <FaTwitter />, link: "https://twitter.com" },
  // { icon: <FaYoutube />, link: "https://youtube.com" },
  // { icon: <FaVimeo />, link: "https://vimeo.com" }
];

// Contact information data
const contactInfo = [
  {
    icon: <FaPhone />,
    label: "Phone",
    value: "+905395204530"
  },
  // {
  //   icon: <FaEnvelope />,
  //   label: "Email",
  //   value: "contact@estesirius.com"
  // },
  // {
  //   icon: <FaMapMarkerAlt />,
  //   label: "Address",
  //   value: "123 Medical Plaza, Suite 456"
  // },
  {
    icon: <FaGlobeAmericas />,
    label: "Istanbul",
    value: "Turkey"
  }
];

// Gallery images data
const galleryImages = [
  "/images/footer/gallery1.jpg",
  "/images/footer/gallery2.jpg",
  "/images/footer/gallery3.jpg",
  "/images/footer/gallery4.jpg",
  "/images/footer/gallery5.jpg",
  "/images/footer/gallery6.jpg"
];

export default Footer;
