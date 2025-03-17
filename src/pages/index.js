import Head from 'next/head';
import HeroSlider from '../components/HeroSlider';
import WelcomeSection from '../components/WelcomeSection';
import ProductsSection from '../components/ProductsSection';
import ShopSection from '../components/ShopSection';
import ServicesShowcase from '../components/ServicesShowcase';

export default function Home() {
  // Hero slider data
  const slides = [
    {
      id: 1,
      image: "/images/pr-10.jpg",
      title: "Beauty & Health",
      titleHighlight: "Redefined",
      description: "Experience the pinnacle of aesthetic transformations with our expert team of plastic surgeons and state-of-the-art facilities. Your journey to confidence starts here.",
      primaryButton: "BOOK CONSULTATION",
      secondaryButton: "VIEW SERVICES"
    },
    {
      id: 2,
      image: "/images/pr-29.jpg",
      title: "Advanced",
      titleHighlight: "Treatments",
      description: "Discover our innovative procedures and cutting-edge technologies designed to deliver natural-looking results with minimal recovery time.",
      primaryButton: "EXPLORE PROCEDURES",
      secondaryButton: "MEET OUR DOCTORS"
    },
    {
      id: 3,
      image: "/images/pr-15.jpg",
      title: "Your Beauty",
      titleHighlight: "Our Passion",
      description: "Let our skilled professionals guide you through a personalized transformation journey tailored to your unique aesthetic goals.",
      primaryButton: "GET STARTED",
      secondaryButton: "READ TESTIMONIALS"
    }
  ];

  // Product data
  const featuredProducts = [
    {
      id: 1,
      name: "Revitalizing Serum",
      description: "A powerful serum that rejuvenates and hydrates your skin for a youthful glow.",
      price: "199.99",
      isNew: true
    },
    {
      id: 2,
      name: "Anti-Aging Cream",
      description: "Premium formula that reduces fine lines and restores elasticity for smoother skin.",
      price: "149.99",
      isNew: false
    },
    {
      id: 3,
      name: "Collagen Booster",
      description: "Enhances natural collagen production for plumper, more radiant skin.",
      price: "229.99",
      isNew: true
    },
    {
      id: 4,
      name: "Recovery Mask",
      description: "Intensive treatment mask that accelerates skin recovery after procedures.",
      price: "79.99",
      isNew: false
    },
    {
      id: 5,
      name: "Pore Minimizer",
      description: "Refining solution that tightens pores and improves skin texture.",
      price: "89.99",
      isNew: true
    },
    {
      id: 6,
      name: "Gentle Cleanser",
      description: "pH-balanced formula that cleanses thoroughly without drying sensitive skin.",
      price: "49.99",
      isNew: false
    }
  ];

  return (
    <>
      <Head>
        <title>ESTE SIRIUS - Premium Plastic Surgery Clinic</title>
        <meta name="description" content="Premium plastic surgery clinic focused on providing the highest quality care and results" />
      </Head>
      
      <HeroSlider slides={slides} />
      <WelcomeSection />
      <ProductsSection products={featuredProducts} />
      <ShopSection />
      <ServicesShowcase />
    </>
  );
}
