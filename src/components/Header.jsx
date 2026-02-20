import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    {/* Logo image - update the src path if you move the logo file */}
                    <img
                        src="/images/logo/image-2.png"
                        alt="Langner GM Logo"
                        className="logo-image"
                    />
                </div>
                <button className="cta-button" onClick={() => window.location.href = 'tel:+49 1511 2022 996'}>
                    Notdienst Anrufen
                </button>
            </div>
        </header >
    );
};

export default Header;
