
import { Globe } from 'lucide-react';
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
            onClick={() => setLanguage(language.code)}
            className="flex items-center gap-2 text-novapro-beige hover:text-novapro-teal hover:bg-novapro-dark cursor-pointer"
          >
            <span>{language.flag}</span>
            <span>{language.name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
