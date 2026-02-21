import React from 'react';
import './ExtraServices.css';

const extras = [
    { icon: '🌿', title: 'Grünpflege & Außenanlagen' },
    { icon: '☀️', title: 'Solarreinigung' },
    { icon: '🏗️', title: 'Neubautrocknung' },
    { icon: '🔧', title: 'Gerätevermietung (Bautrockner)' },
    { icon: '🏠', title: 'Immobilien-Instandhaltung' },
    { icon: '📐', title: 'Verspachtelung & Malerarbeiten' },
    { icon: '🔍', title: 'Feuchtigkeitsmessungen' },
    { icon: '🤝', title: 'Netzwerk verschiedener Gewerke' },
];

const ExtraServices = () => {
    return (
        <section className="section section-grey">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Weitere Angebote</p>
                    <h2 className="section-title">Mehr als nur Wasserschaden</h2>
                    <p className="section-sub">Langner GM bietet ein breites Spektrum an Gebäudemanagement-Leistungen.</p>
                </div>
                <div className="extra-grid">
                    {extras.map((item, i) => (
                        <div className="extra-card" key={i}>
                            <span className="extra-icon">{item.icon}</span>
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExtraServices;
