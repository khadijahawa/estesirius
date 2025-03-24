// pages/hairplant.js
import React from 'react';
import Head from 'next/head';
import HairHeader from '../../components/Hair/HairHeader';
import HairPlanting from '../../components/Hair/HairPlanting';
import ImageComp from '../../components/Hair/ImageComp';


export default function Hairplant() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Hairplant | Your Brand</title>
        <meta name="description" content="Learn about our innovative Hairplant solutions" />
      </Head>

      {/* Header Component */}
      <HairHeader />
      
      {/* Content Component */}
      <HairPlanting />

      {/*Img Component*/}
      <ImageComp/>

    </div>
  );
}