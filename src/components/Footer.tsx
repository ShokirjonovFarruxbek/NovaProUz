
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-novapro-dark pt-16 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <div className="flex items-center mb-6">
              <img 
                src="/lovable-uploads/47840e42-e6db-4407-b1e9-692066daa9e0.png" 
                alt="NovaPro Logo" 
                className="h-10 w-10 mr-2"
              />
              <span className="text-novapro-beige text-xl font-poppins font-semibold">NovaPro</span>
            </div>
            <p className="text-novapro-gray mb-6">
              Empowering businesses through innovative automation solutions that streamline operations, 
              enhance productivity, and drive sustainable growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">About Us</a></li>
              <li><a href="#services" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Services</a></li>
              <li><a href="#products" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Products</a></li>
              <li><a href="#case-studies" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Case Studies</a></li>
              <li><a href="#blog" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Blog</a></li>
              <li><a href="#contact" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Process Automation</a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Custom Software Development</a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">System Integration</a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Business Analytics</a></li>
              <li><a href="#" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">Training & Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-novapro-gray">2-й проезд Авиасозлар</li>
              <li><a href="mailto:info@novapro.tech" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">dilik9727@gmail.com</a></li>
              <li><a href="tel:+15551234567" className="text-novapro-gray hover:text-novapro-teal transition-colors duration-300">+998 90 137 0997</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-novapro-gray/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-novapro-gray text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NovaPro. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-novapro-gray hover:text-novapro-teal text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="text-novapro-gray hover:text-novapro-teal text-sm transition-colors duration-300">Terms of Service</a>
            <button 
              onClick={scrollToTop} 
              className="text-novapro-teal hover:text-novapro-beige transition-colors duration-300 flex items-center"
            >
              <ArrowUp size={16} className="mr-1" /> Back to Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
