import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
    const handleCTA = () => {
        // Add your form or contact logic here
        console.log('Hilfe anfordern clicked');
    };

    return (
        <section className="hero-section">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-headline">
                        Wasserschaden? Wir retten Ihr Zuhause.
                    </h1>
                    <p className="hero-subheadline">
                        Ihr lokaler Experte im Rhein-Sieg-Kreis. Schnell, sauber und alles aus einer Hand.
                    </p>
                    <button className="hero-cta-button" onClick={handleCTA}>
                        Hilfe anfordern
                    </button>
                </div>
                <div className="hero-image-container">
                    <div className="hero-image-placeholder">
                        {/* Hero image - update the src path if you move the image file */}
                        <img
                            src="/images/hero/upscalemedia-transformed.jpeg"
                            alt="Wasserschadensanierung"
                            className="hero-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
