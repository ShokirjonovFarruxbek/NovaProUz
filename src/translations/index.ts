
import { type LanguageCode } from '../config/languages';

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      products: 'Products',
      caseStudies: 'Case Studies',
      blog: 'Blog',
      contact: 'Contact'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to transform your business with automation? Get in touch with our team today.',
      businessHours: 'Business Hours',
      workingHours: 'Monday - Sunday: 9:00 AM - 6:00 PM',
      support: '24/7 Support Available',
      form: {
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Your Message',
        send: 'Send Message'
      }
    },
    about: {
      title: 'About Us',
      mission: 'Our Mission',
      missionText: 'We strive to empower businesses through innovative automation solutions that streamline operations, enhance productivity, and drive sustainable growth.',
      whyChoose: 'Why Choose Us',
      description: 'NovaPro is a leading provider of business automation solutions dedicated to optimizing processes, reducing operational costs, and increasing profitability for B2B clients.',
      features: [
        'Expert team with deep industry knowledge',
        'Customized solutions tailored to your specific needs',
        'Comprehensive support and maintenance services',
        'Proven track record of successful implementations'
      ],
      cards: {
        efficiency: {
          title: 'Efficiency',
          description: 'Streamline operations and eliminate redundancies'
        },
        timeSaving: {
          title: 'Time Saving',
          description: 'Reduce manual tasks and focus on core activities'
        },
        costReduction: {
          title: 'Cost Reduction',
          description: 'Lower operational expenses and resource utilization'
        },
        growth: {
          title: 'Growth',
          description: 'Scale your business with automated processes'
        }
      }
    },
    services: {
      title: 'Our Services',
      description: 'We offer a comprehensive range of automation services designed to transform your business operations and drive sustainable growth.',
      requestService: 'Request a Service',
      items: [
        {
          title: 'Process Automation',
          description: 'Streamline repetitive tasks and workflows to improve operational efficiency and reduce manual effort.'
        },
        {
          title: 'Custom Software Development',
          description: 'Tailor-made software solutions designed to address your specific business challenges and requirements.'
        },
        {
          title: 'System Integration',
          description: 'Seamlessly connect different systems and applications to ensure data flows efficiently across your organization.'
        },
        {
          title: 'Business Analytics',
          description: 'Gain valuable insights from your data to make informed decisions and identify improvement opportunities.'
        },
        {
          title: 'Training & Support',
          description: 'Comprehensive training and ongoing support to ensure your team maximizes the benefits of automation.'
        },
        {
          title: 'Audit & Optimization',
          description: 'Thorough analysis of existing processes to identify optimization opportunities and implement improvements.'
        }
      ]
    },
    products: {
      title: "Our Products",
      description: "We specialize in implementing and customizing industry-leading automation tools tailored to your business needs.",
      features: "features",
      learnMore: "Learn more",
      products: [
        {
          name: "1C",
          description: "Comprehensive business management software for accounting, inventory, HR, and more.",
          features: ["Financial accounting", "Tax reporting", "Inventory management", "Personnel management"]
        },
        {
          name: "Bitrix24",
          description: "All-in-one collaboration platform with CRM, project management, and communication tools.",
          features: ["CRM system", "Project management", "Document management", "Time tracking"]
        },
        {
          name: "MySklad",
          description: "Cloud-based inventory and order management system for online and retail businesses.",
          features: ["Inventory control", "Order processing", "Sales analytics", "Mobile access"]
        },
        {
          name: "HR Solutions",
          description: "Automated human resources management systems for employee data, payroll, and recruitment.",
          features: ["Employee database", "Payroll automation", "Recruitment management", "Performance evaluation"]
        }
      ]
    },
    caseStudies: {
      title: "Case Studies",
      description: "Explore how our automation solutions have transformed businesses across various industries.",
      client: "Client",
      readFull: "Read full case study",
      viewAll: "View all case studies",
      studies: [
        {
          title: "Manufacturing Process Optimization",
          client: "MetalTech Industries",
          description: "Implemented automated inventory tracking and production scheduling, reducing operational costs by 30% and improving delivery times by 45%.",
          tags: ["1C", "Process Automation", "Manufacturing"]
        },
        {
          title: "Retail Chain Management System",
          client: "GlobeMart Retail",
          description: "Developed an integrated solution for managing 50+ retail locations, centralizing inventory, sales data, and customer information.",
          tags: ["MySklad", "Retail", "Inventory Management"]
        },
        {
          title: "HR Process Automation",
          client: "Innovate Consulting Group",
          description: "Streamlined recruitment, onboarding, and payroll processes, reducing administrative time by 65% and paperwork by 85%.",
          tags: ["HR Solutions", "Recruitment", "Payroll"]
        }
      ]
    },
    blog: {
      title: "Our Blog",
      description: "Free articles and insights on simplifying business operations and boosting revenue through automation.",
      readMore: "Read more",
      readTime: "min read",
      viewAll: "View all articles",
      posts: [
        {
          title: "5 Ways Automation Can Boost Your Company's Efficiency",
          excerpt: "Discover how implementing automation in key business areas can significantly increase productivity and reduce operational costs.",
          date: "April 10, 2025",
          author: "Alex Morgan",
          readTime: "5"
        },
        {
          title: "Choosing the Right Automation Tools for Your Business",
          excerpt: "A comprehensive guide to selecting automation solutions that align with your specific business needs and objectives.",
          date: "March 28, 2025",
          author: "Sophia Chen",
          readTime: "7"
        },
        {
          title: "The Future of Business Process Automation",
          excerpt: "Exploring emerging trends and technologies that will shape the next generation of business automation systems.",
          date: "March 15, 2025",
          author: "Daniel Wilson",
          readTime: "6"
        }
      ]
    },
    adBanner: {
      specialOffer: "Special Offer:",
      description: "Get a free automation consultation.",
      action: "Contact us today!"
    }
  },
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      products: 'Продукты',
      caseStudies: 'Кейсы',
      blog: 'Блог',
      contact: 'Контакты'
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы автоматизировать ваш бизнес? Свяжитесь с нашей командой сегодня.',
      businessHours: 'Часы работы',
      workingHours: 'Понедельник - Воскресенье: 9:00 - 18:00',
      support: 'Поддержка 24/7',
      form: {
        name: 'Полное имя',
        email: 'Электронная почта',
        company: 'Название компании',
        message: 'Ваше сообщение',
        send: 'Отправить'
      }
    },
    about: {
      title: 'О нас',
      mission: 'Наша миссия',
      missionText: 'Мы стремимся расширять возможности бизнеса с помощью инновационных решений для автоматизации, которые оптимизируют операции, повышают производительность и обеспечивают устойчивый рост.',
      whyChoose: 'Почему выбирают нас',
      description: 'NovaPro - ведущий поставщик решений для автоматизации бизнеса, специализирующийся на оптимизации процессов, снижении операционных затрат и повышении прибыльности для B2B-клиентов.',
      features: [
        'Команда экспертов с глубокими знаниями отрасли',
        'Индивидуальные решения под ваши потребности',
        'Комплексная поддержка и обслуживание',
        'Проверенный опыт успешных внедрений'
      ],
      cards: {
        efficiency: {
          title: 'Эффективность',
          description: 'Оптимизация операций и устранение избыточности'
        },
        timeSaving: {
          title: 'Экономия времени',
          description: 'Сокращение ручных задач и фокус на основной деятельности'
        },
        costReduction: {
          title: 'Снижение затрат',
          description: 'Снижение операционных расходов и использования ресурсов'
        },
        growth: {
          title: 'Рост',
          description: 'Масштабирование бизнеса с автоматизированными процессами'
        }
      }
    },
    services: {
      title: 'Наши услуги',
      description: 'Мы предлагаем комплексный спектр услуг по автоматизации, разработанных для трансформации ваших бизнес-операций и обеспечения устойчивого роста.',
      requestService: 'Запросить услугу',
      items: [
        {
          title: 'Автоматизация процессов',
          description: 'Оптимизация повторяющихся задач и рабочих процессов для повышения эффективности и снижения ручного труда.'
        },
        {
          title: 'Разработка ПО',
          description: 'Индивидуальные программные решения, разработанные для решения ваших бизнес-задач.'
        },
        {
          title: 'Системная интеграция',
          description: 'Бесшовное соединение различных систем для эффективного обмена данными в организации.'
        },
        {
          title: 'Бизнес-аналитика',
          description: 'Получение ценных инсайтов из данных для принятия информированных решений.'
        },
        {
          title: 'Обучение и поддержка',
          description: 'Комплексное обучение и постоянная поддержка для максимальной отдачи от автоматизации.'
        },
        {
          title: 'Аудит и оптимизация',
          description: 'Тщательный анализ существующих процессов для выявления возможностей оптимизации.'
        }
      ]
    },
    products: {
      title: "Наши продукты",
      description: "Мы специализируемся на внедрении и настройке ведущих инструментов автоматизации, адаптированных к потребностям вашего бизнеса.",
      features: "функции",
      learnMore: "Узнать больше",
      products: [
        {
          name: "1C",
          description: "Комплексное программное обеспечение для управления бизнесом: бухгалтерия, инвентаризация, HR и многое другое.",
          features: ["Финансовый учет", "Налоговая отчетность", "Управление запасами", "Управление персоналом"]
        },
        {
          name: "Bitrix24",
          description: "Универсальная платформа для совместной работы с CRM, управлением проектами и инструментами коммуникации.",
          features: ["CRM система", "Управление проектами", "Управление документами", "Учет рабочего времени"]
        },
        {
          name: "МойСклад",
          description: "Облачная система управления запасами и заказами для онлайн и розничных предприятий.",
          features: ["Контроль запасов", "Обработка заказов", "Аналитика продаж", "Мобильный доступ"]
        },
        {
          name: "HR-решения",
          description: "Автоматизированные системы управления персоналом для учета сотрудников, начисления заработной платы и найма.",
          features: ["База данных сотрудников", "Автоматизация расчета зарплаты", "Управление наймом", "Оценка эффективности"]
        }
      ]
    },
    caseStudies: {
      title: "Кейсы",
      description: "Узнайте, как наши решения по автоматизации трансформировали бизнес в различных отраслях.",
      client: "Клиент",
      readFull: "Прочитать полный кейс",
      viewAll: "Посмотреть все кейсы",
      studies: [
        {
          title: "Оптимизация производственных процессов",
          client: "MetalTech Industries",
          description: "Внедрили автоматизированное отслеживание запасов и планирование производства, снизив операционные расходы на 30% и улучшив сроки поставок на 45%.",
          tags: ["1C", "Автоматизация процессов", "Производство"]
        },
        {
          title: "Система управления розничной сетью",
          client: "GlobeMart Retail",
          description: "Разработали интегрированное решение для управления более чем 50 розничными точками, централизовав запасы, данные о продажах и информацию о клиентах.",
          tags: ["МойСклад", "Розница", "Управление запасами"]
        },
        {
          title: "Автоматизация HR-процессов",
          client: "Innovate Consulting Group",
          description: "Оптимизировали процессы найма, адаптации и расчета заработной платы, сократив административное время на 65% и бумажную работу на 85%.",
          tags: ["HR-решения", "Найм", "Расчет зарплаты"]
        }
      ]
    },
    blog: {
      title: "Наш блог",
      description: "Бесплатные статьи и аналитика об упрощении бизнес-операций и повышении дохода с помощью автоматизации.",
      readMore: "Читать далее",
      readTime: "мин. чтения",
      viewAll: "Просмотреть все статьи",
      posts: [
        {
          title: "5 способов повышения эффективности компании с помощью автоматизации",
          excerpt: "Узнайте, как внедрение автоматизации в ключевых бизнес-областях может значительно повысить производительность и снизить операционные расходы.",
          date: "10 апреля 2025",
          author: "Алекс Морган",
          readTime: "5"
        },
        {
          title: "Выбор подходящих инструментов автоматизации для вашего бизнеса",
          excerpt: "Комплексное руководство по выбору решений для автоматизации, соответствующих конкретным потребностям и целям вашего бизнеса.",
          date: "28 марта 2025",
          author: "София Чен",
          readTime: "7"
        },
        {
          title: "Будущее автоматизации бизнес-процессов",
          excerpt: "Изучение новых тенденций и технологий, которые будут формировать следующее поколение систем автоматизации бизнеса.",
          date: "15 марта 2025",
          author: "Даниил Вильсон",
          readTime: "6"
        }
      ]
    },
    adBanner: {
      specialOffer: "Специальное предложение:",
      description: "Получите бесплатную консультацию по автоматизации.",
      action: "Свяжитесь с нами сегодня!"
    }
  },
  uz: {
    nav: {
      about: 'Biz haqimizda',
      services: 'Xizmatlar',
      products: 'Mahsulotlar',
      caseStudies: 'Loyihalar',
      blog: 'Blog',
      contact: 'Aloqa'
    },
    contact: {
      title: 'Biz bilan bogʻlaning',
      subtitle: 'Biznesingizni avtomatlashtirish uchun tayyormisiz? Bugun bizning jamoamiz bilan bogʻlaning.',
      businessHours: 'Ish vaqti',
      workingHours: 'Dushanba - Yakshanba: 9:00 - 18:00',
      support: '24/7 Qoʻllab-quvvatlash mavjud',
      form: {
        name: 'Toʻliq ism',
        email: 'Elektron pochta',
        company: 'Kompaniya nomi',
        message: 'Xabaringiz',
        send: 'Yuborish'
      }
    },
    about: {
      title: 'Biz haqimizda',
      mission: 'Bizning vazifamiz',
      missionText: 'Biz biznesni innovatsion avtomatlashtirish yechimlari orqali kengaytirish, samaradorlikni oshirish va barqaror o\'sishni ta\'minlashga intilamiz.',
      whyChoose: 'Nega bizni tanlaysiz',
      description: 'NovaPro - B2B mijozlar uchun jarayonlarni optimallashtirish, operatsion xarajatlarni kamaytirish va foydalilikni oshirishga ixtisoslashgan yetakchi biznes avtomatlashtirish yechimlari provayderi.',
      features: [
        'Chuqur sohaviy bilimga ega ekspertlar jamoasi',
        'Ehtiyojlaringizga moslashtirilgan yechimlar',
        'Keng qamrovli qo\'llab-quvvatlash va xizmat ko\'rsatish',
        'Muvaffaqiyatli loyihalar tajribasi'
      ],
      cards: {
        efficiency: {
          title: 'Samaradorlik',
          description: 'Operatsiyalarni optimallashtirish va ortiqcha ishlarni yo\'q qilish'
        },
        timeSaving: {
          title: 'Vaqtni tejash',
          description: 'Qo\'l mehnatini kamaytirish va asosiy faoliyatga e\'tibor qaratish'
        },
        costReduction: {
          title: 'Xarajatlarni kamaytirish',
          description: 'Operatsion xarajatlar va resurslardan foydalanishni kamaytirish'
        },
        growth: {
          title: 'O\'sish',
          description: 'Avtomatlashtirilgan jarayonlar bilan biznesni kengaytirish'
        }
      }
    },
    services: {
      title: 'Bizning xizmatlar',
      description: 'Biz sizning biznes operatsiyalaringizni o\'zgartirish va barqaror o\'sishni ta\'minlash uchun mo\'ljallangan avtomatlashtirish xizmatlarining keng doirasini taklif etamiz.',
      requestService: 'Xizmat so\'rash',
      items: [
        {
          title: 'Jarayonlarni avtomatlashtirish',
          description: 'Samaradorlikni oshirish va qo\'l mehnatini kamaytirish uchun takroriy vazifalarni optimallashtirish.'
        },
        {
          title: 'Dasturiy ta\'minot ishlab chiqish',
          description: 'Sizning biznes ehtiyojlaringizga moslashtirilgan dasturiy yechimlar.'
        },
        {
          title: 'Tizimlar integratsiyasi',
          description: 'Tashkilotdagi turli tizimlarni ma\'lumotlar samarali almashishi uchun ulash.'
        },
        {
          title: 'Biznes-tahlil',
          description: 'Ma\'lumotlardan qimmatli xulosalar chiqarish va qarorlar qabul qilish.'
        },
        {
          title: 'O\'qitish va qo\'llab-quvvatlash',
          description: 'Avtomatlashtirish imkoniyatlaridan maksimal foydalanish uchun o\'qitish va doimiy yordam.'
        },
        {
          title: 'Audit va optimallashtirish',
          description: 'Mavjud jarayonlarni optimallashtirish imkoniyatlarini aniqlash uchun batafsil tahlil.'
        }
      ]
    },
    products: {
      title: "Bizning mahsulotlar",
      description: "Biz biznes ehtiyojlaringizga moslashtirilgan yetakchi avtomatlashtirish vositalarini joriy qilish va sozlashga ixtisoslashganmiz.",
      features: "xususiyatlari",
      learnMore: "Batafsil ma'lumot",
      products: [
        {
          name: "1C",
          description: "Buxgalteriya, inventarizatsiya, kadrlar va boshqalar uchun kompleks biznes boshqaruv dasturi.",
          features: ["Moliyaviy hisob", "Soliq hisoboti", "Inventarni boshqarish", "Xodimlarni boshqarish"]
        },
        {
          name: "Bitrix24",
          description: "CRM, loyiha boshqaruvi va aloqa vositalari bilan birlashtirilgan hammabop platforma.",
          features: ["CRM tizimi", "Loyihalarni boshqarish", "Hujjatlarni boshqarish", "Ish vaqtini kuzatish"]
        },
        {
          name: "MySklad",
          description: "Onlayn va chakana savdo biznesi uchun bulutli inventar va buyurtma boshqaruvi tizimi.",
          features: ["Inventar nazorati", "Buyurtmalarni qayta ishlash", "Savdo tahlili", "Mobil kirish"]
        },
        {
          name: "HR yechimlari",
          description: "Xodimlar ma'lumotlari, ish haqi va ishga qabul qilish uchun avtomatlashtirilgan kadrlar boshqaruvi tizimlari.",
          features: ["Xodimlar bazasi", "Ish haqi avtomatizatsiyasi", "Ishga qabul qilishni boshqarish", "Samaradorlikni baholash"]
        }
      ]
    },
    caseStudies: {
      title: "Loyihalar",
      description: "Bizning avtomatlashtirish yechimlarimiz turli sohalardagi bizneslarni qanday o'zgartirganligi haqida bilib oling.",
      client: "Mijoz",
      readFull: "To'liq loyihani o'qish",
      viewAll: "Barcha loyihalarni ko'rish",
      studies: [
        {
          title: "Ishlab chiqarish jarayonlarini optimallashtirish",
          client: "MetalTech Industries",
          description: "Avtomatlashtirilgan inventar kuzatuvi va ishlab chiqarish rejalashtirish tizimlarini joriy etdik, operatsion xarajatlarni 30% ga kamaytirdik va yetkazib berish vaqtini 45% ga yaxshiladik.",
          tags: ["1C", "Jarayonlarni avtomatlashtirish", "Ishlab chiqarish"]
        },
        {
          title: "Chakana savdo tarmog'ini boshqarish tizimi",
          client: "GlobeMart Retail",
          description: "50 dan ortiq savdo nuqtalarini boshqarish uchun integratsiyalashgan yechim ishlab chiqdik, inventar, savdo ma'lumotlari va mijozlar ma'lumotlarini markazlashtirildi.",
          tags: ["MySklad", "Chakana savdo", "Inventarni boshqarish"]
        },
        {
          title: "HR jarayonlarini avtomatlashtirish",
          client: "Innovate Consulting Group",
          description: "Ishga qabul qilish, yangi xodimlarni tanishtirish va ish haqi jarayonlarini optimallashtirdik, ma'muriy vaqtni 65% ga va qog'oz ishlarini 85% ga kamaytirib.",
          tags: ["HR yechimlari", "Ishga qabul qilish", "Ish haqi"]
        }
      ]
    },
    blog: {
      title: "Bizning blog",
      description: "Biznes operatsiyalarini soddalashtirish va avtomatlashtirish orqali daromadni oshirish bo'yicha bepul maqolalar va mulohazalar.",
      readMore: "Batafsil o'qish",
      readTime: "daqiqa o'qish",
      viewAll: "Barcha maqolalarni ko'rish",
      posts: [
        {
          title: "Avtomatlashtirish kompaniyangiz samaradorligini oshirishning 5 usuli",
          excerpt: "Asosiy biznes sohalarida avtomatlashtirish qanday qilib unumdorlikni sezilarli darajada oshirishi va operatsion xarajatlarni kamaytirishini bilib oling.",
          date: "2025 yil 10 aprel",
          author: "Aleks Morgan",
          readTime: "5"
        },
        {
          title: "Biznesingiz uchun to'g'ri avtomatlashtirish vositalarini tanlash",
          excerpt: "Biznesingizning o'ziga xos ehtiyojlari va maqsadlariga mos keladigan avtomatlashtirish yechimlarini tanlash bo'yicha keng qamrovli qo'llanma.",
          date: "2025 yil 28 mart",
          author: "Sofiya Chen",
          readTime: "7"
        },
        {
          title: "Biznes jarayonlarini avtomatlashtirishning kelajagi",
          excerpt: "Biznes avtomatlashtirish tizimlarining keyingi avlodiga ta'sir qiluvchi yangi tendentsiyalar va texnologiyalarni o'rganish.",
          date: "2025 yil 15 mart",
          author: "Daniel Vilson",
          readTime: "6"
        }
      ]
    },
    adBanner: {
      specialOffer: "Maxsus taklif:",
      description: "Bepul avtomatlashtirish konsultatsiyasini oling.",
      action: "Bugun biz bilan bog'laning!"
    }
  }
} as const;

export type Translations = typeof translations;
export type TranslationKey = keyof typeof translations;

export const useTranslation = (languageCode: LanguageCode) => {
  return translations[languageCode];
};
