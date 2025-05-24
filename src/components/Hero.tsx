import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="circuit-bg relative min-h-screen flex items-center pt-16"
    >
      <div className="absolute inset-0 bg-novapro-dark/90 z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10 z-0"
        style={{ 
          backgroundImage: `url('/lovable-uploads/NovaProLogo.png')`,
          backgroundSize: '40%',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-6xl font-bold mb-6 font-poppins text-novapro-beige"
            >
              {t.hero.title} <span className="text-novapro-teal">{t.hero.titleColored}</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl mb-8 max-w-lg text-novapro-gray"
            >
              {t.hero.subtitle}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link 
                to={`/${currentLanguage}/services`}
                className="cta-button flex items-center bg-transparent border-2 border-novapro-teal text-novapro-teal hover:bg-novapro-teal/20 hover:border-novapro-teal/80 transition-all duration-300"
              >
                {t.hero.ourServices} <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link 
                to={`/${currentLanguage}/contact`}
                className="cta-button bg-novapro-teal hover:bg-novapro-teal/80 text-white transition-all duration-300"
              >
                {t.hero.getInTouch}
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative"
            >
              <motion.div 
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center"
              >
                <img
                  src="/lovable-uploads/NovaProLogo.png" 
                  alt="NovaPro Digital Tree Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
