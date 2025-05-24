import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const ArticlesEn = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  useEffect(() => {
    setLanguage('en');
    localStorage.setItem('language', 'en');
  }, [setLanguage]);

  const articles = [
    {
      id: 1,
      title: "5 Ways Automation Can Boost Your Company's Efficiency",
      description: 'Discover how implementing automation in key business areas can significantly increase productivity and reduce operational costs.',
      image: '/images/WebSiteDevelopmen.jpeg',
      author: 'Sophia Chen',
      date: 'March 28, 2025',
      readTime: '7'
    },
    {
      id: 2,
      title: 'Choosing the Right Automation Tools for Your Business',
      description: 'A comprehensive guide to selecting automation solutions that align with your specific business needs and objectives.',
      image: '/images/Blog_2.avif',
      author: 'Daniel Wilson',
      date: 'March 15, 2025',
      readTime: '6'
    },
    {
      id: 3,
      title: 'How Automation Drives Business Growth',
      description: 'Learn how automation can help your business scale efficiently and maintain a competitive edge in the market.',
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
            Our Articles
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Free articles and insights on simplifying business operations and boosting revenue through automation.
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
              onClick={() => navigate(`/en/article/${article.id}`)}
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
                    Read more
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
            View all articles
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArticlesEn; 