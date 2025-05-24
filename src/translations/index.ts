import { type LanguageCode } from '../config/languages';

export const translations = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      products: 'Products',
      articles: 'Articles',
      caseStudies: 'Case Studies',
      blog: 'Articles',
      contact: 'Contact'
    },
    hero: {
      title: 'Business Automation',
      titleColored: 'Solutions',
      subtitle: 'Optimize your business processes, reduce costs, and increase profits with our comprehensive automation services.',
      ourServices: 'Our Services',
      getInTouch: 'Get in Touch'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Ready to transform your business with automation? Get in touch with our team today.',
      email: 'Email',
      phone: 'Phone',
      office: 'Office',
      address: '2nd Aviasozlar Passage',
      telegram: 'Telegram',
      businessHours: 'Business Hours',
      workingHours: 'Monday - Sunday: 9:00 AM - 6:00 PM',
      support: '24/7 Support Available'
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
      learnMore: "Learn more",
      items: [
        {
          name: {
            en: "HR Services",
            ru: "HR Услуги",
            uz: "HR Xizmatlar"
          },
          description: {
            en: "Comprehensive HR solutions for your business growth",
            ru: "Комплексные HR-решения для роста вашего бизнеса",
            uz: "Biznesingizning o'sishi uchun keng qamrovli HR yechimlar"
          },
          features: [
            {
              en: "Full-cycle recruitment automation",
              ru: "Автоматизация полного цикла подбора персонала",
              uz: "To'liq tsiklli xodimlarni tanlashni avtomatlashtirish"
            },
            {
              en: "Digital employee onboarding",
              ru: "Цифровая адаптация сотрудников",
              uz: "Raqamli xodimlarni jalb qilish"
            },
            {
              en: "Performance tracking systems",
              ru: "Системы отслеживания эффективности",
              uz: "Ish samaradorligini kuzatish tizimlari"
            },
            {
              en: "HR document automation",
              ru: "Автоматизация HR-документов",
              uz: "HR hujjatlarini avtomatlashtirish"
            }
          ],
          image: "/images/OurProducts.avif"
        },
        {
          name: {
            en: "MySklad",
            ru: "МойСклад",
            uz: "MoySklad"
          },
          description: {
            en: "Order in business, profit in numbers",
            ru: "Порядок в бизнесе, прибыль в цифрах",
            uz: "Biznesda tartib, raqamlarda foyda"
          },
          features: [
            {
              en: "Real-time inventory tracking",
              ru: "Отслеживание запасов в реальном времени",
              uz: "Real vaqt rejimida zaxiralarni kuzatish"
            },
            {
              en: "Automated document processing",
              ru: "Автоматическая обработка документов",
              uz: "Hujjatlarni avtomatik qayta ishlash"
            },
            {
              en: "Sales and purchase management",
              ru: "Управление продажами и закупками",
              uz: "Sotish va xarid qilishni boshqarish"
            },
            {
              en: "Instant profit reports",
              ru: "Мгновенные отчеты о прибыли",
              uz: "Tezkor foyda hisobotlari"
            }
          ],
          problems: {
            title: {
              en: "What problems do we solve?",
              ru: "Какие проблемы мы решаем?",
              uz: "Qanday muammolarni hal qilamiz?"
            },
            items: [
              {
                en: "Chaos in inventory management?",
                ru: "Хаос в управлении запасами?",
                uz: "Zaxiralarni boshqarishda tartibsizlik?"
              },
              {
                en: "Manual document processing?",
                ru: "Ручная обработка документов?",
                uz: "Qo'lda hujjatlarni qayta ishlash?"
              },
              {
                en: "No real-time data?",
                ru: "Нет данных в реальном времени?",
                uz: "Real vaqtda ma'lumotlar yo'q?"
              },
              {
                en: "Complex reporting?",
                ru: "Сложная отчетность?",
                uz: "Murakkab hisobot?"
              }
            ]
          },
          capabilities: {
            title: {
              en: "What can MySklad do?",
              ru: "Что умеет МойСклад?",
              uz: "MoySklad nima qila oladi?"
            },
            items: [
              {
                en: "Automated inventory management",
                ru: "Автоматизированное управление запасами",
                uz: "Avtomatlashtirilgan zaxiralarni boshqarish"
              },
              {
                en: "Document flow automation",
                ru: "Автоматизация документооборота",
                uz: "Hujjatlar almashinuvini avtomatlashtirish"
              },
              {
                en: "Real-time analytics",
                ru: "Аналитика в реальном времени",
                uz: "Real vaqtda tahlil"
              },
              {
                en: "Mobile access",
                ru: "Мобильный доступ",
                uz: "Mobil kirish"
              }
            ]
          },
          implementation: {
            title: {
              en: "Implementation process",
              ru: "Процесс внедрения",
              uz: "Joriy etish jarayoni"
            },
            items: [
              {
                en: "Quick setup in 1 day",
                ru: "Быстрая настройка за 1 день",
                uz: "1 kunda tezkor sozlash"
              },
              {
                en: "Staff training",
                ru: "Обучение персонала",
                uz: "Xodimlarni o'qitish"
              },
              {
                en: "Technical support",
                ru: "Техническая поддержка",
                uz: "Texnik yordam"
              },
              {
                en: "Regular updates",
                ru: "Регулярные обновления",
                uz: "Muntazam yangilanishlar"
              }
            ]
          },
          finalMessage: [
            {
              en: "Streamline your business with MySklad",
              ru: "Оптимизируйте свой бизнес с МойСклад",
              uz: "MoySklad bilan biznesingizni optimallashtiring"
            },
            {
              en: "Order in business, profit in numbers",
              ru: "Порядок в бизнесе, прибыль в цифрах",
              uz: "Biznesda tartib, raqamlarda foyda"
            }
          ],
          image: "/images/24x.avif"
        },
        {
          name: "Website Development",
          description: "Creating websites that work for your business",
          features: [
            "Modern and responsive design",
            "User-friendly interface",
            "SEO optimization",
            "Content management system"
          ],
          image: "/images/WebSiteDevelopmen.jpeg"
        }
      ]
    },
    caseStudies: {
      title: 'Case Studies',
      description: 'Explore how our automation solutions have transformed businesses across various industries.',
      client: 'Client',
      readFull: 'Read full case study',
      viewAll: 'View all case studies',
      studies: [
        {
          title: 'Manufacturing Process Optimization',
          client: 'MetalTech Industries',
          description: 'Implemented automated inventory tracking and production scheduling, reducing operational costs by 30% and improving delivery times by 45%.',
          tags: ['1C', 'Process Automation', 'Manufacturing'],
          image: '/images/OurProducts.avif'
        },
        {
          title: 'Retail Chain Management System',
          client: 'GlobeMart Retail',
          description: 'Developed an integrated solution for managing 50+ retail locations, centralizing inventory, sales data, and customer information.',
          tags: ['MySklad', 'Retail', 'Inventory Management'],
          image: '/images/CaseStudies_2.avif'
        },
        {
          title: 'HR Process Automation',
          client: 'Innovate Consulting Group',
          description: 'Streamlined recruitment, onboarding, and payroll processes, reducing administrative time by 65% and paperwork by 85%.',
          tags: ['HR Solutions', 'Recruitment', 'Payroll'],
          image: '/images/CaseStudies_3.avif'
        }
      ]
    },
    blog: {
      title: "Our Articles",
      description: "Free articles and insights on simplifying business operations and boosting revenue through automation.",
      readMore: "Read more",
      readTime: "min read",
      viewAll: "View all articles",
      posts: [
        {
          id: "automation-efficiency",
          title: "5 Ways Automation Can Boost Your Company's Efficiency",
          excerpt: "Discover how implementing automation in key business areas can significantly increase productivity and reduce operational costs.",
          date: "March 28, 2025",
          author: "Sophia Chen",
          readTime: "7",
          image: "/images/Blog_2.avif"
        },
        {
          id: "automation-tools",
          title: "Choosing the Right Automation Tools for Your Business",
          excerpt: "A comprehensive guide to selecting automation solutions that align with your specific business needs and objectives.",
          date: "March 15, 2025",
          author: "Daniel Wilson",
          readTime: "6",
          image: "/images/Blog_3.avif"
        },
        {
          id: "business-growth",
          title: "How Automation Drives Business Growth",
          excerpt: "Learn how automation can help your business scale efficiently and maintain a competitive edge in the market.",
          date: "March 1, 2025",
          author: "Michael Brown",
          readTime: "8",
          image: "/images/Blog_4.avif"
        }
      ]
    },
    footer: {
      followUs: "Follow Us",
      followUsText: "Empowering businesses through innovative automation solutions that streamline operations, enhance productivity, and drive sustainable growth."
    },
    hrServices: {
      title: "HR Services",
      description: "Comprehensive HR solutions for your business growth",
      problems: {
        title: "Common HR Challenges We Solve",
        items: [
          "Time-consuming recruitment processes",
          "Inefficient employee onboarding",
          "Complex performance management",
          "Manual HR documentation",
          "Employee data management",
          "Compliance and reporting issues"
        ]
      },
      services: {
        title: "Our HR Services",
        items: [
          "Full-cycle recruitment automation",
          "Digital employee onboarding",
          "Performance tracking systems",
          "HR document automation",
          "Employee database management",
          "Compliance monitoring tools"
        ]
      },
      benefits: {
        title: "Why Choose Our HR Services",
        items: [
          "Reduced hiring time and costs",
          "Improved employee experience",
          "Enhanced HR efficiency",
          "Automated compliance",
          "Data-driven decisions",
          "Scalable solutions"
        ]
      }
    },
    websiteDevelopment: {
      name: {
        en: "Website Development",
        ru: "Создание сайтов",
        uz: "Veb-sayt yaratish"
      },
      description: {
        en: "Creating websites that work for your business",
        ru: "Создание сайтов, которые работают на ваш бизнес",
        uz: "Biznesingiz uchun ishlaydigan veb-saytlar yaratish"
      },
      problems: {
        title: {
          en: "What problems do we solve?",
          ru: "Какие проблемы мы решаем?",
          uz: "Qanday muammolarni hal qilamiz?"
        },
        items: [
          {
            en: "No website - and you're not found on the internet?",
            ru: "Нет сайта — и вас не находят в интернете?",
            uz: "Veb-saytingiz yo'q — va sizni internetda topa olmaydilar?"
          },
          {
            en: "Have a website, but it's outdated, doesn't sell, and is slow?",
            ru: "Есть сайт, но он устарел, не продаёт и тормозит?",
            uz: "Veb-saytingiz bor, lekin eskirgan, sotish qilmaydi va sekin ishlaydi?"
          },
          {
            en: "Losing customers due to inconvenient interface or slow loading?",
            ru: "Потеря клиентов из-за неудобного интерфейса или долгой загрузки?",
            uz: "Noqulay interfeys yoki sekin yuklanish tufayli mijozlarni yo'qotish?"
          },
          {
            en: "Constant bugs, edits through a programmer, and chaos in the admin panel?",
            ru: "Постоянные баги, правки через программиста и хаос в админке?",
            uz: "Doimiy xatolar, dasturchi orqali tuzatishlar va admin panelidagi tartibsizlik?"
          },
          {
            en: "Want it beautiful and fast?",
            ru: "Хочется красиво, быстро",
            uz: "Chiroyli va tezkor bo'lishini xohlaysizmi?"
          }
        ]
      },
      services: {
        title: {
          en: "What do we do?",
          ru: "Что мы делаем?",
          uz: "Biz nima qilamiz?"
        },
        items: [
          {
            en: "Create modern, fast, and user-friendly websites 'turnkey'",
            ru: "Создаём современные, быстрые и удобные сайты «под ключ»",
            uz: "Zamonaviy, tezkor va qulay veb-saytlarni «kalit bilan» yaratamiz"
          },
          {
            en: "Design tailored to your audience, not a template 'like everyone else'",
            ru: "Дизайн — под вашу аудиторию, а не шаблон «как у всех»",
            uz: "Dizayn — auditoriyangiz uchun, «hammaniki kabi» shablon emas"
          },
          {
            en: "Responsive design for all devices - from phone to Smart TV",
            ru: "Адаптивность под все устройства — от телефона до Smart TV",
            uz: "Barcha qurilmalar uchun moslashuvchanlik — telefondan Smart TV gacha"
          },
          {
            en: "Simple admin panel - you can edit content yourself",
            ru: "Простая админка — вы сами сможете редактировать контент",
            uz: "Oddiy admin panel — siz o'zingiz kontentni tahrirlashingiz mumkin"
          }
        ]
      },
      benefits: {
        title: {
          en: "Why is it convenient to work with us?",
          ru: "Почему с нами удобно?",
          uz: "Nima uchun biz bilan ishlash qulay?"
        },
        items: [
          {
            en: "Save your time - we take the entire process upon ourselves",
            ru: "Экономим ваше время — берём весь процесс на себя",
            uz: "Vaqtingizni tejaymiz — butun jarayonni o'zimizga olamiz"
          },
          {
            en: "Website in 1-10 days - no delays or extended deadlines",
            ru: "Сайт за 1–10 дней — без воды и затягивания сроков",
            uz: "1-10 kun ichida veb-sayt — kechiktirishlar va muddatlarni cho'zishsiz"
          },
          {
            en: "You get a ready-made tool, not just 'a file on hosting'",
            ru: "Вы получаете готовый инструмент, а не 'файл на хостинге'",
            uz: "Siz tayyor asbob olasiz, nafaqat 'xostingdagi fayl'"
          },
          {
            en: "We package meanings, not just 'a beautiful picture'",
            ru: "Упакуем смыслы, а не просто 'красивую картинку'",
            uz: "Ma'nolarni qamrab olamiz, nafaqat 'chiroyli rasm'"
          },
          {
            en: "We'll show you how to use the website for sales and lead generation",
            ru: "Покажем, как использовать сайт для продаж и лидогенерации",
            uz: "Veb-saytdan sotish va potentsial mijozlarni jalb qilish uchun qanday foydalanishni ko'rsatamiz"
          }
        ]
      },
      finalMessage: [
        {
          en: "You do business - we'll create a website that enhances it.",
          ru: "Вы занимаетесь бизнесом — мы сделаем сайт, который его усиливает.",
          uz: "Siz biznes bilan shug'ullanasiz — biz uni kuchaytiradigan veb-sayt yaratamiz."
        },
        {
          en: "Stylish. Convenient. Useful.",
          ru: "Стильно. Удобно. С пользой.",
          uz: "Zamonaviy. Qulay. Foydali."
        }
      ]
    }
  },
  ru: {
    nav: {
      about: 'О нас',
      services: 'Услуги',
      products: 'Продукты',
      articles: 'Статьи',
      caseStudies: 'Кейсы',
      blog: 'Статьи',
      contact: 'Контакты'
    },
    hero: {
      title: 'Автоматизация бизнеса',
      titleColored: 'Решения',
      subtitle: 'Оптимизируйте бизнес-процессы, снижайте затраты и увеличивайте прибыль с помощью наших комплексных услуг по автоматизации.',
      ourServices: 'Наши услуги',
      getInTouch: 'Связаться с нами'
    },
    contact: {
      title: 'Свяжитесь с нами',
      subtitle: 'Готовы трансформировать ваш бизнес с помощью автоматизации? Свяжитесь с нашей командой сегодня.',
      email: 'Email',
      phone: 'Телефон',
      office: 'Офис',
      address: '2-й проезд Авиасозлар',
      telegram: 'Telegram',
      businessHours: 'Часы работы',
      workingHours: 'Понедельник - Воскресенье: 9:00 - 18:00',
      support: 'Поддержка доступна 24/7'
    },
    about: {
      title: "О нас",
      mission: "Наша миссия",
      missionText: "Мы стремимся расширять возможности бизнеса с помощью инновационных решений для автоматизации, которые оптимизируют операции, повышают производительность и обеспечивают устойчивый рост.",
      whyChoose: "Почему выбирают нас",
      description: "NovaPro - ведущий поставщик решений для автоматизации бизнеса, специализирующийся на оптимизации процессов, снижении операционных затрат и повышении прибыльности для B2B-клиентов.",
      features: [
        "Команда экспертов с глубокими знаниями отрасли",
        "Индивидуальные решения под ваши потребности",
        "Комплексная поддержка и обслуживание",
        "Проверенный опыт успешных внедрений"
      ],
      cards: {
        efficiency: {
          title: "Эффективность",
          description: "Оптимизация операций и устранение избыточности"
        },
        timeSaving: {
          title: "Экономия времени",
          description: "Сокращение ручных задач и фокус на основной деятельности"
        },
        costReduction: {
          title: "Снижение затрат",
          description: "Снижение операционных расходов и использования ресурсов"
        },
        growth: {
          title: "Рост",
          description: "Масштабирование бизнеса с автоматизированными процессами"
        }
      }
    },
    services: {
      title: "Наши услуги",
      description: "Мы предлагаем комплексный спектр услуг по автоматизации, разработанных для трансформации ваших бизнес-операций и обеспечения устойчивого роста.",
      requestService: "Запросить услугу",
      items: [
        {
          title: "Автоматизация процессов",
          description: "Оптимизация повторяющихся задач и рабочих процессов для повышения эффективности и снижения ручного труда."
        },
        {
          title: "Разработка ПО",
          description: "Индивидуальные программные решения, разработанные для решения ваших бизнес-задач."
        },
        {
          title: "Системная интеграция",
          description: "Бесшовное соединение различных систем для эффективного обмена данными в организации."
        },
        {
          title: "Бизнес-аналитика",
          description: "Получение ценных инсайтов из данных для принятия информированных решений."
        },
        {
          title: "Обучение и поддержка",
          description: "Комплексное обучение и постоянная поддержка для максимальной отдачи от автоматизации."
        },
        {
          title: "Аудит и оптимизация",
          description: "Тщательный анализ существующих процессов для выявления возможностей оптимизации."
        }
      ]
    },
    products: {
      title: "Наши продукты",
      description: "Мы специализируемся на внедрении и настройке передовых инструментов автоматизации, адаптированных под ваши бизнес-потребности.",
      learnMore: "Узнать больше",
      items: [
        {
          name: {
            en: "HR Services",
            ru: "HR Услуги",
            uz: "HR Xizmatlar"
          },
          description: {
            en: "Comprehensive HR solutions for your business growth",
            ru: "Комплексные HR-решения для роста вашего бизнеса",
            uz: "Biznesingizning o'sishi uchun keng qamrovli HR yechimlar"
          },
          features: [
            {
              en: "Full-cycle recruitment automation",
              ru: "Автоматизация полного цикла подбора персонала",
              uz: "To'liq tsiklli xodimlarni tanlashni avtomatlashtirish"
            },
            {
              en: "Digital employee onboarding",
              ru: "Цифровая адаптация сотрудников",
              uz: "Raqamli xodimlarni jalb qilish"
            },
            {
              en: "Performance tracking systems",
              ru: "Системы отслеживания эффективности",
              uz: "Ish samaradorligini kuzatish tizimlari"
            },
            {
              en: "HR document automation",
              ru: "Автоматизация HR-документов",
              uz: "HR hujjatlarini avtomatlashtirish"
            }
          ],
          image: "/images/OurProducts.avif"
        },
        {
          name: {
            en: "MySklad",
            ru: "МойСклад",
            uz: "MoySklad"
          },
          description: {
            en: "Order in business, profit in numbers",
            ru: "Порядок в бизнесе, прибыль в цифрах",
            uz: "Biznesda tartib, raqamlarda foyda"
          },
          features: [
            {
              en: "Real-time inventory tracking",
              ru: "Отслеживание запасов в реальном времени",
              uz: "Real vaqt rejimida zaxiralarni kuzatish"
            },
            {
              en: "Automated document processing",
              ru: "Автоматическая обработка документов",
              uz: "Hujjatlarni avtomatik qayta ishlash"
            },
            {
              en: "Sales and purchase management",
              ru: "Управление продажами и закупками",
              uz: "Sotish va xarid qilishni boshqarish"
            },
            {
              en: "Instant profit reports",
              ru: "Мгновенные отчеты о прибыли",
              uz: "Tezkor foyda hisobotlari"
            }
          ],
          problems: {
            title: {
              en: "What problems do we solve?",
              ru: "Какие проблемы мы решаем?",
              uz: "Qanday muammolarni hal qilamiz?"
            },
            items: [
              {
                en: "Chaos in inventory management?",
                ru: "Хаос в управлении запасами?",
                uz: "Zaxiralarni boshqarishda tartibsizlik?"
              },
              {
                en: "Manual document processing?",
                ru: "Ручная обработка документов?",
                uz: "Qo'lda hujjatlarni qayta ishlash?"
              },
              {
                en: "No real-time data?",
                ru: "Нет данных в реальном времени?",
                uz: "Real vaqtda ma'lumotlar yo'q?"
              },
              {
                en: "Complex reporting?",
                ru: "Сложная отчетность?",
                uz: "Murakkab hisobot?"
              }
            ]
          },
          capabilities: {
            title: {
              en: "What can MySklad do?",
              ru: "Что умеет МойСклад?",
              uz: "MoySklad nima qila oladi?"
            },
            items: [
              {
                en: "Automated inventory management",
                ru: "Автоматизированное управление запасами",
                uz: "Avtomatlashtirilgan zaxiralarni boshqarish"
              },
              {
                en: "Document flow automation",
                ru: "Автоматизация документооборота",
                uz: "Hujjatlar almashinuvini avtomatlashtirish"
              },
              {
                en: "Real-time analytics",
                ru: "Аналитика в реальном времени",
                uz: "Real vaqtda tahlil"
              },
              {
                en: "Mobile access",
                ru: "Мобильный доступ",
                uz: "Mobil kirish"
              }
            ]
          },
          implementation: {
            title: {
              en: "Implementation process",
              ru: "Процесс внедрения",
              uz: "Joriy etish jarayoni"
            },
            items: [
              {
                en: "Quick setup in 1 day",
                ru: "Быстрая настройка за 1 день",
                uz: "1 kunda tezkor sozlash"
              },
              {
                en: "Staff training",
                ru: "Обучение персонала",
                uz: "Xodimlarni o'qitish"
              },
              {
                en: "Technical support",
                ru: "Техническая поддержка",
                uz: "Texnik yordam"
              },
              {
                en: "Regular updates",
                ru: "Регулярные обновления",
                uz: "Muntazam yangilanishlar"
              }
            ]
          },
          finalMessage: [
            {
              en: "Streamline your business with MySklad",
              ru: "Оптимизируйте свой бизнес с МойСклад",
              uz: "MoySklad bilan biznesingizni optimallashtiring"
            },
            {
              en: "Order in business, profit in numbers",
              ru: "Порядок в бизнесе, прибыль в цифрах",
              uz: "Biznesda tartib, raqamlarda foyda"
            }
          ],
          image: "/images/24x.avif"
        },
        {
          name: "Разработка сайтов",
          description: "Создаем сайты, которые работают на ваш бизнес",
          features: [
            "Современный и адаптивный дизайн",
            "Удобный интерфейс",
            "SEO оптимизация",
            "Система управления контентом"
          ],
          image: "/images/WebSiteDevelopmen.jpeg"
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
          tags: ["1C", "Автоматизация процессов", "Производство"],
          image: '/images/OurProducts.avif'
        },
        {
          title: "Система управления розничной сетью",
          client: "GlobeMart Retail",
          description: "Разработали интегрированное решение для управления более чем 50 розничными точками, централизовав запасы, данные о продажах и информацию о клиентах.",
          tags: ["MySklad", "Розница", "Управление запасами"],
          image: '/images/CaseStudies_2.avif'
        },
        {
          title: "Автоматизация HR-процессов",
          client: "Innovate Consulting Group",
          description: "Оптимизировали процессы найма, адаптации и расчета заработной платы, сократив административное время на 65% и бумажную работу на 85%.",
          tags: ["HR-решения", "Найм", "Расчет зарплаты"],
          image: '/images/CaseStudies_3.avif'
        }
      ]
    },
    blog: {
      title: "Наши статьи",
      description: "Бесплатные статьи и аналитика об упрощении бизнес-операций и повышении дохода с помощью автоматизации.",
      readMore: "Читать далее",
      readTime: "мин. чтения",
      viewAll: "Просмотреть все статьи",
      posts: [
        {
          id: "automation-efficiency",
          title: "5 способов повышения эффективности компании с помощью автоматизации",
          excerpt: "Узнайте, как внедрение автоматизации в ключевых бизнес-областях может значительно повысить производительность и снизить операционные расходы.",
          date: "28 марта 2025",
          author: "София Чен",
          readTime: "7",
          image: "/images/Blog_2.avif"
        },
        {
          id: "automation-tools",
          title: "Выбор подходящих инструментов автоматизации для вашего бизнеса",
          excerpt: "Комплексное руководство по выбору решений для автоматизации, соответствующих конкретным потребностям и целям вашего бизнеса.",
          date: "15 марта 2025",
          author: "Даниил Вильсон",
          readTime: "6",
          image: "/images/Blog_3.avif"
        },
        {
          id: "business-growth",
          title: "Как автоматизация способствует росту бизнеса",
          excerpt: "Узнайте, как автоматизация может помочь вашему бизнесу эффективно масштабироваться и сохранять конкурентное преимущество на рынке.",
          date: "1 марта 2025",
          author: "Майкл Браун",
          readTime: "8",
          image: "/images/Blog_4.avif"
        }
      ]
    },
    footer: {
      followUs: "Следите за нами",
      followUsText: "Расширение возможностей бизнеса с помощью инновационных решений для автоматизации, которые оптимизируют операции, повышают производительность и обеспечивают устойчивый рост."
    },
    hrServices: {
      title: "HR Услуги",
      description: "Комплексные HR решения для роста вашего бизнеса",
      problems: {
        title: "HR проблемы, которые мы решаем",
        items: [
          "Длительные процессы найма",
          "Неэффективная адаптация сотрудников",
          "Сложное управление эффективностью",
          "Ручное ведение HR документации",
          "Управление данными сотрудников",
          "Проблемы соответствия и отчетности"
        ]
      },
      services: {
        title: "Наши HR услуги",
        items: [
          "Автоматизация полного цикла рекрутинга",
          "Цифровая адаптация сотрудников",
          "Системы отслеживания эффективности",
          "Автоматизация HR документов",
          "Управление базой данных сотрудников",
          "Инструменты контроля соответствия"
        ]
      },
      benefits: {
        title: "Почему выбирают наши HR услуги",
        items: [
          "Сокращение времени и затрат на найм",
          "Улучшенный опыт сотрудников",
          "Повышенная эффективность HR",
          "Автоматизированное соответствие",
          "Решения на основе данных",
          "Масштабируемые решения"
        ]
      }
    },
    websiteDevelopment: {
      name: {
        en: "Website Development",
        ru: "Создание сайтов",
        uz: "Veb-sayt yaratish"
      },
      description: {
        en: "Creating websites that work for your business",
        ru: "Создание сайтов, которые работают на ваш бизнес",
        uz: "Biznesingiz uchun ishlaydigan veb-saytlar yaratish"
      },
      problems: {
        title: {
          en: "What problems do we solve?",
          ru: "Какие проблемы мы решаем?",
          uz: "Qanday muammolarni hal qilamiz?"
        },
        items: [
          {
            en: "No website - and you're not found on the internet?",
            ru: "Нет сайта — и вас не находят в интернете?",
            uz: "Veb-saytingiz yo'q — va sizni internetda topa olmaydilar?"
          },
          {
            en: "Have a website, but it's outdated, doesn't sell, and is slow?",
            ru: "Есть сайт, но он устарел, не продаёт и тормозит?",
            uz: "Veb-saytingiz bor, lekin eskirgan, sotish qilmaydi va sekin ishlaydi?"
          },
          {
            en: "Losing customers due to inconvenient interface or slow loading?",
            ru: "Потеря клиентов из-за неудобного интерфейса или долгой загрузки?",
            uz: "Noqulay interfeys yoki sekin yuklanish tufayli mijozlarni yo'qotish?"
          },
          {
            en: "Constant bugs, edits through a programmer, and chaos in the admin panel?",
            ru: "Постоянные баги, правки через программиста и хаос в админке?",
            uz: "Doimiy xatolar, dasturchi orqali tuzatishlar va admin panelidagi tartibsizlik?"
          },
          {
            en: "Want it beautiful and fast?",
            ru: "Хочется красиво, быстро",
            uz: "Chiroyli va tezkor bo'lishini xohlaysizmi?"
          }
        ]
      },
      services: {
        title: {
          en: "What do we do?",
          ru: "Что мы делаем?",
          uz: "Biz nima qilamiz?"
        },
        items: [
          {
            en: "Create modern, fast, and user-friendly websites 'turnkey'",
            ru: "Создаём современные, быстрые и удобные сайты «под ключ»",
            uz: "Zamonaviy, tezkor va qulay veb-saytlarni «kalit bilan» yaratamiz"
          },
          {
            en: "Design tailored to your audience, not a template 'like everyone else'",
            ru: "Дизайн — под вашу аудиторию, а не шаблон «как у всех»",
            uz: "Dizayn — auditoriyangiz uchun, «hammaniki kabi» shablon emas"
          },
          {
            en: "Responsive design for all devices - from phone to Smart TV",
            ru: "Адаптивность под все устройства — от телефона до Smart TV",
            uz: "Barcha qurilmalar uchun moslashuvchanlik — telefondan Smart TV gacha"
          },
          {
            en: "Simple admin panel - you can edit content yourself",
            ru: "Простая админка — вы сами сможете редактировать контент",
            uz: "Oddiy admin panel — siz o'zingiz kontentni tahrirlashingiz mumkin"
          }
        ]
      },
      benefits: {
        title: {
          en: "Why is it convenient to work with us?",
          ru: "Почему с нами удобно?",
          uz: "Nima uchun biz bilan ishlash qulay?"
        },
        items: [
          {
            en: "Save your time - we take the entire process upon ourselves",
            ru: "Экономим ваше время — берём весь процесс на себя",
            uz: "Vaqtingizni tejaymiz — butun jarayonni o'zimizga olamiz"
          },
          {
            en: "Website in 1-10 days - no delays or extended deadlines",
            ru: "Сайт за 1–10 дней — без воды и затягивания сроков",
            uz: "1-10 kun ichida veb-sayt — kechiktirishlar va muddatlarni cho'zishsiz"
          },
          {
            en: "You get a ready-made tool, not just 'a file on hosting'",
            ru: "Вы получаете готовый инструмент, а не 'файл на хостинге'",
            uz: "Siz tayyor asbob olasiz, nafaqat 'xostingdagi fayl'"
          },
          {
            en: "We package meanings, not just 'a beautiful picture'",
            ru: "Упакуем смыслы, а не просто 'красивую картинку'",
            uz: "Ma'nolarni qamrab olamiz, nafaqat 'chiroyli rasm'"
          },
          {
            en: "We'll show you how to use the website for sales and lead generation",
            ru: "Покажем, как использовать сайт для продаж и лидогенерации",
            uz: "Veb-saytdan sotish va potentsial mijozlarni jalb qilish uchun qanday foydalanishni ko'rsatamiz"
          }
        ]
      },
      finalMessage: [
        {
          en: "You do business - we'll create a website that enhances it.",
          ru: "Вы занимаетесь бизнесом — мы сделаем сайт, который его усиливает.",
          uz: "Siz biznes bilan shug'ullanasiz — biz uni kuchaytiradigan veb-sayt yaratamiz."
        },
        {
          en: "Stylish. Convenient. Useful.",
          ru: "Стильно. Удобно. С пользой.",
          uz: "Zamonaviy. Qulay. Foydali."
        }
      ]
    }
  },
  uz: {
    nav: {
      about: 'Biz haqimizda',
      services: 'Xizmatlar',
      products: 'Mahsulotlar',
      articles: 'Maqolalar',
      caseStudies: 'Ishlar',
      blog: 'Maqolalar',
      contact: 'Aloqa'
    },
    hero: {
      title: 'Biznes avtomatlashtirish',
      titleColored: 'Yechimlar',
      subtitle: 'Biznes jarayonlarini optimallashtiring, xarajatlarni kamaytiring va kapsamlı avtomatlashtirish xizmatlarimiz orqali foydani oshiring.',
      ourServices: 'Bizning xizmatlarimiz',
      getInTouch: 'Bog\'lanish'
    },
    contact: {
      title: 'Biz bilan bog\'laning',
      subtitle: 'Avtomatlashtirish orqali biznesingizni o\'zgartirishga tayyormisiz? Bugun bizning jamoamiz bilan bog\'laning.',
      email: 'Email',
      phone: 'Telefon',
      office: 'Ofis',
      address: '2-Mirzo Ulug\'bek ko\'chasi, Toshkent, O\'zbekiston',
      telegram: 'Telegram',
      businessHours: 'Ish vaqtlari',
      workingHours: 'Dushanba - Yakshanba: 9:00 - 18:00',
      support: '24/7 Yordam mavjud'
    },
    about: {
      title: 'Biz haqimizda',
      mission: 'Bizning vazifamiz',
      missionText: 'Biz innovatsion avtomatlashtirish yechimlari orqali bizneslarni kengaytirish, operatsiyalarni optimallashtirishga, samaradorlikni oshirishga va barqaror o\'sishni ta\'minlashga intilamiz.',
      whyChoose: 'Nega biz',
      description: 'NovaPro - B2B mijozlar uchun jarayonlarni optimallashtirish, operatsion xarajatlarni kamaytirish va foydani oshirishga ixtisoslashgan yetakchi biznes avtomatlashtirish yechimlari provayderi.',
      features: [
        'Chuqur sohaviy bilimga ega ekspert jamoa',
        'Sizning ehtiyojlaringizga moslashtirilgan yechimlar',
        'Keng qamrovli qo\'llab-quvvatlash va xizmat ko\'rsatish',
        'Muvaffaqiyatli amalga oshirilgan loyihalar tajribasi'
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
      description: 'Biz sizning biznes operatsiyalaringizni o\'zgartirish va barqaror o\'sishni ta\'minlash uchun mo\'ljallangan keng qamrovli avtomatlashtirish xizmatlarini taklif etamiz.',
      requestService: 'Xizmat buyurtma qilish',
      items: [
        {
          title: 'Jarayonlarni avtomatlashtirish',
          description: 'Operatsion samaradorlikni oshirish va qo\'l mehnatini kamaytirish uchun takrorlanuvchi vazifalar va ish jarayonlarini optimallashtirish.'
        },
        {
          title: 'Dasturiy ta\'minot ishlab chiqish',
          description: 'Sizning aniq biznes muammolaringiz va talablaringizni hal qilish uchun mo\'ljallangan individual dasturiy yechimlar.'
        },
        {
          title: 'Tizimlarni integratsiya qilish',
          description: 'Tashkilotingizda ma\'lumotlar samarali oqimini ta\'minlash uchun turli tizimlar va ilovalarni uzluksiz bog\'lash.'
        },
        {
          title: 'Biznes tahlili',
          description: 'Ma\'lumotlaringizdan qimmatli xulosalar chiqarish, ma\'lumotli qarorlar qabul qilish va takomillashtirish imkoniyatlarini aniqlash.'
        },
        {
          title: 'O\'qitish va qo\'llab-quvvatlash',
          description: 'Jamoangiz avtomatlashtirish afzalliklaridan maksimal darajada foydalanishini ta\'minlash uchun keng qamrovli o\'qitish va doimiy qo\'llab-quvvatlash.'
        },
        {
          title: 'Audit va optimallashtirish',
          description: 'Optimallashtirish imkoniyatlarini aniqlash va takomillashtirishlarni amalga oshirish uchun mavjud jarayonlarni chuqur tahlil qilish.'
        }
      ]
    },
    products: {
      title: "Bizning mahsulotlar",
      description: "Biz biznesingiz ehtiyojlariga moslashtirilgan yetakchi avtomatlashtirish vositalarini joriy etish va sozlashga ixtisoslashganmiz.",
      learnMore: "Ko'proq bilish",
      items: [
        {
          name: {
            en: "HR Services",
            ru: "HR Услуги",
            uz: "HR Xizmatlar"
          },
          description: {
            en: "Comprehensive HR solutions for your business growth",
            ru: "Комплексные HR-решения для роста вашего бизнеса",
            uz: "Biznesingizning o'sishi uchun keng qamrovli HR yechimlar"
          },
          features: [
            {
              en: "Full-cycle recruitment automation",
              ru: "Автоматизация полного цикла подбора персонала",
              uz: "To'liq tsiklli xodimlarni tanlashni avtomatlashtirish"
            },
            {
              en: "Digital employee onboarding",
              ru: "Цифровая адаптация сотрудников",
              uz: "Raqamli xodimlarni jalb qilish"
            },
            {
              en: "Performance tracking systems",
              ru: "Системы отслеживания эффективности",
              uz: "Ish samaradorligini kuzatish tizimlari"
            },
            {
              en: "HR document automation",
              ru: "Автоматизация HR-документов",
              uz: "HR hujjatlarini avtomatlashtirish"
            }
          ],
          image: "/images/OurProducts.avif"
        },
        {
          name: {
            en: "MySklad",
            ru: "МойСклад",
            uz: "MoySklad"
          },
          description: {
            en: "Order in business, profit in numbers",
            ru: "Порядок в бизнесе, прибыль в цифрах",
            uz: "Biznesda tartib, raqamlarda foyda"
          },
          features: [
            {
              en: "Real-time inventory tracking",
              ru: "Отслеживание запасов в реальном времени",
              uz: "Real vaqt rejimida zaxiralarni kuzatish"
            },
            {
              en: "Automated document processing",
              ru: "Автоматическая обработка документов",
              uz: "Hujjatlarni avtomatik qayta ishlash"
            },
            {
              en: "Sales and purchase management",
              ru: "Управление продажами и закупками",
              uz: "Sotish va xarid qilishni boshqarish"
            },
            {
              en: "Instant profit reports",
              ru: "Мгновенные отчеты о прибыли",
              uz: "Tezkor foyda hisobotlari"
            }
          ],
          problems: {
            title: {
              en: "What problems do we solve?",
              ru: "Какие проблемы мы решаем?",
              uz: "Qanday muammolarni hal qilamiz?"
            },
            items: [
              {
                en: "Chaos in inventory management?",
                ru: "Хаос в управлении запасами?",
                uz: "Zaxiralarni boshqarishda tartibsizlik?"
              },
              {
                en: "Manual document processing?",
                ru: "Ручная обработка документов?",
                uz: "Qo'lda hujjatlarni qayta ishlash?"
              },
              {
                en: "No real-time data?",
                ru: "Нет данных в реальном времени?",
                uz: "Real vaqtda ma'lumotlar yo'q?"
              },
              {
                en: "Complex reporting?",
                ru: "Сложная отчетность?",
                uz: "Murakkab hisobot?"
              }
            ]
          },
          capabilities: {
            title: {
              en: "What can MySklad do?",
              ru: "Что умеет МойСклад?",
              uz: "MoySklad nima qila oladi?"
            },
            items: [
              {
                en: "Automated inventory management",
                ru: "Автоматизированное управление запасами",
                uz: "Avtomatlashtirilgan zaxiralarni boshqarish"
              },
              {
                en: "Document flow automation",
                ru: "Автоматизация документооборота",
                uz: "Hujjatlar almashinuvini avtomatlashtirish"
              },
              {
                en: "Real-time analytics",
                ru: "Аналитика в реальном времени",
                uz: "Real vaqtda tahlil"
              },
              {
                en: "Mobile access",
                ru: "Мобильный доступ",
                uz: "Mobil kirish"
              }
            ]
          },
          implementation: {
            title: {
              en: "Implementation process",
              ru: "Процесс внедрения",
              uz: "Joriy etish jarayoni"
            },
            items: [
              {
                en: "Quick setup in 1 day",
                ru: "Быстрая настройка за 1 день",
                uz: "1 kunda tezkor sozlash"
              },
              {
                en: "Staff training",
                ru: "Обучение персонала",
                uz: "Xodimlarni o'qitish"
              },
              {
                en: "Technical support",
                ru: "Техническая поддержка",
                uz: "Texnik yordam"
              },
              {
                en: "Regular updates",
                ru: "Регулярные обновления",
                uz: "Muntazam yangilanishlar"
              }
            ]
          },
          finalMessage: [
            {
              en: "Streamline your business with MySklad",
              ru: "Оптимизируйте свой бизнес с МойСклад",
              uz: "MoySklad bilan biznesingizni optimallashtiring"
            },
            {
              en: "Order in business, profit in numbers",
              ru: "Порядок в бизнесе, прибыль в цифрах",
              uz: "Biznesda tartib, raqamlarda foyda"
            }
          ],
          image: "/images/24x.avif"
        },
        {
          name: "Veb-sayt yaratish",
          description: "Biznesingiz uchun ishlaydigan veb-saytlar yaratamiz",
          features: [
            "Zamonaviy va moslashuvchan dizayn",
            "Qulay interfeys",
            "SEO optimallashtirish",
            "Kontent boshqaruv tizimi"
          ],
          image: "/images/WebSiteDevelopmen.jpeg"
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
          tags: ["1C", "Jarayonlarni avtomatlashtirish", "Ishlab chiqarish"],
          image: '/images/OurProducts.avif'
        },
        {
          title: "Chakana savdo tarmog'ini boshqarish tizimi",
          client: "GlobeMart Retail",
          description: "50 dan ortiq savdo nuqtalarini boshqarish uchun integratsiyalashgan yechim ishlab chiqdik, inventar, savdo ma'lumotlari va mijozlar ma'lumotlarini markazlashtirildi.",
          tags: ["MySklad", "Chakana savdo", "Inventarni boshqarish"],
          image: '/images/CaseStudies_2.avif'
        },
        {
          title: "HR jarayonlarini avtomatlashtirish",
          client: "Innovate Consulting Group",
          description: "Ishga qabul qilish, yangi xodimlarni tanishtirish va ish haqi jarayonlarini optimallashtirdik, ma'muriy vaqtni 65% ga va qog'oz ishlarini 85% ga kamaytirib.",
          tags: ["HR yechimlari", "Ishga qabul qilish", "Ish haqi"],
          image: '/images/CaseStudies_3.avif'
        }
      ]
    },
    blog: {
      title: "Bizning maqolalar",
      description: "Biznes operatsiyalarini soddalashtirish va avtomatlashtirish orqali daromadni oshirish bo'yicha bepul maqolalar va mulohazalar.",
      readMore: "Batafsil o'qish",
      readTime: "daqiqa o'qish",
      viewAll: "Barcha maqolalarni ko'rish",
      posts: [
        {
          id: "automation-efficiency",
          title: "Avtomatlashtirish kompaniyangiz samaradorligini oshirishning 5 usuli",
          excerpt: "Asosiy biznes sohalarida avtomatlashtirish qanday qilib unumdorlikni sezilarli darajada oshirishi va operatsion xarajatlarni kamaytirishini bilib oling.",
          date: "28 mart",
          author: "Sofiya Chen",
          readTime: "7",
          image: "/images/Blog_2.avif"
        },
        {
          id: "automation-tools",
          title: "Biznesingiz uchun to'g'ri avtomatlashtirish vositalarini tanlash",
          excerpt: "Biznesingizning o'ziga xos ehtiyojlari va maqsadlariga mos keladigan avtomatlashtirish yechimlarini tanlash bo'yicha keng qamrovli qo'llanma.",
          date: "15 mart",
          author: "Daniel Vilson",
          readTime: "6",
          image: "/images/Blog_3.avif"
        },
        {
          id: "business-growth",
          title: "Avtomatlashtirish biznes o'sishiga qanday yordam beradi",
          excerpt: "Avtomatlashtirish qanday qilib biznesingizni samarali ravishda kengaytirishga va bozorda raqobatbardoshligini saqlab qolishga yordam berishini bilib oling.",
          date: "1 mart",
          author: "Maykl Braun",
          readTime: "8",
          image: "/images/Blog_4.avif"
        }
      ]
    },
    footer: {
      followUs: "Bizni kuzating",
      followUsText: "Biznes jarayonlarini soddalashtirish, samaradorlikni oshirish va barqaror o'sishni ta'minlash uchun innovatsion avtomatlashtirish yechimlari orqali bizneslarni kuchaytiramiz."
    },
    hrServices: {
      title: "HR Xizmatlar",
      description: "Biznesingiz o'sishi uchun kompleks HR yechimlari",
      problems: {
        title: "Biz yechadigan HR muammolar",
        items: [
          "Vaqt talab qiladigan ishga qabul qilish jarayonlari",
          "Samarasiz xodimlarni moslashtirish",
          "Murakkab samaradorlikni boshqarish",
          "Qo'lda HR hujjatlarini yuritish",
          "Xodimlar ma'lumotlarini boshqarish",
          "Muvofiqlik va hisobot muammolari"
        ]
      },
      services: {
        title: "Bizning HR xizmatlarimiz",
        items: [
          "To'liq siklli rekruting avtomatizatsiyasi",
          "Raqamli xodimlarni moslashtirish",
          "Samaradorlikni kuzatish tizimlari",
          "HR hujjatlarini avtomatlashtirish",
          "Xodimlar ma'lumotlar bazasini boshqarish",
          "Muvofiqlikni nazorat qilish vositalari"
        ]
      },
      benefits: {
        title: "Nima uchun bizning HR xizmatlarimizni tanlash kerak",
        items: [
          "Ishga qabul qilish vaqti va xarajatlarini kamaytirish",
          "Yaxshilangan xodimlar tajribasi",
          "Oshirilgan HR samaradorligi",
          "Avtomatlashtirilgan muvofiqlik",
          "Ma'lumotlarga asoslangan qarorlar",
          "Kengaytiriladigan yechimlar"
        ]
      }
    },
    websiteDevelopment: {
      name: {
        en: "Website Development",
        ru: "Создание сайтов",
        uz: "Veb-sayt yaratish"
      },
      description: {
        en: "Creating websites that work for your business",
        ru: "Создание сайтов, которые работают на ваш бизнес",
        uz: "Biznesingiz uchun ishlaydigan veb-saytlar yaratish"
      },
      problems: {
        title: {
          en: "What problems do we solve?",
          ru: "Какие проблемы мы решаем?",
          uz: "Qanday muammolarni hal qilamiz?"
        },
        items: [
          {
            en: "No website - and you're not found on the internet?",
            ru: "Нет сайта — и вас не находят в интернете?",
            uz: "Veb-saytingiz yo'q — va sizni internetda topa olmaydilar?"
          },
          {
            en: "Have a website, but it's outdated, doesn't sell, and is slow?",
            ru: "Есть сайт, но он устарел, не продаёт и тормозит?",
            uz: "Veb-saytingiz bor, lekin eskirgan, sotish qilmaydi va sekin ishlaydi?"
          },
          {
            en: "Losing customers due to inconvenient interface or slow loading?",
            ru: "Потеря клиентов из-за неудобного интерфейса или долгой загрузки?",
            uz: "Noqulay interfeys yoki sekin yuklanish tufayli mijozlarni yo'qotish?"
          },
          {
            en: "Constant bugs, edits through a programmer, and chaos in the admin panel?",
            ru: "Постоянные баги, правки через программиста и хаос в админке?",
            uz: "Doimiy xatolar, dasturchi orqali tuzatishlar va admin panelidagi tartibsizlik?"
          },
          {
            en: "Want it beautiful and fast?",
            ru: "Хочется красиво, быстро",
            uz: "Chiroyli va tezkor bo'lishini xohlaysizmi?"
          }
        ]
      },
      services: {
        title: {
          en: "What do we do?",
          ru: "Что мы делаем?",
          uz: "Biz nima qilamiz?"
        },
        items: [
          {
            en: "Create modern, fast, and user-friendly websites 'turnkey'",
            ru: "Создаём современные, быстрые и удобные сайты «под ключ»",
            uz: "Zamonaviy, tezkor va qulay veb-saytlarni «kalit bilan» yaratamiz"
          },
          {
            en: "Design tailored to your audience, not a template 'like everyone else'",
            ru: "Дизайн — под вашу аудиторию, а не шаблон «как у всех»",
            uz: "Dizayn — auditoriyangiz uchun, «hammaniki kabi» shablon emas"
          },
          {
            en: "Responsive design for all devices - from phone to Smart TV",
            ru: "Адаптивность под все устройства — от телефона до Smart TV",
            uz: "Barcha qurilmalar uchun moslashuvchanlik — telefondan Smart TV gacha"
          },
          {
            en: "Simple admin panel - you can edit content yourself",
            ru: "Простая админка — вы сами сможете редактировать контент",
            uz: "Oddiy admin panel — siz o'zingiz kontentni tahrirlashingiz mumkin"
          }
        ]
      },
      benefits: {
        title: {
          en: "Why is it convenient to work with us?",
          ru: "Почему с нами удобно?",
          uz: "Nima uchun biz bilan ishlash qulay?"
        },
        items: [
          {
            en: "Save your time - we take the entire process upon ourselves",
            ru: "Экономим ваше время — берём весь процесс на себя",
            uz: "Vaqtingizni tejaymiz — butun jarayonni o'zimizga olamiz"
          },
          {
            en: "Website in 1-10 days - no delays or extended deadlines",
            ru: "Сайт за 1–10 дней — без воды и затягивания сроков",
            uz: "1-10 kun ichida veb-sayt — kechiktirishlar va muddatlarni cho'zishsiz"
          },
          {
            en: "You get a ready-made tool, not just 'a file on hosting'",
            ru: "Вы получаете готовый инструмент, а не 'файл на хостинге'",
            uz: "Siz tayyor asbob olasiz, nafaqat 'xostingdagi fayl'"
          },
          {
            en: "We package meanings, not just 'a beautiful picture'",
            ru: "Упакуем смыслы, а не просто 'красивую картинку'",
            uz: "Ma'nolarni qamrab olamiz, nafaqat 'chiroyli rasm'"
          },
          {
            en: "We'll show you how to use the website for sales and lead generation",
            ru: "Покажем, как использовать сайт для продаж и лидогенерации",
            uz: "Veb-saytdan sotish va potentsial mijozlarni jalb qilish uchun qanday foydalanishni ko'rsatamiz"
          }
        ]
      },
      finalMessage: [
        {
          en: "You do business - we'll create a website that enhances it.",
          ru: "Вы занимаетесь бизнесом — мы сделаем сайт, который его усиливает.",
          uz: "Siz biznes bilan shug'ullanasiz — biz uni kuchaytiradigan veb-sayt yaratamiz."
        },
        {
          en: "Stylish. Convenient. Useful.",
          ru: "Стильно. Удобно. С пользой.",
          uz: "Zamonaviy. Qulay. Foydali."
        }
      ]
    }
  }
} as const;

export type Translations = typeof translations;
export type TranslationKey = keyof typeof translations;

export const useTranslation = (languageCode: LanguageCode) => {
  return translations[languageCode];
};
