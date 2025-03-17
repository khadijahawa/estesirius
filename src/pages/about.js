import React from 'react';
import AboutHeader from '../components/aboutus/AboutHeader';
import FromTheStart from '../components/aboutus/FromTheStart';
import OurCommitment from '../components/aboutus/OurCommitment';
import DailyPromotions from '../components/aboutus/DailyPromotions';
import OurServices from '../components/aboutus/OurServices';
import CustomerReviews from '../components/aboutus/CustomerReviews';

const About = () => {
  return (
    <div className="container mx-auto pt-32 md:pt-44">
      {/* Header with background image */}
      <AboutHeader />
      
      {/* Main content container */}
      <div className="px-4 py-8">
        {/* Top section with image and "From the Start" */}
        <FromTheStart />
        
        {/* "Our Commitment" section - no background, equal sized boxes */}
        <OurCommitment />
        
        {/* "Daily Promotions" section */}
        <DailyPromotions />

        {/* Services Section with circular images */}
        <OurServices />
        
        {/* Reviews section with background image */}
        <CustomerReviews />
      </div>
    </div>
  );
};

export default About;