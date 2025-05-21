import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeEn from "./en/homeEn.json";
import homeAr from "./ar/homeAr.json";
import resumeEn from "./en/resumeEn.json";
import resumeAr from "./ar/resumeAr.json";
import contactPageEn from "./en/contactEn.json";
import contactPageAr from "./ar/contactAr.json";
import portfolioPageEn from "./en/portfolioEn.json";
import portfolioPageAr from "./ar/portfolioAr.json";

const resources = {
    en: {
        home: homeEn,
        resumePage: resumeEn,
        contactPage: contactPageEn,
        portfolioPage: portfolioPageEn,
    },
    ar: {
        home: homeAr,
        resumePage: resumeAr,
        contactPage: contactPageAr,
        portfolioPage: portfolioPageAr,
    },
};

const currentLanguage = localStorage.getItem("lang") || "en";

i18n.use(initReactI18next).init({
    resources,
    lng: currentLanguage,
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
