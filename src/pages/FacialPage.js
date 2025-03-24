// pages/FacialPage.js
import React from 'react';
import FacialHero from '../components/Facial/FacialHero';
import FacialServices from '../components/Facial/FacialServices';
import FacialBenefits from '../components/Facial/FacialBenefits';
import FacialProducts from '../components/Facial/FacialProducts';
import FacialSteps from '../components/Facial/FacialSteps';

const FacialPage = () => {
  return (
    <div>
      <FacialHero />
      <FacialServices />
      <FacialBenefits />
      <FacialProducts />
      <FacialSteps />
    </div>
  );
};

export default FacialPage;