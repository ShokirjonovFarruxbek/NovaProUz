
'use client'
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const TelegramButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasSeenButton = localStorage.getItem('hasSeenTelegramButton');
    if (!hasSeenButton) {
      setIsVisible(true);
      localStorage.setItem('hasSeenTelegramButton', 'true');
    } else {
      setIsVisible(true);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <a
      href="https://t.me/NOVAPROuz"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      data-aos="fade-up"
      data-aos-once="true"
      data-aos-duration="1000"
      data-aos-delay="500"
    >
      <Button
        className="rounded-full w-20 h-20 bg-[#0088cc] hover:bg-[#0099dd] flex items-center justify-center shadow-[0_4px_15px_rgba(0,136,204,0.4)] hover:shadow-[0_6px_20px_rgba(0,136,204,0.6)] transform hover:-translate-y-1 transition-all duration-300 p-0 overflow-hidden border-2 border-white/20"
      >
        <img
          src="/images/TG_Logo_ic.png"
          alt="Telegram"
          className="w-14 h-14 object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </Button>
    </a>
  );
};

export default TelegramButton;
