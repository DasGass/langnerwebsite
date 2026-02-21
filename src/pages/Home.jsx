import React from 'react';
import HeroSection from '../components/HeroSection';
import UspStrip from '../components/UspStrip';
import ServicesGrid from '../components/ServicesGrid';
import ProcessSection from '../components/ProcessSection';
import ProcessCta from '../components/ProcessCta';
import TrustBanner from '../components/TrustBanner';
import ContactSection from '../components/ContactSection';
import ExtraServices from '../components/ExtraServices';

const Home = () => {
    return (
        <>
            <HeroSection />
            <UspStrip />
            <ServicesGrid />
            <ProcessSection />
            <ProcessCta />
            <TrustBanner />
            <ContactSection />
            <ExtraServices />
        </>
    );
};

export default Home;
