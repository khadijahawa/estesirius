import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import HairHeader from "../../components/Hair/HairHeader";
import HairPlanting from "../../components/Hair/HairPlanting";
import ImageComp from "../../components/Hair/ImageComp";
import Custom404 from "../../pages/404";
import OperationsHeader from "@/components/Operations/OperationsHeader";
import OperationsDescription from "@/components/Operations/OperationsDescription";
import OperationsImages from "@/components/Operations/OperationsImages";
import { FormattedMessage } from "react-intl";

const servicesData = {
  "dermal-filler-injection": {
    title: <FormattedMessage id="DermalFillerInjection.title" />,
    header: <FormattedMessage id="DermalFillerInjection.header" />,
    subheader: <FormattedMessage id="DermalFillerInjection.subheader" />,
    content: <FormattedMessage id="DermalFillerInjection.description" />,
    procedureSteps: [
      <FormattedMessage
        key="step1"
        id="DermalFillerInjection.procedureSteps.1"
      />,
      <FormattedMessage
        key="step2"
        id="DermalFillerInjection.procedureSteps.2"
      />,
      <FormattedMessage
        key="step3"
        id="DermalFillerInjection.procedureSteps.3"
      />,
      <FormattedMessage
        key="step4"
        id="DermalFillerInjection.procedureSteps.4"
      />
    ],
    tag: <FormattedMessage id="DermalFillerInjection.tag" />,
    mainImage: "/images/images/oper-01.jpg",
    beforeAfterImages: [
      "/images/operations/filler5.JPG",
      "/images/operations/filler6.JPG",
      "/images/operations/filler10.JPG",
      "/images/operations/filler9.JPG",
      "/images/operations/nose-before2.JPG",
      "/images/operations/nose-after2.JPG"
    ]
  },
  "botox-injection": {
    title: <FormattedMessage id="BotoxInjection.title" />,
    header: <FormattedMessage id="BotoxInjection.header" />,
    subheader: <FormattedMessage id="BotoxInjection.subheader" />,
    content: <FormattedMessage id="BotoxInjection.description" />,
    procedureSteps: [
      <FormattedMessage key="step1" id="BotoxInjection.procedureSteps.1" />,
      <FormattedMessage key="step2" id="BotoxInjection.procedureSteps.2" />,
      <FormattedMessage key="step3" id="BotoxInjection.procedureSteps.3" />,
      <FormattedMessage key="step4" id="BotoxInjection.procedureSteps.4" />
    ],
    tag: <FormattedMessage id="BotoxInjection.tag" />,
    mainImage: "/images/images/botox.jpg",
    beforeAfterImages: [
      "/images/operations/botox-before1.JPG",
      "/images/operations/botox-after1.JPG",
      "/images/operations/botox-before2.JPG",
      "/images/operations/botox-after2.JPG",
      "/images/operations/botox-before3.JPG",
      "/images/operations/botox-after3.JPG"
    ]
  },
  "thread-lift": {
    title: <FormattedMessage id="ThreadLift.title" />,
    header: <FormattedMessage id="ThreadLift.header" />,
    subheader: <FormattedMessage id="ThreadLift.subheader" />,
    content: <FormattedMessage id="ThreadLift.description" />,
    procedureSteps: [
      <FormattedMessage key="step1" id="ThreadLift.procedureSteps.1" />,
      <FormattedMessage key="step2" id="ThreadLift.procedureSteps.2" />,
      <FormattedMessage key="step3" id="ThreadLift.procedureSteps.3" />,
      <FormattedMessage key="step4" id="ThreadLift.procedureSteps.4" />
    ],
    tag: <FormattedMessage id="ThreadLift.tag" />,
    mainImage: "/images/images/pls-30.jpg",

    beforeAfterImages: [
      "/images/operations/thread-before1.JPG",
      "/images/operations/thread-after4.JPG",
      "/images/operations/thread-before3.JPG",
      "/images/operations/thread-after3.JPG",
      "/images/operations/thread-before5.JPG",
      "/images/operations/thread-after5.JPG"
    ]
  },
  "prp-injection": {
    title: <FormattedMessage id="PRPInjection.title" />,
    header: <FormattedMessage id="PRPInjection.header" />,
    subheader: <FormattedMessage id="PRPInjection.subheader" />,
    content: <FormattedMessage id="PRPInjection.description" />,
    procedureSteps: [
      <FormattedMessage key="step1" id="PRPInjection.procedureSteps.1" />,
      <FormattedMessage key="step2" id="PRPInjection.procedureSteps.2" />,
      <FormattedMessage key="step3" id="PRPInjection.procedureSteps.3" />
    ],
    tag: <FormattedMessage id="PRPInjection.tag" />,
    mainImage: "/images/images/pr-025.jpg",
    beforeAfterImages: [
      "/images/operations/prp-before1.JPG",
      "/images/operations/prp-after1.JPG",
      "/images/operations/prp-before2.JPG",
      "/images/operations/prp-after2.JPG",
      "/images/operations/prp-before2.JPG",
      "/images/operations/prp-after2.JPG"
    ]
  },
  mesotherapy: {
    title: <FormattedMessage id="Mesotherapy.title" />,
    header: <FormattedMessage id="Mesotherapy.header" />,
    subheader: <FormattedMessage id="Mesotherapy.subheader" />,
    content: <FormattedMessage id="Mesotherapy.description" />,
    procedureSteps: [
      <FormattedMessage key="step1" id="Mesotherapy.procedureSteps.1" />,
      <FormattedMessage key="step2" id="Mesotherapy.procedureSteps.2" />,
      <FormattedMessage key="step3" id="Mesotherapy.procedureSteps.3" />
    ],
    tag: <FormattedMessage id="Mesotherapy.tag" />,
    mainImage: "/images/images/meso.png",
    beforeAfterImages: [
      "/images/operations/meso1.JPG",
      "/images/operations/meso2.JPG",
      "/images/operations/meso3.JPG",
      "/images/operations/meso4.JPG"
    ]
  },
  "Stem-Cell-Therapy": {
    title: <FormattedMessage id="StemCellTherapy.title" />,
    header: <FormattedMessage id="StemCellTherapy.header" />,
    subheader: <FormattedMessage id="StemCellTherapy.subheader" />,
    content: <FormattedMessage id="StemCellTherapy.description" />,
    procedureSteps: [
      <FormattedMessage key="step1" id="StemCellTherapy.procedureSteps.1" />,
      <FormattedMessage key="step2" id="StemCellTherapy.procedureSteps.2" />,
      <FormattedMessage key="step3" id="StemCellTherapy.procedureSteps.3" />
    ],
    tag: <FormattedMessage id="StemCellTherapy.tag" />,
    mainImage: "/images/images/thread2.png",
    beforeAfterImages: [
      "/images/operations/meso1.JPG",
      "/images/operations/meso2.JPG",
      "/images/operations/meso3.JPG",
      "/images/operations/meso4.JPG"
    ]
  },
  "Immune-System-Booster-Treatment": {
    title: <FormattedMessage id="ImmuneSystemBoosterTreatment.title" />,
    header: <FormattedMessage id="ImmuneSystemBoosterTreatment.header" />,
    subheader: <FormattedMessage id="ImmuneSystemBoosterTreatment.subheader" />,
    content: <FormattedMessage id="ImmuneSystemBoosterTreatment.description" />,
    procedureSteps: [
      <FormattedMessage
        key="step1"
        id="ImmuneSystemBoosterTreatment.procedureSteps.1"
      />,
      <FormattedMessage
        key="step2"
        id="ImmuneSystemBoosterTreatment.procedureSteps.2"
      />,
      <FormattedMessage
        key="step3"
        id="ImmuneSystemBoosterTreatment.procedureSteps.3"
      />
    ],
    tag: <FormattedMessage id="ImmuneSystemBoosterTreatment.tag" />,
    mainImage: "/images/images/immune.jpeg",
    beforeAfterImages: [
      "/images/operations/meso1.JPG",
      "/images/operations/meso2.JPG",
      "/images/operations/meso3.JPG",
      "/images/operations/meso4.JPG"
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
        <title>{serviceContent?.title} </title>
        <meta name="description" content={serviceContent?.subheader} />
      </Head>

      <OperationsHeader
        title={serviceContent?.title}
        backgroundImage={serviceContent?.images?.[0]}
      />
      <OperationsDescription
        title={serviceContent?.title}
        image={serviceContent?.mainImage}
        tag={serviceContent?.tag}
        description={serviceContent?.content}
      />

      <OperationsImages
        cases={[
          {
            before: serviceContent?.beforeAfterImages?.[0],
            after: serviceContent?.beforeAfterImages?.[1]
          },
          {
            before: serviceContent?.beforeAfterImages?.[2],
            after: serviceContent?.beforeAfterImages?.[3]
          },
          {
            before: serviceContent?.beforeAfterImages?.[4],
            after: serviceContent?.beforeAfterImages?.[5]
          }
        ]}
        procedureSteps={serviceContent?.procedureSteps}
      />
    </div>
  );
};

export default ServicePage;
