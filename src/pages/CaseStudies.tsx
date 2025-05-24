import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CaseStudies: React.FC = () => {
  const navigate = useNavigate();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const studies = [
    {
      id: '1',
      image: '/path/to/image1.jpg',
      title: { en: 'Case Study 1', ru: 'Кейс 1' },
      client: 'Client 1',
      description: { en: 'Description of Case Study 1', ru: 'Описание кейса 1' },
      industry: 'Manufacturing'
    },
    {
      id: '2',
      image: '/path/to/image2.jpg',
      title: { en: 'Case Study 2', ru: 'Кейс 2' },
      client: 'Client 2',
      description: { en: 'Description of Case Study 2', ru: 'Описание кейса 2' },
      industry: 'Retail'
    },
    {
      id: '3',
      image: '/path/to/image3.jpg',
      title: { en: 'Case Study 3', ru: 'Кейс 3' },
      client: 'Client 3',
      description: { en: 'Description of Case Study 3', ru: 'Описание кейса 3' },
      industry: 'Logistics'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {studies.map((study) => (
        <motion.article
          key={study.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-black rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col cursor-pointer"
          onClick={() => navigate(`/${currentLanguage}/case-studies/${study.id}`)}
        >
          <div className="relative h-[280px]">
            <img
              src={study.image}
              alt={study.title[currentLanguage]}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
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
            <h2 
              className="text-2xl font-bold mb-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300"
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/${currentLanguage}/case-studies/${study.id}`);
              }}
            >
              {study.title[currentLanguage]}
            </h2>
            <div className="mb-2 text-sm text-gray-400">
              <span className="text-yellow-400">Client:</span> {study.client}
            </div>
            <p className="text-gray-400 mb-6 flex-grow text-base">
              {study.description[currentLanguage]}
            </p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                navigate(`/${currentLanguage}/case-studies/${study.id}`);
              }}
              className="flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors duration-300 group"
            >
              <span className="font-medium">Read full case study</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default CaseStudies; 