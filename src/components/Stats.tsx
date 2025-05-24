import { useLanguageStore } from '../stores/useLanguageStore';
import { motion } from 'framer-motion';
import { Users, Briefcase, Clock, Award } from 'lucide-react';

const Stats = () => {
  const { currentLanguage } = useLanguageStore();

  const stats = [
    {
      icon: <Users className="w-8 h-8" />,
      value: "100+",
      label: {
        en: "Happy Clients",
        ru: "Довольных клиентов",
        uz: "Mamnun mijozlar"
      }
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      value: "50+",
      label: {
        en: "Projects Completed",
        ru: "Завершенных проектов",
        uz: "Yakunlangan loyihalar"
      }
    },
    {
      icon: <Clock className="w-8 h-8" />,
      value: "24/7",
      label: {
        en: "Support Available",
        ru: "Поддержка доступна",
        uz: "Qo'llab-quvvatlash mavjud"
      }
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "5+",
      label: {
        en: "Years Experience",
        ru: "Лет опыта",
        uz: "Yillik tajriba"
      }
    }
  ];

  return (
    <section className="py-20 bg-novapro-dark/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-novapro-teal/10 mb-4">
                <div className="text-novapro-teal">
                  {stat.icon}
                </div>
              </div>
              <div className="text-4xl font-bold text-novapro-teal mb-2">
                {stat.value}
              </div>
              <div className="text-novapro-gray">
                {stat.label[currentLanguage]}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 