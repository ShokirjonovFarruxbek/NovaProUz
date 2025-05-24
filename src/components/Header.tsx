import { ArrowRight } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import '../styles/header.css';

const Header = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
      <a 
        href="#contact" 
        className="get-in-touch-btn"
      >
        {t.hero.getInTouch} <ArrowRight size={20} />
      </a>
      <div className="flex items-center gap-6">
        <a 
          href="#services" 
          className="our-services-btn"
        >
          {t.hero.ourServices}
        </a>
        <a 
          href="https://t.me/NOVAPROuz" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="telegram-btn"
        >
          <img src="/images/TG_Logo_ic.png" alt="Telegram" />
        </a>
      </div>
    </div>
  );
};

export default Header; 