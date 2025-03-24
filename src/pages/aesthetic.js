// pages/aesthetic.js
import React from 'react';
import Head from 'next/head';
import AestheticHeader from '../components/Aesthetic/AestheticHeader';
import AestheticEntry from '../components/Aesthetic/AestheticEntry';
import AestheticSelection from '../components/Aesthetic/AestheticSelection';

export default function Aesthetic() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Esthetics | Plastic Surgery</title>
        <meta name="description" content="Learn about our esthetic procedures and plastic surgery options" />
      </Head>

      {/* Header Component */}
      <AestheticHeader />
      
      {/* Entry Component */}
      <AestheticEntry />

      {/* Selection Component */}
      <AestheticSelection />
    </div>
  );
}