import { motion } from "framer-motion";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
const PromotionsSection = () => {
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
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-8">
          {/* Left Side */}
          <div className="md:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block bg-primary text-white text-xs font-bold px-4 py-2 mb-4 rounded-sm"
            >
              <FormattedMessage id="PromotionsSection.exclusiveAestheticOffers" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-dark"
            >
              <FormattedMessage id="PromotionsSection.elevateYourBeauty" />
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-text-light mb-8"
            >
              <p>
                <FormattedMessage id="PromotionsSection.elevateYourBeautyDescription" />
              </p>
              <p className="mt-4 md:mt-0">
                <FormattedMessage id="PromotionsSection.elevateYourBeautyDescription2" />
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center"
            ></motion.div>
          </div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
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
                src="/images/index/doctor-consultation.jpg"
                alt="Body Measurement"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {promotionProducts.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>

        {/* Promo Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {promoBoxes.map((promo, index) => (
            <PromoBox key={index} promo={promo} index={index} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

// Product Card Component
const ProductCard = ({ product, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
    >
      <motion.div
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
        }}
        className="card bg-white rounded-lg overflow-hidden shadow-md relative transition-all h-full"
      >
        <div className="relative h-48 sm:h-64">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {/* <div className="absolute top-2 right-2 bg-secondary text-white text-sm font-medium px-3 py-1 rounded-sm">
            ${product.price}
          </div> */}
        </div>
        <div className="p-4 text-center">
          <h3 className="font-bold text-gray-dark">{product.name}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
};

// Promo Box Component
const PromoBox = ({ promo, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)" }}
      className="bg-white rounded-lg p-6 shadow-md transition-all duration-300"
    >
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div className="w-20 h-20 shrink-0">
          <div className="w-20 h-20 rounded-full overflow-hidden shadow-md">
            <Image
              src={promo.image}
              alt={promo.title}
              width={80}
              height={80}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2 text-center sm:text-left text-gray-dark">
            {promo.title}
          </h3>
          <p className="text-text-light text-center sm:text-left">
            {promo.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

// Promotion Products data
const promotionProducts = [
  {
    name: <FormattedMessage id="PromotionsSection.hairCareSet" />,
    price: "60",
    image: "/images/products/aylik.jpg"
  },
  {
    name: <FormattedMessage id="PromotionsSection.threeMonthsHairCare" />,
    price: "120",
    image: "/images/products/3aylik.jpg"
  },
  {
    name: <FormattedMessage id="PromotionsSection.hairVitaminsSet" />,
    price: "150",
    image: "/images/products/6gida.png"
  }
];

const promoBoxes = [
  {
    title: <FormattedMessage id="PromotionsSection.exclusiveSkinCare" />,
    description: (
      <FormattedMessage id="PromotionsSection.exclusiveSkinCareDescription" />
    ),
    image: "/images/clinic/home1.JPG"
  },
  {
    title: <FormattedMessage id="PromotionsSection.bodyContouringSpecial" />,
    description: (
      <FormattedMessage id="PromotionsSection.bodyContouringSpecialDescription" />
    ),
    image: "/images/clinic/home2.JPG"
  }
];
export default PromotionsSection;
