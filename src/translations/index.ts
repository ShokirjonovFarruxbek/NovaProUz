
import { type LanguageCode } from '../config/languages';

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      products: 'Products',
      caseStudies: 'Case Studies',
      blog: 'Blog',
      contact: 'Contact'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to transform your business with automation? Get in touch with our team today.',
      businessHours: 'Business Hours',
      workingHours: 'Monday - Sunday: 9:00 AM - 6:00 PM',
      support: '24/7 Support Available',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Your Message',
        send: 'Send Message'
      }
    }
  },
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      products: 'Продукты',
      caseStudies: 'Кейсы',
      blog: 'Блог',
      contact: 'Контакты'
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы автоматизировать ваш бизнес? Свяжитесь с нашей командой сегодня.',
      businessHours: 'Часы работы',
      workingHours: 'Понедельник - Воскресенье: 9:00 - 18:00',
      support: 'Поддержка 24/7',
      form: {
        name: 'Полное имя',
        email: 'Электронная почта',
        company: 'Название компании',
        message: 'Ваше сообщение',
        send: 'Отправить'
      }
    }
  },
  uz: {
    nav: {
      about: 'Biz haqimizda',
      services: 'Xizmatlar',
      products: 'Mahsulotlar',
      caseStudies: 'Loyihalar',
      blog: 'Blog',
      contact: 'Aloqa'
    },
    contact: {
      title: 'Biz bilan bogʻlaning',
      subtitle: 'Biznesingizni avtomatlashtirish uchun tayyormisiz? Bugun bizning jamoamiz bilan bogʻlaning.',
      businessHours: 'Ish vaqti',
      workingHours: 'Dushanba - Yakshanba: 9:00 - 18:00',
      support: '24/7 Qoʻllab-quvvatlash mavjud',
      form: {
        name: 'Toʻliq ism',
        email: 'Elektron pochta',
        company: 'Kompaniya nomi',
        message: 'Xabaringiz',
        send: 'Yuborish'
      }
    }
  }
} as const;

export type Translations = typeof translations;
export type TranslationKey = keyof typeof translations;

export const useTranslation = (languageCode: LanguageCode) => {
  return translations[languageCode];
};
