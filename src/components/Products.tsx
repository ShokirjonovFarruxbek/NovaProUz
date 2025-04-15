
import { ArrowRight } from 'lucide-react';
import { useLanguageStore } from '../stores/useLanguageStore';
import { useTranslation } from '../translations';

const Products = () => {
  const { currentLanguage } = useLanguageStore();
  const t = useTranslation(currentLanguage);

  return (
    <section id="products" className="circuit-bg py-20">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="section-title">{t.products.title}</h2>
          <p className="text-lg text-novapro-gray">
            {t.products.description}
          </p>
        </div>
        
        <div className="space-y-16">
          {t.products.products.map((product, index) => (
            <div 
              key={index} 
              className={`grid md:grid-cols-2 gap-10 items-center ${index % 2 !== 0 ? 'md:grid-flow-col-dense' : ''}`}
            >
              <div className={index % 2 !== 0 ? 'md:col-start-2' : ''}>
                <h3 className="text-2xl font-bold mb-4 text-novapro-teal font-poppins">{product.name}</h3>
                <p className="mb-6 text-novapro-gray">{product.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <span className="w-2 h-2 bg-novapro-teal rounded-full mr-3"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="#contact" className="inline-flex items-center text-novapro-teal hover:underline">
                  {t.products.learnMore} <ArrowRight size={16} className="ml-2" />
                </a>
              </div>
              
              <div className={index % 2 !== 0 ? 'md:col-start-1' : ''}>
                <div className="rounded-lg overflow-hidden border border-novapro-lightdark">
                  <img 
                    src={index === 0 ? "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" :
                         index === 1 ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015" :
                         index === 2 ? "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=2070" :
                         "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=2069"} 
                    alt={product.name} 
                    className="w-full h-64 object-cover object-center transition-transform duration-500 hover:scale-105"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
