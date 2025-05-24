import { useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

const CaseStudiesEn = () => {
  const { setLanguage } = useLanguageStore();
  const navigate = useNavigate();

  useEffect(() => {
    setLanguage('en');
    localStorage.setItem('language', 'en');
  }, [setLanguage]);

  const caseStudies = [
    {
      id: 1,
      title: "Streamlining Operations for Manufacturing Excellence",
      description: "How we helped a manufacturing company reduce operational costs by 40% through automation and process optimization.",
      image: '/images/CaseStudies_2.avif',
      client: "TechManufacture Co.",
      industry: "Manufacturing",
      duration: "6 months"
    },
    {
      id: 2,
      title: "Digital Transformation in Retail",
      description: "Implementing an integrated e-commerce solution that increased online sales by 200% for a retail chain.",
      image: '/images/CaseStudies_3.avif',
      client: "RetailPro Group",
      industry: "Retail",
      duration: "8 months"
    },
    {
      id: 3,
      title: "Smart Inventory Management System",
      description: "Developing a custom inventory management solution that reduced stockouts by 85% and improved order accuracy.",
      image: '/images/24x.avif',
      client: "LogisticsPro Inc.",
      industry: "Logistics",
      duration: "4 months"
    }
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-32 pb-16 px-4 max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Case Studies
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Explore how we've helped businesses transform their operations and achieve remarkable results.
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
              onClick={() => navigate(`/en/case-study/${study.id}`)}
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
                  {study.industry === "Manufacturing" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">1C</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Process Automation</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Manufacturing</span>
                    </>
                  )}
                  {study.industry === "Retail" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">MySklad</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Retail</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Inventory Management</span>
                    </>
                  )}
                  {study.industry === "Logistics" && (
                    <>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">HR Solutions</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Recruitment</span>
                      <span className="px-1.5 py-[2px] bg-yellow-400/60 text-black rounded-full text-[9px] font-medium tracking-wide">Payroll</span>
                    </>
                  )}
                </div>
                <h2 className="text-xl font-bold mb-4 text-yellow-400">
                  {study.title}
                </h2>
                <div className="mb-2 text-sm text-gray-400">
                  <span className="text-yellow-400">Client:</span> {study.client}
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
            View all case studies
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudiesEn; 