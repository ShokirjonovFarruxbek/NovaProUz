import { Settings, Code, Database, LineChart, Users, FileCheck } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';

const Services = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  const icons = [
    <Settings className="text-novapro-teal" size={40} />,
    <Code className="text-novapro-accent" size={40} />,
    <Database className="text-novapro-teal" size={40} />,
    <LineChart className="text-novapro-accent" size={40} />,
    <Users className="text-novapro-teal" size={40} />,
    <FileCheck className="text-novapro-accent" size={40} />
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="services" 
      className="py-20 bg-novapro-lightdark"
    >
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.services.title}</h2>
          <p className="text-lg text-novapro-gray max-w-3xl mx-auto">
            {t.services.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="service-card p-6 rounded-lg bg-novapro-dark hover:bg-novapro-teal/10 transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="mb-4"
              >
                {icons[index]}
              </motion.div>
              <h3 className="text-xl font-semibold mb-4 text-novapro-teal">{service.title}</h3>
              <p className="text-novapro-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact" 
            className="cta-button bg-novapro-teal hover:bg-novapro-teal/80 transition-all duration-300"
          >
            {t.services.requestService}
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
