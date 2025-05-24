import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const CaseStudiesRu = () => {
  const { setLanguage } = useLanguageStore();
  const navigate = useNavigate();

  useEffect(() => {
    setLanguage('ru');
    localStorage.setItem('language', 'ru');
  }, [setLanguage]);

  const caseStudies = [
    {
      id: 1,
      title: "Оптимизация операций для производственного совершенства",
      description: "Как мы помогли производственной компании снизить операционные затраты на 40% с помощью автоматизации и оптимизации процессов.",
      image: '/images/CaseStudies_2.avif',
      client: "ТехПроизводство",
      industry: "Производство",
      duration: "6 месяцев"
    },
    {
      id: 2,
      title: "Цифровая трансформация в розничной торговле",
      description: "Внедрение интегрированного решения для электронной коммерции, которое увеличило онлайн-продажи на 200% для розничной сети.",
      image: '/images/CaseStudies_3.avif',
      client: "РозничнаяГруппа",
      industry: "Розничная торговля",
      duration: "8 месяцев"
    },
    {
      id: 3,
      title: "Умная система управления запасами",
      description: "Разработка индивидуального решения для управления запасами, которое сократило дефицит на 85% и улучшило точность заказов.",
      image: '/images/24x.avif',
      client: "ЛогистикаПро",
      industry: "Логистика",
      duration: "4 месяца"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Кейсы
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Узнайте, как мы помогли бизнесу трансформировать свои операции и достичь впечатляющих результатов.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#2A2A2F] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer"
              onClick={() => navigate(`/ru/case-study/${study.id}`)}
            >
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-1.5 mb-4 -mt-2">
                  {study.industry === "Производство" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">1С</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Автоматизация</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Производство</span>
                    </>
                  )}
                  {study.industry === "Розничная торговля" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">МойСклад</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Розница</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Управление запасами</span>
                    </>
                  )}
                  {study.industry === "Логистика" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">HR Решения</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Подбор персонала</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Зарплата</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-4 text-yellow-400">
                  {study.title}
                </h2>
                <div className="mb-2 text-sm text-gray-400">
                  <span className="text-yellow-400">Клиент:</span> {study.client}
                </div>
                <p className="text-gray-400 mb-6 flex-grow text-base">
                  {study.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            className="px-8 py-3 bg-yellow-400 text-[#1C1C1F] rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
          >
            Смотреть все кейсы
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesRu; 