import Link from 'next/link';

export default function ProductsSection({ products }) {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Featured Products</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
          Discover our exclusive selection of premium products designed to enhance your natural beauty and support your transformation journey.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                {product.isNew && (
                  <div className="absolute top-4 right-4 bg-turquoise text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 line-clamp-2">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xl font-bold text-turquoise">${product.price}</span>
                  <button className="bg-navy-dark text-white px-4 py-2 rounded hover:bg-navy-dark/80 transition">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link href="/shop" className="inline-block bg-turquoise hover:bg-turquoise/80 text-white font-bold py-3 px-8 rounded transition">
            VIEW ALL PRODUCTS
          </Link>
        </div>
      </div>
    </div>
  );
}
