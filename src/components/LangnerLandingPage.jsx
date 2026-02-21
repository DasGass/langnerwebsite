import React from 'react';
import Topbar from './Topbar';
import Header from './Header';
import HeroSection from './HeroSection';
import UspStrip from './UspStrip';
import ServicesGrid from './ServicesGrid';
import ProcessSection from './ProcessSection';
import ProcessCta from './ProcessCta';
import TrustBanner from './TrustBanner';
import ContactSection from './ContactSection';
import ExtraServices from './ExtraServices';
import Footer from './Footer';

const LangnerLandingPage = () => {
  return (
    <div className="langner-landing-page">
      <Topbar />
      <Header />
      <main>
        <HeroSection />
        <UspStrip />
        <ServicesGrid />
        <ProcessSection />
        <ProcessCta />
        <TrustBanner />
        <ContactSection />
        <ExtraServices />
      </main>
      <Footer />
    </div>
  );
};

export default LangnerLandingPage;
