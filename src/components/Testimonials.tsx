import { useLanguageStore } from '../stores/useLanguageStore';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const { currentLanguage } = useLanguageStore();

  const testimonials = [
    {
      name: "John Smith",
      position: {
        en: "CEO, Tech Solutions",
        ru: "CEO, Тех Решения",
        uz: "Bosh direktor, Tex Yechimlar"
      },
      text: {
        en: "NovaPro has transformed our business operations with their innovative automation solutions. Their team's expertise and dedication are unmatched.",
        ru: "NovaPro преобразила наши бизнес-операции с помощью своих инновационных решений по автоматизации. Экспертиза и преданность их команды не имеют себе равных.",
        uz: "NovaPro o'zlarining innovatsion avtomatlashtirish yechimlari bilan bizning biznes operatsiyalarimizni o'zgartirdi. Ularning jamoasining malakasi va sadoqati tengsiz."
      },
      rating: 5
    },
    {
      name: "Maria Garcia",
      position: {
        en: "Operations Director, Global Trade",
        ru: "Директор по операциям, Глобал Трейд",
        uz: "Operatsiyalar direktori, Global Savdo"
      },
      text: {
        en: "The custom software development services provided by NovaPro have significantly improved our efficiency and customer satisfaction.",
        ru: "Услуги по разработке программного обеспечения, предоставляемые NovaPro, значительно повысили нашу эффективность и удовлетворенность клиентов.",
        uz: "NovaPro tomonidan taqdim etilgan maxsus dasturiy ta'minot ishlab chiqish xizmatlari bizning samaradorligimiz va mijozlar mamnuniyatini sezilarli darajada oshirdi."
      },
      rating: 5
    },
    {
      name: "Alex Chen",
      position: {
        en: "CTO, Digital Innovations",
        ru: "CTO, Цифровые Инновации",
        uz: "CTO, Raqamli Innovatsiyalar"
      },
      text: {
        en: "Working with NovaPro has been a game-changer for our digital transformation journey. Their expertise in process automation is exceptional.",
        ru: "Работа с NovaPro стала переломным моментом в нашем пути цифровой трансформации. Их опыт в автоматизации процессов исключителен.",
        uz: "NovaPro bilan ishlash bizning raqamli transformatsiya yo'limizda o'zgarish yaratdi. Ularning jarayonlarni avtomatlashtirish bo'yicha tajribasi ajoyib."
      },
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-novapro-dark/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-novapro-dark/50 to-novapro-dark/80" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-novapro-beige mb-4">
            {currentLanguage === 'en' ? 'What Our Clients Say' :
             currentLanguage === 'ru' ? 'Что говорят наши клиенты' :
             'Mijozlarimiz nima deyishadi'}
          </h2>
          <p className="text-xl text-novapro-gray max-w-3xl mx-auto">
            {currentLanguage === 'en' ? 'Discover how we've helped businesses transform and grow' :
             currentLanguage === 'ru' ? 'Узнайте, как мы помогли бизнесу трансформироваться и расти' :
             'Bizneslarni qanday o'zgartirish va rivojlantirishda yordam berganimizni biling'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-novapro-dark/50 p-8 rounded-lg border border-novapro-teal/20 hover:border-novapro-teal/40 transition-colors duration-300 relative"
            >
              <div className="absolute top-4 right-4 text-novapro-teal/20">
                <Quote className="w-8 h-8" />
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-novapro-teal fill-current" />
                ))}
              </div>
              <p className="text-novapro-gray mb-6 italic relative z-10">
                "{testimonial.text[currentLanguage]}"
              </p>
              <div>
                <h4 className="text-novapro-beige font-semibold">{testimonial.name}</h4>
                <p className="text-novapro-gray text-sm">
                  {testimonial.position[currentLanguage]}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 