import React, { createContext, useContext } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import translations, { Lang, languages } from "./translations";

interface LanguageContextType {
  lang: Lang;
  t: (key: string) => string;
  setLang: (lang: Lang) => void;
  languages: typeof languages;
  localePath: (path: string) => string;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { lang: paramLang } = useParams<{ lang: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  const lang: Lang = (paramLang && ["en", "ru", "zh", "es"].includes(paramLang) ? paramLang : "en") as Lang;

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en[key] || key;
  };

  const setLang = (newLang: Lang) => {
    const pathWithoutLang = location.pathname.replace(/^\/(en|ru|zh|es)/, "");
    navigate(`/${newLang}${pathWithoutLang || "/"}`);
  };

  const localePath = (path: string) => `/${lang}${path}`;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang, languages, localePath }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
