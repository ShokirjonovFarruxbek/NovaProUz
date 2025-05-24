import { useLanguageStore } from '../stores/useLanguageStore';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CTA = () => {
  const { currentLanguage } = useLanguageStore();

  return (
    <section className="py-20 bg-novapro-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-novapro-teal/10 to-novapro-dark/80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-novapro-beige mb-6">
              {currentLanguage === 'en' ? 'Ready to Transform Your Business?' :
               currentLanguage === 'ru' ? 'Готовы трансформировать свой бизнес?' :
               'Biznesingizni o\'zgartirishga tayyormisiz?'}
            </h2>
            <p className="text-xl text-novapro-gray mb-8">
              {currentLanguage === 'en' ? 'Let\'s work together to create innovative solutions that drive your business forward.' :
               currentLanguage === 'ru' ? 'Давайте работать вместе, чтобы создать инновационные решения, которые продвинут ваш бизнес вперед.' :
               'Keling, biznesingizni oldinga olib chiqadigan innovatsion yechimlarni yaratishda hamkorlik qilaylik.'}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to={`/${currentLanguage}/contact`}
                className="cta-button bg-novapro-teal hover:bg-novapro-teal/80 text-white transition-all duration-300 flex items-center"
              >
                {currentLanguage === 'en' ? 'Get Started' :
                 currentLanguage === 'ru' ? 'Начать' :
                 'Boshlash'}
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link
                to={`/${currentLanguage}/services`}
                className="cta-button flex items-center bg-transparent border-2 border-novapro-teal text-novapro-teal hover:bg-novapro-teal/20 hover:border-novapro-teal/80 transition-all duration-300"
              >
                {currentLanguage === 'en' ? 'Learn More' :
                 currentLanguage === 'ru' ? 'Узнать больше' :
                 'Batafsil'}
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-novapro-teal/10 flex items-center justify-center">
              <div className="text-6xl font-bold text-novapro-teal">
                {currentLanguage === 'en' ? 'Let\'s Talk' :
                 currentLanguage === 'ru' ? 'Давайте поговорим' :
                 'Keling, gaplashamiz'}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 