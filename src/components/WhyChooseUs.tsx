import { useLanguageStore } from '../stores/useLanguageStore';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Clock, 
  Users, 
  Zap, 
  Code2, 
  Heart 
} from 'lucide-react';

const WhyChooseUs = () => {
  const { currentLanguage } = useLanguageStore();

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: {
        en: "Secure Solutions",
        ru: "Безопасные решения",
        uz: "Xavfsiz yechimlar"
      },
      description: {
        en: "Enterprise-grade security for your business data and operations",
        ru: "Корпоративная безопасность для ваших бизнес-данных и операций",
        uz: "Biznes ma'lumotlaringiz va operatsiyalaringiz uchun korporativ xavfsizlik"
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
        en: "Round-the-clock technical support and maintenance",
        ru: "Круглосуточная техническая поддержка и обслуживание",
        uz: "Kunduzi-kechasi texnik yordam va xizmat ko'rsatish"
      }
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: {
        en: "Expert Team",
        ru: "Команда экспертов",
        uz: "Mutaxassislar jamoasi"
      },
      description: {
        en: "Skilled professionals with years of industry experience",
        ru: "Опытные специалисты с многолетним опытом работы в отрасли",
        uz: "Sohada ko'p yillik tajribaga ega malakali mutaxassislar"
      }
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: {
        en: "Fast Delivery",
        ru: "Быстрая доставка",
        uz: "Tezkor yetkazib berish"
      },
      description: {
        en: "Quick implementation and deployment of solutions",
        ru: "Быстрое внедрение и развертывание решений",
        uz: "Yechimlarni tez joriy etish va ishga tushirish"
      }
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: {
        en: "Modern Tech",
        ru: "Современные технологии",
        uz: "Zamonaviy texnologiyalar"
      },
      description: {
        en: "Cutting-edge technologies and best practices",
        ru: "Передовые технологии и лучшие практики",
        uz: "Zamonaviy texnologiyalar va eng yaxshi amaliyotlar"
      }
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: {
        en: "Client Focus",
        ru: "Ориентация на клиента",
        uz: "Mijozlarga yo'naltirilgan"
      },
      description: {
        en: "Dedicated to your success and satisfaction",
        ru: "Посвящены вашему успеху и удовлетворенности",
        uz: "Sizning muvaffaqiyatingiz va mamnuniyatingizga bag'ishlangan"
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
            {currentLanguage === 'en' ? 'Why Choose NovaPro?' :
             currentLanguage === 'ru' ? 'Почему выбирают NovaPro?' :
             'Nima uchun NovaPro?'}
          </h2>
          <p className="text-xl text-novapro-gray max-w-3xl mx-auto">
            {currentLanguage === 'en' ? 'We combine expertise, innovation, and dedication to deliver exceptional results' :
             currentLanguage === 'ru' ? 'Мы сочетаем опыт, инновации и преданность делу для достижения исключительных результатов' :
             'Biz ajoyib natijalarga erishish uchun tajriba, innovatsiyalar va sadoqatni birlashtiramiz'}
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

export default WhyChooseUs; 