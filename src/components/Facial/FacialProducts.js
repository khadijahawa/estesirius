// components/FacialProducts.js
import React from "react";
import Image from "next/image";

const FacialProducts = () => {
  const products = [
    { id: 1, category: "Cleansers", icon: "🧴" },
    { id: 2, category: "Toners", icon: "💧" },
    { id: 3, category: "Serums", icon: "💉" },
    { id: 4, category: "Moisturizers", icon: "🧪" },
    { id: 5, category: "SPF Products", icon: "☀️" }
  ];

  return (
    <div className="relative py-16 px-4">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/image/about/pr-04.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="container mx-auto relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <div className="text-4xl mb-4">{product.icon}</div>
              <h3 className="text-lg font-semibold">{product.category}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacialProducts;
