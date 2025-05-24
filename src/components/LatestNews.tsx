import { useLanguageStore } from '../stores/useLanguageStore';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  const { currentLanguage } = useLanguageStore();

  const news = [
    {
      date: "2024-03-15",
      title: {
        en: "New Automation Solutions Released",
        ru: "Выпущены новые решения по автоматизации",
        uz: "Yangi avtomatlashtirish yechimlari chiqarildi"
      },
      excerpt: {
        en: "Discover our latest automation tools designed to streamline your business processes",
        ru: "Узнайте о наших последних инструментах автоматизации, разработанных для оптимизации бизнес-процессов",
        uz: "Biznes jarayonlaringizni optimallashtirish uchun ishlab chiqilgan so'nggi avtomatlashtirish vositalarimizni kashf qiling"
      },
      category: {
        en: "Product Updates",
        ru: "Обновления продуктов",
        uz: "Mahsulot yangilanishlari"
      }
    },
    {
      date: "2024-03-10",
      title: {
        en: "Industry Recognition Award",
        ru: "Награда за признание в отрасли",
        uz: "Soha tan olinishi mukofoti"
      },
      excerpt: {
        en: "NovaPro recognized for excellence in digital transformation solutions",
        ru: "NovaPro признана за превосходство в решениях цифровой трансформации",
        uz: "NovaPro raqamli transformatsiya yechimlaridagi mukammalligi uchun tan olindi"
      },
      category: {
        en: "Company News",
        ru: "Новости компании",
        uz: "Kompaniya yangiliklari"
      }
    },
    {
      date: "2024-03-05",
      title: {
        en: "Partnership Announcement",
        ru: "Объявление о партнерстве",
        uz: "Hamkorlik e'lon qilindi"
      },
      excerpt: {
        en: "Strategic partnership with leading technology providers to enhance our services",
        ru: "Стратегическое партнерство с ведущими технологическими компаниями для улучшения наших услуг",
        uz: "Xizmatlarimizni yaxshilash uchun yetakchi texnologiya provayderlari bilan strategik hamkorlik"
      },
      category: {
        en: "Partnerships",
        ru: "Партнерства",
        uz: "Hamkorliklar"
      }
    }
  ];

  return (
    <section className="py-20 bg-novapro-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-novapro-dark/50 to-novapro-dark/80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-novapro-beige mb-4">
            {currentLanguage === 'en' ? 'Latest News & Updates' :
             currentLanguage === 'ru' ? 'Последние новости и обновления' :
             'So\'nggi yangiliklar va yangilanishlar'}
          </h2>
          <p className="text-xl text-novapro-gray max-w-3xl mx-auto">
            {currentLanguage === 'en' ? 'Stay informed about our latest developments and industry insights' :
             currentLanguage === 'ru' ? 'Будьте в курсе наших последних разработок и отраслевых инсайтов' :
             'Bizning so\'nggi ishlanmalarimiz va soha ma\'lumotlarimizdan xabardor bo\'ling'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-novapro-dark/50 p-8 rounded-lg border border-novapro-teal/20 hover:border-novapro-teal/40 transition-colors duration-300"
            >
              <div className="flex items-center text-novapro-teal mb-4">
                <Calendar className="w-5 h-5 mr-2" />
                <span className="text-sm">
                  {new Date(item.date).toLocaleDateString(currentLanguage === 'en' ? 'en-US' : 
                                                         currentLanguage === 'ru' ? 'ru-RU' : 
                                                         'uz-UZ')}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-novapro-beige mb-3">
                {item.title[currentLanguage]}
              </h3>
              <p className="text-novapro-gray mb-4">
                {item.excerpt[currentLanguage]}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-novapro-teal">
                  {item.category[currentLanguage]}
                </span>
                <Link
                  to={`/${currentLanguage}/news`}
                  className="text-novapro-teal hover:text-novapro-teal/80 transition-colors duration-300 flex items-center"
                >
                  {currentLanguage === 'en' ? 'Read More' :
                   currentLanguage === 'ru' ? 'Читать далее' :
                   'Batafsil'}
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews; 