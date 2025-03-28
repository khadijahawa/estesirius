import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

const OurServices = () => {
  const services = [
    {
      id: 1,
      image: "ar_01 (1).jpg",
      title: "Cosmetic Surgery"
    },
    {
      id: 2,
      image: "ar_01 (2).jpg",
      title: "Hair Transplant"
    },
    {
      id: 3,
      image: "ar_01 (3).jpg",
      title: "Laser Hair Removal"
    },
    {
      id: 4,
      image: "ar_01 (4).jpg",
      title: "Hydrafacial"
    },
    {
      id: 5,
      image: "ar_01 (5).jpg",
      title: "Aesthetic Medicine"
    },
    {
      id: 6,
      image: "ar_01 (6).jpg",
      title: "Machines"
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
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
    <motion.div 
      className="p-8 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <motion.h2 
        className="text-5xl font-semibold mb-8 ml-4 text-center"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Our Services
      </motion.h2>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
        variants={containerVariants}
      >
        {services.map((service) => (
          <motion.div 
            key={service.id} 
            className="flex flex-col items-center"
            variants={itemVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
          >
            <motion.div 
              className="w-32 h-32 relative rounded-full overflow-hidden mb-4"
              whileHover={{ boxShadow: "0 0 0 4px rgba(64, 224, 208, 0.3)" }}
            >
              <Image 
                src={`/images/about/${service.image}`} 
                alt={service.title} 
                fill
                sizes="128px"
                style={{ objectFit: "cover" }}
              />
            </motion.div>
            <h3 className="text-center font-medium">{service.title}</h3>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default OurServices;
