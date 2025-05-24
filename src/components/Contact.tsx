import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';

const Contact = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      id="contact" 
      className="py-20 bg-novapro-lightdark"
    >
      <div className="section-container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="text-lg text-novapro-gray">
            {t.contact.subtitle}
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="section-subtitle mb-6">{t.contact.title}</h3>
            
            <div className="space-y-6">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <Mail className="text-novapro-teal mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-novapro-gray">dilik9727@gmail.com</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <Phone className="text-novapro-teal mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-novapro-gray">+998 97 138 09 97</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <MapPin className="text-novapro-teal mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Office</h4>
                  <p className="text-novapro-gray">2-й проезд Авиасозлар</p>
                </div>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <Send className="text-novapro-teal mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Telegram</h4>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    href="https://t.me/NOVAPROuz" 
                    className="text-novapro-gray hover:text-novapro-teal"
                  >
                    @NOVAPROuz
                  </motion.a>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              viewport={{ once: true }}
              className="mt-8"
            >
              <h3 className="section-subtitle mb-4">{t.contact.businessHours}</h3>
              <p className="text-novapro-gray mb-2">{t.contact.workingHours}</p>
              <p className="text-novapro-accent text-sm italic mt-2">{t.contact.support}</p>
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-novapro-dark p-2 rounded-lg shadow-lg h-full"
            >
              <iframe 
                src="https://maps.google.com/maps?q=41.296079,69.344292&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                className="rounded-md min-h-[400px]"
                frameBorder="0"
                allowFullScreen
                loading="lazy"
                title="NovaPro Location"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
