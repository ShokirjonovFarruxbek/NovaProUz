
import { create } from 'zustand';
import { type LanguageCode } from '../config/languages';

type LanguageStore = {
  currentLanguage: LanguageCode;
  setLanguage: (language: LanguageCode) => void;
};

export const useLanguageStore = create<LanguageStore>((set) => ({
  currentLanguage: 'en',
  setLanguage: (language) => set({ currentLanguage: language }),
}));
