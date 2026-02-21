import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const PhoneIcon = ({ size = 15 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 14.92z" />
    </svg>
);

const MenuIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
    </svg>
);

const CloseIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
);

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Close mobile menu on route change
    React.useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    return (
        <>
            {/* Mobile emergency bar */}
            <div className="emergency-bar">
                ⚡ 24/7 Notdienst: <a href="tel:+4901511202299">0151 1202 2996</a>
            </div>

            <header className="header">
                <div className="header-inner">
                    <Link to="/" className="logo">
                        <div className="logo-bg">
                            <img
                                src="/images/logo/image-2.png"
                                alt="Langner GM Logo"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextElementSibling.style.display = 'block';
                                }}
                            />
                            <span className="logo-fallback" style={{ display: 'none' }}>Langner GM</span>
                        </div>
                    </Link>

                    <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
                        <NavLink to="/" className="nav-link">Startseite</NavLink>
                        <NavLink to="/leistungen" className="nav-link">Leistungen</NavLink>
                        <NavLink to="/wasserschaden" className="nav-link">Wasserschaden</NavLink>
                        <NavLink to="/gebaeudetrocknung" className="nav-link">Gebäudetrocknung</NavLink>
                        <NavLink to="/ueber-uns" className="nav-link">Über uns</NavLink>
                        <NavLink to="/kontakt" className="nav-link">Kontakt</NavLink>
                    </nav>

                    <div className="header-actions">
                        <a href="tel:+4915112022996" className="btn header-cta-btn">
                            <PhoneIcon />
                            <span className="header-cta-text">Notdienst 24/7</span>
                            <span className="header-cta-text-mobile">Notdienst</span>
                        </a>

                        {/* Burger Button for Mobile/Tablet */}
                        <button className="burger-btn" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
