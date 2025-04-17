
import { Send } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TelegramButton = () => {
  return (
    <a 
      href="https://t.me/amore9717" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50"
    >
      <Button 
        className="rounded-full w-16 h-16 bg-novapro-teal hover:bg-novapro-teal/90 flex items-center justify-center shadow-[0_0_15px_rgba(45,212,191,0.5)] hover:shadow-[0_0_20px_rgba(45,212,191,0.7)] transition-all duration-300"
      >
        <Send size={28} className="text-white transform -rotate-45" />
      </Button>
    </a>
  );
};

export default TelegramButton;
