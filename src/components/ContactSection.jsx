import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './ContactSection.css';

const PhoneIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
);

const MailIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const PinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const contactItems = [
    {
        icon: <PhoneIcon />,
        label: 'Notdienst (24/7)',
        value: '0151 1202 2996',
        href: 'tel:+4901511202299',
        sub: 'Auch an Wochenenden & Feiertagen',
    },
    {
        icon: <PhoneIcon />,
        label: 'Festnetz',
        value: '02243 8456834',
        href: 'tel:+4902243845683',
        sub: 'Mo–Fr 8:00–18:00 Uhr',
    },
    {
        icon: <MailIcon />,
        label: 'E-Mail',
        value: 'info@langner-gm.de',
        href: 'mailto:info@langner-gm.de',
        sub: 'Antwort innerhalb von 24 Stunden',
    },
    {
        icon: <PinIcon />,
        label: 'Adresse',
        value: 'Siebigteroth 25',
        href: null,
        sub: '53783 Eitorf, Deutschland',
    },
];

const damageTypes = [
    { value: '', label: 'Bitte wählen...' },
    { value: 'wasserschaden', label: 'Wasserschaden' },
    { value: 'leckage', label: 'Leckage / Rohrbruch' },
    { value: 'schimmel', label: 'Schimmelbefall' },
    { value: 'trocknung', label: 'Bautrocknung' },
    { value: 'renovierung', label: 'Renovierung nach Schaden' },
    { value: 'sonstiges', label: 'Sonstiges' },
];

const ContactSection = () => {
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Required EmailJS configuration: https://www.emailjs.com/
        emailjs.sendForm(
            'YOUR_SERVICE_ID', // Replace with EmailJS Service ID
            'YOUR_TEMPLATE_ID', // Replace with EmailJS Template ID
            form.current,
            'YOUR_PUBLIC_KEY' // Replace with EmailJS Public Key
        ).then(
            () => {
                setLoading(false);
                setSubmitted(true);
            },
            () => {
                setLoading(false);
                setError('Ein Fehler ist aufgetreten. Bitte rufen Sie uns stattdessen an.');
            }
        );
    };

    return (
        <section className="section" id="kontakt">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Kontakt</p>
                    <h2 className="section-title">Wir sind für Sie da</h2>
                    <p className="section-sub">
                        Erreichen Sie uns jederzeit – per Telefon, E-Mail oder senden Sie uns eine Anfrage.
                    </p>
                </div>
                <div className="contact-grid-new">
                    {/* Contact info */}
                    <div className="contact-info">
                        {contactItems.map((item, i) => {
                            const Wrapper = item.href ? 'a' : 'div';
                            const wrapperProps = item.href
                                ? { href: item.href, className: 'contact-item contact-item-link' }
                                : { className: 'contact-item' };

                            return (
                                <Wrapper key={i} {...wrapperProps}>
                                    <div className="contact-item-icon">{item.icon}</div>
                                    <div>
                                        <div className="contact-item-label">{item.label}</div>
                                        <div className="contact-item-value">{item.value}</div>
                                        <div className="contact-item-sub">{item.sub}</div>
                                    </div>
                                </Wrapper>
                            );
                        })}
                    </div>

                    {/* Contact form */}
                    <div className="contact-form" id="rueckruf-form">
                        <h3>Rückruf anfordern</h3>
                        <p>Hinterlassen Sie Ihre Daten – wir melden uns schnellstmöglich bei Ihnen.</p>
                        {error && (
                            <p style={{ color: '#D97706', fontSize: '0.85rem', marginTop: '-0.5rem', marginBottom: '1rem' }}>
                                ⚠️ {error}
                            </p>
                        )}
                        {!submitted ? (
                            <form ref={form} onSubmit={handleSubmit} id="contact-form">
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="contact-name">Name *</label>
                                        <input type="text" id="contact-name" name="user_name" placeholder="Ihr Name" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="contact-phone">Telefon *</label>
                                        <input type="tel" id="contact-phone" name="user_phone" placeholder="Ihre Telefonnummer" required />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-type">Art des Schadens</label>
                                    <select id="contact-type" name="damage_type">
                                        {damageTypes.map((type) => (
                                            <option key={type.value} value={type.value}>{type.label}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="contact-message">Beschreibung (optional)</label>
                                    <textarea id="contact-message" name="message" placeholder="Beschreiben Sie kurz Ihr Anliegen..." />
                                </div>
                                <button type="submit" className="btn btn-lg contact-submit-btn" disabled={loading} style={{ opacity: loading ? 0.7 : 1 }}>
                                    {loading ? 'Wird gesendet...' : 'Rückruf anfordern'}
                                </button>
                            </form>
                        ) : (
                            <div className="form-success">
                                <span className="form-success-icon">✅</span>
                                <h3>Vielen Dank!</h3>
                                <p>Wir melden uns kurzfristig bei Ihnen.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
