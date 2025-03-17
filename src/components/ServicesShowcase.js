import React from 'react';
import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ServicesShowcase = () => {
  // Services list data
  const services = [
    "Facial Rejuvenation",
    "Body Contouring",
    "Hair Transplantation",
    "Breast Surgery",
    "Rhinoplasty",
    "Botox & Fillers"
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section 
      className="w-full py-16 px-4 md:px-6 bg-gray-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className="container mx-auto">
        <motion.div variants={itemVariants} className="mb-10 text-center">
          <span className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold tracking-wider rounded-sm">
            PREMIUM MEDICAL SERVICES
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Our Specialized Treatments</h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Explore our comprehensive range of advanced medical and aesthetic procedures delivered by our team of internationally trained specialists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Treatment - Left Column */}
          <motion.div 
            variants={itemVariants}
            className="relative rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl group h-[500px] md:h-[600px]"
          >
            <Image 
              src="/images/facial-treatment.jpg" 
              alt="Premium Facial Treatment"
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-700 group-hover:scale-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-3">Facial Aesthetic Procedures</h3>
              <p className="text-white/90 mb-4">Experience our signature facial treatments that combine cutting-edge technology with expert technique for natural-looking results.</p>
              <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-blue-600 font-semibold rounded-lg transition-all duration-300 hover:bg-blue-50 self-start">
                Learn More
              </button>
            </div>
          </motion.div>

          {/* Right Column - 3 Panels */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Consultation Panel */}
            <motion.div 
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group h-[250px] sm:h-[290px]"
            >
              <Image 
                src="/images/consultation.jpg" 
                alt="Free Consultation" 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">Free Consultation</h3>
                <p className="text-white/90 text-sm">Book your personalized assessment with our specialists.</p>
              </div>
            </motion.div>

            {/* Services Info Panel */}
            <motion.div 
              variants={itemVariants}
              className="rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg h-[250px] sm:h-[290px] bg-gradient-to-br from-blue-500 to-blue-700 p-6 flex flex-col"
            >
              <h3 className="text-white text-xl font-bold mb-4">All Services</h3>
              <ul className="space-y-2.5 flex-1">
                {services.map((service, index) => (
                  <li key={index} className="flex items-start gap-2 text-white">
                    <FaCheckCircle className="text-white mt-0.5 shrink-0" />
                    <span className="text-sm">{service}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto">
                <button className="inline-flex items-center gap-1.5 text-white text-sm font-semibold transition-all duration-300 hover:underline">
                  View full list
                </button>
              </div>
            </motion.div>

            {/* Digital Consultation Panel - Full Width on Mobile */}
            <motion.div 
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg group h-[250px] sm:col-span-2"
            >
              <Image 
                src="/images/digital-consultation.jpg" 
                alt="Digital Consultation" 
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-white text-xl font-bold mb-2">Digital Consultations</h3>
                <p className="text-white/90 mb-3">Connect with our specialists remotely from anywhere in the world.</p>
                <button className="inline-flex items-center gap-2 px-4 py-2 bg-white text-blue-600 font-medium rounded-lg text-sm transition-all duration-300 hover:bg-blue-50 self-start">
                  Book Online
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesShowcase;
