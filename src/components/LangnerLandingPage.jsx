import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import ServicesGrid from './ServicesGrid';
import TrustBanner from './TrustBanner';
import Footer from './Footer';
import './LangnerLandingPage.css';

const LangnerLandingPage = () => {
  return (
    <div className="langner-landing-page">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <TrustBanner />
      </main>
      <Footer />
    </div>
  );
};

export default LangnerLandingPage;
