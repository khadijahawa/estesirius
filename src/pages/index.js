import Head from "next/head";
import HeroSlider from "../components/index/HeroSlider";
import WelcomeSection from "../components/index/WelcomeSection";
import ShopSection from "../components/index/ShopSection";
import ServicesSection from "../components/index/ServicesSection";
import AboutSection from "../components/index/AboutSection";
import PromotionsSection from "../components/index/PromotionsSection";
import PlanSelectionSection from "../components/index/PlanSelectionSection";
import StatsSection from "../components/index/StatsSection";
import { FormattedMessage, useIntl } from "react-intl";

export default function Home() {
  return (
    <>
      <Head>
        <title>ESTE SIRIUS - Premium Plastic Surgery Clinic</title>
        <meta
          name="description"
          content="Premium plastic surgery clinic focused on providing the highest quality care and results"
        />
      </Head>

      <main>
        <HeroSlider />
        <WelcomeSection />
        <AboutSection />
        <StatsSection />
        <ShopSection />
        <ServicesSection />
        <PlanSelectionSection />
        <PromotionsSection />
      </main>
    </>
  );
}
