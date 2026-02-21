import React from 'react';
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
                            <li><a href="#leistungen">Wasserschadensanierung</a></li>
                            <li><a href="#leistungen">Bautrocknung</a></li>
                            <li><a href="#leistungen">Schimmelsanierung</a></li>
                            <li><a href="#leistungen">Leckageortung</a></li>
                            <li><a href="#leistungen">Fliesenlegen & Estrich</a></li>
                            <li><a href="#leistungen">Renovierung</a></li>
                            <li><a href="#leistungen">Solarreinigung</a></li>
                            <li><a href="#leistungen">Grünpflege</a></li>
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
                        <a href="#">Impressum</a> &nbsp;·&nbsp;
                        <a href="#">Datenschutz</a>
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
