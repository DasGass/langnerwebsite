// src/components/UeberUnsSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const UeberUnsSection = () => {
    return (
        <section className="section" id="ueber-uns">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Wer wir sind</p>
                    <h2 className="section-title">Langner GM Gebäudemanagement</h2>
                    <p className="section-sub">
                        Ihr vertrauensvoller und lokaler Partner in Eitorf und dem gesamten Rhein-Sieg-Kreis.
                    </p>
                </div>

                <div className="trust-grid">
                    <div className="trust-content">
                        <h3>Regionale Verbundenheit</h3>
                        <p>
                            Als etabliertes lokales Unternehmen im Rhein-Sieg-Kreis kennen wir unsere Region
                            und sind in Notfällen zumeist innerhalb kürzester Zeit vor Ort. Kurze Anfahrtswege
                            bedeuten für Sie eine unkomplizierte Reaktionszeit, wenn jede Minute zählt.
                        </p>

                        <h3>Alles komplett aus einer Hand</h3>
                        <p>
                            Bei uns haben Sie für alle Schritte nur einen Ansprechpartner. Von der Ortung über
                            die eigentliche Trocknung bis zur Wiederherstellung (Fliesenlegen, Estrich,
                            Malerarbeiten) übernehmen wir jeden Schritt zuverlässig für Sie.
                        </p>

                        <div style={{ marginTop: '1.5rem' }}>
                            <Link to="/kontakt#rueckruf-form" className="btn btn-lg">Kontakt aufnehmen</Link>
                        </div>
                    </div>

                    <div className="trust-stats">
                        <div className="trust-stat">
                            <div className="trust-stat-num">24/7</div>
                            <div className="trust-stat-label">Notdienst jederzeit für Sie bereit</div>
                        </div>
                        <div className="trust-stat">
                            <div className="trust-stat-num">100%</div>
                            <div className="trust-stat-label">Transparente Abrechnung direkt mit Versicherern</div>
                        </div>
                        <div className="trust-stat">
                            <div className="trust-stat-num">Regional</div>
                            <div className="trust-stat-label">Tätig im gesamten Rhein-Sieg-Kreis</div>
                        </div>
                        <div className="trust-stat">
                            <div className="trust-stat-num">Kompakt</div>
                            <div className="trust-stat-label">Alle Gewerke (Sanierung, Fliesen, Malen) inkludiert</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UeberUnsSection;
