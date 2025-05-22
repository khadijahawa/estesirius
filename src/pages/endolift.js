/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import Head from "next/head";
import {
  FaWhatsapp,
  FaCheck,
  FaClock,
  FaMoneyBillWave,
  FaPlayCircle
} from "react-icons/fa";
import { RiMedicineBottleLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import { FormattedMessage } from "react-intl";

export default function Endolift() {
  // Client-side-only code için hydration hatasını önlemek amacıyla useState kullanımı
  const [isClient, setIsClient] = useState(false);
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>
          <FormattedMessage id="Endolift.title" />
        </title>
        <meta
          name="description"
          content={<FormattedMessage id="Endolift.description" />}
        />
      </Head>

      {/* Promo Banner - Top */}
      <a
        href="https://wa.link/7gjnrj"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-red-600 to-purple-500 text-white py-3 px-4 text-center font-bold flex items-center justify-center hover:opacity-90 transition duration-300"
      >
        <FaWhatsapp className="mr-3 text-3xl md:text-4xl" />
        <span className="text-lg md:text-xl">
          <FormattedMessage id="Endolift.promoBanner" />
        </span>
      </a>

      {/* Header Section */}
      <div className="bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4 py-8 text-center">
          {/* Logo */}
          <div className="mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary-dark rounded-full flex items-center justify-center mx-auto overflow-hidden">
              <Image
                src="/images/clinic/estesirius-2.png"
                alt="SIRIUS Logo"
                width={100}
                height={100}
                className="mx-auto object-contain"
              />
            </div>
          </div>

          {/* Hero Image - Before & After */}
          <div className="relative w-full max-w-xs mx-auto mb-8 md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/images/endolift/endolift_nedir.avif"
              alt="Endolift Before and After"
              width={400}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Main Title */}
          <div className="bg-teal-500 py-4 px-12 rounded-lg shadow-md inline-block mb-8">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white text-center">
              <FormattedMessage id="Endolift.mainTitle" />
            </h1>
          </div>

          {/* Key Benefits */}
          <div className="rounded-lg p-6 mb-8 max-w-xs mx-auto md:max-w-md lg:max-w-lg xl:max-w-2xl">
            <ul className="space-y-5 md:space-y-6">
              <li className="flex items-center">
                <div className="bg-secondary-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaCheck className="text-white text-lg md:text-xl" />
                </div>
                <span className="font-medium text-lg md:text-xl lg:text-2xl">
                  <FormattedMessage id="Endolift.keyBenefits.nonSurgical" />
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-secondary-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaCheck className="text-white text-lg md:text-xl" />
                </div>
                <span className="font-medium text-lg md:text-xl lg:text-2xl">
                  <FormattedMessage id="Endolift.keyBenefits.oneSession" />
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-secondary-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaCheck className="text-white text-lg md:text-xl" />
                </div>
                <span className="font-medium text-lg md:text-xl lg:text-2xl">
                  <FormattedMessage id="Endolift.keyBenefits.immediateResults" />
                </span>
              </li>
              <li className="flex items-center">
                <div className="bg-secondary-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FaCheck className="text-white text-lg md:text-xl" />
                </div>
                <span className="font-medium text-lg md:text-xl lg:text-2xl">
                  <FormattedMessage id="Endolift.keyBenefits.lastsFiveYears" />
                </span>
              </li>
            </ul>
          </div>

          {/* CTA 1 */}
          <a
            href="https://wa.link/7gjnrj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center mx-auto max-w-xs md:max-w-sm lg:max-w-md hover:bg-blue-800 transition duration-300 text-lg md:text-xl"
          >
            <FaWhatsapp className="mr-3 text-7xl md:text-4xl" />
            <span>
              <FormattedMessage id="Endolift.whatsappButton" />
            </span>
          </a>
        </div>
      </div>

      {/* See the Difference Section */}
      <div className="py-10 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="inline-block bg-red-600 text-white font-bold text-xl md:text-2xl lg:text-3xl px-8 py-3 rounded-lg">
              <FormattedMessage id="Endolift.seeTheDifference" />
            </h2>
          </div>

          <div className="text-center mb-6">
            <div className="inline-block bg-red-600 text-white font-bold text-lg md:text-xl px-6 py-2 rounded-lg">
              <FormattedMessage id="Endolift.resultsFromFirstSession" />
            </div>
          </div>

          {/* Before & After Images */}
          <div className="relative max-w-xs mx-auto mb-12 md:max-w-md lg:max-w-lg xl:max-w-2xl">
            {/* First Row - Before & After */}
            <div className="flex justify-between items-center mb-10 md:mb-14 lg:mb-16 relative">
              {/* Before Image */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 overflow-hidden rounded-full border-2 border-teal-500">
                <Image
                  src="/images/endolift/endolift_oncesi_onden.jpg"
                  alt={<FormattedMessage id="Endolift.beforeImage.front" />}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Arrow between images */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="text-teal-500 font-black text-5xl md:text-6xl lg:text-7xl flex items-center"
                  style={{ textShadow: "0 0 3px teal" }}
                >
                  <span
                    className="inline-block"
                    style={{ transform: "scaleX(1.5)" }}
                  >
                    ➜
                  </span>
                </div>
              </div>

              {/* After Image */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 overflow-hidden rounded-full border-2 border-teal-500">
                <Image
                  src="/images/endolift/endolift_sonrasi_onden.jpg"
                  alt={<FormattedMessage id="Endolift.afterImage.front" />}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Second Row - Before & After */}
            <div className="flex justify-between items-center relative">
              {/* Before Image */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 overflow-hidden rounded-full border-2 border-teal-500">
                <Image
                  src="/images/endolift/endolift_oncesi_yandan.jpg"
                  alt={<FormattedMessage id="Endolift.beforeImage.side" />}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Arrow between images */}
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div
                  className="text-teal-500 font-black text-5xl md:text-6xl lg:text-7xl flex items-center"
                  style={{ textShadow: "0 0 3px teal" }}
                >
                  <span
                    className="inline-block"
                    style={{ transform: "scaleX(1.5)" }}
                  >
                    ➜
                  </span>
                </div>
              </div>

              {/* After Image */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 overflow-hidden rounded-full border-2 border-teal-500">
                <Image
                  src="/images/endolift/endolift_sonrasi_yandan.jpg"
                  alt={<FormattedMessage id="Endolift.afterImage.side" />}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Additional Benefits */}
          <div className="space-y-4 max-w-xs mx-auto mb-10 md:max-w-sm lg:max-w-md xl:max-w-lg">
            <div className="bg-teal-100 rounded-lg p-4 text-center flex items-center">
              <RiMedicineBottleLine className="text-2xl mr-4 text-teal-600" />
              <p className="font-medium text-left text-lg md:text-xl">
                <FormattedMessage id="Endolift.additionalBenefits.noPain" />
              </p>
            </div>
            <div className="bg-teal-100 rounded-lg p-4 text-center flex items-center">
              <FaClock className="text-2xl mr-4 text-teal-600" />
              <p className="font-medium text-left text-lg md:text-xl">
                <FormattedMessage id="Endolift.additionalBenefits.halfHour" />
              </p>
            </div>
            <div className="bg-teal-100 rounded-lg p-4 text-center flex items-center">
              <FaMoneyBillWave className="text-2xl mr-4 text-teal-600" />
              <p className="font-medium text-left text-lg md:text-xl">
                <FormattedMessage id="Endolift.additionalBenefits.cheaperThanSurgery" />
              </p>
            </div>
          </div>

          {/* CTA 2 */}
          <a
            href="https://wa.link/7gjnrj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center mx-auto max-w-xs md:max-w-sm lg:max-w-md hover:bg-blue-800 transition duration-300 text-lg md:text-xl"
          >
            <FaWhatsapp className="mr-3 text-7xl md:text-4xl" />
            <span>
              <FormattedMessage id="Endolift.whatsappButton" />
            </span>
          </a>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 text-secondary-dark">
            <FormattedMessage id="Endolift.hearFromClients" /> <br />
            <span className="bg-secondary-dark text-white px-3 py-1 rounded-lg inline-block mt-2">
              <FormattedMessage id="Endolift.notFromUs" />
            </span>
          </h2>

          {/* Star Rating */}
          <div className="flex justify-center mb-8">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-400 md:w-8 md:h-8 lg:w-10 lg:h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>

          {/* Video Testimonials */}
          <div className="space-y-6 max-w-xs mx-auto md:grid md:grid-cols-2 md:gap-6 md:space-y-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            {/* Client-side-only olarak videoları render et */}
            {isClient ? (
              <>
                {/* First Video */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-500">
                  <div className="relative aspect-[4/3]">
                    {!showVideo1 ? (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setShowVideo1(true)}
                      >
                        <Image
                          src="/images/endolift/ho_thumbnail.png"
                          alt={
                            <FormattedMessage id="Endolift.testimonialVideo1" />
                          }
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                          <FaPlayCircle className="text-white text-5xl md:text-6xl opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ) : (
                      <video
                        src="/images/endolift/jo.mp4"
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>

                {/* Second Video */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-500">
                  <div className="relative aspect-[4/3]">
                    {!showVideo2 ? (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setShowVideo2(true)}
                      >
                        <Image
                          src="/images/endolift/poli_thumbnail.png"
                          alt={
                            <FormattedMessage id="Endolift.testimonialVideo2" />
                          }
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
                          <FaPlayCircle className="text-white text-5xl md:text-6xl opacity-80 hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ) : (
                      <video
                        src="/images/endolift/poli.mp4"
                        controls
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Placeholder for SSR */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-500">
                  <div className="relative aspect-[4/3]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/endolift/ho_thumbnail.png"
                        alt={
                          <FormattedMessage id="Endolift.testimonialVideo1" />
                        }
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <FaPlayCircle className="text-white text-5xl md:text-6xl opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-500">
                  <div className="relative aspect-[4/3]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/endolift/poli_thumbnail.png"
                        alt={
                          <FormattedMessage id="Endolift.testimonialVideo2" />
                        }
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                        <FaPlayCircle className="text-white text-5xl md:text-6xl opacity-80" />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Promo Banner - Bottom */}
      <a
        href="https://wa.link/7gjnrj"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-red-600 to-purple-500 text-white py-3 px-4 text-center font-bold flex items-center justify-center hover:opacity-90 transition duration-300"
      >
        <FaWhatsapp className="mr-3 text-3xl md:text-4xl" />
        <span className="text-lg md:text-xl">
          <FormattedMessage id="Endolift.promoBanner" />
        </span>
      </a>
    </>
  );
}

// Hide the default navigation for this page
Endolift.hideNav = true;
