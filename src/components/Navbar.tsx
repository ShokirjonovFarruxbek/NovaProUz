
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-novapro-dark bg-opacity-95 shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/lovable-uploads/47840e42-e6db-4407-b1e9-692066daa9e0.png" 
                alt="NovaPro Logo" 
                className="h-10 w-10 mr-2"
              />
              <span className="text-novapro-beige text-xl font-poppins font-semibold">NovaPro</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300">About</a>
            <a href="#services" className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300">Services</a>
            <a href="#products" className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300">Products</a>
            <a href="#case-studies" className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300">Case Studies</a>
            <a href="#blog" className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300">Blog</a>
            <a href="#contact" className="text-novapro-beige hover:text-novapro-teal transition-colors duration-300">Contact</a>
          </nav>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-novapro-beige">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-novapro-lightdark">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block py-2 px-4 text-novapro-beige hover:text-novapro-teal" onClick={toggleMenu}>About</a>
            <a href="#services" className="block py-2 px-4 text-novapro-beige hover:text-novapro-teal" onClick={toggleMenu}>Services</a>
            <a href="#products" className="block py-2 px-4 text-novapro-beige hover:text-novapro-teal" onClick={toggleMenu}>Products</a>
            <a href="#case-studies" className="block py-2 px-4 text-novapro-beige hover:text-novapro-teal" onClick={toggleMenu}>Case Studies</a>
            <a href="#blog" className="block py-2 px-4 text-novapro-beige hover:text-novapro-teal" onClick={toggleMenu}>Blog</a>
            <a href="#contact" className="block py-2 px-4 text-novapro-beige hover:text-novapro-teal" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
