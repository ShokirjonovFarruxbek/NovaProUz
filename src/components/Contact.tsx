
import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';

const Contact = () => {
  const { toast } = useToast();
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

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
            <form onSubmit={handleSubmit} className="bg-novapro-dark p-8 rounded-lg shadow-lg">
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">{t.contact.form.name}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 bg-novapro-lightdark border border-novapro-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-novapro-teal text-novapro-beige"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">{t.contact.form.email}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 bg-novapro-lightdark border border-novapro-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-novapro-teal text-novapro-beige"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">{t.contact.form.company}</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full p-3 bg-novapro-lightdark border border-novapro-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-novapro-teal text-novapro-beige"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">{t.contact.form.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full p-3 bg-novapro-lightdark border border-novapro-gray/30 rounded-md focus:outline-none focus:ring-2 focus:ring-novapro-teal text-novapro-beige"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full cta-button flex items-center justify-center"
                >
                  {t.contact.form.send} <Send size={18} className="ml-2" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
