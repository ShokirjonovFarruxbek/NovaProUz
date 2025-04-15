
import { CheckCircle, BarChart, Clock, Coins } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';

const About = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <section id="about" className="circuit-bg py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">{t.about.title}</h2>
          <p className="text-lg text-novapro-gray">
            {t.about.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="section-subtitle">{t.about.mission}</h3>
            <p className="mb-6 text-novapro-gray">
              {t.about.missionText}
            </p>
            
            <h3 className="section-subtitle">{t.about.whyChoose}</h3>
            <ul className="space-y-4">
              {t.about.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-novapro-teal mt-1 mr-3 flex-shrink-0" size={20} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="card flex flex-col items-center text-center p-6">
              <BarChart className="text-novapro-teal mb-4" size={40} />
              <h4 className="text-xl font-medium mb-2">{t.about.cards.efficiency.title}</h4>
              <p className="text-novapro-gray text-sm">{t.about.cards.efficiency.description}</p>
            </div>
            
            <div className="card flex flex-col items-center text-center p-6">
              <Clock className="text-novapro-teal mb-4" size={40} />
              <h4 className="text-xl font-medium mb-2">{t.about.cards.timeSaving.title}</h4>
              <p className="text-novapro-gray text-sm">{t.about.cards.timeSaving.description}</p>
            </div>
            
            <div className="card flex flex-col items-center text-center p-6">
              <Coins className="text-novapro-teal mb-4" size={40} />
              <h4 className="text-xl font-medium mb-2">{t.about.cards.costReduction.title}</h4>
              <p className="text-novapro-gray text-sm">{t.about.cards.costReduction.description}</p>
            </div>
            
            <div className="card flex flex-col items-center text-center p-6">
              <BarChart className="text-novapro-teal mb-4" size={40} />
              <h4 className="text-xl font-medium mb-2">{t.about.cards.growth.title}</h4>
              <p className="text-novapro-gray text-sm">{t.about.cards.growth.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
