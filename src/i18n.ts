import { initReactI18next } from 'react-i18next'
import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import kg from './locales/kg/kg.json'
import ru from './locales/ru/ru.json'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      ru: { translation: ru },   
      kg: { translation: kg },   
    },

    lng: 'ru',              
    fallbackLng: 'ru',     

    detection: {
      order: ['localStorage'], 
    },

    interpolation: {
      escapeValue: false,
    },
  })

export default i18n