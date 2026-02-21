import React from 'react';
import './UspStrip.css';

const uspItems = [
    { icon: '⚡', text: '24/7 Notdienst – auch an Wochenenden & Feiertagen' },
    { icon: '🛡️', text: 'Direkte Abrechnung mit Ihrer Versicherung' },
    { icon: '📋', text: 'Komplette Dokumentation für Versicherungsansprüche' },
    { icon: '🌱', text: 'Umweltfreundliche Produkte & nachhaltige Arbeitsweise' },
];

const UspStrip = () => {
    return (
        <div className="usp-strip">
            <div className="usp-strip-inner">
                {uspItems.map((item, i) => (
                    <div className="usp-item" key={i}>
                        <span className="usp-icon">{item.icon}</span>
                        <span className="usp-text">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UspStrip;
