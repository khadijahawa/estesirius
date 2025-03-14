export default function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
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
  );
}
