// src/components/WasserschadenSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const WasserschadenSection = () => {
    return (
        <section className="section" id="wasserschaden">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Kernkompetenz</p>
                    <h2 className="section-title">Wasserschaden Soforthilfe</h2>
                    <p className="section-sub">
                        Ein Wasserschaden erfordert professionelles Handeln, um Bausubstanz zu retten und
                        gefährliche Schimmelbildung zu verhindern.
                    </p>
                </div>

                <div className="trust-grid">
                    <div className="trust-content">
                        <h3>Schnell und zuverlässig</h3>
                        <p>
                            Ob durch Rohrbrüche, Hochwasser oder defekte Leitungen verursacht – wir sind
                            mit unserem 24/7 Notdienst im Rhein-Sieg-Kreis für Sie im Einsatz. Unser Team
                            lokalisiert das Problem präzise und leitet umgehend professionelle Erstmaßnahmen
                            zur Schadensbegrenzung ein.
                        </p>
                        <p>
                            Dabei setzen wir auf minimalinvasive Methoden der Leckageortung, sodass Fliesen
                            und Böden weitestgehend intakt bleiben. Anschließend übernehmen wir die komplette
                            Sanierung und Trocknung, damit Ihr Zuhause schnell wieder bewohnbar ist.
                        </p>

                        <div style={{ marginTop: '1.5rem' }}>
                            <Link to="/kontakt#rueckruf-form" className="btn btn-lg">Angebot anfordern</Link>
                        </div>
                    </div>

                    <div className="trust-points">
                        <div className="trust-point">
                            <div className="trust-point-icon"><CheckIcon /></div>
                            <div><strong>Sofortige Leckageortung:</strong> Zerstörungsfreie Auffindung der Ursache mit modernster Technik.</div>
                        </div>
                        <div className="trust-point">
                            <div className="trust-point-icon"><CheckIcon /></div>
                            <div><strong>Abpumpen & Erstmaßnahmen:</strong> Schnelle Entfernung von stehendem Wasser und Feuchtigkeit.</div>
                        </div>
                        <div className="trust-point">
                            <div className="trust-point-icon"><CheckIcon /></div>
                            <div><strong>Komplette Sanierung:</strong> Fliesen-, Estrich- und Malerarbeiten aus einer Hand.</div>
                        </div>
                        <div className="trust-point">
                            <div className="trust-point-icon"><CheckIcon /></div>
                            <div><strong>Schadensdokumentation:</strong> Komplett fertig aufbereitet für Ihre Versicherung.</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WasserschadenSection;
