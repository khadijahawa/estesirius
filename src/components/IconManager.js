import { useEffect } from "react";
import Head from "next/head";

// Icon manager component that handles favicon functionality
const IconManager = ({ iconUrl }) => {
  // Set favicon dynamically with a stable approach
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window !== 'undefined') {
      // Create a stable reference to the favicon
      const updateFavicon = () => {
        let link = document.querySelector("link[rel*='icon']");
        
        if (!link) {
          link = document.createElement('link');
          link.id = 'dynamic-favicon';
          link.rel = 'shortcut icon';
          link.type = 'image/x-icon';
          document.head.appendChild(link);
        }
        
        // Ensure the favicon stays by adding a timestamp to prevent caching issues
        const faviconWithCache = iconUrl.src || iconUrl;
        link.href = `${faviconWithCache}?t=${new Date().getTime()}`;
      };
      
      // Set favicon initially
      updateFavicon();
      
      // Set up an interval to check and restore the favicon if needed
      const faviconInterval = setInterval(updateFavicon, 2000);
      
      // Clean up interval on unmount
      return () => clearInterval(faviconInterval);
    }
  }, [iconUrl]);

  return (
    <Head>
      <link rel="icon" href={iconUrl.src || iconUrl} key="favicon" />
    </Head>
  );
};

export default IconManager;
