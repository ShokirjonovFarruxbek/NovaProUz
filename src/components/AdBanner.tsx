
import { X } from 'lucide-react';
import { useState } from 'react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';

const AdBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  const dismissBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-novapro-teal text-white py-3 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1 text-center">
          <p className="font-medium">
            <span className="font-bold">{t.adBanner.specialOffer}</span> {t.adBanner.description} <a href="#contact" className="underline font-semibold">{t.adBanner.action}</a>
          </p>
        </div>
        <button onClick={dismissBanner} className="text-white hover:text-gray-200">
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
