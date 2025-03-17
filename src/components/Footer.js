export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 font-sans">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ESTE SIRIUS</h3>
            <p className="text-gray-light">
              Premium plastic surgery clinic focused on providing the highest quality care and results.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary transition">Home</a></li>
              <li><a href="#" className="hover:text-primary transition">About Us</a></li>
              <li><a href="#" className="hover:text-primary transition">Shop</a></li>
              <li><a href="#" className="hover:text-primary transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <p className="text-gray-light mb-2">ST. LAMBOR, NEW YORK (US)</p>
            <p className="text-gray-light mb-2">+31 2349334972</p>
            <p className="text-gray-light">info@estesirius.com</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} ESTE SIRIUS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
