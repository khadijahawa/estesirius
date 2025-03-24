import React from 'react';
import AboutHeader from '../components/about/AboutHeader';
import FromTheStart from '../components/about/FromTheStart';
import OurCommitment from '../components/about/OurCommitment';
import DailyPromotions from '../components/about/DailyPromotions';
import OurServices from '../components/about/OurServices';
import CustomerReviews from '../components/about/CustomerReviews';

const About = () => {
  return (
    <div className="container mx-auto pt-0 md:pt-0">
      <AboutHeader />
      
      <div className="px-4 py-8">
        <FromTheStart />
        <OurCommitment />
        <DailyPromotions />
        <OurServices />    
        <CustomerReviews />

      </div>
    </div>
  );
};

export default About;