import { motion } from 'framer-motion';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';

const AboutSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-light py-16"
    >
      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-1"
          >
            <motion.div
              whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-lg shadow-lg"
            >
              <Image 
                src="/images/doctor-consultation.jpg" 
                alt="Doctor Consultation" 
                width={600} 
                height={600} 
                className="w-full h-full object-cover" 
              />
            </motion.div>
          </motion.div>

          {/* Right Column - Text and Progress Bars */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-1 bg-secondary p-8 text-white rounded-lg shadow-lg"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="inline-block bg-secondary text-white text-xs font-bold px-4 py-2 mb-4 rounded-sm border border-white border-opacity-20"
            >
              FROM 1960
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              The origin of the Business
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="mb-8 text-white text-opacity-90"
            >
              Donec id blandit ante. Duis maximus, est quis ultricies euismod, nunc ante vulputate ex, nec volutpat risus risus in ipsum. 
              Sed at purus diam. Vivamus vel metus at enim fringilla efficitur. Phasellus volutpat odio non diam tincidunt ultricies.
            </motion.p>
            
            {/* Progress Bars */}
            <div className="space-y-6 mb-8">
              <ProgressBar label="Customer Satisfaction" percentage={92} delay={0.8} />
              <ProgressBar label="Professional Expertise" percentage={86} delay={0.9} />
            </div>
            
            {/* Button */}
            <motion.button 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1 }}
              whileHover={{ scale: 1.05, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary border border-white border-opacity-20 text-white px-6 py-3 rounded flex items-center font-medium transition-all hover:bg-primary-dark"
            >
              MORE INFO
              <FiArrowRight className="ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Progress Bar Component
const ProgressBar = ({ label, percentage, delay }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="space-y-2"
    >
      <div className="flex justify-between items-center">
        <span className="font-medium">{label}</span>
        <span className="font-bold">{percentage}%</span>
      </div>
      <div className="w-full bg-white bg-opacity-20 h-2 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: `${percentage}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: delay + 0.3, ease: "easeOut" }}
          className="bg-primary h-full rounded-full"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default AboutSection;
