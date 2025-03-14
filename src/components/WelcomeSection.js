export default function WelcomeSection() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Welcome to <span className="text-turquoise">ESTE SIRIUS</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            At ESTE SIRIUS, we combine advanced techniques with personalized care to help you achieve your aesthetic goals. 
            Our team of experienced professionals is dedicated to providing exceptional results in a comfortable and safe environment.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise text-3xl font-bold">1</span>
              </div>
              <h3 className="font-bold mb-2">Expert Team</h3>
              <p className="text-gray-600">Board-certified specialists with years of experience in aesthetic procedures.</p>
            </div>
            <div>
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise text-3xl font-bold">2</span>
              </div>
              <h3 className="font-bold mb-2">Advanced Technology</h3>
              <p className="text-gray-600">State-of-the-art equipment and cutting-edge procedures for optimal results.</p>
            </div>
            <div>
              <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-turquoise text-3xl font-bold">3</span>
              </div>
              <h3 className="font-bold mb-2">Personalized Care</h3>
              <p className="text-gray-600">Custom treatment plans tailored to your individual needs and goals.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
