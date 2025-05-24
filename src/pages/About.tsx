'use client'
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Clock, TrendingUp, Coins, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const About = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const language = currentPath.split('/')[1] || 'uz';
  const { setLanguage } = useLanguageStore();
  const t = useTranslation(language);

  // Set language based on URL
  useEffect(() => {
    setLanguage(language);
    localStorage.setItem('language', language);
  }, [language, setLanguage]);

  const benefits = [
    {
      icon: <BarChart className="w-8 h-8 text-yellow-400" />,
      title: language === 'en' ? 'Efficiency' :
             language === 'ru' ? 'Эффективность' :
             'Samaradorlik',
      description: language === 'en' ? 'Streamline operations and eliminate redundancies' :
                  language === 'ru' ? 'Оптимизация операций и устранение избыточности' :
                  'Operatsiyalarni soddalashtirish va ortiqcha narsalarni bartaraf etish'
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-400" />,
      title: language === 'en' ? 'Time Saving' :
             language === 'ru' ? 'Экономия времени' :
             'Vaqtni tejash',
      description: language === 'en' ? 'Reduce manual tasks and focus on core activities' :
                  language === 'ru' ? 'Сокращение ручных задач и фокус на основных видах деятельности' :
                  'Qo\'lda bajariladigan vazifalarni kamaytirish va asosiy faoliyatga e\'tibor qaratish'
    },
    {
      icon: <Coins className="w-8 h-8 text-yellow-400" />,
      title: language === 'en' ? 'Cost Reduction' :
             language === 'ru' ? 'Снижение затрат' :
             'Xarajatlarni kamaytirish',
      description: language === 'en' ? 'Lower operational expenses and resource utilization' :
                  language === 'ru' ? 'Снижение операционных расходов и использования ресурсов' :
                  'Operatsion xarajatlar va resurslardan foydalanishni kamaytirish'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />,
      title: language === 'en' ? 'Growth' :
             language === 'ru' ? 'Рост' :
             'O\'sish',
      description: language === 'en' ? 'Scale your business with automated processes' :
                  language === 'ru' ? 'Масштабируйте бизнес с помощью автоматизированных процессов' :
                  'Avtomatlashtirilgan jarayonlar orqali biznesingizni kengaytiring'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-6"
          >
            {language === 'en' ? 'About Us' :
             language === 'ru' ? 'О нас' :
             'Biz haqimizda'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            {language === 'en' ? 'NovaPro is a leading provider of business automation solutions dedicated to optimizing processes, reducing operational costs, and increasing profitability for B2B clients.' :
             language === 'ru' ? 'NovaPro - ведущий поставщик решений для автоматизации бизнеса, специализирующийся на оптимизации процессов, снижении операционных затрат и повышении прибыльности для B2B-клиентов.' :
             'NovaPro - B2B mijozlar uchun jarayonlarni optimallashtirish, operatsion xarajatlarni kamaytirish va rentabellikni oshirishga bag\'ishlangan biznes avtomatlashtirish yechimlarining yetakchi provayderi.'}
          </motion.p>
        </section>

        {/* Main Content Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="flex flex-col lg:flex-row justify-between gap-16">
            {/* Left Column - Mission and Why Choose Us */}
            <div className="lg:w-1/2 space-y-16">
              {/* Mission Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                  {language === 'en' ? 'Our Mission' :
                   language === 'ru' ? 'Наша миссия' :
                   'Bizning missiyamiz'}
                </h2>
                <p className="text-gray-400 text-lg">
                  {language === 'en' ? 'We strive to empower businesses through innovative automation solutions that streamline operations, enhance productivity, and drive sustainable growth.' :
                   language === 'ru' ? 'Мы стремимся расширить возможности бизнеса с помощью инновационных решений для автоматизации, которые оптимизируют операции, повышают производительность и обеспечивают устойчивый рост.' :
                   'Biz innovatsion avtomatlashtirish yechimlari orqali bizneslarni kuchaytirishga intilamiz, bu operatsiyalarni soddalashtiradi, samaradorlikni oshiradi va barqaror o\'sishni ta\'minlaydi.'}
                </p>
              </motion.div>

              {/* Why Choose Us Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold mb-6 text-yellow-400">
                  {language === 'en' ? 'Why Choose Us' :
                   language === 'ru' ? 'Почему выбирают нас' :
                   'Nega bizni tanlashadi'}
                </h2>
                <ul className="list-disc text-gray-400 space-y-4 ml-6">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    {language === 'en' ? 'Expert team with deep industry knowledge' :
                     language === 'ru' ? 'Команда экспертов с глубокими знаниями отрасли' :
                     'Chuqur sanoat bilimiga ega mutaxassislar jamoasi'}
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    {language === 'en' ? 'Customized solutions tailored to your specific needs' :
                     language === 'ru' ? 'Индивидуальные решения, адаптированные под ваши потребности' :
                     'Sizning ehtiyojlaringizga moslashtirilgan individual yechimlar'}
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    {language === 'en' ? 'Comprehensive support and maintenance services' :
                     language === 'ru' ? 'Комплексная поддержка и услуги по обслуживанию' :
                     'Keng qamrovli qo\'llab-quvvatlash va texnik xizmat ko\'rsatish'}
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    {language === 'en' ? 'Proven track record of successful implementations' :
                     language === 'ru' ? 'Проверенный опыт успешных внедрений' :
                     'Muvaffaqiyatli amalga oshirishlarning tasdiqlangan tajribasi'}
                  </motion.li>
                </ul>
              </motion.div>
            </div>

            {/* Right Column - Benefits Cards */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-6 content-start">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-[#2A2A2F] p-6 rounded-lg"
                  >
                    <div className="mb-4">{benefit.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About; 