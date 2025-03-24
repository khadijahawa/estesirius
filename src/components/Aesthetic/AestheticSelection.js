// components/Aesthetic/AestheticSelection.js
import React from 'react';

export default function AestheticSelection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Why Plastic Surgery Is Necessary</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Medical Reconstruction</h3>
              <p className="text-gray-700">
                Plastic surgery plays a vital role in medical reconstruction for patients who have experienced trauma, disease, or congenital conditions. Procedures like breast reconstruction after mastectomy, facial reconstruction following accidents, or correction of birth defects like cleft palate can restore both function and appearance, significantly improving quality of life and psychological wellbeing.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Functional Improvement</h3>
              <p className="text-gray-700">
                Many plastic surgery procedures address functional concerns that impact daily life. Rhinoplasty can correct breathing difficulties, eyelid surgery may improve vision impaired by drooping skin, and hand surgery can restore movement and dexterity lost to injury or conditions like carpal tunnel syndrome. These interventions not only enhance appearance but also restore essential bodily functions.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Psychological Wellbeing</h3>
              <p className="text-gray-700">
                The psychological benefits of plastic surgery should not be underestimated. Procedures that address appearance concerns can significantly improve self-esteem, body image, and confidence. Research shows that when performed for appropriate reasons and with realistic expectations, plastic surgery can reduce social anxiety, depression, and feelings of self-consciousness, leading to improved mental health outcomes.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-medium text-gray-800 mb-4">Physical Health Improvements</h3>
              <p className="text-gray-700">
                Some plastic surgery procedures directly contribute to improved physical health. Body contouring surgeries after significant weight loss can reduce skin infections, rashes, and mobility issues. Breast reduction can alleviate chronic back, neck, and shoulder pain. These interventions not only enhance appearance but can also lead to more active lifestyles and better overall health outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}