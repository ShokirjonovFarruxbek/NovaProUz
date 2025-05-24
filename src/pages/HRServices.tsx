import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Footer from '../components/Footer';

const HRServices = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/${currentLanguage}/products`);
  };

  return (
    <div className="min-h-screen bg-novapro-dark text-white">
      <main className="pt-24">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-4 py-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBack}
            className="flex items-center text-[#FFC900] hover:text-[#FF8243] transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            {currentLanguage === 'en' ? 'Back to Products' :
             currentLanguage === 'ru' ? 'Назад к продуктам' :
             'Mahsulotlarga qaytish'}
          </motion.button>
        </div>
        
        {/* Hero Section */}
        <div className="relative h-[60vh]">
          <img
            src="/images/OurProducts.avif"
            alt={t.hrServices.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-novapro-dark/50 via-novapro-dark/70 to-novapro-dark"></div>
          <div className="absolute inset-0 flex items-center justify-center px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                {t.hrServices.title}
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white">
                {t.hrServices.description}
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              {t.hrServices.problems.title}
            </h2>
            <ul className="space-y-3 list-none text-sm md:text-base">
              {t.hrServices.problems.items.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">–</span>
                  {problem}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              {t.hrServices.services.title}
            </h2>
            <ul className="space-y-3 list-none text-sm md:text-base">
              {t.hrServices.services.items.map((service, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">–</span>
                  {service}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-12 md:mb-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">
              {t.hrServices.benefits.title}
            </h2>
            <ul className="space-y-3 list-none text-sm md:text-base">
              {t.hrServices.benefits.items.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">–</span>
                  {benefit}
                </li>
              ))}
            </ul>
          </section>

          <div className="text-center space-y-4">
            <p className="text-lg md:text-xl text-white">
              {currentLanguage === 'ru' ? 'Пока другие ищут — вы уже наняли.' :
               currentLanguage === 'uz' ? 'Boshqalar qidirayotganda — siz allaqachon ishga olasiz.' :
               'While others are searching — you have already hired.'}
            </p>
            <p className="text-lg md:text-xl text-white">
              {currentLanguage === 'ru' ? 'HR с гарантией результата — это к нам.' :
               currentLanguage === 'uz' ? 'Natija kafolati bilan HR — bu bizga.' :
               'HR with guaranteed results — that\'s us.'}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HRServices; 