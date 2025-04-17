
import { Telegram } from 'lucide-react';
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
        className="rounded-full w-14 h-14 bg-novapro-teal hover:bg-novapro-teal/80 flex items-center justify-center shadow-lg"
      >
        <Telegram size={24} className="text-white" />
      </Button>
    </a>
  );
};

export default TelegramButton;
