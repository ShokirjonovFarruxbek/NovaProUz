
import { X } from 'lucide-react';
import { useState } from 'react';

const AdBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const dismissBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="bg-novapro-teal text-white py-3 px-4 mt-20">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex-1 text-center">
          <p className="font-medium">
            <span className="font-bold">Special Offer:</span> Get a free automation consultation. <a href="#contact" className="underline font-semibold">Contact us today!</a>
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
