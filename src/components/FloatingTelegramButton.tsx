const FloatingTelegramButton = () => {
  return (
    <a
      href="https://t.me/NOVAPROuz"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 hover:bg-white/20"
    >
      <img 
        src="/lovable-uploads/telegram-icon.png" 
        alt="Telegram" 
        className="w-12 h-12 object-contain"
      />
    </a>
  );
};

export default FloatingTelegramButton; 