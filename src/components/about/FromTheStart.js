import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FromTheStart = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: custom * 0.1 + 0.3 }
    })
  };

  return (
    <motion.div 
      ref={ref}
      className="flex flex-col md:flex-row mb-12"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left image - height matching the "From the Start" title */}
      <motion.div 
        className="w-full md:w-1/2 relative" 
        style={{ height: "24rem" }}
        initial={{ opacity: 0, x: -30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.7 }}
      >
        <Image 
          src="/images/about/pls-08.jpg" 
          alt="Our Company" 
          fill
          priority
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
      
      {/* "From the Start" section - no border, dynamic sizing */}
      <motion.div 
        className="w-full md:w-1/2 bg-white p-8 flex flex-col"
        initial={{ opacity: 0, x: 30 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <motion.h2 
          className="text-5xl font-semibold mb-4 text-black"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          From the Start
        </motion.h2>
        <div className="flex flex-col h-full">
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full">
            <motion.div 
              className="p-2"
              variants={paragraphVariants}
              custom={0}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </motion.div>
            <motion.div 
              className="p-2"
              variants={paragraphVariants}
              custom={1}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </motion.div>
            <motion.div 
              className="p-2"
              variants={paragraphVariants}
              custom={2}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </motion.div>
            <motion.div 
              className="p-2"
              variants={paragraphVariants}
              custom={3}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <p className="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus et metus augue. Mauris ut libero eget.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default FromTheStart;
