import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Modal from "../../components/Modal";
import { FormattedMessage } from "react-intl";

const serviceData = {
  "facial-surgery": {
    title: <FormattedMessage id="FacialSurgery.title" />,

    description: <FormattedMessage id="FacialSurgery.description" />,
    subcategories: {
      Facelift: {
        title: <FormattedMessage id="Facelift.title" />,
        tag: <FormattedMessage id="Facelift.tag" />,
        subImage: "/images/face/facelift2.jpg",
        beforeAfterImages: [
          "/images/operations/meso1.JPG",
          "/images/operations/meso2.JPG",
          "/images/operations/thread1-2.JPG",
          "/images/operations/thread2-2.JPG"
        ],
        description: <FormattedMessage id="Facelift.description" />
      },
      "Temporal-Lifting": {
        title: <FormattedMessage id="TemporalLifting.title" />,
        tag: <FormattedMessage id="TemporalLifting.tag" />,
        subImage: "/images/face/temporal1.jpg",
        beforeAfterImages: [
          "/images/clinic/temporal-before1.jpeg",
          "/images/clinic/temporal-after1.jpeg",
          "/images/clinic/temporal-before4.jpeg",
          "/images/clinic/temporal-after4.jpeg"
        ],
        description: <FormattedMessage id="TemporalLifting.description" />
      },
      Rhinoplasty: {
        title: <FormattedMessage id="Rhinoplasty.title" />,
        tag: <FormattedMessage id="Rhinoplasty.tag" />,
        subImage: "/images/face/righn2.jpg",
        beforeAfterImages: [
          "/images/clinic/nose-before1.png",
          "/images/clinic/nose-after1.png",
          "/images/clinic/nose-before2.png",
          "/images/clinic/nose-after2.png"
        ],
        description: <FormattedMessage id="Rhinoplasty.description" />
      },
      Blepharoplasty: {
        title: <FormattedMessage id="Blepharoplasty.title" />,
        tag: <FormattedMessage id="Blepharoplasty.tag" />,
        subImage: "/images/face/Blepharoplasty1.jpg",
        beforeAfterImages: [
          "/images/clinic/oto-before1.JPG",
          "/images/clinic/oto-after1.JPG",
          "/images/clinic/oto-before2.JPG",
          "/images/clinic/oto-after2.JPG"
        ],
        description: <FormattedMessage id="Blepharoplasty.description" />
      },
      Otoplasty: {
        title: <FormattedMessage id="Otoplasty.title" />,
        tag: <FormattedMessage id="Otoplasty.tag" />,
        subImage: "/images/face/Otoplasty1.jpg",
        beforeAfterImages: [
          "/images/clinic/ear-after1.JPG",
          "/images/clinic/ear-before1.JPG",
          "/images/clinic/ear-before2.JPG",
          "/images/clinic/ear-after2.JPG"
        ],
        description: <FormattedMessage id="Otoplasty.description" />
      },
      "Chin-Surgery-or-Genioplasty": {
        title: <FormattedMessage id="ChinSurgery.title" />,
        tag: <FormattedMessage id="ChinSurgery.tag" />,
        subImage: "/images/face/chin1.jpg",
        beforeAfterImages: [
          "/images/clinic/chin-before1.jpeg",
          "/images/clinic/chin-after1.jpeg",
          "/images/clinic/chin-before2.jpeg",
          "/images/clinic/chin-after2.jpeg"
        ],
        description: <FormattedMessage id="ChinSurgery.description" />
      },
      Teeth: {
        title: <FormattedMessage id="Teeth.title" />,
        tag: <FormattedMessage id="Teeth.tag" />,
        subImage: "/images/face/teeth.jpg",
        beforeAfterImages: [
          "/images/clinic/teeth-before1.jpeg",
          "/images/clinic/teeth-after1.jpeg",
          "/images/clinic/teeth-before2-2.jpeg",
          "/images/clinic/teeth-after2-2.jpeg"
        ],
        description: <FormattedMessage id="Teeth.description" />
      }
    }
  },
  "Body-Contouring": {
    title: <FormattedMessage id="BodyContouring.title" />,
    description: <FormattedMessage id="BodyContouring.description" />,
    subcategories: {
      Abdominoplasty: {
        title: <FormattedMessage id="Abdominoplasty.title" />,
        tag: <FormattedMessage id="Abdominoplasty.tag" />,
        subImage: "/images/body/tummy1.jpg",
        beforeAfterImages: [
          "/images/clinic/tummytuck-before1.JPG",
          "/images/clinic/tummytuck-after1.JPG",
          "/images/clinic/tummytuck-before2.JPG",
          "/images/clinic/tummytuck-after2.JPG"
        ],
        description: <FormattedMessage id="Abdominoplasty.description" />
      },
      Liposuction: {
        title: <FormattedMessage id="Liposuction.title" />,
        tag: <FormattedMessage id="Liposuction.tag" />,
        subImage: "/images/body/lipo2.jpg",
        beforeAfterImages: [
          "/images/clinic/lipo-before1.jpeg",
          "/images/clinic/lipo-after1.jpeg",
          "/images/clinic/lipo-before3.jpeg",
          "/images/clinic/lipo-after3.jpeg"
        ],
        description: <FormattedMessage id="Liposuction.description" />
      },
      "Thigh-Lift": {
        title: <FormattedMessage id="ThighLift.title" />,
        tag: <FormattedMessage id="ThighLift.tag" />,
        subImage: "/images/body/thighLift3.jpg",
        beforeAfterImages: [
          "/images/clinic/thighlift-after1.JPG",
          "/images/clinic/thighlift-before1.JPG",
          "/images/clinic/thigh.jpeg",
          "/images/clinic/thigh2.jpeg"
        ],
        description: <FormattedMessage id="ThighLift.description" />
      },
      "Arm-Lift": {
        title: <FormattedMessage id="ArmLift.title" />,
        tag: <FormattedMessage id="ArmLift.tag" />,
        subImage: "/images/body/armLift1.jpg",
        beforeAfterImages: [
          "/images/clinic/armlift-before1.JPG",
          "/images/clinic/armlift-after1.JPG",
          "/images/clinic/armlift-before2.jpeg",
          "/images/clinic/armlift-after2.jpeg"
        ],
        description: <FormattedMessage id="ArmLift.description" />
      },
      "Buttock-Lipofilling-or-BBL": {
        title: <FormattedMessage id="ButtockLipofilling.title" />,
        tag: <FormattedMessage id="ButtockLipofilling.tag" />,
        subImage: "/images/body/bbl1.jpg",
        beforeAfterImages: [
          "/images/clinic/bbl-before1.JPG",
          "/images/clinic/bbl-after1.JPG",
          "/images/clinic/bbl-before2.JPG",
          "/images/clinic/bbl-after2.JPG"
        ],
        description: <FormattedMessage id="ButtockLipofilling.description" />
      }
    }
  },
  "Breast-Surgery": {
    title: <FormattedMessage id="BreastSurgery.title" />,

    description: <FormattedMessage id="BreastSurgery.description" />,
    subcategories: {
      "Breast-Augmentation": {
        title: <FormattedMessage id="BreastAugmentation.title" />,
        tag: <FormattedMessage id="BreastAugmentation.tag" />,
        subImage: "/images/breast/breast1.jpg",
        beforeAfterImages: [
          "/images/clinic/breast-before1.jpeg",
          "/images/clinic/breast-after1.jpeg",
          "/images/clinic/breast-before2.jpeg",
          "/images/clinic/breast-after2.jpeg"
        ],
        description: <FormattedMessage id="BreastAugmentation.description" />
      },
      "Breast-Lipofilling": {
        title: <FormattedMessage id="BreastLipofilling.title" />,
        tag: <FormattedMessage id="BreastLipofilling.tag" />,
        subImage: "/images/breast/lipofilling.jpg",
        beforeAfterImages: [
          "/images/clinic/lipo-breast-before1.JPG",
          "/images/clinic/lipo-breast-after1.JPG",
          "/images/clinic/lipo-breast-before2.JPG",
          "/images/clinic/lipo-breast-after2.JPG"
        ],
        description: <FormattedMessage id="BreastLipofilling.description" />
      },
      "Breast-Lift": {
        title: <FormattedMessage id="BreastLift.title" />,
        tag: <FormattedMessage id="BreastLift.tag" />,
        subImage: "/images/breast/filling.jpg",
        beforeAfterImages: [
          "/images/clinic/lipo-breast-before1.JPG",
          "/images/clinic/lipo-breast-after1.JPG",
          "/images/clinic/lipo-breast-before2.JPG",
          "/images/clinic/lipo-breast-after2.JPG"
        ],
        description: <FormattedMessage id="BreastLift.description" />
      },
      Gynecomastia: {
        title: <FormattedMessage id="Gynecomastia.title" />,
        tag: <FormattedMessage id="Gynecomastia.tag" />,
        subImage: "/images/breast/Gynecomastia1.jpg",
        beforeAfterImages: [
          "/images/clinic/geo-breast-after1.JPG",
          "/images/clinic/geo-breast-before1.JPG",
          "/images/clinic/geo-breast-after2.JPG",
          "/images/clinic/geo-breast-before2.JPG"
        ],
        description: <FormattedMessage id="Gynecomastia.description" />
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
      case "BALANCING":
        return "bg-red-800 text-white";
      case "TRANSFORMATIONAL":
        return "bg-red-800 text-white";
      case "REGENERATIVE":
        return "bg-red-800 text-white";
      case "YOUTHFUL":
        return "bg-red-800 text-white";
      case "MINIMAL":
        return "bg-red-800 text-white";
      case "EXPERT":
        return "bg-red-800 text-white";
      case "NATURAL":
        return "bg-red-800 text-white";
      case "BALANCING":
        return "bg-red-800 text-white";

      default:
        return "bg-red-800 text-white";
    }
  };

  console.log(categoryData.subcategories);

  return (
    <div className="container mx-auto px-2 my-16 pt-26">
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
                      {/* {expanded[key]
                        ? subcategory?.description
                        : subcategory?.description
                        ? subcategory?.description?.slice(0, 150) + "..."
                        : ""}

                      {subcategory?.description?.length > 150 &&
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
                      )} */}
                      {subcategory?.description}
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
                      {/* {expanded[key]
                        ? subcategory?.description
                        : typeof subcategory?.description === "string"
                        ? subcategory?.description.slice(0, 150) + "..."
                        : ""}
                      {subcategory?.description?.length > 150 &&
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
                      )} */}
                      {subcategory?.description}
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
