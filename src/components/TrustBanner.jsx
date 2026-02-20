import React from 'react';
import './TrustBanner.css';

const TrustBanner = () => {
    return (
        <section className="trust-banner">
            <div className="trust-container">
                <h2 className="trust-headline">Sorgenfreie Abwicklung</h2>
                <p className="trust-text">
                    Wir übernehmen die komplette Dokumentation und direkte Abrechnung mit Ihrer Versicherung.
                </p>
                <div className="trust-rating">
                    <div className="stars">
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                        <span className="star filled">★</span>
                    </div>
                    <span className="rating-text">4.8/5</span>
                </div>
            </div>
        </section>
    );
};

export default TrustBanner;
