import { motion } from "framer-motion";
import Image from "next/image";
import { FiCheck } from "react-icons/fi";
import { FormattedMessage } from "react-intl";
const ServicesSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left Column - Images */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src="/images/index/treatment1.jpg"
                alt="Medical treatment procedure"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src="/images/index/treatment2.jpg"
                alt="Medical professional performing treatment"
                width={600}
                height={400}
                className="w-full h-64 object-cover transition-transform hover:scale-105 duration-300"
              />
            </motion.div>
          </div>

          {/* Middle Column - Text Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            whileHover={{
              y: -5,
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
            }}
            className="bg-secondary rounded-lg p-8 shadow-lg flex flex-col justify-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              <FormattedMessage id="ServicesSection.allInfo" />
            </h2>
            <ul className="text-white space-y-4">
              {[
                <FormattedMessage
                  id="ServicesSection.professionalConsultation"
                  key="consultation"
                />,
                <FormattedMessage
                  id="ServicesSection.premiumQuality"
                  key="premium"
                />,
                <FormattedMessage
                  id="ServicesSection.postProcedureCare"
                  key="care"
                />,
                <FormattedMessage
                  id="ServicesSection.personalizedTreatment"
                  key="personalized"
                />
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <span className="flex items-center justify-center bg-white bg-opacity-20 rounded-full w-6 h-6 mr-3 flex-shrink-0">
                    <FiCheck className="text-primary" />
                  </span>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="overflow-hidden rounded-lg shadow-md h-full"
          >
            <Image
              src="/images/index/treatment3.jpg"
              alt="Medical consultation and examination"
              width={600}
              height={800}
              className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;
