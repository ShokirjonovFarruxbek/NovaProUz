
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Products from '@/components/Products';
import CaseStudies from '@/components/CaseStudies';
import Blog from '@/components/Blog';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-novapro-dark">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <CaseStudies />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
