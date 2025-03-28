// pages/operationsPage.js
import React from 'react';
import Head from 'next/head';
import OperationsHeader from '../components/Operations/OperationsHeader';
import OperationsEntry from '../components/Operations/OperationsEntry';

export default function OperationsPage() {
  return (
    <div className="min-h-screen">
      <Head>
        <title>Medical Operations | Our Services</title>
        <meta name="description" content="Explore our range of medical operations and procedures" />
      </Head>

      {/* Header Component */}
      <OperationsHeader />
      
      {/* Entry Component with Grid Layout */}
      <OperationsEntry />
    </div>
  );
}