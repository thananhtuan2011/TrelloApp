import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "welcome": "Welcome to our application"
      }
    },
    vi: {
      translation: {
        "welcome": "Chào mừng đến với ứng dụng của chúng tôi"
      }
    }
  },
  lng: "vi", // default language
  fallbackLng: "vi",

  interpolation: {
    escapeValue: false // react already safes from xss
  }
});

export default i18n;
