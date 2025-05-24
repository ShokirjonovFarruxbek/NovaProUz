import { Globe } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { languages } from '../config/languages';
import { useLanguageStore } from '../stores/useLanguageStore';

export const LanguageSelector = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    
    // Get current path without language prefix
    const pathParts = location.pathname.split('/');
    const pathWithoutLang = pathParts.length > 2 ? pathParts.slice(2).join('/') : '';
    
    // Navigate to the new language path
    navigate(`/${lang}${pathWithoutLang ? '/' + pathWithoutLang : ''}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-novapro-lightdark transition-colors">
        <Globe className="w-5 h-5 text-novapro-teal" />
        <span className="text-novapro-beige">
          {languages.find(lang => lang.code === currentLanguage)?.flag}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-novapro-lightdark border-novapro-teal">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            onClick={() => handleLanguageChange(language.code)}
            className={`flex items-center gap-2 cursor-pointer ${
              currentLanguage === language.code 
                ? 'text-novapro-teal bg-novapro-dark'
                : 'text-novapro-beige hover:text-novapro-teal hover:bg-novapro-dark'
            }`}
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
