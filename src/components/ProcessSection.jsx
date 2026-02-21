import React from 'react';
import './ProcessSection.css';

const steps = [
    {
        num: 1,
        title: 'Kontakt aufnehmen',
        text: 'Rufen Sie uns an – 24/7 erreichbar. Wir sind auch an Wochenenden und Feiertagen für Sie da.',
    },
    {
        num: 2,
        title: 'Vor-Ort-Begutachtung',
        text: 'Unser Team kommt schnell zu Ihnen. Wir erfassen den Schaden und erstellen eine Dokumentation.',
    },
    {
        num: 3,
        title: 'Sanierung & Trocknung',
        text: 'Professionelle Schadensbeseitigung mit modernster Technik. Wir koordinieren alle Gewerke.',
    },
    {
        num: 4,
        title: 'Versicherungsabwicklung',
        text: 'Wir übernehmen die komplette Kommunikation und direkte Abrechnung mit Ihrer Versicherung.',
    },
];

const ProcessSection = () => {
    return (
        <section className="section section-grey" id="ablauf">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">So funktioniert es</p>
                    <h2 className="section-title">Ihr Weg zur Lösung</h2>
                    <p className="section-sub">
                        Wir machen es Ihnen so einfach wie möglich – von der ersten Kontaktaufnahme bis
                        zur fertigen Sanierung.
                    </p>
                </div>
                <div className="process-grid">
                    {steps.map((step) => (
                        <div className="process-step" key={step.num}>
                            <div className="process-num">{step.num}</div>
                            <div className="process-step-content">
                                <h3>{step.title}</h3>
                                <p>{step.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProcessSection;
