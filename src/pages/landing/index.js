import { useState, useRef } from "react";
function LandingPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = () => {
    if (!name || !phone || !service) {
      alert("Lütfen tüm alanları doldurun.");
      return;
    }

    const message = `Merhaba, ben ${name}%0A📞 Telefon: ${phone}%0A💬 Hizmet: ${service}`;
    const phoneNumber = "905395204530";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div>
      <div className="bg-blue-950">
        <div className=" bg-gradient-to-b from-[#002e62] to-[#517094] text-white px-4 py-6 pb-12 max-w-md mx-auto">
          <div className="flex justify-center mb-4">
            <img
              src="/images/landing/logo.png"
              alt="Sirius Logo"
              className="w-28"
            />
          </div>
          <h1 className=" text-center mb-2">استيسيريوس للتجميل في اسطنبول</h1>
          <div className="text-center">
            <button className="bg-teal-400 text-white font-bold py-2 px-3 rounded-full shadow-lg mb-4 mt-4 text-2xl">
              وسائل تجميل غير الجراحية
            </button>
          </div>
          <p className=" text-center mb-4">
            للوجه والأنف والرقبة والخصرين. جمال طبيعي بأحدث التقنيات بدون جراحة
          </p>
          <div className=" text-center mb-4">
            <p className="flex items-center justify-center gap-2">
              بلا ألم نهائياً
              <span className="text-red-600 rotate-90 text-2xl">*</span>
            </p>
            <p className="flex items-center justify-center gap-2">
              تدوم سنوات
              <span className="text-red-600 rotate-90 text-2xl">*</span>
            </p>
          </div>
          <div className="text-center">
            <button className="bg-gradient-to-r from-[#840000] to-[#9d0d76] text-white py-2 px-6 rounded-full font-semibold text-xl mb-12">
              تواصل معنا
            </button>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-white text-white px-4 py-6 font-sans max-w-md mx-auto">
        <div className="p-4 rounded-xl shadow-lg backdrop-blur text-right bg-gradient-to-br from-[#002e62] to-[#517094] relative bottom-20  ">
          <h2 className="font-bold text-lg mb-2">
            ما هو التجميل غير الجراحي ؟
          </h2>
          <p className="mb-3 text-[#b5b3ac]">
            مجموعة إجراءات تجميلية تُجرى بدون جراحة لإعادة الشباب وتحسين الملامح
            باستخدام تقنيات مثل الحقن والليزر.
          </p>
          <div className=" text-[#40e0d0]">
            <p>بدون تخدير</p>
            <p>تعافي سريع</p>
            <div>تكلفة أقل</div>
          </div>
        </div>
        <div className="mt-10  text-[#02163b] rounded-xl py-6 px-4 space-y-8 relative bottom-20">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/landing/face.png"
              alt="Face"
              className="h-20 mb-2"
            />
            <h3 className="text-3xl font-bold text-[#20528c] ">تجميل الوجه</h3>
            <p className=" text-[#40e0d0]">إزالة التجاعيد وحب الشباب بالليزر</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/landing/breast.png"
              alt="Breast"
              className="h-20 mb-2"
            />
            <h3 className="text-3xl font-bold text-[#20528c]">تجميل الثدي</h3>
            <p className=" text-[#40e0d0]">تصغيره أو تكبيره وتجميله</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/landing/lipo.png"
              alt="Liposuction"
              className="h-20 mb-2"
            />
            <h3 className="text-3xl font-bold text-[#20528c]">شفط الدهون</h3>
            <p className=" text-[#40e0d0]">
              نحت الجسم وتنسيق القوام للوصول إلى الجسم المثالي
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/landing/nose.png"
              alt="Nose"
              className="h-20 mb-2"
            />
            <h3 className="text-3xl font-bold text-[#20528c]">تجميل الأنف</h3>
            <p className="text-[#40e0d0]">
              تصغير وتجميل الأنف وإعادته إلى مركز الوجه
            </p>
          </div>
        </div>
        <div className=" text-[#02163b] rounded-xl py-6 px-4 text-center  relative bottom-10">
          <h2 className="text-2xl font-bold text-center text-[#20528c] mb-2">
            !شوف الفرق
          </h2>
          <p className="text-center text-white bg-[#40e0d0] inline-block px-4 py-1 rounded-full font-bold text-sm ">
            نتائج من أول جلسة
          </p>
          <div className="flex flex-col items-center justify-center gap-6 mt-6">
            <div className="flex items-center justify-center gap-12">
              <div className="w-24 h-24 rounded-full border-[3px] border-[#40e0d0] overflow-hidden">
                <img
                  src="/images/landing/before1.png"
                  alt="before 1"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-24 h-24 rounded-full border-[3px] border-[#40e0d0] overflow-hidden">
                <img
                  src="/images/landing/after1.png"
                  alt="after 1"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-8xl text-[#40e0d0] absolute top-28">⟵</p>
            <div className="flex items-center justify-center gap-12">
              <div className="w-24 h-24 rounded-full border-[3px] border-[#40e0d0] overflow-hidden">
                <img
                  src="/images/landing/before2.png"
                  alt="before 2"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="w-24 h-24 rounded-full border-[3px] border-[#40e0d0] overflow-hidden">
                <img
                  src="/images/landing/after2.png"
                  alt="after 2"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <p className="text-8xl text-[#40e0d0] absolute bottom-8">⟵</p>
          </div>
        </div>
      </div>
      <div className="bg-[#0a2e57]  py-8 px-4 text-center mt-6">
        <h2 className="text-2xl font-bold text-white mb-6">
          جهاز الأندوليفت الثوري
        </h2>
        <div className="bg-[#0a2e57] py-8 px-4 text-center mt-6">
          <div className="flex justify-center mb-6">
            <img
              src="/images/landing/device.png"
              alt="Andolift Device"
              className="w-64 max-w-full"
            />
          </div>
          <p className="text-white text-lg font-semibold mb-4">
            شاهد الفيديو للمزيد عن الجهاز
          </p>
          <div className="flex justify-center">
            <div className="relative w-72 h-72 max-w-full rounded-full overflow-hidden border-4 border-[#40e0d0]">
              <video
                ref={videoRef}
                poster="/images/landing/thumbnail.png"
                controls
                autoPlay
                muted
                onPlay={handlePlay}
                onPause={handlePause}
                className="w-full h-full object-cover rounded-full"
              >
                <source
                  src="/images/landing/estusuirousVideo.mp4"
                  type="video/mp4"
                />
                متصفحك لا يدعم تشغيل الفيديو.
              </video>
              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-[#40e0d0] w-12 h-12 rounded-full flex items-center justify-center opacity-80">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="white"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f5fffe] text-[#0a2e57] py-6 text-center mt-3">
        <h2 className="text-2xl font-bold mb-4">اسمع من زبائننا</h2>
        <p className="inline-block bg-[#0a2e57] text-white py-1 px-4 rounded-full font-bold text-lg mb-6">
          وليس منا
        </p>
        <div className="mt-6">
          <img
            src="/images/reviews.jpeg"
            alt="Google Reviews"
            className=" w-full"
          />
        </div>
      </div>
      <div className="mt-6 bg-[#f5fffe] py-6 rounded-xl text-right">
        <div className="bg-[#6c7685] px-12 py-6">
          <div className="bg-[#40e0d0] rounded-xl">
            <h2 className=" font-bold text-white mb-4 text-center ">
              سجل بياناتك وسنتواصل معك
            </h2>
          </div>
          <form className="space-y-3 mb-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="ادخل اسمك"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-[#02163b] placeholder:text-[#999] focus:outline-none placeholder:text-right"
            />
            <input
              type="tel"
              placeholder="رقم تلفونك"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-[#02163b] placeholder:text-[#999] focus:outline-none placeholder:text-right"
            />
            <input
              type="text"
              placeholder="الخدمة التي تستفسر عنها"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white text-[#02163b] placeholder:text-[#999] focus:outline-none placeholder:text-right"
            />
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#164372] text-white font-bold py-2 rounded-full mt-2 text-xs"
            >
              سجل واحصل على خصم %20
            </button>
          </form>
        </div>
        <div className="space-y-4 mt-10 px-8">
          <div className="border-2 border-[#40e0d0] rounded-xl py-4 px-6 text-center bg-white">
            <div className="mb-2 bg-[#0a2e57] rounded-4xl inline-block p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M6.62 10.79a15.534 15.534 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.91.76a1 1 0 011 1v3.5a1 1 0 01-1 1C10.06 22.24 1.76 13.94 1.76 3.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.38.26 2.7.76 3.91a1 1 0 01-.21 1.11l-2.2 2.27z" />
              </svg>
            </div>
            <p className="text-[#0a2e57] font-bold mb-1">تواصل معنا</p>
            <p className="text-sm text-[#0a2e57] font-semibold">
              +90 539 520 45 30
            </p>
          </div>
          <div className="border-2 border-[#40e0d0] rounded-xl py-4 px-6 text-center bg-white">
            <div className="mb-2 bg-[#0a2e57] rounded-4xl inline-block p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M12 8a1 1 0 011 1v3.59l2.3 2.3a1 1 0 11-1.41 1.41l-2.6-2.59A1 1 0 0111 13V9a1 1 0 011-1zm0-6a10 10 0 100 20 10 10 0 000-20zM2 12a10 10 0 1110 10A10 10 0 012 12z" />
              </svg>
            </div>
            <p className="text-[#0a2e57] font-bold mb-1">ساعات العمل</p>
            <p className="text-sm text-[#0a2e57] font-semibold">
              كل الاسبوع عدا الأحد
            </p>
          </div>
          <div className="border-2 border-[#40e0d0] rounded-xl py-4 px-6 text-center bg-white">
            <div className=" mb-2 bg-[#0a2e57] rounded-4xl inline-block p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#FFF"
                viewBox="0 0 24 24"
                width="32"
                height="32"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
              </svg>
            </div>
            <p className="text-[#0a2e57] font-bold mb-1">موقعنا</p>
            <p className="text-sm text-[#0a2e57] font-semibold">
              شيشلي نيشانتشي
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

LandingPage.hideNav = true;
LandingPage.hideFooter = true;

export default LandingPage;
