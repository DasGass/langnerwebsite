import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <h3>Langner GM Gebäudemanagement</h3>
                        <p>
                            Ihr zuverlässiger Partner für Wasserschadensanierung, Bautrocknung und
                            Gebäudemanagement im Rhein-Sieg-Kreis. Schnell, professionell und nachhaltig.
                        </p>
                    </div>
                    <div className="footer-col">
                        <h4>Leistungen</h4>
                        <ul>
                            <li><Link to="/wasserschaden">Wasserschadensanierung</Link></li>
                            <li><Link to="/gebaeudetrocknung">Bautrocknung</Link></li>
                            <li><Link to="/leistungen">Schimmelsanierung</Link></li>
                            <li><Link to="/leistungen">Leckageortung</Link></li>
                            <li><Link to="/leistungen">Fliesenlegen & Estrich</Link></li>
                            <li><Link to="/leistungen">Renovierung</Link></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Kontakt</h4>
                        <ul>
                            <li><a href="tel:+4901511202299">0151 1202 2996 (Notdienst)</a></li>
                            <li><a href="tel:+4902243845683">02243 8456834</a></li>
                            <li><a href="mailto:info@langner-gm.de">info@langner-gm.de</a></li>
                            <li><a href="#">Siebigteroth 25, 53783 Eitorf</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span>© 2026 Langner GM Gebäudemanagement. Alle Rechte vorbehalten.</span>
                    <span>
                        <Link to="/">Impressum</Link> &nbsp;·&nbsp;
                        <Link to="/">Datenschutz</Link>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
