import React from 'react';
import './TrustBanner.css';

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const trustPoints = [
    'Vollständige Schadensdokumentation für die Versicherung',
    'Direkte Abrechnung mit allen gängigen Versicherungen',
    'Professionelle Kommunikation mit Versicherungsvertretern',
    'Schnelle Bearbeitung – Ihr Versicherungsfall ist in guten Händen',
];

const stats = [
    { num: '24/7', label: 'Notdienst erreichbar' },
    { num: '4.8★', label: 'Kundenbewertung' },
    { num: '200+', label: 'Sanierungen abgeschlossen' },
    { num: '100%', label: 'Versicherungsabwicklung' },
];

const TrustBanner = () => {
    return (
        <section className="section section-blue" id="versicherung">
            <div className="container">
                <div className="trust-grid">
                    <div className="trust-content">
                        <p className="section-label">Versicherungsabwicklung</p>
                        <h2>Sorgenfreie Abwicklung – wir kümmern uns um alles.</h2>
                        <p>
                            Wir übernehmen die komplette Dokumentation und direkte Abrechnung mit Ihrer
                            Versicherung. Sie müssen sich um nichts kümmern.
                        </p>
                        <div className="trust-points">
                            {trustPoints.map((point, i) => (
                                <div className="trust-point" key={i}>
                                    <div className="trust-point-icon">
                                        <CheckIcon />
                                    </div>
                                    {point}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="trust-stats">
                        {stats.map((stat, i) => (
                            <div className="trust-stat" key={i}>
                                <div className="trust-stat-num">{stat.num}</div>
                                <div className="trust-stat-label">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustBanner;
