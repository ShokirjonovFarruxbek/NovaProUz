import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import { 
  Zap, 
  LineChart, 
  Users, 
  Shield, 
  Clock, 
  BarChart 
} from 'lucide-react';

const Features = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: {
        en: "Process Automation",
        ru: "Автоматизация процессов",
        uz: "Jarayonlarni avtomatlashtirish"
      },
      description: {
        en: "Streamline your operations with intelligent automation solutions",
        ru: "Оптимизируйте операции с помощью интеллектуальных решений",
        uz: "Aqlli avtomatlashtirish yechimlari bilan operatsiyalaringizni optimallashtiring"
      }
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: {
        en: "Business Analytics",
        ru: "Бизнес-аналитика",
        uz: "Biznes tahlili"
      },
      description: {
        en: "Make data-driven decisions with real-time insights",
        ru: "Принимайте решения на основе данных с помощью аналитики",
        uz: "Real vaqtda tahlil yordamida ma'lumotlarga asoslangan qarorlar qabul qiling"
      }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: {
        en: "Team Collaboration",
        ru: "Командное сотрудничество",
        uz: "Jamoa hamkorligi"
      },
      description: {
        en: "Enhance productivity with seamless team coordination",
        ru: "Повышайте продуктивность с помощью координации команды",
        uz: "Jamoa koordinatsiyasi bilan samaradorlikni oshiring"
      }
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: {
        en: "Secure Solutions",
        ru: "Безопасные решения",
        uz: "Xavfsiz yechimlar"
      },
      description: {
        en: "Enterprise-grade security for your business data",
        ru: "Корпоративная безопасность для ваших бизнес-данных",
        uz: "Biznes ma'lumotlaringiz uchun korporativ xavfsizlik"
      }
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: {
        en: "24/7 Support",
        ru: "Поддержка 24/7",
        uz: "24/7 qo'llab-quvvatlash"
      },
      description: {
        en: "Round-the-clock technical assistance and maintenance",
        ru: "Круглосуточная техническая поддержка и обслуживание",
        uz: "Kunduzi-kechasi texnik yordam va xizmat ko'rsatish"
      }
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: {
        en: "Performance Tracking",
        ru: "Отслеживание производительности",
        uz: "Ishlashni kuzatish"
      },
      description: {
        en: "Monitor and optimize your business metrics",
        ru: "Отслеживайте и оптимизируйте бизнес-показатели",
        uz: "Biznes ko'rsatkichlarini kuzating va optimallashtiring"
      }
    }
  ];

  return (
    <section className="py-20 bg-novapro-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-novapro-beige mb-4">
            {currentLanguage === 'en' ? 'Why Choose NovaPro?' :
             currentLanguage === 'ru' ? 'Почему выбирают NovaPro?' :
             'Nima uchun NovaPro?'}
          </h2>
          <p className="text-xl text-novapro-gray max-w-3xl mx-auto">
            {currentLanguage === 'en' ? 'Discover how our solutions can transform your business operations' :
             currentLanguage === 'ru' ? 'Узнайте, как наши решения могут преобразовать ваш бизнес' :
             'Bizning yechimlarimiz biznesingizni qanday o\'zgartirishi mumkinligini bilib oling'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-novapro-dark/50 p-8 rounded-lg border border-novapro-teal/20 hover:border-novapro-teal/40 transition-colors duration-300"
            >
              <div className="text-novapro-teal mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-novapro-beige mb-3">
                {feature.title[currentLanguage]}
              </h3>
              <p className="text-novapro-gray">
                {feature.description[currentLanguage]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 