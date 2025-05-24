import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';

const Articles = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  const articles = [
    {
      id: 1,
      title: {
        en: "5 Ways Automation Can Boost Your Company's Efficiency",
        ru: '5 способов повышения эффективности компании с помощью автоматизации',
        uz: 'Kompaniyangiz samaradorligini oshirishning 5 ta usuli'
      },
      description: {
        en: 'Discover how implementing automation in key business areas can significantly increase productivity and reduce operational costs.',
        ru: 'Узнайте, как внедрение автоматизации в ключевых бизнес-областях может значительно повысить производительность и снизить операционные расходы.',
        uz: 'Asosiy biznes sohalarida avtomatlashtirish qanday qilib samaradorlikni sezilarli darajada oshirishi va operatsion xarajatlarni kamaytirishi mumkinligini bilib oling.'
      },
      image: '/images/WebSiteDevelopmen.jpeg',
      author: 'Sophia Chen',
      date: 'March 28, 2025',
      readTime: '7'
    },
    {
      id: 2,
      title: {
        en: 'Choosing the Right Automation Tools for Your Business',
        ru: 'Выбор правильных инструментов автоматизации для вашего бизнеса',
        uz: 'Biznesingiz uchun to\'g\'ri avtomatlashtirish vositalarini tanlash'
      },
      description: {
        en: 'A comprehensive guide to selecting automation solutions that align with your specific business needs and objectives.',
        ru: 'Полное руководство по выбору решений для автоматизации, соответствующих конкретным потребностям и целям вашего бизнеса.',
        uz: 'Biznesingizning o\'ziga xos ehtiyojlari va maqsadlariga mos keladigan avtomatlashtirish yechimlarini tanlash bo\'yicha keng qamrovli qo\'llanma.'
      },
      image: '/images/Blog_2.avif',
      author: 'Daniel Wilson',
      date: 'March 15, 2025',
      readTime: '6'
    },
    {
      id: 3,
      title: {
        en: 'How Automation Drives Business Growth',
        ru: 'Как автоматизация способствует росту бизнеса',
        uz: 'Avtomatlashtirish biznes o\'sishiga qanday yordam beradi'
      },
      description: {
        en: 'Learn how automation can help your business scale efficiently and maintain a competitive edge in the market.',
        ru: 'Узнайте, как автоматизация может помочь вашему бизнесу эффективно масштабироваться и сохранять конкурентное преимущество на рынке.',
        uz: 'Avtomatlashtirish biznesingizni samarali rivojlantirishga va bozorda raqobatbardosh ustunlikni saqlab qolishga qanday yordam berishini o\'rganing.'
      },
      image: '/images/Blog_3.avif',
      author: 'Michael Brown',
      date: 'March 1, 2025',
      readTime: '8'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {currentLanguage === 'en' ? 'Our Articles' :
             currentLanguage === 'ru' ? 'Наши Статьи' :
             'Bizning Maqolalarimiz'}
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            {currentLanguage === 'en' ? 'Free articles and insights on simplifying business operations and boosting revenue through automation.' :
             currentLanguage === 'ru' ? 'Бесплатные статьи и аналитика об упрощении бизнес-операций и увеличении дохода с помощью автоматизации.' :
             'Avtomatlashtirish orqali biznes operatsiyalarini soddalashtirish va daromadni oshirish bo\'yicha bepul maqolalar va tahlillar.'}
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {articles.map((article) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#2A2A2F] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer"
              onClick={() => navigate(`/${currentLanguage}/articles/${article.id}`)}
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title[currentLanguage]}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 
                  className="text-xl font-bold mb-4 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/${currentLanguage}/articles/${article.id}`);
                  }}
                >
                  {article.title[currentLanguage]}
                </h2>
                <p className="text-gray-400 mb-6 flex-grow">
                  {article.description[currentLanguage]}
                </p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/${currentLanguage}/articles/${article.id}`);
                  }}
                  className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
                >
                  <span className="font-medium">Read full article</span>
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
            {currentLanguage === 'en' ? 'View all articles' :
             currentLanguage === 'ru' ? 'Посмотреть все статьи' :
             'Barcha maqolalarni ko\'rish'}
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Articles; 