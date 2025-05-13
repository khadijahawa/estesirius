import Head from "next/head";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

export default function Shop() {
  return (
    <>
      <Head>
        <title>Our Shop - ESTE SIRIUS</title>
        <meta
          name="description"
          content="Browse our premium products for hair care, skin protection, and aesthetic treatments at ESTE SIRIUS."
        />
      </Head>

      <div className="shop-hero relative h-[500px] pt-15 flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/images/pr-025.jpg"
              alt="Clinic Background"
              layout="fill"
              objectFit="cover"
              className="filter blur-sm brightness-75"
            />
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-turquoise mb-6">
              <FormattedMessage id="Shop.title" />
            </h1>
            <p className="text-white text-lg mb-8 text-wrap-balance">
              <FormattedMessage id="Shop.description" />
            </p>
            <button className="bg-white hover:bg-gray-100 text-turquoise font-bold py-3 px-8 rounded transition">
              <FormattedMessage id="Shop.shopNow" />
            </button>
          </div>
        </div>
      </div>

      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Cards */}
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg overflow-hidden"
              >
                <div className="h-64 bg-gray-200 relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    layout="fill"
                    objectFit="contain"
                    className="absolute inset-0"
                  />
                  <div className="absolute top-4 right-4 bg-turquoise text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                  <p className="text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    {/* <span className="text-xl font-bold text-turquoise">
                      ${product.price}
                    </span> */}
                    <button className="bg-navy-dark text-white px-4 py-2 rounded hover:bg-navy-dark/80 transition">
                      Check It Out
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

// Product Data (Example Products)
const products = [
  {
    name: <FormattedMessage id="Shop.hairVitamins" />,
    price: "39.99",
    image: "/images/products/gida.png",
    description: <FormattedMessage id="Shop.hairVitaminsDescription" />
  },
  {
    name: <FormattedMessage id="Shop.hairSerum" />,
    price: "49.99",
    image: "/images/products/60-removebg-preview.png",
    description: <FormattedMessage id="Shop.hairSerumDescription" />
  },
  {
    name: <FormattedMessage id="Shop.sunscreen" />,
    price: "29.99",
    image: "/images/products/sunScreen.png",
    description: <FormattedMessage id="Shop.sunscreenDescription" />
  },
  {
    name: <FormattedMessage id="Shop.shampoo" />,
    price: "24.99",
    image: "/images/products/shampoo-removebg-preview.png",
    description: <FormattedMessage id="Shop.shampooDescription" />
  },
  {
    name: <FormattedMessage id="Shop.completeHairCareSet" />,
    price: "129.99",
    image: "/images/products/3aylik-removebg-preview.png",
    description: <FormattedMessage id="Shop.completeHairCareSetDescription" />
  }
];
