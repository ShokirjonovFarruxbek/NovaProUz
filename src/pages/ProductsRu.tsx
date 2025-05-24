import { Link } from 'react-router-dom';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect } from 'react';

const ProductsRu = () => {
  const { currentLanguage, setLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);
  
  useEffect(() => {
    setLanguage('ru');
    localStorage.setItem('language', 'ru');
  }, [setLanguage]);

  const getTranslatedContent = (content: any) => {
    if (typeof content === 'object' && content !== null) {
      return content.ru || content;
    }
    return content;
  };

  // Filter out duplicate services to ensure each appears only once
  const services = t.products.items.map(item => ({
    id: item.name.en === 'HR Services' ? 'hr' : 
         item.name.en === 'MySklad' ? 'mysklad' : 'website',
    title: getTranslatedContent(item.name),
    description: getTranslatedContent(item.description),
    features: item.features.map(feature => getTranslatedContent(feature)),
    image: item.image,
    path: item.name.en === 'HR Services' ? 'hr-service' : 
          item.name.en === 'MySklad' ? 'mysklad' : 'website-development',
    color: item.name.en === 'HR Services' ? '#FFC900' : 
           item.name.en === 'MySklad' ? '#FF8243' : '#FFC900'
  }));

  return (
    <div className="min-h-screen bg-[#1C1C1F] text-white">
      <Navbar />
      <main className="pt-40 pb-16 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">
            {t.products.title}
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            {t.products.description}
          </p>
        </div>

        {/* Services Section */}
        <div className="space-y-24">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="flex-1 space-y-6">
                <Link
                  to={`/ru/services/${service.path}`}
                  className="block group"
                >
                  <h2 
                    className="text-4xl font-semibold hover:text-novapro-teal transition-colors duration-300 group-hover:translate-x-1" 
                    style={{ color: service.color }}
                  >
                    {service.title}
                  </h2>
                </Link>
                <p className="text-gray-400 text-lg">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-400 text-lg">
                      <span style={{ color: service.color }} className="mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/ru/services/${service.path}`}
                  className="inline-flex items-center transition-colors duration-300 hover:opacity-80 group"
                  style={{ color: service.color }}
                >
                  {t.products.learnMore}
                  <svg
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 10H16M16 10L10 4M16 10L10 16"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>

              {/* Image */}
              <Link
                to={`/ru/services/${service.path}`}
                className="flex-1 cursor-pointer group"
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsRu; 