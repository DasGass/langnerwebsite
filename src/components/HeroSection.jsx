import React from 'react';
import './HeroSection.css';

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
);

const MailIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const WhatsAppIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
);

const HeroSection = () => {
    return (
        <section className="hero">
            <div className="hero-inner">
                <div className="hero-content">
                    <div className="hero-badge">
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor">
                            <circle cx="5" cy="5" r="5" />
                        </svg>
                        24/7 Notdienst verfügbar
                    </div>
                    <h1>Wasserschaden? Wir retten <span>Ihr Zuhause.</span></h1>
                    <p className="hero-sub">
                        Ihr lokaler Experte im Rhein-Sieg-Kreis. Schnell, sauber und alles aus einer Hand –
                        von der Leckageortung über Bautrocknung bis zur kompletten Renovierung.
                    </p>

                    {/* Desktop CTA */}
                    <div className="hero-actions">
                        <a href="#rueckruf-form" className="btn btn-lg">
                            Angebot anfordern
                        </a>
                        <a href="https://wa.me/4915112022996?text=Hallo,%20ich%20habe%20einen%20Wasserschaden%20und%20ben%C3%B6tige%20Hilfe." className="btn btn-lg btn-outline" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon />
                            WhatsApp schreiben
                        </a>
                    </div>

                    {/* Mobile hero image */}
                    <div className="hero-img hero-img-mobile">
                        <img
                            src="/images/hero/tims.jpg"
                            alt="Wasserschadensanierung"
                            onError={(e) => { e.target.style.background = '#F5F7FA'; e.target.style.height = '220px'; }}
                        />
                        <div className="hero-img-badge">
                            <span className="hero-img-badge-icon">⚡</span>
                            <div className="hero-img-badge-text">
                                Schnelle Reaktion
                                <span>Vor Ort in 60 Min.</span>
                            </div>
                        </div>
                    </div>

                    {/* Mobile CTA stack */}
                    <div className="cta-stack">
                        <a href="#rueckruf-form" className="btn-primary-mobile">
                            Angebot anfordern
                        </a>
                        <a href="https://wa.me/4915112022996?text=Hallo,%20ich%20habe%20einen%20Wasserschaden%20und%20ben%C3%B6tige%20Hilfe." className="btn-secondary-mobile" target="_blank" rel="noopener noreferrer">
                            <WhatsAppIcon />
                            WhatsApp schreiben
                        </a>
                    </div>

                    {/* Insurance highlight */}
                    <div className="hero-insurance">
                        <span className="hero-insurance-icon">🛡️</span>
                        <div className="hero-insurance-text">
                            Versicherungsfall? Wir regeln alles für Sie.
                            <span>Direkte Abrechnung mit Ihrer Versicherung – für Sie entstehen keine Kosten.</span>
                        </div>
                    </div>

                    {/* Trust rating */}
                    <div className="hero-trust">
                        <span className="hero-trust-stars">★★★★★</span>
                        <span className="hero-trust-text"><strong>4.8/5</strong> – Über 200 zufriedene Kunden im Rhein-Sieg-Kreis</span>
                    </div>
                </div>

                {/* Desktop hero image */}
                <div className="hero-img hero-img-desktop">
                    <img
                        src="/images/hero/tims.jpg"
                        alt="Professionelle Wasserschadensanierung"
                        onError={(e) => { e.target.style.background = '#F5F7FA'; }}
                    />
                    <div className="hero-img-badge">
                        <span className="hero-img-badge-icon">⚡</span>
                        <div className="hero-img-badge-text">
                            Schnelle Reaktion
                            <span>Vor Ort in 60 Min.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
