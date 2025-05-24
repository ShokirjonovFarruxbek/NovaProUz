import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-center text-white mb-4"
          >
            {t.contact.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg text-center max-w-3xl mx-auto"
          >
            {t.contact.subtitle}
          </motion.p>
        </section>

        {/* Contact Info and Map Section */}
        <section className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start" style={{ gap: '250px' }}>
            {/* Contact Information */}
            <div className="lg:w-[10%] space-y-12 flex-shrink-0">
              <div>
                <h2 className="text-[#FFC900] text-2xl font-bold mb-8">Contact Us</h2>
                <div className="space-y-8">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-[#FFC900] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 mb-2">Email</p>
                      <a href="mailto:dilik9727@gmail.com" className="text-white hover:text-[#FFC900] transition-colors">
                        dilik9727@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-[#FFC900] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 mb-2">Phone</p>
                      <a href="tel:+998971380997" className="text-white hover:text-[#FFC900] transition-colors">
                        +998 97 138 09 97
                      </a>
                    </div>
                  </div>
                  
                  {/* Office */}
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-[#FFC900] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 mb-2">Office</p>
                      <p className="text-white">2-й проезд Авиасозлар</p>
                    </div>
                  </div>

                  {/* Telegram */}
                  <div className="flex items-start gap-4">
                    <Send className="w-6 h-6 text-[#FFC900] mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-gray-400 mb-2">Telegram</p>
                      <a href="https://t.me/NOVAPROuz" className="text-white hover:text-[#FFC900] transition-colors">
                        @NOVAPROuz
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="mt-4">
                <h2 className="text-[#FFC900] text-2xl font-bold mb-4">Business Hours</h2>
                <div className="space-y-2">
                  <p className="text-white text-lg">Monday - Sunday: 9:00 AM - 6:00 PM</p>
                  <p className="text-[#FFC900] italic">24/7 Support Available</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:w-[90%] flex-grow" style={{ height: '480px', minWidth: '800px' }}>
              <iframe
                title="location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.0331189991687!2d69.34661091744384!3d41.32844999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5a9c78e7f73%3A0x7d13f04b2f076dd1!2zMi3QuSDQv9GA0L7QtdC30LQg0JDQstC40LDRgdC-0LfQu9Cw0YAsINCi0LDRiNC60LXQvdGCLCDQo9C30LHQtdC60LjRgdGC0LDQvQ!5e0!3m2!1sru!2s!4v1710400631669!5m2!1sru!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="w-full h-full rounded-lg shadow-xl"
              ></iframe>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact; 