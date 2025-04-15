
import { Settings, Code, Database, LineChart, Users, FileCheck } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';

const Services = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  const icons = [
    <Settings className="text-novapro-teal" size={40} />,
    <Code className="text-novapro-teal" size={40} />,
    <Database className="text-novapro-teal" size={40} />,
    <LineChart className="text-novapro-teal" size={40} />,
    <Users className="text-novapro-teal" size={40} />,
    <FileCheck className="text-novapro-teal" size={40} />
  ];

  return (
    <section id="services" className="circuit-bg py-20 bg-novapro-lightdark">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">{t.services.title}</h2>
          <p className="text-lg text-novapro-gray">
            {t.services.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, index) => (
            <div key={index} className="card group">
              <div className="mb-6">{icons[index]}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-novapro-teal transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-novapro-gray">
                {service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="cta-button">
            {t.services.requestService}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
