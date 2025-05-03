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

const servicesData = {
  "dermal-filler-injection": {
    title: "Dermal Filler Injection",
    header: "Restore Volume with Dermal Fillers",
    subheader: "Achieve a fuller and more youthful appearance",
    content:
      "Dermal fillers, or hyaluronic acid injections, are used to fill in hollows in the face and neck, restoring volume in areas such as under the eyes, nasolabial folds, lips, and temples. They provide deep hydration to the skin, improving the appearance of wrinkles within a month. Fillers can help reshape the face's oval, correct a crooked nose (non-surgical rhinoplasty), or enhance a recessed chin (profileplasty).",
    procedureSteps: [
      "Initial consultation to assess treatment areas",
      "Choosing the right filler for your needs",
      "Precise injection into target areas",
      "Post-treatment care and follow-up"
    ],
    tag: "NON-SURGICAL",
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
    title: "Botox Injection",
    header: "Facial Rejuvenation with Botox",
    subheader: "Smooth out wrinkles and fine lines with Botox treatments",
    content:
      "Botulinum toxin, commonly known as Botox, temporarily blocks certain facial muscles to reduce expression lines. It works by relaxing the muscles responsible for wrinkles, providing an indirect effect that lasts between 3 and 6 months.",
    procedureSteps: [
      "Consultation to assess the areas of concern",
      "Marking treatment zones",
      "Injection of Botox into target muscles",
      "Post-treatment care and follow-up"
    ],
    tag: "ANTI-AGING",
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
    title: "Thread Lift",
    header: "Non-Surgical Lifting with Threads",
    subheader: "Lift and tighten sagging skin without surgery",
    content:
      "Thread lifting uses threads to lift sagging areas of the face and body. It's particularly effective for treating sagging jowls or the tail of the eyebrow, providing a temporary lift. This non-surgical procedure takes about 15 minutes with a quick recovery time.",
    procedureSteps: [
      "Consultation and skin assessment",
      "Placement of threads under the skin",
      "Immediate lifting effect",
      "Post-treatment care and follow-up"
    ],
    tag: "NON-SURGICAL",
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
    title: "PRP Injection",
    header: "Platelet-Rich Plasma for Skin and Hair Regeneration",
    subheader: "Stimulate healing and rejuvenation with your own plasma",
    content:
      "PRP therapy uses the patient’s own blood to promote healing. By injecting concentrated platelets into targeted areas, this treatment helps rejuvenate the skin and stimulate hair growth, addressing fine lines and thinning hair.",
    procedureSteps: [
      "Blood is drawn and processed in a centrifuge",
      "Platelets are injected into the treatment area",
      "Post-treatment care and follow-up"
    ],
    tag: "REGENERATIVE",
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
    title: "Mesotherapy",
    header: "Non-Surgical Skin Rejuvenation",
    subheader: "Revitalize your skin with targeted injections",
    content:
      "Mesotherapy uses microinjections of vitamins, amino acids, and antioxidants to rejuvenate the skin, improving its elasticity and reducing wrinkles. It's ideal for addressing early signs of aging.",
    procedureSteps: [
      "Consultation to assess skin concerns",
      "Injection of rejuvenating mixture",
      "Post-treatment care and follow-up"
    ],
    tag: "ANTI-AGING",
    mainImage: "/images/images/meso.png",
    beforeAfterImages: [
      "/images/operations/meso1.JPG",
      "/images/operations/meso2.JPG",
      "/images/operations/meso3.JPG",
      "/images/operations/meso4.JPG"
    ]
  },
  "Stem-Cell-Therapy": {
    title: "Stem Cell Therapy",
    header: "Non-Surgical Skin Rejuvenation",
    subheader: "Revitalize your skin with targeted injections",
    content:
      "Stem Cell Therapy is an innovative, cutting-edge treatment that harnesses the body's own regenerative power to repair and rejuvenate tissues. By using stem cells, which are unique cells with the ability to transform into various types of cells in the body, this treatment helps regenerate damaged tissues and promote healing in areas suffering from age-related degeneration, injuries, or chronic conditions.How It Works: Stem cells are harvested from the patient’s own body (commonly from bone marrow or adipose tissue), and then reintroduced into the treatment area. The stem cells stimulate the body’s natural repair processes by differentiating into the necessary cell types, thereby accelerating tissue healing, improving cellular function, and reducing inflammation.",
    procedureSteps: [
      "Consultation to assess skin concerns",
      "Injection of rejuvenating mixture",
      "Post-treatment care and follow-up"
    ],
    tag: "REGENERATIVE",
    mainImage: "/images/images/thread2.png",
    beforeAfterImages: [
      "/images/operations/meso1.JPG",
      "/images/operations/meso2.JPG",
      "/images/operations/meso3.JPG",
      "/images/operations/meso4.JPG"
    ]
  },
  "Immune-System-Booster-Treatment": {
    title: "Immune System Booster Treatment",
    header: "Non-Surgical Skin Rejuvenation",
    subheader: "Revitalize your skin with targeted injections",
    content:
      "The Immune System Booster Treatment is designed to help strengthen and optimize the body's natural defense mechanisms. By using a combination of vitamins, minerals, antioxidants, and other essential nutrients, this treatment helps improve immune system function, promoting overall health and wellbeing. It is especially beneficial during cold and flu season or for individuals looking to prevent illness and boost their body’s natural defenses.How It Works: The treatment is a blend of intravenous (IV) therapy or targeted injections that deliver essential nutrients directly into the bloodstream for immediate absorption. These nutrients include vitamin C, zinc, selenium, glutathione, and other immune-boosting agents that help improve the body’s ability to fight infections, reduce inflammation, and combat oxidative stress.",
    procedureSteps: [
      "Consultation to assess skin concerns",
      "Injection of rejuvenating mixture",
      "Post-treatment care and follow-up"
    ],
    tag: "SUPPORT",
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
    <div className="min-h-screen pt-[1%] px-[3%]">
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
