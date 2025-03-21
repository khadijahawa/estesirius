import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Head from 'next/head';

// Sample service data for hair category
const hairServices = {
  'service1': {
    title: 'Hair Service 1',
    description: 'This is the description for hair service 1',
    // Add more details as needed
  },
  'service2': {
    title: 'Hair Service 2',
    description: 'This is the description for hair service 2',
    // Add more details as needed
  },
};

export default function HairService() {
  const router = useRouter();
  const { service } = router.query;

  // Redirect to 404 if service doesn't exist
  useEffect(() => {
    if (router.isReady && service && !hairServices[service]) {
      router.push('/404');
    }
  }, [router, service]);

  // Show loading until router is ready
  if (!router.isReady || !service) {
    return <div>Loading...</div>;
  }

  // If service doesn't exist, return null (will be redirected by useEffect)
  if (!hairServices[service]) {
    return null;
  }

  const serviceData = hairServices[service];

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
