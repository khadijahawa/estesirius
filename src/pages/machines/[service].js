import { useRouter } from "next/router";
import { useEffect } from "react";
import AestheticHeader from "../../components/Aesthetic/AestheticHeader";
import AestheticEntry from "../../components/Aesthetic/AestheticEntry";
import OperationsImages from "../../components/Operations/OperationsImages";
import Head from "next/head";
import Image from "next/image";
import { FormattedMessage } from "react-intl";

const serviceData = {
  HYDRAFACIAL: {
    title: <FormattedMessage id="HydraFacial.title" />,
    procedureSteps: [
      <FormattedMessage id="HydraFacial.procedureSteps.1" key="step1" />,
      <FormattedMessage id="HydraFacial.procedureSteps.2" key="step2" />,
      <FormattedMessage id="HydraFacial.procedureSteps.3" key="step3" />,
      <FormattedMessage id="HydraFacial.procedureSteps.4" key="step4" />,
      <FormattedMessage id="HydraFacial.procedureSteps.5" key="step5" />
    ],
    entryImage: "/images/machines/hydro.png",
    description: <FormattedMessage id="HydraFacial.description" />,
    beforeAfterImages: ["/images/hifu_before.jpg", "/images/hifu_after.jpg"]
  },
  "GOLDEN-NEEDLE": {
    title: <FormattedMessage id="GoldenNeedle.title" />,
    entryImage: "/images/machines/goldenNeedle.png",

    procedureSteps: [
      <FormattedMessage id="GoldenNeedle.procedureSteps.1" key="step1" />,
      <FormattedMessage id="GoldenNeedle.procedureSteps.2" key="step2" />,
      <FormattedMessage id="GoldenNeedle.procedureSteps.3" key="step3" />,
      <FormattedMessage id="GoldenNeedle.procedureSteps.4" key="step4" />
    ],
    description: <FormattedMessage id="GoldenNeedle.description" />,
    beforeAfterImages: [
      "/images/machines/hydro.png",
      "/images/goldenneedle_after.jpg"
    ]
  },
  "HIFU-(ULTHERA)": {
    title: <FormattedMessage id="HIFU.title" />,
    entryImage: "/images/machines/hifu.png",

    procedureSteps: [
      <FormattedMessage id="HIFU.procedureSteps.1" key="step1" />,
      <FormattedMessage id="HIFU.procedureSteps.2" key="step2" />,
      <FormattedMessage id="HIFU.procedureSteps.3" key="step3" />,
      <FormattedMessage id="HIFU.procedureSteps.4" key="step4" />
    ],
    description: <FormattedMessage id="HIFU.description" />,
    beforeAfterImages: ["/images/hifu_before.jpg", "/images/hifu_after.jpg"]
  },
  ENDOLIFT: {
    title: <FormattedMessage id="Endolift.title" />,
    entryImage: "/images/clinic/endolift.png",

    procedureSteps: [
      <FormattedMessage id="Endolift.procedureSteps.1" key="step1" />,
      <FormattedMessage id="Endolift.procedureSteps.2" key="step2" />,
      <FormattedMessage id="Endolift.procedureSteps.3" key="step3" />,
      <FormattedMessage id="Endolift.procedureSteps.4" key="step4" />
    ],
    description: <FormattedMessage id="Endolift.description" />,
    beforeAfterImages: [
      "/images/endolift_before.jpg",
      "/images/endolift_after.jpg"
    ]
  },
  OZON: {
    title: <FormattedMessage id="Ozon.title" />,
    entryImage: "/images/machines/ozon.png",

    procedureSteps: [
      <FormattedMessage id="Ozon.procedureSteps.1" key="step1" />,
      <FormattedMessage id="Ozon.procedureSteps.2" key="step2" />,
      <FormattedMessage id="Ozon.procedureSteps.3" key="step3" />,
      <FormattedMessage id="Ozon.procedureSteps.4" key="step4" />
    ],
    description: <FormattedMessage id="Ozon.description" />,
    beforeAfterImages: ["/images/ozon_before.jpg", "/images/ozon_after.jpg"]
  },
  HYDRAPEN: {
    title: <FormattedMessage id="Hydrapen.title" />,
    entryImage: "/images/machines/hydrapen.png",

    procedureSteps: [
      <FormattedMessage id="Hydrapen.procedureSteps.1" key="step1" />,
      <FormattedMessage id="Hydrapen.procedureSteps.2" key="step2" />,
      <FormattedMessage id="Hydrapen.procedureSteps.3" key="step3" />,
      <FormattedMessage id="Hydrapen.procedureSteps.4" key="step4" />
    ],
    description: <FormattedMessage id="Hydrapen.description" />,
    beforeAfterImages: [
      "/images/hydrapen_before.jpg",
      "/images/hydrapen_after.jpg"
    ]
  },
  DERMAPEN: {
    title: <FormattedMessage id="Dermapen.title" />,
    entryImage: "/images/machines/dermapen.png",

    procedureSteps: [
      <FormattedMessage id="Dermapen.procedureSteps.1" key="step1" />,
      <FormattedMessage id="Dermapen.procedureSteps.2" key="step2" />,
      <FormattedMessage id="Dermapen.procedureSteps.3" key="step3" />,
      <FormattedMessage id="Dermapen.procedureSteps.4" key="step4" />
    ],
    description: <FormattedMessage id="Dermapen.description" />,
    beforeAfterImages: [
      "/images/dermapen_before.jpg",
      "/images/dermapen_after.jpg"
    ]
  },
  "PLAZMAPEN-(PLEXER)": {
    title: <FormattedMessage id="Plazmapen.title" />,
    entryImage: "/images/machines/plexer.png",

    procedureSteps: [
      <FormattedMessage id="Plazmapen.procedureSteps.1" key="step1" />,
      <FormattedMessage id="Plazmapen.procedureSteps.2" key="step2" />,
      <FormattedMessage id="Plazmapen.procedureSteps.3" key="step3" />,
      <FormattedMessage id="Plazmapen.procedureSteps.4" key="step4" />
    ],
    description: <FormattedMessage id="Plazmapen.description" />,
    beforeAfterImages: [
      "/images/plazmapen_before.jpg",
      "/images/plazmapen_after.jpg"
    ]
  },
  G8: {
    title: <FormattedMessage id="G8.title" />,
    entryImage: "/images/machines/g8.png",

    procedureSteps: [
      <FormattedMessage id="G8.procedureSteps.1" key="step1" />,
      <FormattedMessage id="G8.procedureSteps.2" key="step2" />,
      <FormattedMessage id="G8.procedureSteps.3" key="step3" />
    ],
    description: <FormattedMessage id="G8.description" />,
    beforeAfterImages: ["/images/g8_before.jpg", "/images/g8_after.jpg"],
    link: "/FacialPage"
  }
};

