import Head from "next/head";
import Image from "next/image";

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

      <div className="shop-hero relative h-[500px] flex items-center overflow-hidden">
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
              Our Shop
            </h1>
            <p className="text-white text-lg mb-8 text-wrap-balance">
              Discover our exclusive range of premium products tailored for your
              beauty and health needs. From nourishing hair vitamins to
              high-performance sunscreens, we offer only the best.
            </p>
            <button className="bg-white hover:bg-gray-100 text-turquoise font-bold py-3 px-8 rounded transition">
              SHOP NOW
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
    name: "Hair Vitamins",
    price: "39.99",
    image: "/images/products/gida.png",
    description:
      "Boost your hair health with our premium Hair Vitamins, designed to support growth, thickness, and overall hair strength. Packed with essential nutrients, it's your daily hair care companion."
  },
  {
    name: "Hair Serum",
    price: "49.99",
    image: "/images/products/60-removebg-preview.png",
    description:
      "Our Hair Serum is crafted to repair damaged strands, enhance shine, and protect from heat styling. Ideal for all hair types, it nourishes deeply and provides a smooth, silky finish."
  },
  {
    name: "Sunscreen SPF 50",
    price: "29.99",
    image: "/images/products/sunScreen.png",
    description:
      "Protect your skin from harmful UV rays with our high-quality Sunscreen SPF 50. Designed for daily use, this sunscreen shields your skin while keeping it moisturized and smooth."
  },
  {
    name: "Shampoo for All Hair Types",
    price: "24.99",
    image: "/images/products/shampoo-removebg-preview.png",
    description:
      "Our Shampoo is formulated for all hair types, gently cleansing while maintaining moisture and vitality. With natural ingredients, it promotes healthy, shiny hair with every wash."
  },
  {
    name: "Complete Hair Care Set",
    price: "129.99",
    image: "/images/products/3aylik-removebg-preview.png",
    description:
      "Everything your hair needs in one set! Includes Hair Vitamins, Hair Serum, and Shampoo for a complete hair care routine that promotes healthy, strong, and shiny hair."
  }
];
