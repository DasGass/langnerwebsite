import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesGrid.css';

const services = [
    {
        id: 1,
        title: 'Wasserschadensanierung',
        description: 'Schnelle und professionelle Behebung von Wasserschäden jeder Art – von Rohrbruch bis Hochwasser.',
        featured: true,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
            </svg>
        ),
    },
    {
        id: 2,
        title: 'Bautrocknung & Gebäudetrocknung',
        description: 'Materialfeuchtigkeitsmessungen und Einsatz hochwertiger Bautrockner. Neubautrocknung inklusive.',
        featured: true,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M2 12h4M18 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
        ),
    },
    {
        id: 3,
        title: 'Schimmelsanierung',
        description: 'Fachgerechte Schimmelentfernung und -prävention mit umweltfreundlichen Produkten.',
        featured: false,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L4 6v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V6l-8-4z" />
            </svg>
        ),
    },
    {
        id: 4,
        title: 'Leckageortung',
        description: 'Präzise Ortung von Leckagen mit modernster Technik – schnell und zerstörungsarm.',
        featured: false,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                <circle cx="12" cy="10" r="3" />
            </svg>
        ),
    },
    {
        id: 5,
        title: 'Fliesenlegen & Estrich',
        description: 'Professionelles Fliesenlegen und Estrichverlegung nach der Schadensbeseitigung.',
        featured: false,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" />
                <path d="M3 9h18M9 21V9" />
            </svg>
        ),
    },
    {
        id: 6,
        title: 'Komplette Renovierung',
        description: 'Vollständige Wiederherstellung Ihrer Räume nach Wasserschäden – Verspachtelung, Malerarbeiten und mehr.',
        featured: false,
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14.7 6.3l4.3-4.3 3 3-4.3 4.3M14.7 6.3L9 12l3 3 5.7-5.7M3 21l6-6M9 15l-3-3-4 4 1 4z" />
            </svg>
        ),
    },
];

const ServicesGrid = () => {
    return (
        <section className="section section-grey" id="leistungen">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Unsere Leistungen</p>
                    <h2 className="section-title">Alles aus einer Hand</h2>
                    <p className="section-sub">
                        Von der Schadensfeststellung bis zur vollständigen Wiederherstellung – wir
                        begleiten Sie durch den gesamten Prozess.
                    </p>
                </div>
                <div className="services-grid">
                    {services.map((service) => (
                        <div
                            className={`service-card${service.featured ? ' featured-service-card' : ''}`}
                            key={service.id}
                        >
                            {service.featured && <span className="featured-badge-label">Kernkompetenz</span>}
                            <div className="service-card-icon">
                                {service.icon}
                            </div>
                            <div className="service-card-body">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: 'clamp(2rem, 3vw, 3rem)' }}>
                    <Link to="/kontakt#rueckruf-form" className="btn btn-lg">Angebot anfordern</Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
