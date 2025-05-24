import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import { LanguageSelector } from './LanguageSelector';
import '../styles/header.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(`/${currentLanguage}`);
    scrollToTop();
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#1C1C1F] ${
      isScrolled ? 'shadow-md' : ''
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to={`/${currentLanguage}`} className="flex items-center">
              <img 
                src="/lovable-uploads/NovaProLogo.png" 
                alt="NovaPro Logo" 
                className="h-20 w-24"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10">
            <Link to={`/${currentLanguage}/about`} className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300 text-lg">{t.nav.about}</Link>
            <Link to={`/${currentLanguage}/services`} className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300 text-lg">{t.nav.services}</Link>
            <Link to={`/${currentLanguage}/products`} className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300 text-lg">{t.nav.products}</Link>
            <Link
              to={`/${currentLanguage}/articles`}
              className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300 text-lg"
            >
              {currentLanguage === 'en' ? 'Articles' :
               currentLanguage === 'ru' ? 'Статьи' :
               'Maqolalar'}
            </Link>
            <Link
              to={`/${currentLanguage}/case-studies`}
              className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300 text-lg"
            >
              {t.nav.caseStudies}
            </Link>
            <Link
              to={`/${currentLanguage}/contact`}
              className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300 text-lg"
            >
              {t.nav.contact}
            </Link>
            <div className="flex items-center">
              <Phone className="text-novapro-teal mr-2" size={22} />
              <a href="tel:+998971380997" className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300">+998 97 138 09 97</a>
            </div>
            <LanguageSelector />
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center gap-6">
            <a href="tel:+998971380997" className="text-novapro-teal">
              <Phone size={24} />
            </a>
            <LanguageSelector />
            <button onClick={toggleMenu} className="text-novapro-beige">
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#1C1C1F]">
          <div className="px-4 pt-4 pb-6 space-y-2 sm:px-4">
            <Link to={`/${currentLanguage}/about`} className="block py-3 px-4 text-novapro-beige hover:text-novapro-teal text-lg" onClick={toggleMenu}>{t.nav.about}</Link>
            <Link to={`/${currentLanguage}/services`} className="block py-3 px-4 text-novapro-beige hover:text-novapro-teal text-lg" onClick={toggleMenu}>{t.nav.services}</Link>
            <Link to={`/${currentLanguage}/products`} className="block py-3 px-4 text-novapro-beige hover:text-novapro-teal text-lg" onClick={toggleMenu}>{t.nav.products}</Link>
            <Link 
              to={`/${currentLanguage}/articles`}
              className="block py-3 px-4 text-novapro-beige hover:text-novapro-teal text-lg"
              onClick={toggleMenu}
            >
              {currentLanguage === 'en' ? 'Articles' :
               currentLanguage === 'ru' ? 'Статьи' :
               'Maqolalar'}
            </Link>
            <Link
              to={`/${currentLanguage}/case-studies`}
              className="block py-3 px-4 text-novapro-beige hover:text-novapro-teal text-lg"
              onClick={toggleMenu}
            >
              {t.nav.caseStudies}
            </Link>
            <Link 
              to={`/${currentLanguage}/contact`}
              className="block py-3 px-4 text-novapro-beige hover:text-novapro-teal text-lg" 
              onClick={toggleMenu}
            >
              {t.nav.contact}
            </Link>
            <a href="tel:+998971380997" className="block py-3 px-4 text-novapro-teal hover:text-novapro-beige text-lg" onClick={toggleMenu}>+998 97 138 09 97</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
