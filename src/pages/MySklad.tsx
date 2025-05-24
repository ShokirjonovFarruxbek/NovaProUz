import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const MySklad = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(`/${currentLanguage}/products`);
  };

  const getTranslatedContent = (content: any) => {
    if (typeof content === 'object' && content !== null) {
      return content[currentLanguage] || content.en;
    }
    return content;
  };

  const mySkladItem = t.products.items.find(item => 
    item.name.en === 'MySklad' || 
    item.name.ru === 'МойСклад' || 
    item.name.uz === 'MoySklad'
  );

  if (!mySkladItem) {
    return <div>Product not found</div>;
  }

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
            src={mySkladItem.image}
            alt="MySklad"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-novapro-dark/50 via-novapro-dark/70 to-novapro-dark"></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6">
                {getTranslatedContent(mySkladItem.name)}
              </h1>
              <p className="text-xl text-gray-300">{getTranslatedContent(mySkladItem.description)}</p>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Problems Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">{getTranslatedContent(mySkladItem.problems.title)}</h2>
            <ul className="space-y-4">
              {mySkladItem.problems.items.map((problem, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">–</span>
                  <span className="text-gray-300">{getTranslatedContent(problem)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">{getTranslatedContent(mySkladItem.capabilities.title)}</h2>
            <ul className="space-y-4">
              {mySkladItem.capabilities.items.map((capability, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">–</span>
                  <span className="text-gray-300">{getTranslatedContent(capability)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Implementation Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6">{getTranslatedContent(mySkladItem.implementation.title)}</h2>
            <ul className="space-y-4">
              {mySkladItem.implementation.items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-yellow-400 mr-2">–</span>
                  <span className="text-gray-300">{getTranslatedContent(item)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Final Message */}
          <div className="text-center">
            <p className="text-xl text-gray-300">{getTranslatedContent(mySkladItem.finalMessage)}</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MySklad; 