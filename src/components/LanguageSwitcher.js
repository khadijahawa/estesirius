import React, { useState } from "react";
import { useRouter } from "next/router";
import { FaGlobe } from "react-icons/fa"; // Globe icon for language selection

const languages = {
  en: { name: "English" },
  ar: { name: "عربي" }
};

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locales, locale, push, pathname, query } = router;
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleChange = (newLocale) => {
    push({ pathname, query }, { pathname, query }, { locale: newLocale });
    setDropdownOpen(false);
  };

  const availableLocales = locales?.filter((loc) => loc !== locale);

  return (
    <div className="relative">
      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-2 p-2 text-white mx-4 bg-primary rounded-full hover:bg-blue-700 transition-all duration-300"
      >
        <FaGlobe className="text-xl" />
        {languages[locale]?.name}
      </button>

      {dropdownOpen && (
        <div
          className={`absolute top-full mt-2 right-0 w-40 bg-white shadow-lg rounded-lg overflow-hidden z-10 ${
            locale === "ar" ? "right-0" : "left-0"
          }`}
        >
          {availableLocales?.map((loc) => (
            <div
              key={loc}
              onClick={() => handleChange(loc)}
              className="px-4 py-2 cursor-pointer text-gray-800 hover:bg-gray-200"
            >
              {languages[loc]?.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
