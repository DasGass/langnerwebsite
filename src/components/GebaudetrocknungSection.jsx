// src/components/GebaudetrocknungSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
        <polyline points="20 6 9 17 4 12" />
    </svg>
);

const GebaudetrocknungSection = () => {
    return (
        <section className="section section-grey" id="gebaudetrocknung">
            <div className="container">
                <div className="section-header">
                    <p className="section-label">Trocknungstechnik</p>
                    <h2 className="section-title">Kompetente Gebäudetrocknung</h2>
                    <p className="section-sub">
                        Restfeuchte nach einem Schaden oder im Neubau sicher beseitigen. Wir nutzen
                        modernste Maschinen für ein perfektes Raumklima.
                    </p>
                </div>

                <div className="trust-grid">
                    <div className="trust-points">
                        <div className="trust-point">
                            <div className="trust-point-icon"><CheckIcon /></div>
                            <div><strong>Dämmschichttrocknung:</strong> Rettet den Estrich vor Komplettaustausch und spart hohe Kosten.</div>
                        </div>
                        <div className="trust-point">
                            <div className="trust-point-icon"><CheckIcon /></div>
                            <div><strong>Neubautrocknung:</strong> Zeitgewinn vor Einzug ohne Feuchterisiko für Putz und Farbe.</div>
                        </div>
                        <div className="trust-point">
                            <div className="trust-point-icon"><CheckIcon /></div>
                            <div><strong>Wand- und Bodentrocknung:</strong> Gezielter Einsatz von Infrarot- und Kondenstrocknern.</div>
                        </div>
                        <div className="trust-point">
                            <div className="trust-point-icon"><CheckIcon /></div>
                            <div><strong>Lückenlose Messungen:</strong> Regelmäßige Überwachung der Restfeuchtigkeit durch Experten.</div>
                        </div>
                    </div>

                    <div className="trust-content">
                        <h3>Effizient trocknen</h3>
                        <p>
                            Ein feuchtes Mauerwerk ist das perfekte Klima für Schimmelpilze und schwächt die
                            Dämmung Ihres Hauses massiv. Wir positionieren unsere Hochleistungs-Kondenstrockner so
                            effizient, dass die Substanz schnellstmöglich bis zum Kern trocknet.
                        </p>
                        <p>
                            Unser Rundum-Service beinhaltet das fachgerechte Aufstellen, die regelmäßige Wartung und
                            die anschließende Abholung der Geräte nach erfolgreicher, abschließender Feuchtigkeitsmessung.
                        </p>

                        <div style={{ marginTop: '1.5rem' }}>
                            <Link to="/kontakt#rueckruf-form" className="btn btn-lg">Angebot anfordern</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GebaudetrocknungSection;
