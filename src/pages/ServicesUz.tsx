import { Settings, Code, Database, LineChart, Users, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { useEffect } from 'react';

const ServicesUz = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  
  useEffect(() => {
    setLanguage('uz');
    localStorage.setItem('language', 'uz');
  }, [setLanguage]);
  
  const icons = [
    <Settings className="text-novapro-teal" size={40} />,
    <Code className="text-novapro-accent" size={40} />,
    <Database className="text-novapro-teal" size={40} />,
    <LineChart className="text-novapro-accent" size={40} />,
    <Users className="text-novapro-teal" size={40} />,
    <FileCheck className="text-novapro-accent" size={40} />
  ];

  const services = {
    title: "Bizning Xizmatlarimiz",
    description: "Biz sizning biznes operatsiyalaringizni transformatsiya qilish va barqaror o'sishni ta'minlash uchun mo'ljallangan keng qamrovli avtomatlashtirish xizmatlarini taklif qilamiz.",
    requestService: "Xizmat So'rang",
    items: [
      {
        title: "Jarayonlarni Avtomatlashtirish",
        description: "Operatsion samaradorlikni oshirish va qo'lda mehnatni kamaytirish uchun takroriy vazifalar va ish oqimlarini optimallashtiring."
      },
      {
        title: "Maxsus Dasturiy Ta'minot Ishlab Chiqish",
        description: "Sizning aniq biznes qiyinchiliklar va talablaringizni hal qilish uchun mo'ljallangan maxsus dasturiy yechimlar."
      },
      {
        title: "Tizimlar Integratsiyasi",
        description: "Ma'lumotlar tashkilotingiz bo'ylab samarali oqishini ta'minlash uchun turli xil tizimlar va ilovalarni uzluksiz bog'lash."
      },
      {
        title: "Biznes Tahlili",
        description: "Ma'lumotlaringizdan qimmatli ma'lumotlarni olish va yaxshilash imkoniyatlarini aniqlash uchun ma'lumotga asoslangan qarorlar qabul qilish."
      },
      {
        title: "O'qitish va Qo'llab-quvvatlash",
        description: "Jamoangiz avtomatlashtirishning afzalliklaridan maksimal foydalanishini ta'minlash uchun keng qamrovli o'qitish va doimiy qo'llab-quvvatlash."
      },
      {
        title: "Audit va Optimallashtirish",
        description: "Mavjud jarayonlarni yaxshilash imkoniyatlarini aniqlash va yaxshilanishlarni amalga oshirish uchun chuqur tahlil."
      }
    ]
  };

  return (
    <div className="min-h-screen bg-novapro-dark">
      <Navbar />
      <main className="pt-24">
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
              <h2 className="section-title">{services.title}</h2>
              <p className="text-lg text-novapro-gray max-w-3xl mx-auto">
                {services.description}
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.items.map((service, index) => (
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
                {services.requestService}
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesUz; 