import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaQuestion, FaCalendarAlt } from "react-icons/fa";

const servicesData = {
  "hair-transplant-for-men": {
    title: "Hair Transplant for Men",
    header: "Advanced Hair Transplant Solutions for Men",
    subheader: "Regain your confidence with our state-of-the-art hair restoration techniques",
    content: "Our hair transplant procedures for men use the latest technologies to provide natural-looking results. We specialize in FUE (Follicular Unit Extraction) and DHI (Direct Hair Implantation) techniques that ensure minimal scarring and faster recovery times.",
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
        answer: "The procedure typically takes between 6-8 hours, depending on the number of grafts required."
      },
      {
        question: "Is a hair transplant painful?",
        answer: "The procedure is performed under local anesthesia, so you shouldn't feel pain during the transplant. Some discomfort may be experienced during recovery."
      },
      {
        question: "When will I see results?",
        answer: "Initial results can be seen within 3-4 months, with full results visible after 12-18 months."
      }
    ],
    images: [
      "/images/hair-transplant-men-1.jpg",
      "/images/hair-transplant-men-2.jpg",
      "/images/hair-transplant-men-3.jpg"
    ]
  },
  "hair-transplant-for-women": {
    title: "Hair Transplant for Women",
    header: "Specialized Hair Restoration for Women",
    subheader: "Tailored solutions for female pattern hair loss and thinning",
    content: "Women experience hair loss differently than men, and our specialized approaches address the unique challenges of female hair restoration. Our techniques focus on increasing density in thinning areas while maintaining a natural hairline and appearance.",
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
        question: "Can women with long hair get a transplant without visible scarring?",
        answer: "Yes, our techniques minimize scarring and allow for donor areas to be covered by surrounding hair."
      },
      {
        question: "Will I need to cut my hair before the procedure?",
        answer: "Only the donor area might need trimming, and we ensure this can be easily concealed with your existing hair."
      },
      {
        question: "What causes female hair loss?",
        answer: "Female hair loss can be caused by genetics, hormonal changes, stress, nutritional deficiencies, or medical conditions."
      }
    ],
    images: [
      "/images/hair-transplant-women-1.jpg",
      "/images/hair-transplant-women-2.jpg",
      "/images/hair-transplant-women-3.jpg"
    ]
  },
  "beard": {
    title: "Beard Transplant",
    header: "Beard Restoration and Enhancement",
    subheader: "Achieve your desired facial hair with our specialized beard transplant techniques",
    content: "Our beard transplant procedures help men with patchy or sparse facial hair achieve fuller, more defined beards. Using the same proven techniques as scalp hair transplantation, we can create natural-looking results that match your desired beard style.",
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
        answer: "Yes, we work with you to design a beard that suits your facial structure and personal preferences."
      },
      {
        question: "How soon can I trim or shave after a beard transplant?",
        answer: "We recommend waiting at least 2 weeks before trimming and 4 weeks before shaving."
      },
      {
        question: "Will the transplanted beard hair look natural?",
        answer: "Yes, we ensure the direction, angle, and density match natural beard growth patterns."
      }
    ],
    images: [
      "/images/beard-transplant-1.jpg",
      "/images/beard-transplant-2.jpg",
      "/images/beard-transplant-3.jpg"
    ]
  }
};

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;

  const [serviceContent, setServiceContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (service) {
      const serviceData = servicesData[service];

      if (serviceData) {
        setServiceContent(serviceData);
      } else {
        setServiceContent({ title: "Service Not Found", content: "The requested service was not found." });
      }
      setLoading(false);
    }
  }, [service]);

  if (loading) {
    return (
      <div className="service-page-container flex justify-center items-center min-h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (!serviceContent) {
    return (
      <div className="service-page-container flex justify-center items-center min-h-screen">
        <p>Service not found</p>
      </div>
    );
  }

  return (
    <div className="service-page-container">
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1>{serviceContent.title}</h1>
        <h2>{serviceContent.header}</h2>
        <p>{serviceContent.subheader}</p>
      </motion.div>

      <div className="content-section">
        <motion.div 
          className="main-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-content">
            <p>{serviceContent.content}</p>
          </div>

          {serviceContent.images && (
            <div className="image-gallery">
              {serviceContent.images.map((img, index) => (
                <motion.div 
                  key={index} 
                  className="image-container"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <img src={img} alt={`${serviceContent.title} - Image ${index + 1}`} />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {serviceContent.procedureSteps && (
        <motion.div 
          className="procedures-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h3>Our Procedure Process</h3>
          <div className="procedure-steps">
            {serviceContent.procedureSteps.map((step, index) => (
              <motion.div 
                key={index} 
                className="step"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="step-number">{index + 1}</div>
                <div>{step}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {serviceContent.faqs && (
        <motion.div 
          className="faq-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <h3>Frequently Asked Questions</h3>
          {serviceContent.faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className="faq-item"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <h4><FaQuestion className="inline mr-2" /> {faq.question}</h4>
              <p>{faq.answer}</p>
            </motion.div>
          ))}
        </motion.div>
      )}

      <motion.div 
        className="cta-section"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.8 }}
      >
        <h3>Ready to Transform Your Appearance?</h3>
        <p>Schedule a consultation with our experts to discuss your personalized treatment plan.</p>
        <button className="cta-button">
          <FaCalendarAlt className="inline mr-2" /> Book a Consultation
        </button>
      </motion.div>
    </div>
  );
};

export default ServicePage;