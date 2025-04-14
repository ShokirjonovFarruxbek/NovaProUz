
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="circuit-bg relative min-h-screen flex items-center pt-16">
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-novapro-dark opacity-80"></div>
      <div className="section-container relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 font-poppins text-novapro-beige">
              Business Automation <span className="text-novapro-teal">Solutions</span>
            </h1>
            <p className="text-xl mb-8 max-w-lg text-novapro-gray">
              Optimize your business processes, reduce costs, and increase profits with our comprehensive automation services.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="cta-button flex items-center">
                Our Services <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contact" className="secondary-button">
                Get in Touch
              </a>
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full flex items-center justify-center animate-pulse-slow">
                <img 
                  src="/lovable-uploads/47840e42-e6db-4407-b1e9-692066daa9e0.png" 
                  alt="NovaPro Digital Tree Logo" 
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
