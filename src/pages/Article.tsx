'use client'
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Article = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  const handleBack = () => {
    localStorage.setItem('language', currentLanguage);
    navigate('/');
    setTimeout(() => {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6 text-yellow-400"
          >
            {currentLanguage === 'en' ? 'Article' :
             currentLanguage === 'ru' ? 'Статья' :
             'Maqola'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            {currentLanguage === 'en' ? 'Read our latest insights and updates' :
             currentLanguage === 'ru' ? 'Читайте наши последние идеи и обновления' :
             'Bizning so\'nggi fikrlarimiz va yangilanishlarimizni o\'qing'}
          </motion.p>
        </section>

        {/* Main Content Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* Left Column - Article Content */}
            <div className="lg:w-2/3 space-y-16">
              {/* Article Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                  {/* Article title will be dynamically inserted here */}
                </h2>
                <div className="mb-8 flex items-center text-gray-400">
                  <span className="mr-4">
                    {/* Author name will be dynamically inserted here */}
                  </span>
                  <span>
                    {/* Publication date will be dynamically inserted here */}
                  </span>
                </div>
              </motion.div>

              {/* Article Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="prose prose-invert max-w-none"
              >
                {/* Article content will be dynamically inserted here */}
              </motion.div>
            </div>

            {/* Right Column - Related Articles */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-[#2A2A2F] p-6 rounded-lg"
              >
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">
                  {currentLanguage === 'en' ? 'Related Articles' :
                   currentLanguage === 'ru' ? 'Похожие статьи' :
                   'O\'xshash maqolalar'}
                </h3>
                <ul className="space-y-4">
                  {/* Related articles will be dynamically inserted here */}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Article; 