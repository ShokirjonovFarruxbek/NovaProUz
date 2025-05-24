import { Badge } from '@/components/ui/badge';
import { ArrowRightIcon } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';

const CaseStudies = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="case-studies" 
      className="py-20 bg-novapro-lightdark relative"
    >
      <div className="absolute inset-0 bg-[url('/images/tree-watermark.png')] bg-center bg-no-repeat opacity-5"></div>
      <div className="section-container relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">{t.caseStudies.title}</h2>
          <p className="text-lg text-novapro-gray max-w-3xl mx-auto">
            {t.caseStudies.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.caseStudies.studies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="group bg-novapro-dark rounded-lg overflow-hidden hover:bg-novapro-teal/5 transition-all duration-300"
            >
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="relative h-[300px] overflow-hidden"
              >
                <img 
                  src={study.image || "/images/OurProducts.avif"} 
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-novapro-dark/80 to-transparent"></div>
              </motion.div>

              <div className="p-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2 mb-4"
                >
                  {study.tags.map((tag, tagIndex) => (
                    <motion.div
                      key={tagIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: tagIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Badge variant="secondary" className="bg-novapro-teal/10 text-novapro-teal hover:bg-novapro-teal/20">
                        {tag}
                      </Badge>
                    </motion.div>
                  ))}
                </motion.div>

                <motion.h3 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-xl font-semibold mb-2 text-novapro-beige group-hover:text-novapro-teal transition-colors duration-300"
                >
                  {study.title}
                </motion.h3>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-sm text-novapro-gray mb-2"
                >
                  {t.caseStudies.client}: {study.client}
                </motion.p>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-novapro-gray mb-4"
                >
                  {study.description}
                </motion.p>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="inline-flex items-center text-novapro-teal hover:text-novapro-teal/80 transition-colors duration-300"
                >
                  {t.caseStudies.readFull}
                  <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center text-novapro-teal hover:text-novapro-teal/80 transition-colors duration-300"
          >
            {t.caseStudies.viewAll}
            <ArrowRightIcon className="ml-2 transition-transform duration-300 group-hover:translate-x-1" size={16} />
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default CaseStudies;
