import { motion } from "framer-motion";
import Image from "next/image";
import {
  FiArrowRight,
  FiPenTool,
  FiPackage,
  FiShoppingBag
} from "react-icons/fi";
import { useRouter } from "next/router";
import { FormattedMessage } from "react-intl";

const PlanSelectionSection = () => {
  const router = useRouter();

  // Handle redirect to shop
  const handleViewPrices = () => {
    router.push("/shop"); // Replace '/shop' with the actual path to your shop page
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-gray-light relative py-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-pattern"></div>

      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-8">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:w-1/2"
          >
            <div className="inline-block bg-secondary text-white text-xs font-bold px-4 py-2 mb-4 rounded-sm">
              {/* ALL FACILITIES */}
              <FormattedMessage id="PlanSelectionSection.allFacilities" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-dark">
              <FormattedMessage id="PlanSelectionSection.chooseTheBestPlan" />
            </h2>
            <div className="text-text-light mb-8">
              <p>
                <FormattedMessage id="PlanSelectionSection.chooseTheBestPlanDescription" />
              </p>
              <p className="mt-4 md:mt-0">
                <FormattedMessage id="PlanSelectionSection.ourExpertProfessionals" />
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleViewPrices} // Redirect to shop page
              className="bg-primary text-white px-6 py-3 rounded flex items-center font-medium transition-colors hover:bg-primary-dark"
            >
              <FormattedMessage id="PlanSelectionSection.viewPrices" />
              <FiArrowRight className="ml-2" />
            </motion.button>
          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:w-1/2 mt-8 md:mt-0"
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-lg bg-gray"
            >
              <Image
                src="/images/index/doctor-exam.jpg"
                alt="Doctor Examining Patient"
                width={800}
                height={500}
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Statistics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-secondary p-6 text-white rounded-lg mt-6 shadow-md"
            >
              <div className="flex justify-around text-center">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  >
                    <h3 className="text-2xl md:text-4xl font-bold text-primary">
                      {stat.value}
                    </h3>
                    <p className="text-xs md:text-sm mt-1 font-medium text-white text-opacity-80">
                      {stat.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Service Icons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {services.map((service, index) => (
            <ServiceItem key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Service Item Component
const ServiceItem = ({ service, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left"
    >
      <motion.div
        whileHover={{
          scale: 1.05,
          backgroundColor: "var(--color-primary-light)"
        }}
        transition={{ duration: 0.2 }}
        className="bg-primary-light bg-opacity-20 rounded-full p-4 mb-4 sm:mb-0 sm:mr-4 flex-shrink-0"
      >
        {service.icon}
      </motion.div>
      <div>
        <h3 className="text-xl font-bold mb-2 text-gray-dark">
          {service.title}
        </h3>
        <p className="text-text-light">{service.description}</p>
      </div>
    </motion.div>
  );
};

// Statistics data
const stats = [
  {
    value: "11+",
    label: <FormattedMessage id="PlanSelectionSection.yearsOfExpertise" />
  },
  {
    value: "55+",
    label: <FormattedMessage id="PlanSelectionSection.differentServices" />
  },
  {
    value: "5k+",
    label: <FormattedMessage id="PlanSelectionSection.satisfiedClients" />
  },
  {
    value: "26",
    label: <FormattedMessage id="PlanSelectionSection.certifiedDoctors" />
  }
];

// Service data
const services = [
  {
    title: (
      <FormattedMessage id="PlanSelectionSection.personalizedConsultations" />
    ),
    description: (
      <FormattedMessage id="PlanSelectionSection.personalizedConsultationsDescription" />
    ),
    icon: <FiPenTool className="w-6 h-6 text-primary" />
  },
  {
    title: <FormattedMessage id="PlanSelectionSection.advancedTreatments" />,
    description: (
      <FormattedMessage id="PlanSelectionSection.advancedTreatmentsDescription" />
    ),
    icon: <FiPackage className="w-6 h-6 text-primary" />
  },
  {
    title: <FormattedMessage id="PlanSelectionSection.eCommerceConvenience" />,
    description: (
      <FormattedMessage id="PlanSelectionSection.eCommerceConvenienceDescription" />
    ),
    icon: <FiShoppingBag className="w-6 h-6 text-primary" />
  }
];

export default PlanSelectionSection;
