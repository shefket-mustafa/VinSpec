import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json"
import bgCommon from "./locales/bg/common.json"

i18n
.use(LanguageDetector)
.use(initReactI18next)
.init({
    resources: {
        en: { common: enCommon },
        bg: { common: bgCommon }
    },
    fallbackLng: "en",
    supportedLngs: ["en", "bg"],
    ns: ["common"],
    defaultNS: "common",
    interpolation: { escapeValue: false },
    detection: {
      // persist choice
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"]
    }
})

export default i18n;