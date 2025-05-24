import { useLanguageStore } from '../stores/useLanguageStore';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import Stats from '@/components/Stats';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Partners from '@/components/Partners';
import CTA from '@/components/CTA';
import WhyChooseUs from '@/components/WhyChooseUs';
import LatestNews from '@/components/LatestNews';

const Index = () => {
  const { currentLanguage } = useLanguageStore();

  return (
    <div className="min-h-screen bg-novapro-dark">
      <Navbar />
      <main className="relative">
        <Hero />
        <div className="relative z-10 bg-novapro-dark">
          <Stats />
          <WhyChooseUs />
          <Process />
          <Services />
          <CaseStudies />
          <Testimonials />
          <Partners />
          <LatestNews />
          <About />
          <Blog />
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
