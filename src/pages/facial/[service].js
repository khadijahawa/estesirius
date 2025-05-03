import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Modal from "../../components/Modal";

const serviceData = {
  "facial-surgery": {
    title: "Facial Surgery",

    description:
      "Facial surgery involves various procedures that focus on enhancing or rejuvenating facial features. These procedures help improve appearance and balance, targeting areas such as the eyes, nose, ears, chin, and overall facial skin.",
    subcategories: {
      Facelift: {
        title: "Facelift",
        tag: "TRANSFORMATIVE",
        subImage: "/images/face/facelift2.jpg",
        beforeAfterImages: [
          "/images/operations/meso1.JPG",
          "/images/operations/meso2.JPG",
          "/images/operations/thread1-2.JPG",
          "/images/operations/thread2-2.JPG"
        ],
        description:
          "A facelift is a surgical procedure aimed at reducing visible signs of aging in the face and neck. It tightens loose skin, removes excess fat, and smooths wrinkles for a youthful, refreshed appearance."
      },
      "Temporal-Lifting": {
        title: "Temporal Lifting",
        tag: "YOUTHFUL",
        subImage: "/images/face/temporal1.jpg",
        beforeAfterImages: [
          "/images/clinic/temporal-before1.jpeg",
          "/images/clinic/temporal-after1.jpeg",
          "/images/clinic/temporal-before4.jpeg",
          "/images/clinic/temporal-after4.jpeg"
        ],
        description:
          "Temporal lifting focuses on lifting the outer part of the eyebrows and the upper face. It rejuvenates the eye area by creating a more lifted and refreshed look, often used to combat drooping eyelids and sagging eyebrows."
      },
      Rhinoplasty: {
        title: "Rhinoplasty",
        tag: "REGENERATIVE",
        subImage: "/images/face/righn2.jpg",
        beforeAfterImages: [
          "/images/clinic/nose-before1.png",
          "/images/clinic/nose-after1.png",
          "/images/clinic/nose-before2.png",
          "/images/clinic/nose-after2.png"
        ],
        description:
          "Rhinoplasty is a surgical procedure to reshape the nose, improving both aesthetic appearance and functionality. It can alter the size, shape, and structure of the nose, creating better facial harmony."
      },
      Blepharoplasty: {
        title: "Blepharoplasty",
        tag: "BALANCING",
        subImage: "/images/face/Blepharoplasty1.jpg",
        beforeAfterImages: [
          "/images/clinic/oto-before1.JPG",
          "/images/clinic/oto-after1.JPG",
          "/images/clinic/oto-before2.JPG",
          "/images/clinic/oto-after2.JPG"
        ],
        description:
          "Blepharoplasty, or eyelid surgery, removes excess skin and fat from the eyelids to treat drooping eyelids and under-eye bags. This procedure can help create a more youthful and alert look."
      },
      Otoplasty: {
        title: "Otoplasty",
        tag: "SCULPTING",
        subImage: "/images/face/Otoplasty1.jpg",
        beforeAfterImages: [
          "/images/clinic/ear-after1.JPG",
          "/images/clinic/ear-before1.JPG",
          "/images/clinic/ear-before2.JPG",
          "/images/clinic/ear-after2.JPG"
        ],
        description:
          "Otoplasty is a surgery to correct protruding or malformed ears. The procedure reshapes and repositions the ears, making them more symmetrical and closer to the head for a more balanced appearance."
      },
      "Chin-Surgery-or-Genioplasty": {
        title: "Chin Surgery or Genioplasty",
        tag: "HARMONIZING",
        subImage: "/images/face/chin1.jpg",
        beforeAfterImages: [
          "/images/clinic/chin-before1.jpeg",
          "/images/clinic/chin-after1.jpeg",
          "/images/clinic/chin-before2.jpeg",
          "/images/clinic/chin-after2.jpeg"
        ],
        description:
          "Chin surgery, also known as genioplasty, involves reshaping the chin to improve facial balance. This surgery can address a weak chin or overly prominent chin, contributing to a more harmonious facial profile."
      },
      Teeth: {
        title: "Teeth Restoration",
        tag: "AESTHETIC",
        subImage: "/images/face/teeth.jpg",
        beforeAfterImages: [
          "/images/clinic/teeth-before1.jpeg",
          "/images/clinic/teeth-after1.jpeg",
          "/images/clinic/teeth-before2-2.jpeg",
          "/images/clinic/teeth-after2-2.jpeg"
        ],
        description:
          "Teeth restoration procedures, including dental implants, veneers, and whitening, aim to improve the appearance of your smile. These procedures are tailored to address various dental concerns, including gaps, discoloration, and misalignment."
      }
    }
  },
  "Body-Contouring": {
    title: "Body Contouring",
    description:
      "Body contouring is a collection of cosmetic procedures that reshape and enhance the body by removing excess fat, tightening skin, and sculpting specific areas to improve overall body proportions.",
    subcategories: {
      Abdominoplasty: {
        title: "Abdominoplasty",
        tag: "TRANSFORMATIVE",
        subImage: "/images/body/tummy1.jpg",
        beforeAfterImages: [
          "/images/clinic/tummytuck-before1.JPG",
          "/images/clinic/tummytuck-after1.JPG",
          "/images/clinic/tummytuck-before2.JPG",
          "/images/clinic/tummytuck-after2.JPG"
        ],
        description:
          "Abdominoplasty, or a tummy tuck, is a surgical procedure that removes excess skin and fat from the abdomen. It tightens the abdominal muscles to create a flatter, firmer, and more toned abdominal appearance."
      },
      Liposuction: {
        title: "Liposuction",
        tag: "CONTOURING",
        subImage: "/images/body/lipo2.jpg",
        beforeAfterImages: [
          "/images/clinic/lipo-before1.jpeg",
          "/images/clinic/lipo-after1.jpeg",
          "/images/clinic/lipo-before3.jpeg",
          "/images/clinic/lipo-after3.jpeg"
        ],
        description:
          "Liposuction is a procedure that removes excess fat from various areas of the body, such as the abdomen, thighs, and arms. It contours the body to enhance its natural shape and proportions."
      },
      "Thigh-Lift": {
        title: "Thigh Lift",
        tag: "TONING",
        subImage: "/images/body/thighLift3.jpg",
        beforeAfterImages: [
          "/images/clinic/thighlift-after1.JPG",
          "/images/clinic/thighlift-before1.JPG",
          "/images/clinic/thigh.jpeg",
          "/images/clinic/thigh2.jpeg"
        ],
        description:
          "A thigh lift removes excess skin and fat from the upper thighs, improving the contour and tone of the legs. This procedure is particularly effective for those who have lost a significant amount of weight."
      },
      "Arm-Lift": {
        title: "Arm Lift",
        tag: "TONING",
        subImage: "/images/body/armLift1.jpg",
        beforeAfterImages: [
          "/images/clinic/armlift-before1.JPG",
          "/images/clinic/armlift-after1.JPG",
          "/images/clinic/armlift-before2.jpeg",
          "/images/clinic/armlift-after2.jpeg"
        ],
        description:
          "An arm lift, or brachioplasty, removes excess skin and fat from the upper arms. It helps tone the arms and eliminate the appearance of 'bat wings' for a more defined and youthful look."
      },
      "Buttock-Lipofilling-or-BBL": {
        title: "Buttock Lipofilling or BBL",
        tag: "SCULPTING",
        subImage: "/images/body/bbl1.jpg",
        beforeAfterImages: [
          "/images/clinic/bbl-before1.JPG",
          "/images/clinic/bbl-after1.JPG",
          "/images/clinic/bbl-before2.JPG",
          "/images/clinic/bbl-after2.JPG"
        ],
        description:
          "Buttock lipofilling, also known as the Brazilian Butt Lift (BBL), involves liposuction to remove fat from other areas of the body, which is then purified and injected into the buttocks to enhance their shape and volume."
      }
    }
  },
  "Breast-Surgery": {
    title: "Breast Surgery",

    description:
      "Breast surgery includes various procedures designed to enhance or modify the size, shape, and appearance of the breasts. It includes both aesthetic and reconstructive procedures.",
    subcategories: {
      "Breast-Augmentation": {
        title: "Breast Augmentation",
        tag: "ENHANCING",
        subImage: "/images/breast/breast1.jpg",
        beforeAfterImages: [
          "/images/clinic/breast-before1.jpeg",
          "/images/clinic/breast-after1.jpeg",
          "/images/clinic/breast-before2.jpeg",
          "/images/clinic/breast-after2.jpeg"
        ],
        description:
          "Breast augmentation uses implants or fat transfer to increase the size and volume of the breasts, enhancing body proportions and creating a fuller, more youthful appearance."
      },
      "Breast-Lipofilling": {
        title: "Breast Lipofilling",
        tag: "UPLIFTING",
        subImage: "/images/breast/lipofilling.jpg",
        beforeAfterImages: [
          "/images/clinic/lipo-breast-before1.JPG",
          "/images/clinic/lipo-breast-after1.JPG",
          "/images/clinic/lipo-breast-before2.JPG",
          "/images/clinic/lipo-breast-after2.JPG"
        ],
        description:
          "Breast lipofilling involves using fat harvested from other areas of the body and reintroducing it into the breasts to increase volume and improve shape. It offers a natural alternative to implants."
      },
      "Breast-Lift": {
        title: "Breast Lift",
        tag: "NATURAL",
        subImage: "/images/breast/filling.jpg",
        beforeAfterImages: [
          "/images/clinic/lipo-breast-before1.JPG",
          "/images/clinic/lipo-breast-after1.JPG",
          "/images/clinic/lipo-breast-before2.JPG",
          "/images/clinic/lipo-breast-after2.JPG"
        ],
        description:
          "A breast lift (mastopexy) lifts and reshapes sagging breasts. It removes excess skin and tightens tissue, restoring a more youthful contour to the breasts."
      },
      Gynecomastia: {
        title: "Gynecomastia",
        tag: "MASCULINE",
        subImage: "/images/breast/Gynecomastia1.jpg",
        beforeAfterImages: [
          "/images/clinic/geo-breast-after1.JPG",
          "/images/clinic/geo-breast-before1.JPG",
          "/images/clinic/geo-breast-after2.JPG",
          "/images/clinic/geo-breast-before2.JPG"
        ],
        description:
          "Gynecomastia surgery is a procedure to reduce enlarged male breasts, restoring a more masculine chest contour. The surgery can involve liposuction and the removal of excess glandular tissue."
      }
    }
  }
};

