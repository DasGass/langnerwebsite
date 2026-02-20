import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesGrid.css';

const ServicesGrid = () => {
    const services = [
        {
            id: 1,
            title: 'Wasserschadensanierung',
            icon: 'water',
            description: 'Professionelle Beseitigung von Wasserschäden'
        },
        {
            id: 2,
            title: 'Bautrocknung',
            icon: 'fan',
            description: 'Effektive Trocknung nach Wasserschäden'
        },
        {
            id: 3,
            title: 'Schimmelsanierung',
            icon: 'shield',
            description: 'Fachgerechte Schimmelentfernung und -prävention'
        },
        {
            id: 4,
            title: 'Komplette Renovierung',
            icon: 'tools',
            description: 'Vollständige Wiederherstellung Ihrer Räume'
        }
    ];

    return (
        <section className="services-section">
            <div className="services-container">
                <div className="services-grid">
                    {services.map(service => (
                        <ServiceCard
                            key={service.id}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;
