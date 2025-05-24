
'use client'
import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const CaseStudiesUz = () => {
  const { setLanguage } = useLanguageStore();
  const navigate = useNavigate();

  useEffect(() => {
    setLanguage('uz');
    localStorage.setItem('language', 'uz');
  }, [setLanguage]);

  const caseStudies = [
    {
      id: 1,
      title: "Ishlab chiqarish operatsiyalarini optimizatsiya qilish",
      description: "Biz ishlab chiqarish kompaniyasiga avtomatizatsiya va jarayonlarni optimizatsiya qilish orqali operatsion xarajatlarni 40% ga kamaytirishda qanday yordam berdik.",
      image: '/images/CaseStudies_2.avif',
      client: "TexIshlab chiqarish",
      industry: "Ishlab chiqarish",
      duration: "6 oy"
    },
    {
      id: 2,
      title: "Chakka savdoda raqamli transformatsiya",
      description: "Chakka savdo tarmog'i uchun onlayn savdoni 200% ga oshirgan integratsiyalangan elektron tijorat yechimini joriy qilish.",
      image: '/images/CaseStudies_3.avif',
      client: "Chakka savdo Grouppasi",
      industry: "Chakka savdo",
      duration: "8 oy"
    },
    {
      id: 3,
      title: "Aqlli zaxiralarni boshqarish tizimi",
      description: "Zaxiralarni boshqarish uchun yig'indiy yechim yaratish, bu yechim yo'qotishlarni 85% ga kamaytirdi va buyurtmalarning aniqligini yaxshiladi.",
      image: '/images/24x.avif',
      client: "LogistikaPro",
      industry: "Logistika",
      duration: "4 oy"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Keyslar
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Bizning yordamimiz bilan biznes operatsiyalarini qanday transformatsiya qilib, ajoyib natijalarga erishganimizni biling.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study) => (
            <motion.article
              key={study.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#2A2A2F] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col cursor-pointer"
              onClick={() => navigate(`/uz/case-study/${study.id}`)}
            >
              <div className="relative h-48">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-1.5 mb-4 -mt-2">
                  {study.industry === "Ishlab chiqarish" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">1S</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Avtomatizatsiya</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Ishlab chiqarish</span>
                    </>
                  )}
                  {study.industry === "Chakka savdo" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">MoySklad</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Chakka savdo</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Zaxiralarni boshqarish</span>
                    </>
                  )}
                  {study.industry === "Logistika" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">HR Yechimlar</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Kadrlarni tanlash</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Moyiya</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-4 text-yellow-400">
                  {study.title}
                </h2>
                <div className="mb-2 text-sm text-gray-400">
                  <span className="text-yellow-400">Mijoz:</span> {study.client}
                </div>
                <p className="text-gray-400 mb-6 flex-grow text-base">
                  {study.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button 
            className="px-8 py-3 bg-yellow-400 text-[#1C1C1F] rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
          >
            Barcha keyslarni ko'rish
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesUz; 