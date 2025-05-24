'use client'
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { useLanguageStore } from './stores/useLanguageStore';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './pages/About';
import ServicesUz from './pages/ServicesUz';
import ServicesRu from './pages/ServicesRu';
import ServicesEn from './pages/ServicesEn';
import ProductsEn from './pages/ProductsEn';
import ProductsRu from './pages/ProductsRu';
import ProductsUz from './pages/ProductsUz';
import ArticlesEn from './pages/ArticlesEn';
import ArticlesRu from './pages/ArticlesRu';
import ArticlesUz from './pages/ArticlesUz';
import ContactEn from './pages/ContactEn';
import ContactRu from './pages/ContactRu';
import ContactUz from './pages/ContactUz';
import Footer from './components/Footer';
import MySklad from './pages/MySklad';
import HRServices from './pages/HRServices';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import TelegramButton from './components/TelegramButton';
import Article from './pages/Article';
import Articles from './pages/Articles';
import CaseStudiesEn from './pages/CaseStudiesEn';
import CaseStudiesRu from './pages/CaseStudiesRu';
import CaseStudiesUz from './pages/CaseStudiesUz';
import HRServicePage from './pages/HRServicePage';
import MySkladPage from './pages/MySkladPage';
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage';
import ArticlePage from './pages/ArticlePage';
import NotFound from './pages/NotFound';
import CaseStudyPage from './pages/CaseStudyPage';
import React, { Fragment } from 'react';

// Language-specific layouts
const UzLayout = () => {
  const { setLanguage } = useLanguageStore();
  
  useEffect(() => {
    setLanguage('uz');
    localStorage.setItem('language', 'uz');
  }, [setLanguage]);

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

const RuLayout = () => {
  const { setLanguage } = useLanguageStore();
  
  useEffect(() => {
    setLanguage('ru');
    localStorage.setItem('language', 'ru');
  }, [setLanguage]);

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

const EnLayout = () => {
  const { setLanguage } = useLanguageStore();
  
  useEffect(() => {
    setLanguage('en');
    localStorage.setItem('language', 'en');
  }, [setLanguage]);

  return (
    <>
      <Navbar />
      <Hero />
      <Footer />
    </>
  );
};

// Service page layouts without Navbar
const ServiceLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-screen">{children}</div>;
};

// Root redirect handler
const RootRedirect = () => {
  // Always redirect to Uzbek language by default
  return <Navigate to="/uz" replace />;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-novapro-dark">
        <TelegramButton />
        <Routes>
          <Route path="/" element={<RootRedirect />} />
          <Route path="/uz" element={<UzLayout />} />
          <Route path="/ru" element={<RuLayout />} />
          <Route path="/en" element={<EnLayout />} />
          
          <Route path="/uz/about" element={<About />} />
          <Route path="/ru/about" element={<About />} />
          <Route path="/en/about" element={<About />} />

          <Route path="/uz/services" element={<ServicesUz />} />
          <Route path="/ru/services" element={<ServicesRu />} />
          <Route path="/en/services" element={<ServicesEn />} />
          
          <Route path="/uz/products" element={<ProductsUz />} />
          <Route path="/ru/products" element={<ProductsRu />} />
          <Route path="/en/products" element={<ProductsEn />} />
          
          <Route path="/uz/articles" element={<ArticlesUz />} />
          <Route path="/ru/articles" element={<ArticlesRu />} />
          <Route path="/en/articles" element={<ArticlesEn />} />
          
          <Route path="/uz/contact" element={<ContactUz />} />
          <Route path="/ru/contact" element={<ContactRu />} />
          <Route path="/en/contact" element={<ContactEn />} />
          
          <Route path="/uz/case-studies" element={<CaseStudiesUz />} />
          <Route path="/ru/case-studies" element={<CaseStudiesRu />} />
          <Route path="/en/case-studies" element={<CaseStudiesEn />} />
          
          <Route path="/:lang/case-study/:id" element={<CaseStudyPage />} />
          <Route path="/:lang/article/:id" element={<ArticlePage />} />
          
          <Route path="/mysklad" element={<ServiceLayout><MySklad /></ServiceLayout>} />
          <Route path="/mysklad/:id" element={<ServiceLayout><MySkladPage /></ServiceLayout>} />
          
          <Route path="/hr-services" element={<ServiceLayout><HRServices /></ServiceLayout>} />
          <Route path="/hr-services/:id" element={<ServiceLayout><HRServicePage /></ServiceLayout>} />
          
          <Route path="/website-development" element={<ServiceLayout><WebsiteDevelopment /></ServiceLayout>} />
          <Route path="/website-development/:id" element={<ServiceLayout><WebsiteDevelopmentPage /></ServiceLayout>} />
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
  return (
    <React.Fragment>
      {/* Your app content */}
    </React.Fragment>
  );
}

export default App;
