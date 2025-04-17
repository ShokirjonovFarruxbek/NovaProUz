
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';

const Contact = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <section id="contact" className="circuit-bg py-20 bg-novapro-lightdark">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">{t.contact.title}</h2>
          <p className="text-lg text-novapro-gray">
            {t.contact.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="section-subtitle mb-6">{t.contact.title}</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-novapro-teal mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Email</h4>
                  <p className="text-novapro-gray">dilik9727@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-novapro-teal mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Phone</h4>
                  <p className="text-novapro-gray">+998 90 137 0997</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-novapro-teal mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Office</h4>
                  <p className="text-novapro-gray">2-й проезд Авиасозлар</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Send className="text-novapro-teal mt-1 mr-4 flex-shrink-0" size={24} />
                <div>
                  <h4 className="text-lg font-medium mb-1">Telegram</h4>
                  <p className="text-novapro-gray">amore9717</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="section-subtitle mb-4">{t.contact.businessHours}</h3>
              <p className="text-novapro-gray mb-2">{t.contact.workingHours}</p>
              <p className="text-novapro-teal text-sm italic mt-2">{t.contact.support}</p>
            </div>
          </div>
          
          <div>
            <div className="bg-novapro-dark p-2 rounded-lg shadow-lg h-full">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
