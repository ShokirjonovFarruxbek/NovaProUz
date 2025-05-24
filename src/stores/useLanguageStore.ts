import { create } from 'zustand';
import { type LanguageCode } from '../config/languages';

type LanguageStore = {
  currentLanguage: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
};

const isValidLanguage = (language: string): language is LanguageCode => {
  return ['en', 'ru', 'uz'].includes(language);
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  currentLanguage: (() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && isValidLanguage(savedLanguage)) {
      return savedLanguage;
    }
    return 'en';
  })(),
  setLanguage: (language) => {
    if (isValidLanguage(language)) {
      localStorage.setItem('language', language);
      set({ currentLanguage: language });
    }
  },
}));
