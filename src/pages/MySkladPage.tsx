import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';

const MySkladPage = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

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
    typeof item.name === 'object' && 
    (item.name.en === 'MySklad' || 
     item.name.ru === 'МойСклад' || 
     item.name.uz === 'MoySklad')
  );

  if (!mySkladItem) {
    return <div>Product not found</div>;
  }

  // Implementation process translations
  const implementationTitle = {
    en: 'Implementation process',
    ru: 'Процесс внедрения',
    uz: 'Joriy etish jarayoni'
  };

  const implementationSteps = [
    {
      en: 'Quick setup in 1 day',
      ru: 'Быстрая настройка за 1 день',
      uz: '1 kunda tezkor sozlash'
    },
    {
      en: 'Staff training',
      ru: 'Обучение персонала',
      uz: 'Xodimlarni o\'qitish'
    },
    {
      en: 'Technical support',
      ru: 'Техническая поддержка',
      uz: 'Texnik yordam'
    },
    {
      en: 'Regular updates',
      ru: 'Регулярные обновления',
      uz: 'Muntazam yangilanishlar'
    }
  ];

  // Final statement translations
  const finalStatements = [
    {
      en: 'Streamline your business with MySklad',
      ru: 'Оптимизируйте свой бизнес с МойСклад',
      uz: 'MoySklad bilan biznesingizni optimallashtiring'
    },
    {
      en: 'Order in business, profit in numbers',
      ru: 'Порядок в бизнесе, прибыль в цифрах',
      uz: 'Biznesda tartib, raqamlarda foyda'
    }
  ];

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

      {/* Hero Section with Background Image */}
      <div className="relative h-[60vh] mb-16">
        <div className="absolute inset-0">
          <img
            src={mySkladItem.image}
            alt={getTranslatedContent(mySkladItem.name)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1F] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {getTranslatedContent(mySkladItem.name)}
          </h1>
          <p className="text-2xl text-white">
            {getTranslatedContent(mySkladItem.description)}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
        {/* Problems Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#FFC900] mb-8">
            {currentLanguage === 'en' ? 'What problems do we solve?' :
             currentLanguage === 'ru' ? 'Какие проблемы мы решаем?' :
             'Qanday muammolarni hal qilamiz?'}
          </h2>
          <ul className="space-y-4">
            {[
              currentLanguage === 'en' ? 'Chaos in inventory management?' :
              currentLanguage === 'ru' ? 'Хаос в управлении запасами?' :
              'Zaxiralarni boshqarishda tartibsizlik?',
              currentLanguage === 'en' ? 'Manual document processing?' :
              currentLanguage === 'ru' ? 'Ручная обработка документов?' :
              'Hujjatlarni qo\'lda qayta ishlash?',
              currentLanguage === 'en' ? 'No real-time data?' :
              currentLanguage === 'ru' ? 'Нет данных в реальном времени?' :
              'Real vaqt ma\'lumotlari yo\'q?',
              currentLanguage === 'en' ? 'Complex reporting?' :
              currentLanguage === 'ru' ? 'Сложная отчетность?' :
              'Murakkab hisobotlar?'
            ].map((problem, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="text-[#FF8243] mr-2">–</span>
                {problem}
              </li>
            ))}
          </ul>
        </section>

        {/* Solutions Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#FFC900] mb-8">
            {currentLanguage === 'en' ? 'What can MySklad do?' :
             currentLanguage === 'ru' ? 'Что может MySklad?' :
             'MySklad nima qila oladi?'}
          </h2>
          <ul className="space-y-4">
            {mySkladItem.features.map((feature, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="text-[#FF8243] mr-2">–</span>
                {getTranslatedContent(feature)}
              </li>
            ))}
          </ul>
        </section>

        {/* Implementation Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#FFC900] mb-8">
            {implementationTitle[currentLanguage]}
          </h2>
          <ul className="space-y-4">
            {implementationSteps.map((step, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="text-[#FF8243] mr-2">–</span>
                {step[currentLanguage]}
              </li>
            ))}
          </ul>
        </section>

        {/* Final Statement */}
        <section className="text-center space-y-4">
          <p className="text-white text-xl">
            {finalStatements[0][currentLanguage]}
          </p>
          <p className="text-[#FFC900] text-xl">
            {finalStatements[1][currentLanguage]}
          </p>
        </section>
      </div>
    </div>
  );
};

export default MySkladPage; 