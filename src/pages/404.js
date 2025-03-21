import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaHome, FaArrowLeft, FaSearch } from 'react-icons/fa';

export default function Custom404() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <Head>
        <title>404 - Sayfa Bulunamadı | Estesirius</title>
        <meta name="description" content="Aradığınız sayfa bulunamadı. Estesirius ana sayfasına dönün veya başka bir servis arayın." />
      </Head>
      
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-gray-light pt-[15vh]">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg text-center"
        >
          <div className="mb-8">
            <motion.h1 
              className="text-6xl font-bold text-secondary mb-2"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                delay: 0.2 
              }}
            >
              404
            </motion.h1>
            <motion.div 
              className="h-2 bg-primary w-24 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            />
          </div>
          
          <motion.h2 
            className="text-2xl font-bold text-gray-dark mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Üzgünüz, aradığınız sayfayı bulamadık
          </motion.h2>
          
          <motion.p 
            className="text-text-light mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Aradığınız sayfa taşınmış, silinmiş veya geçici olarak kullanılamıyor olabilir.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/" className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 rounded-md bg-primary hover:bg-primary-dark">
              <FaHome />
              <span>Ana Sayfaya Dön</span>
            </Link>
            
            <button 
              onClick={() => window.history.back()} 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 font-medium transition-all duration-300 border rounded-md text-secondary border-secondary hover:bg-secondary hover:text-white"
            >
              <FaArrowLeft />
              <span>Geri Git</span>
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="mt-12 p-6 bg-white rounded-lg shadow-md max-w-md w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          <h3 className="text-lg font-medium text-secondary mb-4">
            Popüler Servislerimiz
          </h3>
          <ul className="space-y-3">
            {['Saç Ekimi', 'Botox İşlemleri', 'Burun Estetiği', 'Cilt Bakımı'].map((service, index) => (
              <motion.li 
                key={index}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                <Link href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="flex items-center p-2 transition-all duration-300 rounded-md hover:bg-gray-light">
                  <FaSearch className="text-primary mr-2" />
                  <span>{service}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </>
  );
}
