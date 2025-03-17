import Head from 'next/head';
import HeroSlider from '../components/HeroSlider';
import WelcomeSection from '../components/WelcomeSection';
import ShopSection from '../components/ShopSection';
import ServicesSection from '../components/ServicesSection';

export default function Home() {
  // Hero slider data has been moved to the HeroSlider component
  
  return (
    <>
      <Head>
        <title>ESTE SIRIUS - Premium Plastic Surgery Clinic</title>
        <meta name="description" content="Premium plastic surgery clinic focused on providing the highest quality care and results" />
      </Head>
      
      <main>
        <HeroSlider />
        <WelcomeSection />
        <ShopSection />
        <ServicesSection />
      </main>
    </>
  );
}
