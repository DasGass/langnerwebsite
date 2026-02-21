import React from 'react';
import './ProcessCta.css';

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
);

const ProcessCta = () => {
    return (
        <div className="process-cta">
            <div className="container">
                <h2>Bereit für eine schnelle Lösung?</h2>
                <p>Kontaktieren Sie uns jetzt für eine kostenlose Erstberatung und schnelle Hilfe bei Ihrem Wasserschaden.</p>
                <div className="process-cta-buttons">
                    <a href="#kontakt" className="btn btn-white process-cta-btn-desktop">
                        Jetzt Kontakt aufnehmen
                    </a>
                    <a href="tel:+4901511202299" className="btn-primary-cta process-cta-btn-mobile">
                        <PhoneIcon />
                        Jetzt anrufen
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProcessCta;
