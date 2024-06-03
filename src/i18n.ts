import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import LanguageDetector from 'i18next-browser-languagedetector';
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    // lng: "en",
    fallbackLng: 'en',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
  });
export default i18n;
