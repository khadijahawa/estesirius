import React from 'react';
import AboutHeader from '../components/aboutus/AboutHeader';
import FromTheStart from '../components/aboutus/FromTheStart';
import OurCommitment from '../components/aboutus/OurCommitment';
import DailyPromotions from '../components/aboutus/DailyPromotions';
import OurServices from '../components/aboutus/OurServices';
import CustomerReviews from '../components/aboutus/CustomerReviews';
import ImageComp from '../components/aboutus/ImageComp';
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
        <ImageComp />
      </div>
    </div>
  );
};

export default About;