import { motion } from "framer-motion";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const StatsSection = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative py-20 overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/index/stats-background.jpg"
          alt="Medical professionals at work"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-secondary opacity-70"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Stat Card Component
const StatCard = ({ stat, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)"
      }}
      className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-8 text-center border border-white border-opacity-10 transition-all duration-300"
    >
      <motion.h2
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.6,
          delay: 0.3 + index * 0.1,
          type: "spring",
          stiffness: 100
        }}
        className="text-5xl lg:text-6xl font-bold mb-3 text-primary"
      >
        {stat.number}
      </motion.h2>
      <p className="text-xl font-bold mb-2 text-gray-dark">{stat.label}</p>
      <p className="text-gray-dark text-opacity-80">{stat.description}</p>
    </motion.div>
  );
};

// Stats data
const stats = [
  {
    number: "6",
    label: <FormattedMessage id="StatsSection.products" />,
    description: <FormattedMessage id="StatsSection.forSkinAndHairCare" />
  },
  {
    number: "27",
    label: <FormattedMessage id="StatsSection.employee" />,
    description: <FormattedMessage id="StatsSection.variesSpecialization" />
  },
  {
    number: "5390",
    label: <FormattedMessage id="StatsSection.visitors" />,
    description: <FormattedMessage id="StatsSection.fromAllAroundTheWorld" />
  },
  {
    number: "11",
    label: <FormattedMessage id="StatsSection.years" />,
    description: <FormattedMessage id="StatsSection.ofExperience" />
  }
];

export default StatsSection;
