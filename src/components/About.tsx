import { BarChart, Clock, Coins, TrendingUp } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';

const About = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  const features = [
    {
      icon: <BarChart className="text-novapro-teal" size={32} />,
      title: t.about.cards.efficiency.title,
      description: t.about.cards.efficiency.description
    },
    {
      icon: <Clock className="text-novapro-teal" size={32} />,
      title: t.about.cards.timeSaving.title,
      description: t.about.cards.timeSaving.description
    },
    {
      icon: <Coins className="text-novapro-teal" size={32} />,
      title: t.about.cards.costReduction.title,
      description: t.about.cards.costReduction.description
    },
    {
      icon: <TrendingUp className="text-novapro-teal" size={32} />,
      title: t.about.cards.growth.title,
      description: t.about.cards.growth.description
    }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="about" 
      className="py-12 md:py-20 bg-novapro-dark relative"
    >
      <div className="absolute inset-0 bg-[url('/images/tree-watermark.png')] bg-center bg-no-repeat opacity-5"></div>
      <div className="section-container relative z-10 px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="section-title">{t.about.title}</h2>
          <p className="text-base md:text-lg text-novapro-gray max-w-3xl mx-auto">
            {t.about.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 md:space-y-12"
          >
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-novapro-teal">{t.about.mission}</h3>
              <p className="text-base md:text-lg text-novapro-gray">
                {t.about.missionText}
              </p>
            </div>

            <div>
              <h4 className="text-lg md:text-xl font-semibold mb-4 text-novapro-teal">{t.about.whyChoose}</h4>
              <ul className="space-y-3">
                {t.about.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center text-novapro-gray text-base md:text-lg"
                  >
                    <div className="flex-shrink-0 w-2 h-2 rounded-full bg-novapro-teal mr-3"></div>
                    <span className="break-words">{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                className="p-4 md:p-6 bg-novapro-lightdark rounded-lg hover:bg-novapro-teal/10 transition-all duration-300"
              >
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="mb-3 md:mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h4 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-novapro-beige">
                  {feature.title}
                </h4>
                <p className="text-sm md:text-base text-novapro-gray break-words">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
