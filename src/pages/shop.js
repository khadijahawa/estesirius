import Head from 'next/head';
import Image from 'next/image';

export default function Shop() {
  return (
    <>
      <Head>
        <title>Our Shop - CLINICA WP</title>
        <meta name="description" content="Browse our shop for premium plastic surgery products and services" />
      </Head>
      
      <div className="shop-hero relative h-[500px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/clinic-background.jpg"
              alt="Clinic Background"
              layout="fill"
              objectFit="cover"
              className="filter blur-sm brightness-75"
            />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold text-turquoise mb-6">Our Shop</h1>
            <p className="text-white text-lg mb-8 text-wrap-balance">
              Donec diam leo, dignissim sed rhoncus vel, dictum sit amet orci. Aenean commodo mi felis, ut egestas lacus scelerisque at.
            </p>
            <button className="bg-white hover:bg-gray-100 text-turquoise font-bold py-3 px-8 rounded transition">
              CHECK NOW
            </button>
          </div>
        </div>
      </div>
      
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product cards would go here */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="h-64 bg-gray-200 relative">
                  {/* Placeholder for product image */}
                  <div className="absolute top-4 right-4 bg-turquoise text-white text-xs font-bold px-2 py-1 rounded">
                    NEW
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Product Name {item}</h3>
                  <p className="text-gray-600 line-clamp-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Nullam in vestibulum tortor, at tempor lectus.
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-xl font-bold text-turquoise">$199.99</span>
                    <button className="bg-navy-dark text-white px-4 py-2 rounded hover:bg-navy-dark/80 transition">
                      Add to Cart
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
