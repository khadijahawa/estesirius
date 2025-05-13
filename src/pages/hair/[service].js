import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import HairHeader from "../../components/Hair/HairHeader";
import HairPlanting from "../../components/Hair/HairPlanting";
import ImageComp from "../../components/Hair/ImageComp";
import Custom404 from "../../pages/404";
import { FormattedMessage } from "react-intl";

const servicesData = {
  "hair-transplant-for-men": {
    title: <FormattedMessage id="HairTransplant.title" />,
    header: <FormattedMessage id="HairTransplant.header" />,
    subheader: <FormattedMessage id="HairTransplant.subheader" />,
    content: <FormattedMessage id="HairTransplant.content" />,
    description: <FormattedMessage id="HairTransplant.description" />,
    beforeAfterContent: (
      <FormattedMessage id="HairTransplant.beforeAfterContent" />
    ),
    procedureSteps: [
      <FormattedMessage key="step1" id="HairTransplant.procedureSteps.1" />,
      <FormattedMessage key="step2" id="HairTransplant.procedureSteps.2" />,
      <FormattedMessage key="step3" id="HairTransplant.procedureSteps.3" />,
      <FormattedMessage key="step4" id="HairTransplant.procedureSteps.4" />,
      <FormattedMessage key="step5" id="HairTransplant.procedureSteps.5" />,
      <FormattedMessage key="step6" id="HairTransplant.procedureSteps.6" />,
      <FormattedMessage key="step7" id="HairTransplant.procedureSteps.7" />
    ],
    faqs: [
      {
        question: <FormattedMessage id="HairTransplant.faqs.1.question" />,
        answer: <FormattedMessage id="HairTransplant.faqs.1.answer" />
      },
      {
        question: <FormattedMessage id="HairTransplant.faqs.2.question" />,
        answer: <FormattedMessage id="HairTransplant.faqs.2.answer" />
      },
      {
        question: <FormattedMessage id="HairTransplant.faqs.3.question" />,
        answer: <FormattedMessage id="HairTransplant.faqs.3.answer" />
      }
    ],
    backgroundImages: [
      "/images/hair/background3.jpg",
      "/images/hair/background1.jpg",
      "/images/hair/background1.jpg"
    ],
    beforeAfterImages: ["/images/hair/hair5.JPG", "/images/hair/hair6.JPG"]
  },
  "hair-transplant-for-women": {
    title: <FormattedMessage id="HairTransplantWomen.title" />,
    header: <FormattedMessage id="HairTransplantWomen.header" />,
    subheader: <FormattedMessage id="HairTransplantWomen.subheader" />,
    content: <FormattedMessage id="HairTransplantWomen.content" />,
    description: <FormattedMessage id="HairTransplantWomen.description" />,
    procedureSteps: [
      <FormattedMessage
        key="step1"
        id="HairTransplantWomen.procedureSteps.1"
      />,
      <FormattedMessage
        key="step2"
        id="HairTransplantWomen.procedureSteps.2"
      />,
      <FormattedMessage
        key="step3"
        id="HairTransplantWomen.procedureSteps.3"
      />,
      <FormattedMessage
        key="step4"
        id="HairTransplantWomen.procedureSteps.4"
      />,
      <FormattedMessage
        key="step5"
        id="HairTransplantWomen.procedureSteps.5"
      />,
      <FormattedMessage
        key="step6"
        id="HairTransplantWomen.procedureSteps.6"
      />,
      <FormattedMessage key="step7" id="HairTransplantWomen.procedureSteps.7" />
    ],
    faqs: [
      {
        question: <FormattedMessage id="HairTransplantWomen.faqs.1.question" />,
        answer: <FormattedMessage id="HairTransplantWomen.faqs.1.answer" />
      },
      {
        question: <FormattedMessage id="HairTransplantWomen.faqs.2.question" />,
        answer: <FormattedMessage id="HairTransplantWomen.faqs.2.answer" />
      },
      {
        question: <FormattedMessage id="HairTransplantWomen.faqs.3.question" />,
        answer: <FormattedMessage id="HairTransplantWomen.faqs.3.answer" />
      }
    ],
    beforeAfterContent: (
      <FormattedMessage id="HairTransplantWomen.beforeAfterContent" />
    ),

    backgroundImages: [
      "/images/hair/background3.jpg",
      "/images/hair/womenHairLoss.png",
      "/images/hair/hair-transplant-women-3.jpg"
    ],
    beforeAfterImages: [
      "/images/hair/WomenBeforeAfter2.jpeg",
      "/images/hair/WomenBeforeAfter.jpeg"
    ]
  },
  beard: {
    title: <FormattedMessage id="BeardTransplant.title" />,
    header: <FormattedMessage id="BeardTransplant.header" />,
    subheader: <FormattedMessage id="BeardTransplant.subheader" />,
    content: <FormattedMessage id="BeardTransplant.content" />,
    description: <FormattedMessage id="BeardTransplant.description" />,
    beforeAfterContent: (
      <FormattedMessage id="BeardTransplant.beforeAfterContent" />
    ),
    procedureSteps: [
      <FormattedMessage key="step1" id="BeardTransplant.procedureSteps.1" />,
      <FormattedMessage key="step2" id="BeardTransplant.procedureSteps.2" />,
      <FormattedMessage key="step3" id="BeardTransplant.procedureSteps.3" />,
      <FormattedMessage key="step4" id="BeardTransplant.procedureSteps.4" />,
      <FormattedMessage key="step5" id="BeardTransplant.procedureSteps.5" />,
      <FormattedMessage key="step6" id="BeardTransplant.procedureSteps.6" />,
      <FormattedMessage key="step7" id="BeardTransplant.procedureSteps.7" />
    ],
    faqs: [
      {
        question: <FormattedMessage id="BeardTransplant.faqs.1.question" />,
        answer: <FormattedMessage id="BeardTransplant.faqs.1.answer" />
      },
      {
        question: <FormattedMessage id="BeardTransplant.faqs.2.question" />,
        answer: <FormattedMessage id="BeardTransplant.faqs.2.answer" />
      },
      {
        question: <FormattedMessage id="BeardTransplant.faqs.3.question" />,
        answer: <FormattedMessage id="BeardTransplant.faqs.3.answer" />
      }
    ],
    backgroundImages: [
      "/images/hair/background3.jpg",
      "/images/hair/beardTransplant.png",
      "/images/hair/beard-transplant-3.jpg"
    ],
    beforeAfterImages: [
      "/images/hair/BeardBeforeAfter2.jpeg",
      "/images/hair/BeardBeforeAfter.jpeg"
    ]
  }
};

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;

  const [serviceContent, setServiceContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;

    if (service) {
      const serviceData = servicesData[service];

      if (serviceData) {
        setServiceContent(serviceData);
        setNotFound(false);
      } else {
        setNotFound(true);
      }
      setLoading(false);
    }
  }, [router.isReady, service]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (notFound) {
    return <Custom404 />;
  }

  return (
    <div className="min-h-screen pt-[3%] px-[3%]">
      <Head>
        <title>{serviceContent.title} | Your Brand</title>
        <meta name="description" content={serviceContent.subheader} />
      </Head>

      <HairHeader
        title={serviceContent?.title}
        backgroundImage={serviceContent.backgroundImages?.[0]}
      />

      <HairPlanting
        title={serviceContent?.header}
        description={serviceContent?.content}
        content={serviceContent?.description}
        image={serviceContent.backgroundImages?.[1]}
        benefits={[
          {
            title: <FormattedMessage id="HairTransplant.benefits.1.title" />,
            description: serviceContent.procedureSteps?.[0]
          },
          {
            title: <FormattedMessage id="HairTransplant.benefits.2.title" />,
            description: serviceContent.procedureSteps?.[1]
          },
          {
            title: <FormattedMessage id="HairTransplant.benefits.3.title" />,
            description: serviceContent.procedureSteps?.[2]
          }
        ]}
      />

      <ImageComp
        title={serviceContent.title}
        description={serviceContent?.beforeAfterContent}
        beforeImage={serviceContent?.beforeAfterImages?.[0]}
        afterImage={serviceContent?.beforeAfterImages?.[1]}
      />
    </div>
  );
};

export default ServicePage;
