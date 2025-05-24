import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const ArticlesRu = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  useEffect(() => {
    setLanguage('ru');
    localStorage.setItem('language', 'ru');
  }, [setLanguage]);

  const articles = [
    {
      id: 1,
      title: '5 способов повышения эффективности компании с помощью автоматизации',
      description: 'Узнайте, как внедрение автоматизации в ключевых бизнес-областях может значительно повысить производительность и снизить операционные расходы.',
      image: '/images/WebSiteDevelopmen.jpeg',
      author: 'София Чен',
      date: '28 марта 2025',
      readTime: '7'
    },
    {
      id: 2,
      title: 'Выбор правильных инструментов автоматизации для вашего бизнеса',
      description: 'Полное руководство по выбору решений для автоматизации, соответствующих конкретным потребностям и целям вашего бизнеса.',
      image: '/images/Blog_2.avif',
      author: 'Даниэль Уилсон',
      date: '15 марта 2025',
      readTime: '6'
    },
    {
      id: 3,
      title: 'Как автоматизация способствует росту бизнеса',
      description: 'Узнайте, как автоматизация может помочь вашему бизнесу эффективно масштабироваться и сохранять конкурентное преимущество на рынке.',
      image: '/images/Blog_3.avif',
      author: 'Михаил Браун',
      date: '1 марта 2025',
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
            Наши Статьи
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Бесплатные статьи и аналитика об упрощении бизнес-операций и увеличении дохода с помощью автоматизации.
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
              onClick={() => navigate(`/ru/article/${article.id}`)}
            >
              <div className="relative h-48">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-4 text-yellow-400">
                  {article.title}
                </h2>
                <p className="text-gray-400 mb-6 flex-grow">
                  {article.description}
                </p>
                <div className="mt-auto">
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <span>{article.author}</span>
                      <span>•</span>
                      <span>{article.readTime} min read</span>
                    </div>
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300">
                    Читать далее
                    <ArrowRight size={16} />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            className="px-8 py-3 bg-yellow-400 text-[#1C1C1F] rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
          >
            Посмотреть все статьи
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlesRu; 