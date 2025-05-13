import { motion } from "framer-motion";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import { FormattedMessage } from "react-intl";
const ShopSection = () => {
  const handleWhatsAppRedirect = () => {
    const phoneNumber = "+905395204530";
    ("Hello, I would like more information about the services offered.");
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
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
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-12 gap-8">
          {/* Left Side */}
          <div className="md:w-1/2">
            <div className="inline-block bg-secondary text-white text-xs font-bold px-4 py-2 mb-4 rounded-sm">
              <FormattedMessage id="ShopSection.bestIndustry" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-dark">
              <FormattedMessage id="ShopSection.takeAnAppointment" />
            </h2>
            <div className="md:columns-2 gap-6 text-text-light mb-8">
              <p>
                <FormattedMessage id="ShopSection.weAreKnown" />
              </p>
              <p className="mt-4 md:mt-0">
                <FormattedMessage id="ShopSection.weAreKnown2" />
              </p>
            </div>
            <motion.button
              onClick={handleWhatsAppRedirect}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-6 py-3 rounded flex items-center font-medium transition-colors hover:bg-primary-dark"
            >
              <FormattedMessage id="ShopSection.moreInfo" />
              <FiArrowRight className="ml-2" />
            </motion.button>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="rounded-lg overflow-hidden shadow-lg bg-gray"
            >
              <Image
                src="/images/index/treatment.jpg"
                alt="Facial Treatment"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
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
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)"
        }}
        className="card bg-white rounded-lg overflow-hidden shadow-md relative transition-all"
      >
        <div className="relative h-48 sm:h-56">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain w-full h-full "
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

// Product data
const products = [
  {
    name: <FormattedMessage id="ShopSection.hairVitamins" />,
    price: "99",
    image: "/images/products/gida.png"
  },
  {
    name: <FormattedMessage id="ShopSection.serum" />,
    price: "19",
    image: "/images/products/60.jpg"
  },
  {
    name: <FormattedMessage id="ShopSection.sunScreen" />,
    price: "75",
    image: "/images/products/sunScreen.png"
  },
  {
    name: <FormattedMessage id="ShopSection.shampoo" />,
    price: "150",
    image: "/images/products/shampoo.jpg"
  }
];

export default ShopSection;
