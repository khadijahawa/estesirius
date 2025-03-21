import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

// Sample service data for esthetic category
const estheticServices = {
  'service1': {
    title: 'Esthetic Service 1',
    description: 'This is the description for esthetic service 1',
    // Add more details as needed
  },
  'service2': {
    title: 'Esthetic Service 2',
    description: 'This is the description for esthetic service 2',
    // Add more details as needed
  },
};

export default function EestheticService() {
  const router = useRouter();
  const { service } = router.query;

  // Redirect to 404 if service doesn't exist
  useEffect(() => {
    if (router.isReady && service && !estheticServices[service]) {
      router.push('/404');
    }
  }, [router, service]);

  // Show loading until router is ready
  if (!router.isReady || !service) {
    return <div>Loading...</div>;
  }

  // If service doesn't exist, return null (will be redirected by useEffect)
  if (!estheticServices[service]) {
    return null;
  }

  const serviceData = estheticServices[service];

  return (
    <>
      <Head>
        <title>{serviceData.title}</title>
      </Head>
      <div className="service-page">
        <h1>{serviceData.title}</h1>
        <p>{serviceData.description}</p>
        {/* Add more service content here */}
      </div>
    </>
  );
}
