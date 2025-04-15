
export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'uz', name: 'O'zbekcha', flag: '🇺🇿' }
] as const;

export type LanguageCode = typeof languages[number]['code'];
