import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';

const CaseStudyPage = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageStore();

  const handleBack = () => {
    navigate(`/${currentLanguage}/case-studies`);
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

      {/* Empty Page Message */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">
          {currentLanguage === 'en' ? 'Sorry, this page is empty' :
           currentLanguage === 'ru' ? 'Извините, эта страница пуста' :
           'Kechirasiz, bu sahifa bo\'sh'}
        </h1>
      </div>
    </div>
  );
};

export default CaseStudyPage; 