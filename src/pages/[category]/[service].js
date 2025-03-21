import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const servicesData = {
  hair: {
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
    }
  },
  operations: {
    liposuction: {
      title: "Liposuction",
      content: "Details about liposuction..."
    },
    abdominoplasty: {
      title: "Abdominoplasty",
      content: "Details about abdominoplasty..."
    }
  },
  esthetics: {
    liposuction: {
      title: "Liposuction",
      content: "Details about liposuction..."
    },
    abdominoplasty: {
      title: "Abdominoplasty",
      content: "Details about abdominoplasty..."
    }
  },
  facial: {
    liposuction: {
      title: "Liposuction",
      content: "Details about liposuction..."
    },
    abdominoplasty: {
      title: "Abdominoplasty",
      content: "Details about abdominoplasty..."
    }
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
