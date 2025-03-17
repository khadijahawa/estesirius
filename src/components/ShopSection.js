import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const ShopSection = () => {
  // Product data
  const products = [
    {
      id: 1,
      name: "CREAM",
      price: "99",
      image: "/images/product-cream.jpg",
      colorClass: "bg-teal-500"
    },
    {
      id: 2,
      name: "SOAP",
      price: "19",
      image: "/images/product-soap.jpg",
      colorClass: "bg-blue-800"
    },
    {
      id: 3,
      name: "FILLER",
      price: "75",
      image: "/images/product-filler.jpg",
      colorClass: "bg-teal-500"
    },
    {
      id: 4,
      name: "DETERGENT",
      price: "150",
      image: "/images/product-detergent.jpg",
      colorClass: "bg-blue-800"
    }
  ];

  return (
    <section className="w-full py-16 relative overflow-hidden bg-gray-50">
      {/* Hexagonal pattern background */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none" 
        style={{
          backgroundImage: "url('/images/hexagon-pattern.png')",
          backgroundSize: "200px",
          backgroundRepeat: "repeat"
        }}
      />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-blue-600 text-white text-xs font-bold tracking-wider rounded-sm">
                BEST INDUSTRY IN THE TOWN
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800">Check Our Shop</h2>
              
              <div className="mt-6 space-y-4">
                <p className="text-gray-600">
                  Experience our premium collection of medical-grade skincare products designed by leading dermatologists and plastic surgeons to complement our procedures and enhance your results.
                </p>
                <p className="text-gray-600">
                  Each product is formulated with the highest quality ingredients and backed by scientific research to ensure optimal efficacy and safety.
                </p>
              </div>
              
              <button className="mt-8 group inline-flex items-center gap-2 px-6 py-3 bg-teal-500 text-white font-semibold text-sm rounded transition-all duration-300 hover:bg-teal-600 focus:ring-2 focus:ring-teal-300 focus:outline-none">
                MORE INFO
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
            
            {/* Product Showcase */}
            <div className="mt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {products.map(product => (
                  <div key={product.id} className="group relative bg-white rounded-lg shadow-sm overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-md">
                    <div className={`absolute top-0 right-0 ${product.colorClass} text-white px-3 py-1 text-sm font-bold z-10`}>
                      ${product.price}
                    </div>
                    <div className="h-40 md:h-48 relative bg-gray-100">
                      <Image 
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="font-medium text-gray-800">{product.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative rounded-lg overflow-hidden shadow-xl h-[500px] md:h-[600px]">
              <Image
                src="/images/medical-procedure.jpg"
                alt="Medical cosmetic procedure"
                layout="fill"
                objectFit="cover"
                priority
                className="transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;
