import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const servicesData = {
    "hair-transplant-for-men": {
      title: "Hair Transplant for Men",
      header: "Details about hair transplant for men...",
      subheader: "Details about hair transplant",
      content: "Details about hair transplant"
    },
    "hair-transplant-for-women": {
      title: "Hair Transplant for Men",
      header: "Details about hair transplant for men...",
      subheader: "Details about hair transplant",
      content: "Details about hair transplant"
    },
    "beard": {
      title: "beard",
      header: "Details about hair transplant for men...",
      subheader: "Details about hair transplant",
      content: "Details about hair transplant"
    }
};

const ServicePage = () => {
  const router = useRouter();
  const { category, service } = router.query;

  const [serviceContent, setServiceContent] = useState(null);

  useEffect(() => {
    if (category && service) {
      const serviceData = servicesData[category]?.[service];

      if (serviceData) {
        setServiceContent(serviceData);
      } else {
        setServiceContent({ title: "Service Not Found", content: "" });
      }
    }
  }, [category, service]);

  return (
    <div>
      <h1>{serviceContent?.title}</h1>
      <p>{serviceContent?.content}</p>
    </div>
  );
};

export default ServicePage;