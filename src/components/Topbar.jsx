import React from 'react';
import './Topbar.css';

const PhoneIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
);

const MailIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbar-inner">
                <span className="topbar-item">
                    <PhoneIcon />
                    <a href="tel:+4902243846834">02243 8456834</a>
                </span>
                <span className="topbar-item">
                    <PhoneIcon />
                    <a href="tel:+4901511202299">0151 1202 2996 (Notdienst)</a>
                </span>
                <span className="topbar-item">
                    <MailIcon />
                    <a href="mailto:info@langner-gm.de">info@langner-gm.de</a>
                </span>
            </div>
        </div>
    );
};

export default Topbar;
