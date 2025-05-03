import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import HairHeader from "../../components/Hair/HairHeader";
import HairPlanting from "../../components/Hair/HairPlanting";
import ImageComp from "../../components/Hair/ImageComp";
import Custom404 from "../../pages/404";

const servicesData = {
  "hair-transplant-for-men": {
    title: "Hair Transplant for Men",
    header: "Advanced Hair Transplant Solutions for Men",
    subheader:
      "Regain your confidence with our state-of-the-art hair restoration techniques",
    content:
      "Hair transplantation is a common procedure for men. The starting age for treatment and the number of grafts needed varies depending on the individual. The following document will help you better understand the stage of your baldness and choose an appropriate treatment plan.",
    description:
      "Classification of Baldness (Norwood Scale):Type 1: No need for a hair transplant. Anti-hair loss treatment and PRP mesotherapy are recommended.Type 2-3: Hair transplant can advance the hairline and fill in the areas around the temples and posterior region.Type 4-5: The first hair transplant will cover the front, with a second transplant after a year to cover the back.Type 6-7: Multiple transplants may be needed over the course of 2-3 years to achieve optimal results.",
    beforeAfterContent:
      "The operation uses the FUE technique with sapphire blades for canal openings and painless anesthesia. The recovery period is crucial, and social isolation is advised post-surgery.Pre-Procedure Preparation:Take Arnica 9ch granules three times a day starting 5 days before the procedure.Perform necessary medical tests (HIV, hepatitis, etc.).Follow pre-surgery instructions carefully for the best results.Procedure Details:The procedure is done under local anesthesia and typically lasts 8 hours.Post-operative care is provided, including a meal and comfort instructions. Please follow the doctor’s instructions and be on time for your appointment.",
    procedureSteps: [
      "Initial consultation and hair analysis",
      "Customized treatment planning",
      "Donor area preparation",
      "Graft extraction using advanced technology",
      "Creation of recipient sites",
      "Precise graft placement",
      "Post-operative care instructions"
    ],
    faqs: [
      {
        question: "How long does a hair transplant procedure take?",
        answer:
          "The procedure typically takes between 6-8 hours, depending on the number of grafts required."
      },
      {
        question: "Is a hair transplant painful?",
        answer:
          "The procedure is performed under local anesthesia, so you shouldn't feel pain during the transplant. Some discomfort may be experienced during recovery."
      },
      {
        question: "When will I see results?",
        answer:
          "Initial results can be seen within 3-4 months, with full results visible after 12-18 months."
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
    title: "Hair Transplant for Women",
    header: "Specialized Hair Restoration for Women",
    subheader: "Tailored solutions for female pattern hair loss and thinning",
    content:
      "Women experience hair loss differently than men, and our specialized approaches address the unique challenges of female hair restoration. Our techniques focus on increasing density in thinning areas while maintaining a natural hairline and appearance.",
    description:
      "Stages of Baldness (Ludwig Classification):Stage 0: No hair transplant needed. Anti-hair loss treatment and PRP mesotherapy are recommended.Stage 1: A hair transplant can be done to advance the hairline and fill in areas. One transplant is enough.Stage 2: The first transplant will cover the front, with a second transplant a year later for the back.Stage 3: The first transplant covers the front, with a second transplant a year later for the back, and a third transplant a year after that to refine the result.",
    procedureSteps: [
      "Comprehensive hair and scalp assessment",
      "Customized treatment plan creation",
      "Donor area preparation with minimal visibility",
      "Gentle extraction of follicular units",
      "Artful recipient site creation",
      "Strategic graft placement for natural density",
      "Detailed aftercare protocol"
    ],
    faqs: [
      {
        question:
          "Can women with long hair get a transplant without visible scarring?",
        answer:
          "Yes, our techniques minimize scarring and allow for donor areas to be covered by surrounding hair."
      },
      {
        question: "Will I need to cut my hair before the procedure?",
        answer:
          "Only the donor area might need trimming, and we ensure this can be easily concealed with your existing hair."
      },
      {
        question: "What causes female hair loss?",
        answer:
          "Female hair loss can be caused by genetics, hormonal changes, stress, nutritional deficiencies, or medical conditions."
      }
    ],
    beforeAfterContent:
      "The procedure uses the FUE technique with sapphire blades for channel openings and painless anesthesia.Pre-Surgery Preparation:Take Arnica 9ch granules three times a day for 10 days, starting 5 days before the procedure.Complete required medical tests (HIV, hepatitis, etc.).Follow the pre-surgery guidelines for the best results.Procedure Details:The procedure lasts about 6 hours under local anesthesia.Post-procedure care includes a meal provided at the clinic, and the team will guide you through the recovery process.",

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
    title: "Beard Transplant",
    header: "Beard Restoration and Enhancement",
    subheader:
      "Achieve your desired facial hair with our specialized beard transplant techniques",
    content:
      "Our beard transplant procedures help men with patchy or sparse facial hair achieve fuller, more defined beards. Using the same proven techniques as scalp hair transplantation, we can create natural-looking results that match your desired beard style.",
    description:
      "Pre-Procedure Preparation:Take Arnica 9ch granules (5 granules, three times per day) for 10 days before the procedure.Complete necessary medical tests (HIV, hepatitis, etc.).Follow additional health guidelines for heart-related conditions or if you're over 50 years old.Procedure Details:The procedure takes about 8 hours and involves shaving all the hair at the donor site. Local anesthesia ensures a pain-free experience. Grafts are carefully implanted one by one. Post-surgery care includes antibiotic, anti-inflammatory, and pain-relieving treatments.Post-Procedure Care:On the day of surgery (Day 0), avoid anything on the head and take prescribed medication.On Day 1, follow the care instructions and take medications as prescribed.",
    beforeAfterContent:
      "The operation uses the FUE technique with sapphire blades for canal openings and painless anesthesia. The recovery period is crucial, and social isolation is advised post-surgery.Pre-Procedure Preparation:Take Arnica 9ch granules three times a day starting 5 days before the procedure.Perform necessary medical tests (HIV, hepatitis, etc.).Follow pre-surgery instructions carefully for the best results.Procedure Details:The procedure is done under local anesthesia and typically lasts 8 hours.Post-operative care is provided, including a meal and comfort instructions. Please follow the doctor’s instructions and be on time for your appointment.",
    procedureSteps: [
      "Facial hair pattern analysis",
      "Design consultation for desired beard shape",
      "Donor hair extraction (typically from scalp)",
      "Creation of recipient sites following natural beard patterns",
      "Careful placement of grafts at correct angles",
      "Post-procedure care instructions",
      "Follow-up appointments for monitoring growth"
    ],
    faqs: [
      {
        question: "Can I choose the thickness and shape of my new beard?",
        answer:
          "Yes, we work with you to design a beard that suits your facial structure and personal preferences."
      },
      {
        question: "How soon can I trim or shave after a beard transplant?",
        answer:
          "We recommend waiting at least 2 weeks before trimming and 4 weeks before shaving."
      },
      {
        question: "Will the transplanted beard hair look natural?",
        answer:
          "Yes, we ensure the direction, angle, and density match natural beard growth patterns."
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
    <div className="min-h-screen pt-[1%] px-[3%]">
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
            title: "Natural Results",
            description: serviceContent.procedureSteps?.[0]
          },
          {
            title: "Minimal Recovery",
            description: serviceContent.procedureSteps?.[1]
          },
          {
            title: "Expert Care",
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
