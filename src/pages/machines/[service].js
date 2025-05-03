import { useRouter } from "next/router";
import { useEffect } from "react";
import AestheticHeader from "../../components/Aesthetic/AestheticHeader";
import AestheticEntry from "../../components/Aesthetic/AestheticEntry";
import OperationsImages from "../../components/Operations/OperationsImages";
import Head from "next/head";
import Image from "next/image";

const serviceData = {
  HYDRAFACIAL: {
    title: "HydraFacial",
    procedureSteps: [
      "Cleansing: Removes dirt and impurities.",
      "Exfoliation: Removes dead skin cells.",
      "Extraction: Extracts blackheads and impurities.",
      "Hydration: Infuses powerful serums for deep hydration.",
      "Protection: Locks in moisture and nutrients."
    ],
    entryImage: "/images/machines/hydro.png",
    description:
      "HydraFacial is a non-invasive facial treatment that cleanses, exfoliates, extracts, and hydrates your skin with the use of powerful serums. It rejuvenates your skin and delivers immediate results with no downtime, leaving you with glowing and hydrated skin.",
    beforeAfterImages: ["/images/hifu_before.jpg", "/images/hifu_after.jpg"]
  },
  "GOLDEN-NEEDLE": {
    title: "Golden Needle",
    entryImage: "/images/machines/goldenNeedle.png",

    procedureSteps: [
      "Cleansing: Skin is cleaned to remove impurities.",
      "Application of numbing cream to ensure comfort.",
      "Micro-Needling: Gold-plated needles are used to stimulate collagen.",
      "Post-Treatment Care: Hydrating serums are applied to promote healing."
    ],
    description:
      "Golden Needle is a high-performance micro-needling procedure using gold-plated needles that stimulate collagen production. This treatment targets fine lines, wrinkles, and scars, leading to firmer, smoother, and youthful-looking skin.",
    beforeAfterImages: [
      "/images/machines/hydro.png",
      "/images/goldenneedle_after.jpg"
    ]
  },
  "HIFU-(ULTHERA)": {
    title: "HIFU (Ulthera)",
    entryImage: "/images/machines/hifu.png",

    procedureSteps: [
      "Consultation: A customized treatment plan is created.",
      "Ultrasound Gel: Gel is applied to the skin for better conduction.",
      "HIFU Treatment: Ultrasound energy is delivered deep into the skin layers.",
      "Post-Treatment Care: Skin is cleaned and soothing gel is applied."
    ],
    description:
      "HIFU (High-Intensity Focused Ultrasound) is a non-invasive skin lifting treatment that uses ultrasound energy to lift and tighten the skin. It stimulates collagen production and is commonly used for facial tightening and body contouring.",
    beforeAfterImages: ["/images/hifu_before.jpg", "/images/hifu_after.jpg"]
  },
  ENDOLIFT: {
    title: "Endolift",
    entryImage: "/images/clinic/endolift.png",

    procedureSteps: [
      "Consultation: Assessment of skin and targeted areas.",
      "Laser Fiber Insertion: A small laser fiber is inserted under the skin.",
      "Laser Treatment: The laser stimulates collagen production and tightens the skin.",
      "Post-Treatment Care: Skin is treated with hydrating serums and cooling gels."
    ],
    description:
      "Endolift is a minimally invasive procedure that uses a laser fiber inserted under the skin to stimulate collagen production, tighten the skin, and reduce fat. It's commonly used for face and neck lifting and body contouring.",
    beforeAfterImages: [
      "/images/endolift_before.jpg",
      "/images/endolift_after.jpg"
    ]
  },
  OZON: {
    title: "Ozon Therapy",
    entryImage: "/images/machines/ozon.png",

    procedureSteps: [
      "Consultation: Evaluate overall health and treatment areas.",
      "Ozone Gas Application: Ozone gas is introduced to the skin or injected into tissues.",
      "Oxygenation: The ozone enhances oxygen delivery to the tissues.",
      "Post-Treatment Care: Relaxation and hydration to support healing."
    ],
    description:
      "Ozon Therapy is a cutting-edge treatment using ozone gas to stimulate healing and oxygenate tissues. It can be used for detoxification, boosting the immune system, and enhancing skin quality.",
    beforeAfterImages: ["/images/ozon_before.jpg", "/images/ozon_after.jpg"]
  },
  HYDRAPEN: {
    title: "Hydrapen",
    entryImage: "/images/machines/hydrapen.png",

    procedureSteps: [
      "Cleansing: The skin is thoroughly cleaned.",
      "Hydration Serum Application: Targeted hydrating serums are used.",
      "Micro-Needling: A pen device creates micro-channels in the skin.",
      "Aftercare: Post-treatment hydration and soothing serum are applied."
    ],
    description:
      "Hydrapen is a micro-needling treatment that uses a pen-shaped device to create micro-channels in the skin. This process helps deliver nourishing serums deep into the skin, improving skin texture and treating fine lines, acne scars, and pigmentation.",
    beforeAfterImages: [
      "/images/hydrapen_before.jpg",
      "/images/hydrapen_after.jpg"
    ]
  },
  DERMAPEN: {
    title: "Dermapen",
    entryImage: "/images/machines/dermapen.png",

    procedureSteps: [
      "Skin Cleansing: The skin is thoroughly cleaned.",
      "Numbing Cream: Applied for comfort during the procedure.",
      "Micro-Needling: The Dermapen creates tiny punctures to stimulate collagen.",
      "Hydration: Post-procedure hydrating serums are applied."
    ],
    description:
      "Dermapen is a state-of-the-art micro-needling device that stimulates collagen and elastin production in the skin. It's effective for treating scars, wrinkles, and overall skin texture improvement.",
    beforeAfterImages: [
      "/images/dermapen_before.jpg",
      "/images/dermapen_after.jpg"
    ]
  },
  "PLAZMAPEN-(PLEXER)": {
    title: "PlazmaPen (Plexer)",
    entryImage: "/images/machines/plexer.png",

    procedureSteps: [
      "Skin Cleansing: The skin is cleaned and prepared for treatment.",
      "Plasma Energy: Plasma energy is applied to targeted areas to stimulate skin tightening.",
      "Healing: Collagen production is stimulated for improved skin appearance.",
      "Aftercare: Moisturizing and soothing care is provided post-treatment."
    ],
    description:
      "PlazmaPen is a non-surgical treatment using plasma energy to treat fine lines, wrinkles, and sagging skin. The plasma energy stimulates collagen production, leading to smoother, tighter skin.",
    beforeAfterImages: [
      "/images/plazmapen_before.jpg",
      "/images/plazmapen_after.jpg"
    ]
  },
  G8: {
    title: "G8",
    entryImage: "/images/machines/g8.png",

    procedureSteps: [
      "Preparation: Skin is prepped and treated with a hydrating serum.",
      "G8 Treatment: Advanced technology is used to lift and tighten skin.",
      "Post-Treatment: Skin is nourished and hydrated post-procedure."
    ],
    description:
      "G8 is a powerful and efficient facial lifting treatment using advanced technology to tone, firm, and tighten the skin. It can also improve facial contours and reduce the appearance of fine lines.",
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
    <div className="min-h-screen">
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
