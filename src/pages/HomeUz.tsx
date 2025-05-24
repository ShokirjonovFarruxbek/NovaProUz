import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Navbar from '../components/Navbar';

const HomeUz: React.FC = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  const [caseStudies, setCaseStudies] = useState([]);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch services, case studies, and articles
    // This is a placeholder and should be replaced with actual data fetching logic
    setServices([
      { id: 1, icon: '/path/to/service1.png', title: 'Service 1', description: 'Description of Service 1', path: 'service1' },
      { id: 2, icon: '/path/to/service2.png', title: 'Service 2', description: 'Description of Service 2', path: 'service2' },
      { id: 3, icon: '/path/to/service3.png', title: 'Service 3', description: 'Description of Service 3', path: 'service3' },
    ]);
    setCaseStudies([
      { id: 1, image: '/path/to/caseStudy1.jpg', title: 'Case Study 1', description: 'Description of Case Study 1', industry: 'Ishlab chiqarish' },
      { id: 2, image: '/path/to/caseStudy2.jpg', title: 'Case Study 2', description: 'Description of Case Study 2', industry: 'Chakka savdo' },
      { id: 3, image: '/path/to/caseStudy3.jpg', title: 'Case Study 3', description: 'Description of Case Study 3', industry: 'Logistika' },
    ]);
    setArticles([
      { id: 1, image: '/path/to/article1.jpg', title: 'Article 1', description: 'Description of Article 1', author: 'Author 1', readTime: '5 min' },
      { id: 2, image: '/path/to/article2.jpg', title: 'Article 2', description: 'Description of Article 2', author: 'Author 2', readTime: '7 min' },
      { id: 3, image: '/path/to/article3.jpg', title: 'Article 3', description: 'Description of Article 3', author: 'Author 3', readTime: '3 min' },
    ]);
  }, []);

  return (
    <div>
      <Navbar />
      <main className="pt-40 pb-16 px-4 max-w-7xl mx-auto">
        {/* Hero Section */}
        <section className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl font-bold mb-6"
          >
            {t.home.hero.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-xl max-w-3xl mx-auto mb-12"
          >
            {t.home.hero.subtitle}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link
              to="/uz/services"
              className="px-8 py-4 bg-yellow-400 text-[#1C1C1F] rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
            >
              {t.home.hero.cta}
            </Link>
            <Link
              to="/uz/contact"
              className="px-8 py-4 border border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-400/10 transition-colors duration-300"
            >
              {t.home.hero.contact}
            </Link>
          </motion.div>
        </section>

        {/* Services Preview Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.home.services.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.home.services.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#2A2A2F] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  <img src={service.icon} alt={service.title} className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{service.title}</h3>
                  <p className="text-gray-400 text-lg">{service.description}</p>
                </div>
                <Link
                  to={`/uz/services/${service.path}`}
                  className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                >
                  {t.home.services.learnMore}
                  <ArrowRight className="ml-2" size={20} />
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Case Studies Preview Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.home.caseStudies.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.home.caseStudies.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#2A2A2F] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {study.industry === "Ishlab chiqarish" && (
                      <>
                        <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">1S</span>
                        <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Avtomatizatsiya</span>
                      </>
                    )}
                    {study.industry === "Chakka savdo" && (
                      <>
                        <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">MoySklad</span>
                        <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Chakka savdo</span>
                      </>
                    )}
                    {study.industry === "Logistika" && (
                      <>
                        <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">HR Yechimlar</span>
                        <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Kadrlarni tanlash</span>
                      </>
                    )}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{study.title}</h3>
                  <p className="text-gray-400 text-lg mb-4">{study.description}</p>
                  <Link
                    to={`/uz/case-study/${study.id}`}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    {t.home.caseStudies.readMore}
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Articles Preview Section */}
        <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">{t.home.articles.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">{t.home.articles.subtitle}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.map((article) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-[#2A2A2F] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-yellow-400 text-sm">{article.author}</span>
                    <span className="text-gray-400 text-sm">{article.readTime}</span>
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-yellow-400">{article.title}</h3>
                  <p className="text-gray-400 text-lg mb-4">{article.description}</p>
                  <Link
                    to={`/uz/article/${article.id}`}
                    className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
                  >
                    {t.home.articles.readMore}
                    <ArrowRight className="ml-2" size={20} />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-[#2A2A2F] rounded-lg p-12"
          >
            <h2 className="text-4xl font-bold mb-4">{t.home.cta.title}</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">{t.home.cta.subtitle}</p>
            <Link
              to="/uz/contact"
              className="px-8 py-4 bg-yellow-400 text-[#1C1C1F] rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
            >
              {t.home.cta.button}
            </Link>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default HomeUz; 