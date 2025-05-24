import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  const caseStudies = [
    {
      id: 1,
      title: {
        en: "Streamlining Operations for Manufacturing Excellence",
        ru: "Оптимизация операций для производственного совершенства",
        uz: "Ishlab chiqarish mukammalligini ta'minlash uchun operatsiyalarni optimallashtirish"
      },
      description: {
        en: "How we helped a manufacturing company reduce operational costs by 40% through automation and process optimization.",
        ru: "Как мы помогли производственной компании сократить операционные расходы на 40% с помощью автоматизации и оптимизации процессов.",
        uz: "Avtomatlashtirish va jarayonlarni optimallashtirish orqali ishlab chiqarish kompaniyasiga operatsion xarajatlarni 40% ga qisqartirishga qanday yordam berdik."
      },
      image: '/images/CaseStudies_2.avif',
      client: "TechManufacture Co.",
      industry: "Manufacturing",
      duration: "6 months"
    },
    {
      id: 2,
      title: {
        en: "Digital Transformation in Retail",
        ru: "Цифровая трансформация в розничной торговле",
        uz: "Chakana savdoda raqamli transformatsiya"
      },
      description: {
        en: "Implementing an integrated e-commerce solution that increased online sales by 200% for a retail chain.",
        ru: "Внедрение интегрированного решения электронной коммерции, которое увеличило онлайн-продажи розничной сети на 200%.",
        uz: "Chakana savdo tarmog'i uchun onlayn savdoni 200% ga oshirgan integratsiyalashgan elektron tijorat yechimini joriy etish."
      },
      image: '/images/CaseStudies_3.avif',
      client: "RetailPro Group",
      industry: "Retail",
      duration: "8 months"
    },
    {
      id: 3,
      title: {
        en: "Smart Inventory Management System",
        ru: "Умная система управления запасами",
        uz: "Aqlli inventar boshqaruv tizimi"
      },
      description: {
        en: "Developing a custom inventory management solution that reduced stockouts by 85% and improved order accuracy.",
        ru: "Разработка индивидуального решения для управления запасами, которое сократило дефицит товаров на 85% и повысило точность заказов.",
        uz: "Tovar yetishmasligini 85% ga kamaytirgan va buyurtmalar aniqligini oshirgan maxsus inventar boshqaruv yechimini ishlab chiqish."
      },
      image: '/images/24x.avif',
      client: "LogisticsPro Inc.",
      industry: "Logistics",
      duration: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLanguage === 'en' ? 'Case Studies' :
             currentLanguage === 'ru' ? 'Кейсы' :
             'Loyihalar'}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {currentLanguage === 'en' ? "Explore how we've helped businesses transform their operations and achieve remarkable results." :
             currentLanguage === 'ru' ? 'Узнайте, как мы помогли компаниям трансформировать их деятельность и достичь замечательных результатов.' :
             'Bizneslarni qanday qilib o\'zgartirganimiz va ajoyib natijalarga erishganimizni ko\'ring.'}
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
              className="bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col"
            >
              <div className="relative h-[280px]">
                <img
                  src={study.image}
                  alt={study.title[currentLanguage]}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-1.5 mb-4 -mt-2">
                  {study.industry === "Manufacturing" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">1C</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Process Automation</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Manufacturing</span>
                    </>
                  )}
                  {study.industry === "Retail" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">MySklad</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Retail</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Inventory Management</span>
                    </>
                  )}
                  {study.industry === "Logistics" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">HR Solutions</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Recruitment</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Payroll</span>
                    </>
                  )}
                </div>
                <h2 className="text-2xl font-bold mb-3 text-white">
                  {study.title[currentLanguage]}
                </h2>
                <div className="mb-2 text-sm text-gray-400">
                  <span className="text-yellow-400">Client:</span> {study.client}
                </div>
                <p className="text-gray-400 mb-6 flex-grow text-base">
                  {study.description[currentLanguage]}
                </p>
                <button 
                  onClick={() => navigate(`/${currentLanguage}/case-studies/${study.id}`)}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <span className="font-medium">
                    {currentLanguage === 'en' ? 'Read full case study' :
                     currentLanguage === 'ru' ? 'Читать полностью' :
                     'To\'liq o\'qish'}
                  </span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            className="px-8 py-3 bg-yellow-400 text-[#1C1C1F] rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
          >
            {currentLanguage === 'en' ? 'View all case studies' :
             currentLanguage === 'ru' ? 'Посмотреть все кейсы' :
             'Barcha loyihalarni ko\'rish'}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies; 