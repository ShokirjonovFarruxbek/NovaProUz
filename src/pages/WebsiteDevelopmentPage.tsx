import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';

const WebsiteDevelopmentPage = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageStore();
  const translations = useTranslation(currentLanguage);

  const handleBack = () => {
    navigate(`/${currentLanguage}/products`);
  };

  return (
    <div className="min-h-screen bg-novapro-dark">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <button
          onClick={handleBack}
          className="flex items-center text-[#FFC900] hover:text-[#FF8243] transition-colors duration-300 text-lg px-4 py-2"
        >
          <ArrowLeft className="mr-2 h-6 w-6" />
          {currentLanguage === 'en' ? 'Back' :
           currentLanguage === 'ru' ? 'Назад' :
           'Orqaga'}
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] mb-16">
        <div className="absolute inset-0">
          <img
            src="/images/WebSiteDevelopmen.jpeg"
            alt="Website Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1F] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {translations.websiteDevelopment.name[currentLanguage]}
          </h1>
          <p className="text-2xl text-white">
            {translations.websiteDevelopment.description[currentLanguage]}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
        {/* Problems Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#FFC900] mb-8">
            {translations.websiteDevelopment.problems.title[currentLanguage]}
          </h2>
          <ul className="space-y-4">
            {translations.websiteDevelopment.problems.items.map((problem, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="text-[#FF8243] mr-2">–</span>
                {problem[currentLanguage]}
              </li>
            ))}
          </ul>
        </section>

        {/* Services Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#FFC900] mb-8">
            {translations.websiteDevelopment.services.title[currentLanguage]}
          </h2>
          <ul className="space-y-4">
            {translations.websiteDevelopment.services.items.map((service, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="text-[#FF8243] mr-2">–</span>
                {service[currentLanguage]}
              </li>
            ))}
          </ul>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#FFC900] mb-8">
            {translations.websiteDevelopment.benefits.title[currentLanguage]}
          </h2>
          <ul className="space-y-4">
            {translations.websiteDevelopment.benefits.items.map((benefit, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="text-[#FF8243] mr-2">–</span>
                {benefit[currentLanguage]}
              </li>
            ))}
          </ul>
        </section>

        {/* Final Message */}
        <section className="text-center space-y-4">
          <p className="text-white text-xl">
            {translations.websiteDevelopment.finalMessage[0][currentLanguage]}
          </p>
          <p className="text-[#FFC900] text-xl">
            {translations.websiteDevelopment.finalMessage[1][currentLanguage]}
          </p>
        </section>
      </div>
    </div>
  );
};

export default WebsiteDevelopmentPage; 