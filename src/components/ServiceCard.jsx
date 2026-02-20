import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ title, icon, description }) => {
    const renderIcon = () => {
        switch (icon) {
            case 'water':
                return (
                    <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2.69L17.66 8.35C20.78 11.47 20.78 16.53 17.66 19.65C14.54 22.77 9.46 22.77 6.34 19.65C3.22 16.53 3.22 11.47 6.34 8.35L12 2.69Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            case 'fan':
                return (
                    <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
                        <path d="M12 2V6M12 18V22M22 12H18M6 12H2M19.07 4.93L16.24 7.76M7.76 16.24L4.93 19.07M19.07 19.07L16.24 16.24M7.76 7.76L4.93 4.93" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                );
            case 'shield':
                return (
                    <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2L4 6V12C4 16.55 7.16 20.74 12 22C16.84 20.74 20 16.55 20 12V6L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            case 'tools':
                return (
                    <svg className="service-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.7 6.3L19 2L22 5L17.7 9.3M14.7 6.3L9 12L12 15L17.7 9.3M14.7 6.3L17.7 9.3M3 21L9 15M9 15L6 12L2 16L3 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <div className="service-card">
            <div className="service-icon-container">
                {renderIcon()}
            </div>
            <h3 className="service-title">{title}</h3>
            {description && <p className="service-description">{description}</p>}
        </div>
    );
};

export default ServiceCard;
