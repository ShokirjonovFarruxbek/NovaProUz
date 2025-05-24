import { useLanguageStore } from '../stores/useLanguageStore';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Database, 
  Cloud, 
  Code2 
} from 'lucide-react';

const Partners = () => {
  const { currentLanguage } = useLanguageStore();

  const partners = [
    {
      name: "Microsoft",
      icon: <Building2 className="w-16 h-16" />,
      description: {
        en: "Global Technology Partner",
        ru: "Глобальный технологический партнер",
        uz: "Global texnologik hamkor"
      }
    },
    {
      name: "Oracle",
      icon: <Database className="w-16 h-16" />,
      description: {
        en: "Enterprise Solutions Partner",
        ru: "Партнер по корпоративным решениям",
        uz: "Korporativ yechimlar hamkori"
      }
    },
    {
      name: "AWS",
      icon: <Cloud className="w-16 h-16" />,
      description: {
        en: "Cloud Services Partner",
        ru: "Партнер по облачным сервисам",
        uz: "Bulut xizmatlari hamkori"
      }
    },
    {
      name: "SAP",
      icon: <Code2 className="w-16 h-16" />,
      description: {
        en: "Business Software Partner",
        ru: "Партнер по бизнес-программному обеспечению",
        uz: "Biznes dasturiy ta'minot hamkori"
      }
    }
  ];

  return (
    <section className="py-20 bg-novapro-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-novapro-beige mb-4">
            {currentLanguage === 'en' ? 'Our Trusted Partners' :
             currentLanguage === 'ru' ? 'Наши надежные партнеры' :
             'Bizning ishonchli hamkorlarimiz'}
          </h2>
          <p className="text-xl text-novapro-gray max-w-3xl mx-auto">
            {currentLanguage === 'en' ? 'Working with industry leaders to deliver excellence' :
             currentLanguage === 'ru' ? 'Работаем с лидерами отрасли для достижения совершенства' :
             'Mukammallikka erishish uchun soha yetakchilari bilan ishlaymiz'}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <div className="w-32 h-32 mb-4 relative flex items-center justify-center text-novapro-teal/50 hover:text-novapro-teal transition-colors duration-300">
                {partner.icon}
              </div>
              <h3 className="text-novapro-beige font-semibold mb-2">
                {partner.name}
              </h3>
              <p className="text-novapro-gray text-sm text-center">
                {partner.description[currentLanguage]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners; 