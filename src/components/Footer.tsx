import { Facebook, Linkedin, Instagram, ArrowUp, Phone, Mail, MapPin, MessageSquare, Youtube } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { Separator } from './ui/separator';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

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
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-novapro-dark pt-16 pb-8"
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row mb-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/4 mb-10 md:mb-0"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center mb-6"
            >
              <img 
                src="/lovable-uploads/NovaProLogo.png" 
                alt="NovaPro Logo" 
                className="h-20 w-24"
              />
              <Separator className="h-8 mx-4 bg-novapro-gray/20" orientation="vertical" />
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center"
              >
                <img 
                  src="/lovable-uploads/14c03911-45f5-40b6-a9e1-0769ea6328f4.png" 
                  alt="IT Park Logo" 
                  className="h-10 w-auto"
                />
                <span className="text-xs text-novapro-gray mt-1">Резидент IT PARK</span>
              </motion.div>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-novapro-gray mb-6"
            >
              {currentLanguage === 'en' ? 'Empowering businesses through innovative automation solutions that streamline operations, enhance productivity, and drive sustainable growth.' :
               currentLanguage === 'ru' ? 'Расширение возможностей бизнеса с помощью инновационных решений для автоматизации, оптимизирующих операции, повышающих производительность и обеспечивающих устойчивый рост.' :
               'Biznesni innovatsion avtomatlashtirish yechimlari orqali kengaytirish, samaradorlikni oshirish va barqaror o\'sishni ta\'minlash.'}
            </motion.p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:w-1/5 mb-10 md:mb-0 md:pl-8"
          >
            <h3 className="text-lg font-semibold mb-6">
              {currentLanguage === 'en' ? 'Quick Links' :
               currentLanguage === 'ru' ? 'Быстрые ссылки' :
               'Tezkor havolalar'}
            </h3>
            <ul className="space-y-3">
              {['about', 'services', 'products', 'case-studies', 'articles', 'contact'].map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link 
                    to={`/${currentLanguage}/${link}`}
                    className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300"
                  >
                    {t.nav[link === 'case-studies' ? 'caseStudies' : link]}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:w-1/5 mb-10 md:mb-0"
          >
            <h3 className="text-lg font-semibold mb-6">
              {currentLanguage === 'en' ? 'Services' :
               currentLanguage === 'ru' ? 'Услуги' :
               'Xizmatlar'}
            </h3>
            <ul className="space-y-3">
              {[
                { en: 'Process Automation', ru: 'Автоматизация процессов', uz: 'Jarayonlarni avtomatlashtirish' },
                { en: 'Custom Software Development', ru: 'Разработка ПО', uz: 'Dasturiy ta\'minot ishlab chiqish' },
                { en: 'System Integration', ru: 'Системная интеграция', uz: 'Tizimlar integratsiyasi' },
                { en: 'Business Analytics', ru: 'Бизнес-аналитика', uz: 'Biznes-tahlil' },
                { en: 'Training & Support', ru: 'Обучение и поддержка', uz: 'O\'qitish va qo\'llab-quvvatlash' }
              ].map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="#" 
                    className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300"
                  >
                    {currentLanguage === 'en' ? service.en :
                     currentLanguage === 'ru' ? service.ru :
                     service.uz}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:w-1/5 mb-10 md:mb-0"
          >
            <h3 className="text-lg font-semibold mb-6">
              {currentLanguage === 'en' ? 'Licenses' :
               currentLanguage === 'ru' ? 'Лицензии' :
               'Litsenziyalar'}
            </h3>
            <ul className="space-y-3">
              {[
                { en: 'Bitrix24 Licenses', ru: 'Лицензии Битрикс24', uz: 'Bitrix24 litsenziyalari' },
                { en: 'amoCRM Licenses', ru: 'Лицензии amoCRM', uz: 'amoCRM litsenziyalari' },
                { en: 'MySklad Plans', ru: 'Тарифы МойСклад', uz: 'MySklad tariflari' }
              ].map((license, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="#" 
                    className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300"
                  >
                    {currentLanguage === 'en' ? license.en :
                     currentLanguage === 'ru' ? license.ru :
                     license.uz}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="md:w-1/5"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col space-y-4"
            >
              <h3 className="text-novapro-beige text-lg font-semibold">{t.nav.contact}</h3>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                viewport={{ once: true }}
                className="flex items-center"
              >
                <Phone className="text-novapro-teal mr-2" size={18} />
                <span>+998 97 138 09 97</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <Mail size={20} className="text-novapro-teal" />
                <motion.a 
                  whileHover={{ scale: 1.05 }}
                  href="mailto:info@novapro.uz" 
                  className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300"
                >
                  info@novapro.uz
                </motion.a>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <MapPin size={20} className="text-novapro-teal" />
                <span className="text-novapro-beige">Tashkent, Uzbekistan</span>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 mt-8"
            >
              <h3 className="text-lg font-semibold text-novapro-beige">{t.footer.followUs}</h3>
              <div className="flex space-x-4 items-center">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.facebook.com/novaprouz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.linkedin.com/company/novaprouz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.instagram.com/novaprouz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  href="https://www.youtube.com/@novaprouz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300 flex items-center"
                >
                  <Youtube size={24} />
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-t border-novapro-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-novapro-gray text-sm mb-4 md:mb-0"
          >
            &copy; {new Date().getFullYear()} NovaPro. 
            {currentLanguage === 'en' ? ' All rights reserved.' :
             currentLanguage === 'ru' ? ' Все права защищены.' :
             ' Barcha huquqlar himoyalangan.'}
          </motion.p>
          <div className="flex space-x-6">
            {[
              { en: 'Privacy Policy', ru: 'Политика конфиденциальности', uz: 'Maxfiylik siyosati' },
              { en: 'Terms of Service', ru: 'Условия использования', uz: 'Xizmat ko\'rsatish shartlari' }
            ].map((link, index) => (
              <motion.a
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                href="#" 
                className="text-novapro-gray hover:text-novapro-teal text-sm transition-colors duration-300"
              >
                {currentLanguage === 'en' ? link.en :
                 currentLanguage === 'ru' ? link.ru :
                 link.uz}
              </motion.a>
            ))}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop} 
              className="text-novapro-teal hover:text-novapro-beige transition-colors duration-300 flex items-center"
            >
              <ArrowUp size={16} className="mr-1" /> 
              {currentLanguage === 'en' ? 'Back to Top' :
               currentLanguage === 'ru' ? 'Наверх' :
               'Tepaga qaytish'}
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