const truncateText = (text, maxLength = 200) => {
  if (text?.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

const ServicePage = () => {
  const router = useRouter();
  const { service } = router.query;
  const [expanded, setExpanded] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [currentSubcategory, setCurrentSubcategory] = useState(null);

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

  const categoryData = serviceData[service];

  const handleReadMore = (key) => {
    setExpanded((prevState) => ({
      ...prevState,
      [key]: !prevState[key]
    }));
  };

  const handleOpenModal = (subcategory) => {
    setCurrentSubcategory(subcategory);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setCurrentSubcategory(null);
  };

  const subcategoriesArray = Object.keys(categoryData.subcategories);
  const leftSubcategories = subcategoriesArray.slice(
    0,
    Math.ceil(subcategoriesArray.length / 2)
  );
  const rightSubcategories = subcategoriesArray.slice(
    Math.ceil(subcategoriesArray.length / 2)
  );

  const getTagClass = (tag) => {
    switch (tag) {
      case "TRANSFORMATIVE":
        return "bg-red-500 text-white";
      case "CONTOURING":
        return "bg-orange-500 text-white";
      case "SCULPTING":
        return "bg-teal-400 text-white";
      case "TONING":
        return "bg-blue-600 text-white";
      case "REJUVENATING":
        return "bg-gray-300 text-gray-800";
      case "YOUTHFUL":
        return "bg-blue-800 text-white";
      case "HARMONIZING":
        return "bg-blue-200 text-bg-blue-800";
      case "BALANCING":
        return "bg-red-800 text-white";
      case "ENHANCING":
        return "bg-green-500 text-white";
      case "NATURAL":
        return "bg-pink-800 text-white";
      case "UPLIFTING":
        return "bg-yellow-600 text-white";
      case "MASCULINE":
        return "bg-yellow-500 text-white";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="container mx-auto px-2 my-16 pt-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center my-12">
          {categoryData.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-18">
          {/* Left Column */}
          <div>
            {leftSubcategories.map((key) => {
              const subcategory = categoryData.subcategories[key];
              return (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row items-start gap-4 mb-8"
                  onClick={() => handleOpenModal(subcategory)}
                >
                  <div className="relative w-[100%] h-64 md:w-64 md:h-64 flex-shrink-0">
                    <Image
                      src={subcategory.subImage}
                      alt={subcategory.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{subcategory.title}</h3>
                      <div className="flex flex-col items-end">
                        <span
                          className={`text-xs px-1 py-1 ${getTagClass(
                            subcategory.tag
                          )}`}
                        >
                          {subcategory.tag}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      {expanded[key]
                        ? subcategory.description
                        : subcategory.description.slice(0, 150) + "..."}
                      {subcategory.description?.length > 150 &&
                        !expanded[key] && (
                          <span
                            className="text-teal-400 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMore(key);
                            }}
                          >
                            Read More
                          </span>
                        )}
                      {expanded[key] && (
                        <span
                          className="text-teal-400 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadMore(key);
                          }}
                        >
                          Read Less
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            {rightSubcategories.map((key) => {
              const subcategory = categoryData.subcategories[key];
              return (
                <div
                  key={key}
                  className="flex flex-col sm:flex-row items-start gap-4 mb-8"
                  onClick={() => handleOpenModal(subcategory)}
                >
                  <div className="relative w-[100%] h-64 md:w-64 md:h-64 flex-shrink-0">
                    <Image
                      src={subcategory.subImage}
                      alt={subcategory.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold">{subcategory.title}</h3>
                      <div className="flex flex-col items-end">
                        <span
                          className={`text-xs px-1 py-1 ${getTagClass(
                            subcategory.tag
                          )}`}
                        >
                          {subcategory.tag}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">
                      {expanded[key]
                        ? subcategory.description
                        : subcategory.description.slice(0, 150) + "..."}
                      {subcategory.description?.length > 150 &&
                        !expanded[key] && (
                          <span
                            className="text-teal-400 cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleReadMore(key);
                            }}
                          >
                            Read More
                          </span>
                        )}
                      {expanded[key] && (
                        <span
                          className="text-teal-400 cursor-pointer"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleReadMore(key);
                          }}
                        >
                          Read Less
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal
        show={showModal}
        onClose={handleCloseModal}
        subcategory={currentSubcategory}
        cases={[
          {
            before: currentSubcategory?.beforeAfterImages?.[0],
            after: currentSubcategory?.beforeAfterImages?.[1]
          },
          {
            before: currentSubcategory?.beforeAfterImages?.[2],
            after: currentSubcategory?.beforeAfterImages?.[3]
          }
          // {
          //   before: currentSubcategory?.beforeAfterImages?.[0],
          //   after: currentSubcategory?.beforeAfterImages?.[1]
          // }
        ]}
      />
    </div>
  );
};
export default ServicePage;
