import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { type LanguageCode } from '../config/languages';

const HRServicePage = () => {
  const navigate = useNavigate();
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage as LanguageCode);

  const handleBack = () => {
    navigate(`/${currentLanguage}/products`);
  };

  const getTranslatedContent = (content: any) => {
    if (typeof content === 'object' && content !== null) {
      return content[currentLanguage] || content.en;
    }
    return content;
  };

  // Find the HR service item from the products section
  const hrServiceItem = t.products.items.find(item => {
    if (typeof item.name === 'object') {
      return item.name[currentLanguage] === 'HR Services' || 
             item.name[currentLanguage] === 'HR Услуги' || 
             item.name[currentLanguage] === 'HR Xizmatlar';
    }
    return false;
  });

  if (!hrServiceItem) {
    return <div>Service not found</div>;
  }

  // Problems section translations
  const problemsTitle = {
    en: "What problems do we solve?",
    ru: "Какие проблемы мы решаем?",
    uz: "Qanday muammolarni hal qilamiz?"
  };

  const problems = [
    {
      en: "Spending too much time on recruitment?",
      ru: "Тратите слишком много времени на подбор персонала?",
      uz: "Xodimlarni tanlashga ko'p vaqt sarflaysizmi?"
    },
    {
      en: "Tired of sorting through hundreds of resumes and endless interviews?",
      ru: "Устали от сортировки сотен резюме и бесконечных собеседований?",
      uz: "Yuzlab rezyumelarni ko'rib chiqish va cheksiz suhbatlardan charchadingizmi?"
    },
    {
      en: "New employees not passing probation?",
      ru: "Новые сотрудники не проходят испытательный срок?",
      uz: "Yangi xodimlar sinov muddatidan o'ta olmayaptimi?"
    },
    {
      en: "High turnover and low team motivation?",
      ru: "Высокая текучесть кадров и низкая мотивация команды?",
      uz: "Yuqori xodimlar almashinuv va past jamoa motivatsiyasi?"
    },
    {
      en: "Need an HR system but no time and resources to launch it?",
      ru: "Нужна HR-система, но нет времени и ресурсов для её запуска?",
      uz: "HR tizimi kerak, lekin uni ishga tushirish uchun vaqt va resurslar yo'qmi?"
    }
  ];

  // Services section translations
  const servicesTitle = {
    en: "What do we do?",
    ru: "Что мы делаем?",
    uz: "Nima qilamiz?"
  };

  const services = [
    {
      en: "Full-cycle recruitment automation",
      ru: "Автоматизация полного цикла подбора персонала",
      uz: "To'liq tsiklli xodimlarni tanlashni avtomatlashtirish"
    },
    {
      en: "Digital employee onboarding",
      ru: "Цифровая адаптация сотрудников",
      uz: "Raqamli xodimlarni jalb qilish"
    },
    {
      en: "Performance tracking systems",
      ru: "Системы отслеживания эффективности",
      uz: "Ish samaradorligini kuzatish tizimlari"
    },
    {
      en: "HR document automation",
      ru: "Автоматизация HR-документов",
      uz: "HR hujjatlarini avtomatlashtirish"
    }
  ];

  // Benefits section translations
  const benefitsTitle = {
    en: "Why should you work with us?",
    ru: "Почему стоит работать с нами?",
    uz: "Nega biz bilan ishlashingiz kerak?"
  };

  const benefits = [
    {
      en: "Save your precious time — you do business, we find people",
      ru: "Экономьте ваше драгоценное время — вы занимаетесь бизнесом, мы ищем людей",
      uz: "Qimmatli vaqtingizni tejang — siz biznes bilan shug'ullanasiz, biz odamlarni topamiz"
    },
    {
      en: "Closing vacancies — from 2 days",
      ru: "Закрытие вакансий — от 2 дней",
      uz: "Bo'sh o'rinlarni to'ldirish — 2 kundan boshlab"
    },
    {
      en: "HR audit and strategy for your business",
      ru: "HR-аудит и стратегия для вашего бизнеса",
      uz: "Biznesingiz uchun HR audit va strategiya"
    },
    {
      en: "Outsourcing format — without hiring in-house",
      ru: "Формат аутсорсинга — без найма в штат",
      uz: "Autsorsing formati — xodimlarni ishga olmasdan"
    }
  ];

  // Final statements translations
  const finalStatements = [
    {
      en: "While others are searching — you have already hired.",
      ru: "Пока другие ищут — вы уже наняли.",
      uz: "Boshqalar qidirayotganda — siz allaqachon ishga olgansiz."
    },
    {
      en: "HR with guaranteed results — that's us.",
      ru: "HR с гарантированным результатом — это мы.",
      uz: "Kafolatlangan natija bilan HR — bu biz."
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
            src={hrServiceItem.image || "/images/OurProducts.avif"}
            alt={getTranslatedContent(hrServiceItem.name)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1F] via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-5xl font-bold text-white mb-4">
            {getTranslatedContent(hrServiceItem.name)}
          </h1>
          <p className="text-2xl text-white">
            {getTranslatedContent(hrServiceItem.description)}
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-16">
        {/* Problems Section */}
        <section>
          <h2 className="text-3xl font-semibold text-[#FFC900] mb-8">
            {problemsTitle[currentLanguage]}
          </h2>
          <ul className="space-y-4">
            {problems.map((problem, index) => (
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
            {servicesTitle[currentLanguage]}
          </h2>
          <ul className="space-y-4">
            {services.map((service, index) => (
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
            {benefitsTitle[currentLanguage]}
          </h2>
          <ul className="space-y-4">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-center text-white">
                <span className="text-[#FF8243] mr-2">–</span>
                {benefit[currentLanguage]}
              </li>
            ))}
          </ul>
        </section>

        {/* Final Statement */}
        <section className="text-center space-y-4">
          <p className="text-xl text-white">
            {finalStatements[0][currentLanguage]}
          </p>
          <p className="text-xl text-[#FFC900]">
            {finalStatements[1][currentLanguage]}
          </p>
        </section>
      </div>
    </div>
  );
};

export default HRServicePage; 