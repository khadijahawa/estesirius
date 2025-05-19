// src/context/LanguageContext.js
import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang");
    if (saved) {
      setLocale(saved);
    } else {
      const browserLang = navigator.language || navigator.userLanguage;
      const detected = browserLang.startsWith("ar") ? "ar" : "en";
      setLocale(detected);
      localStorage.setItem("lang", detected);
    }
  }, []);

  const changeLocale = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem("lang", newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, changeLocale }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
