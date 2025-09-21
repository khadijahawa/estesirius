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

export default function Endolift() {
  // لمنع أخطاء الـ hydration في الواجهة
  const [isClient, setIsClient] = useState(false);
  const [showVideo1, setShowVideo1] = useState(false);
  const [showVideo2, setShowVideo2] = useState(false);

  const message = `مرحبا جيت من سناب تشات`;
  const phoneNumber = "905395204530";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      <Head>
        <title>تجميل غير جراحي — إندو ليفت</title>
        <meta
          name="description"
          content="تجميل غير جراحي بدون ألم، بجلسة واحدة فقط، نتائج فورية تدوم حتى 5 سنوات. احجز استشارتك المجانية عبر واتساب."
        />
      </Head>

      {/* شريط ترويجي علوي */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-red-600 to-purple-500 text-white py-3 px-4 text-center font-bold flex items-center justify-center hover:opacity-90 transition duration-300"
      >
        <FaWhatsapp className="mr-3 text-3xl md:text-4xl" />
        <span className="text-lg md:text-xl">اضغط للاستشارة واتساب مجانية</span>
      </a>

      {/* الهيدر */}
      <div className="bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto px-4 py-8 text-center" dir="rtl">
          {/* الشعار */}
          <div className="mb-6">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-secondary-dark rounded-full flex items-center justify-center mx-auto overflow-hidden">
              <Image
                src="/images/clinic/estesirius-2.png"
                alt="شعار سيرياس"
                width={100}
                height={100}
                className="mx-auto object-contain"
              />
            </div>
          </div>

          {/* صورة الهيرو */}
          <div className="relative w-full max-w-xs mx-auto mb-8 md:max-w-md lg:max-w-lg xl:max-w-xl">
            <Image
              src="/images/endolift/endolift_nedir.avif"
              alt="قبل وبعد — إندو ليفت"
              width={400}
              height={500}
              className="mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* العنوان الرئيسي */}
          <div className="bg-teal-500 py-4 px-12 rounded-lg shadow-md inline-block mb-8">
            <h1 className="text-3xl font-bold text-white text-center">
              تجميل غير جراحي
            </h1>
          </div>

          {/* المزايا الرئيسية */}
          <div className="rounded-lg p-6 mb-8 max-w-xs mx-auto md:max-w-md lg:max-w-lg xl:max-w-2xl">
            <ul className="space-y-5 md:space-y-6 text-right align-right">
              <li className="flex items-center ">
                <div className="bg-secondary-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-lg md:text-xl" />
                </div>
                <span className="font-bold text-lg md:text-xl lg:text-2xl mr-4">
                  غير جراحي إطلاقاً وبلا ألم
                </span>
              </li>
              <li className="flex items-center ">
                <div className="bg-secondary-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-lg md:text-xl" />
                </div>
                <span className="font-bold text-lg md:text-xl lg:text-2xl mr-4">
                  بجلسة واحدة فقط
                </span>
              </li>
              <li className="flex items-center ">
                <div className="bg-secondary-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-lg md:text-xl" />
                </div>
                <span className="font-bold text-lg md:text-xl lg:text-2xl mr-4">
                  نتائج فورية
                </span>
              </li>
              <li className="flex items-center ">
                <div className="bg-secondary-dark w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <FaCheck className="text-white text-lg md:text-xl" />
                </div>
                <span className="font-bold text-lg md:text-xl lg:text-2xl mr-4">
                  تدوم لمدة 5 سنوات
                </span>
              </li>
            </ul>
          </div>

          {/* زر واتساب */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-dark text-white font-bold py-4  rounded-lg flex items-center justify-center mx-auto  lg:max-w-md hover:bg-blue-800 transition duration-300 text-lg md:text-xl"
          >
            <FaWhatsapp className="ml-2 text-2xl" />
            <span>اضغط لاستشارة واتساب مجانية</span>
          </a>
        </div>
      </div>
      <div className="p-10">
        <div
          className="bg-gradient-to-b from-[#13203a] to-blue-700 text-white rounded-2xl p-6 md:p-8 max-w-md mx-auto"
          dir="rtl"
        >
          {/* العنوان */}
          <h2 className="text-xl md:text-2xl font-bold mb-4">
            ما هو التجميل غير الجراحي ؟
          </h2>

          {/* الوصف */}
          <p className="text-sm md:text-base leading-relaxed mb-6">
            مجموعة إجراءات تجميلية تُجرى بدون جراحة لإعادة الشباب وتحسين الملامح
            باستخدام تقنيات مثل الحقن والليزر.
          </p>

          {/* المزايا */}
          <ul className="space-y-3 text-sm md:text-base">
            <li className="flex flex-row-reverse items-center justify-end">
              <FaCheck className="text-teal-400 ml-2" />
              <span>بدون تخدير</span>
            </li>
            <li className="flex flex-row-reverse items-center justify-end">
              <FaCheck className="text-teal-400 ml-2" />
              <span>تعافٍ سريع</span>
            </li>
            <li className="flex flex-row-reverse items-center justify-end">
              <FaCheck className="text-teal-400 ml-2" />
              <span>تكلفة أقل</span>
            </li>
          </ul>
        </div>
      </div>

      {/* قسم شوف الفرق */}
      <div className="py-10 bg-white" dir="rtl">
        <div className="container mx-auto px-4">
          {/* عنوان القسم */}
          <div className="text-center mb-8">
            <h2 className="inline-block text-[#13203a] font-bold text-4xl md:text-2xl lg:text-3xl px-8  rounded-lg">
              شوف الفرق!
            </h2>
          </div>

          <div className="text-center mb-6">
            <div className="inline-block bg-red-600 text-white font-bold text-lg md:text-xl px-6 py-2 rounded-lg">
              نتائج من أول جلسة
            </div>
          </div>

          {/* صور قبل وبعد */}
          <div className="relative max-w-xs mx-auto mb-12 md:max-w-md lg:max-w-lg xl:max-w-2xl">
            {/* الصف الأول */}
            <div className="flex justify-between items-center mb-10 md:mb-14 lg:mb-16 relative">
              {/* قبل */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 overflow-hidden rounded-full border-2 border-teal-500">
                <Image
                  src="/images/endolift/endolift_oncesi_onden.jpg"
                  alt="قبل — من الأمام"
                  fill
                  className="object-cover"
                />
              </div>

              {/* سهم */}
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

              {/* بعد */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 overflow-hidden rounded-full border-2 border-teal-500">
                <Image
                  src="/images/endolift/endolift_sonrasi_onden.jpg"
                  alt="بعد — من الأمام"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* الصف الثاني */}
            <div className="flex justify-between items-center relative">
              {/* قبل */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 overflow-hidden rounded-full border-2 border-teal-500">
                <Image
                  src="/images/endolift/endolift_oncesi_yandan.jpg"
                  alt="قبل — من الجانب"
                  fill
                  className="object-cover"
                />
              </div>

              {/* سهم */}
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

              {/* بعد */}
              <div className="relative w-28 h-28 md:w-40 md:h-40 lg:w-52 lg:h-52 xl:w-64 xl:h-64 overflow-hidden rounded-full border-2 border-teal-500">
                <Image
                  src="/images/endolift/endolift_sonrasi_yandan.jpg"
                  alt="بعد — من الجانب"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* مزايا إضافية */}
          <div className="space-y-4 max-w-xs mx-auto mb-10 md:max-w-sm lg:max-w-md xl:max-w-lg">
            <div className="bg-teal-100 rounded-lg p-4 text-center flex items-center ">
              <RiMedicineBottleLine className="text-2xl text-teal-600" />
              <p className="font-medium text-right text-lg md:text-xl mr-4">
                من غير أي ألم
              </p>
            </div>
            <div className="bg-teal-100 rounded-lg p-4 text-center flex items-center ">
              <FaClock className="text-2xl text-teal-600" />

              <p className="font-medium text-right text-lg md:text-xl mr-4">
                تستغرق نصف ساعة
              </p>
            </div>
            <div className="bg-teal-100 rounded-lg p-4 text-center flex items-center">
              <FaMoneyBillWave className="text-2xl text-teal-600" />

              <p className="font-medium text-right text-lg md:text-xl mr-4">
                أرخص من الجراحة
              </p>
            </div>
          </div>

          {/* زر واتساب سفلي داخل القسم */}
          <a
            href={whatsappURL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary-dark text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center mx-auto max-w-xs md:max-w-sm lg:max-w-md hover:bg-blue-800 transition duration-300 text-lg md:text-xl"
          >
            <FaWhatsapp className="ml-3 text-5xl md:text-4xl" />
            <span>تواصل معنا عبر واتساب</span>
          </a>
        </div>
      </div>

      {/* قسم آراء العملاء */}
      <div className="py-10 bg-gray-50" dir="rtl">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-4 text-secondary-dark">
            اسمع من زبائننا <br />
            <span className="bg-secondary-dark text-white px-3 py-1 rounded-lg inline-block mt-2">
              وليس منا
            </span>
          </h2>

          {/* تقييم نجوم */}
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

          {/* فيديوهات التقييم */}
          <div className="space-y-6 max-w-xs mx-auto md:grid md:grid-cols-2 md:gap-6 md:space-y-0 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl">
            {isClient ? (
              <>
                {/* الفيديو الأول */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-500">
                  <div className="relative aspect-[4/3]">
                    {!showVideo1 ? (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setShowVideo1(true)}
                      >
                        <Image
                          src="/images/endolift/ho_thumbnail.png"
                          alt="فيديو تقييم — عميلة 1"
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

                {/* الفيديو الثاني */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-500">
                  <div className="relative aspect-[4/3]">
                    {!showVideo2 ? (
                      <div
                        className="relative w-full h-full cursor-pointer"
                        onClick={() => setShowVideo2(true)}
                      >
                        <Image
                          src="/images/endolift/poli_thumbnail.png"
                          alt="فيديو تقييم — عميلة 2"
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
                {/* عناصر بديلة عند الـ SSR */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-teal-500">
                  <div className="relative aspect-[4/3]">
                    <div className="relative w-full h-full">
                      <Image
                        src="/images/endolift/ho_thumbnail.png"
                        alt="صورة مصغرة — فيديو تقييم 1"
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
                        alt="صورة مصغرة — فيديو تقييم 2"
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

      {/* شريط ترويجي سفلي */}
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-red-600 to-purple-500 text-white py-3 px-4 text-center font-bold flex items-center justify-center hover:opacity-90 transition duration-300"
      >
        <FaWhatsapp className="mr-3 text-3xl md:text-4xl" />
        <span className="text-lg md:text-xl">اضغط للاستشارة واتساب مجانية</span>
      </a>
      <a
        href={whatsappURL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل عبر واتساب"
        className="fixed bottom-5 right-4 md:bottom-7 md:right-7 z-50"
      >
        <div className="relative">
          {/* pulse halo */}
          <span className="absolute inset-0 rounded-full bg-green-500/40 animate-ping"></span>

          {/* main button */}
          <div className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 hover:scale-105 active:scale-95 transition-transform">
            <FaWhatsapp className="text-3xl md:text-4xl" />
          </div>
        </div>

        {/* tooltip desktop */}
        <span className="hidden md:block absolute top-1/2 -translate-y-1/2 -left-2 -translate-x-full bg-[#13203a] text-white text-sm rounded-lg py-1.5 px-3 shadow-md">
          تواصل عبر واتساب
        </span>
      </a>
    </>
  );
}

// إخفاء شريط التنقل في هذه الصفحة
Endolift.hideNav = true;