export default function ServicePage() {
  const router = useRouter();
  const { service } = router.query;

  // Redirect to 404 if service doesn't exist
  useEffect(() => {
    if (router.isReady && service && !serviceData[service]) {
      router.push("/404");
    }
  }, [router, service]);

  if (!router.isReady || !service) {
    return <div>Loading...</div>;
  }

  if (!serviceData[service]) {
    return null;
  }

  const serviceContent = serviceData[service];

  return (
    <div className="min-h-screen pt-15">
      <Head>
        <title>{serviceContent?.title} </title>
        <meta
          name="description"
          content="Learn about our esthetic procedures and plastic surgery options"
        />
      </Head>
      <AestheticHeader />

      <AestheticEntry
        title={serviceContent.title}
        image={serviceContent.entryImage}
        description={serviceContent.description}
      />
      {/* <OperationsImages
        cases={[
          {
            before: serviceContent?.beforeAfterImages?.[0],
            after: serviceContent?.beforeAfterImages?.[1]
          },
          {
            before: serviceContent?.beforeAfterImages?.[2],
            after: serviceContent?.beforeAfterImages?.[3]
          }
          // {
          //   before: serviceContent?.beforeAfterImages?.[0],
          //   after: serviceContent?.beforeAfterImages?.[1]
          // }
        ]}
        procedureSteps={serviceContent?.procedureSteps}
      /> */}
    </div>
  );
}
