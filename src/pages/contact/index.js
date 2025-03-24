import React, { useState } from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaYoutube, FaVimeo, FaMapMarkerAlt, FaClock, FaCheck } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real implementation, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    // Simulate form submission success
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message. We'll contact you shortly!"
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <>
      <Head>
        <title>Contact Us | Este Sirius</title>
        <meta name="description" content="Get in touch with Este Sirius, the premium plastic surgery clinic. Schedule a consultation or ask any questions you may have." />
      </Head>

      <div className="bg-gray-light py-16 relative overflow-hidden">
        {/* Decorative element */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary opacity-10"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-primary opacity-10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-secondary-dark">Contact Us</h1>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-gray-dark max-w-2xl mx-auto">
              Have questions or ready to schedule a consultation? Our team is here to help you on your journey to enhanced confidence and beauty.
            </p>
          </motion.div>

          {/* Main Content - Form and Contact Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <motion.h2 
                variants={itemVariants}
                className="text-2xl font-bold mb-6 text-secondary-dark"
              >
                Send Us a Message
              </motion.h2>

              {formStatus.submitted && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className={`p-4 mb-6 rounded-md ${formStatus.success ? 'bg-success bg-opacity-20' : 'bg-error bg-opacity-20'}`}
                >
                  <div className="flex items-center">
                    <FaCheck className={`mr-2 ${formStatus.success ? 'text-success' : 'text-error'}`} />
                    <p className={formStatus.success ? 'text-success' : 'text-error'}>
                      {formStatus.message}
                    </p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-gray-dark mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input w-full"
                      required
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-gray-dark mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input w-full"
                      required
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-gray-dark mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input w-full"
                    />
                  </motion.div>

                  <motion.div variants={itemVariants}>
                    <label htmlFor="subject" className="block text-gray-dark mb-2">Subject</label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="form-input w-full"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="Consultation Request">Consultation Request</option>
                      <option value="Price Inquiry">Price Inquiry</option>
                      <option value="Procedure Information">Procedure Information</option>
                      <option value="Other">Other</option>
                    </select>
                  </motion.div>
                </div>

                <motion.div variants={itemVariants} className="mb-6">
                  <label htmlFor="message" className="block text-gray-dark mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    className="form-input w-full"
                    required
                  ></textarea>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-md transition-colors w-full md:w-auto"
                  >
                    Send Message
                  </motion.button>
                </motion.div>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Map */}
              <motion.div 
                variants={itemVariants}
                className="mb-10 rounded-lg overflow-hidden shadow-lg h-64 relative"
              >
                <Image
                  src="/images/contact/map.jpg"
                  alt="Location Map"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-secondary-dark bg-opacity-30">
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://maps.google.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-secondary-dark font-semibold py-2 px-4 rounded-md"
                  >
                    Open in Google Maps
                  </motion.a>
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div 
                variants={itemVariants}
                className="bg-secondary-dark p-8 rounded-lg shadow-lg text-white mb-8"
              >
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-3 mr-4">
                      <FaMapMarkerAlt className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Address</h3>
                      <p className="text-gray-light">123 Medical Plaza, Suite 456,<br />Los Angeles, CA 90210</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-3 mr-4">
                      <FaPhone className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Phone</h3>
                      <p className="text-gray-light">+36 4365 3980</p>
                      <p className="text-gray-light">+36 4365 3981</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-3 mr-4">
                      <FaEnvelope className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Email</h3>
                      <p className="text-gray-light">contact@estesirius.com</p>
                      <p className="text-gray-light">info@estesirius.com</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-primary rounded-full p-3 mr-4">
                      <FaClock className="text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-1">Working Hours</h3>
                      <p className="text-gray-light">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-gray-light">Saturday: 10AM - 4PM</p>
                      <p className="text-gray-light">Sunday: Closed</p>
                    </div>
                  </li>
                </ul>
              </motion.div>

              {/* Follow Us */}
              <motion.div 
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-bold mb-4 text-secondary-dark">Follow Us</h3>
                <div className="flex space-x-4">
                  <motion.a 
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--color-primary)' }}
                    href="https://facebook.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-light text-white p-3 rounded-full"
                  >
                    <FaFacebook size={20} />
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--color-primary)' }}
                    href="https://twitter.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-light text-white p-3 rounded-full"
                  >
                    <FaTwitter size={20} />
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--color-primary)' }}
                    href="https://youtube.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-light text-white p-3 rounded-full"
                  >
                    <FaYoutube size={20} />
                  </motion.a>
                  
                  <motion.a 
                    whileHover={{ scale: 1.1, backgroundColor: 'var(--color-primary)' }}
                    href="https://vimeo.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-secondary-light text-white p-3 rounded-full"
                  >
                    <FaVimeo size={20} />
                  </motion.a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
