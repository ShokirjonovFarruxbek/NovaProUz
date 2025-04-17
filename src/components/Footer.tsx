
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { Separator } from './ui/separator';

const Footer = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-novapro-dark pt-16 pb-8">
      <div className="section-container">
        <div className="flex flex-col md:flex-row mb-16">
          <div className="md:w-1/4 mb-10 md:mb-0">
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/47840e42-e6db-4407-b1e9-692066daa9e0.png" 
                alt="NovaPro Logo" 
                className="h-10 w-10 mr-2"
              />
              <span className="text-novapro-beige text-xl font-poppins font-semibold">NovaPro</span>
              <Separator className="h-8 mx-4 bg-novapro-gray/20" orientation="vertical" />
              <div className="flex flex-col items-center justify-center">
                <img 
                  src="/lovable-uploads/14c03911-45f5-40b6-a9e1-0769ea6328f4.png" 
                  alt="IT Park Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-xs text-novapro-gray mt-1">Резидент IT PARK</span>
              </div>
            </div>
            <p className="text-novapro-gray mb-6">
              {currentLanguage === 'en' ? 'Empowering businesses through innovative automation solutions that streamline operations, enhance productivity, and drive sustainable growth.' :
               currentLanguage === 'ru' ? 'Расширение возможностей бизнеса с помощью инновационных решений для автоматизации, оптимизирующих операции, повышающих производительность и обеспечивающих устойчивый рост.' :
               'Biznesni innovatsion avtomatlashtirish yechimlari orqali kengaytirish, samaradorlikni oshirish va barqaror o\'sishni ta\'minlash.'}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="md:w-1/5 mb-10 md:mb-0 md:pl-8">
            <h3 className="text-lg font-semibold mb-6">
              {currentLanguage === 'en' ? 'Quick Links' :
               currentLanguage === 'ru' ? 'Быстрые ссылки' :
               'Tezkor havolalar'}
            </h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">{t.nav.about}</a></li>
              <li><a href="#services" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">{t.nav.services}</a></li>
              <li><a href="#products" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">{t.nav.products}</a></li>
              <li><a href="#case-studies" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">{t.nav.caseStudies}</a></li>
              <li><a href="#blog" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">{t.nav.blog}</a></li>
              <li><a href="#contact" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">{t.nav.contact}</a></li>
            </ul>
          </div>
          
          <div className="md:w-1/5 mb-10 md:mb-0">
            <h3 className="text-lg font-semibold mb-6">
              {currentLanguage === 'en' ? 'Services' :
               currentLanguage === 'ru' ? 'Услуги' :
               'Xizmatlar'}
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'Process Automation' :
                 currentLanguage === 'ru' ? 'Автоматизация процессов' :
                 'Jarayonlarni avtomatlashtirish'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'Custom Software Development' :
                 currentLanguage === 'ru' ? 'Разработка ПО' :
                 'Dasturiy ta\'minot ishlab chiqish'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'System Integration' :
                 currentLanguage === 'ru' ? 'Системная интеграция' :
                 'Tizimlar integratsiyasi'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'Business Analytics' :
                 currentLanguage === 'ru' ? 'Бизнес-аналитика' :
                 'Biznes-tahlil'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'Training & Support' :
                 currentLanguage === 'ru' ? 'Обучение и поддержка' :
                 'O\'qitish va qo\'llab-quvvatlash'}
              </a></li>
            </ul>
          </div>

          <div className="md:w-1/5 mb-10 md:mb-0">
            <h3 className="text-lg font-semibold mb-6">
              {currentLanguage === 'en' ? 'Licenses' :
               currentLanguage === 'ru' ? 'ЛИЦЕНЗИИ' :
               'Litsenziyalar'}
            </h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'OnlinePBX Licenses' :
                 currentLanguage === 'ru' ? 'Лицензии OnlinePBX' :
                 'OnlinePBX Litsenziyalari'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'Bitrix24 Licenses' :
                 currentLanguage === 'ru' ? 'Лицензии Битрикс24' :
                 'Bitrix24 Litsenziyalari'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'Roistat Licenses' :
                 currentLanguage === 'ru' ? 'Лицензии Roistat' :
                 'Roistat Litsenziyalari'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'amoCRM Licenses' :
                 currentLanguage === 'ru' ? 'Лицензии amoCRM' :
                 'amoCRM Litsenziyalari'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'MySklad Tariffs' :
                 currentLanguage === 'ru' ? 'Тарифы МойСклад' :
                 'MySklad Tariflari'}
              </a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                {currentLanguage === 'en' ? 'SIPUNI Licenses' :
                 currentLanguage === 'ru' ? 'Лицензии SIPUNI' :
                 'SIPUNI Litsenziyalari'}
              </a></li>
            </ul>
          </div>
          
          <div className="md:w-1/5">
            <h3 className="text-lg font-semibold mb-6">
              {currentLanguage === 'en' ? 'Contact' :
               currentLanguage === 'ru' ? 'Контакты' :
               'Aloqa'}
            </h3>
            <ul className="space-y-3">
              <li className="text-novapro-gray">2-й проезд Авиасозлар</li>
              <li><a href="mailto:info@novapro.tech" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">dilik9727@gmail.com</a></li>
              <li><a href="tel:+998901370997" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">+998 90 137 0997</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-novapro-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-novapro-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NovaPro. 
            {currentLanguage === 'en' ? ' All rights reserved.' :
             currentLanguage === 'ru' ? ' Все права защищены.' :
             ' Barcha huquqlar himoyalangan.'}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-novapro-gray hover:text-novapro-teal text-sm transition-colors duration-300">
              {currentLanguage === 'en' ? 'Privacy Policy' :
               currentLanguage === 'ru' ? 'Политика конфиденциальности' :
               'Maxfiylik siyosati'}
            </a>
            <a href="#" className="text-novapro-gray hover:text-novapro-teal text-sm transition-colors duration-300">
              {currentLanguage === 'en' ? 'Terms of Service' :
               currentLanguage === 'ru' ? 'Условия использования' :
               'Xizmat ko\'rsatish shartlari'}
            </a>
            <button 
              onClick={scrollToTop} 
              className="text-novapro-teal hover:text-novapro-beige transition-colors duration-300 flex items-center"
            >
              <ArrowUp size={16} className="mr-1" /> 
              {currentLanguage === 'en' ? 'Back to Top' :
               currentLanguage === 'ru' ? 'Наверх' :
               'Tepaga qaytish'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
