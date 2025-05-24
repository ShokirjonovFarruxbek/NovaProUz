import { motion } from 'framer-motion';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';

const HR = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <div className="section-container">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-16"
      >
        <h2 className="section-title">{t.hrServices.title}</h2>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative flex justify-center mb-12"
      >
        <img 
          src="/images/OurProducts.avif" 
          alt="HR Services" 
          className="w-full max-w-2xl rounded-lg shadow-lg"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="text-center text-white text-2xl md:text-3xl font-semibold max-w-2xl px-4">
            {t.hrServices.description}
          </p>
        </div>
      </motion.div>

      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center text-white text-lg md:text-xl font-semibold mb-12"
      >
        HR with guaranteed results — that's us.
      </motion.p>
    </div>
  );
};

export default HR; 