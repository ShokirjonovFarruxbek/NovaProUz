import { useLanguageStore } from '../stores/useLanguageStore';
import { motion } from 'framer-motion';
import { 
  Search, 
  Lightbulb, 
  Code, 
  CheckCircle 
} from 'lucide-react';

const Process = () => {
  const { currentLanguage } = useLanguageStore();

  const steps = [
    {
      icon: <Search className="w-8 h-8" />,
      title: {
        en: "Analysis",
        ru: "Анализ",
        uz: "Tahlil"
      },
      description: {
        en: "We analyze your business needs and requirements to understand your goals",
        ru: "Мы анализируем потребности и требования вашего бизнеса",
        uz: "Biz sizning biznes ehtiyojlaringiz va talablaringizni tahlil qilamiz"
      }
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: {
        en: "Strategy",
        ru: "Стратегия",
        uz: "Strategiya"
      },
      description: {
        en: "We develop a customized strategy to achieve your objectives",
        ru: "Мы разрабатываем индивидуальную стратегию для достижения ваших целей",
        uz: "Biz sizning maqsadlaringizga erishish uchun individual strategiya ishlab chiqamiz"
      }
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: {
        en: "Implementation",
        ru: "Внедрение",
        uz: "Joriy etish"
      },
      description: {
        en: "We implement the solution with best practices and modern technologies",
        ru: "Мы внедряем решение с использованием лучших практик и современных технологий",
        uz: "Biz yechimni eng yaxshi amaliyotlar va zamonaviy texnologiyalar yordamida joriy qilamiz"
      }
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: {
        en: "Support",
        ru: "Поддержка",
        uz: "Qo'llab-quvvatlash"
      },
      description: {
        en: "We provide ongoing support and optimization to ensure success",
        ru: "Мы обеспечиваем постоянную поддержку и оптимизацию",
        uz: "Biz muvaffaqiyatni ta'minlash uchun doimiy qo'llab-quvvatlash va optimallashtirishni ta'minlaymiz"
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
            {currentLanguage === 'en' ? 'Our Process' :
             currentLanguage === 'ru' ? 'Наш процесс' :
             'Bizning jarayonimiz'}
          </h2>
          <p className="text-xl text-novapro-gray max-w-3xl mx-auto">
            {currentLanguage === 'en' ? 'How we work to deliver the best results' :
             currentLanguage === 'ru' ? 'Как мы работаем для достижения лучших результатов' :
             'Eng yaxshi natijalarni olish uchun qanday ishlaymiz'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-novapro-dark/50 p-8 rounded-lg border border-novapro-teal/20 hover:border-novapro-teal/40 transition-colors duration-300 h-full">
                <div className="text-novapro-teal mb-4">
                  {step.icon}
                </div>
                <h3 className="text-xl font-semibold text-novapro-beige mb-3">
                  {step.title[currentLanguage]}
                </h3>
                <p className="text-novapro-gray">
                  {step.description[currentLanguage]}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-novapro-teal/20" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process; 