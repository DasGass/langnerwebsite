import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ServicesGrid.css';

const ActivityIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
);

const WindIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const LayersIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 12 12 17 22 12" />
        <polyline points="2 17 12 22 22 17" />
    </svg>
);

const Gebaeudetrocknung = () => {
    return (
        <div className="page-gebaeudetrocknung">
            {/* Minimal Inner Hero */}
            <section className="section" style={{ background: '#F8FAFC', paddingBottom: '3rem', paddingTop: '4rem' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <span style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            Experten für Technische Trocknung
                        </span>
                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--grey-dark)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: 1.2 }}>
                            Nasse Wände? Feuchter Estrich? <br />
                            <span style={{ color: 'var(--blue)' }}>Wir trocknen es professionell.</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--grey-mid)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Egal, ob nach einem Leitungsbruch, Starkregen oder zur Beschleunigung in der Neubauphase:
                            Feuchtigkeit in der Dämmschicht verschwindet nie von allein. Gewöhnliche Heizlüfter helfen hier nicht.
                            <strong> Wir holen das Wasser aus dem verborgenen Mauerwerk</strong> – bevor Schimmel Ihr Zuhause gefährdet.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:+4915112022996" className="btn btn-lg">Beratung anfordern</a>
                            <Link to="/kontakt#rueckruf-form" className="btn btn-lg btn-outline">Online Anfrage</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pain / Problem Section */}
            <section className="section">
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-content">
                            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--grey-dark)', fontWeight: '800', marginBottom: '1rem' }}>
                                Der tödliche Irrtum: "Das trocknet von allein"
                            </h2>
                            <p>
                                Wasser findet immer einen Weg nach unten. Oft sammelt sich das meiste Wasser nach einem Schaden völlig
                                unsichtbar unter dem schwimmenden Estrich (in der Dämmschicht) Ihres Bodens. Da dort keine Luft zirkuliert,
                                entsteht ein idealer Nährboden für hochgiftigen Schwarzschimmel.
                            </p>
                            <p>
                                <strong>Der Einsatz von Bau- oder normalen Heizlüftern reicht hier nicht aus.</strong> Sie trocknen nur
                                die Oberfläche. Unter dem Boden bleibt die Feuchtigkeit eingeschlossen. Das Resultat: Modergeruch nach
                                einigen Wochen und schwere gesundheitliche Risiken für die Bewohner.
                            </p>
                            <p>
                                <strong>Unsere Lösung:</strong> Wir setzen das bewährte Unterdruckverfahren ein.
                                Dabei bohren wir gezielt 5-6 cm große Kernlöcher durch den Estrich. Über diese Öffnungen saugen
                                spezielle Hochleistungsmaschinen die feuchte Luft aktiv aus der Dämmschicht ab.
                                Die entzogene Nässe wird im Gerät kondensiert und sicher in Wasserbehältern gesammelt.
                                So wird Ihre Bausubstanz zu 100% von innen heraus gerettet.
                            </p>
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '100%', minHeight: '350px', background: 'var(--grey-bg)' }}>
                            <img src="/images/hero/upscalemedia-transformed.jpeg" alt="Professionelle Gebäudetrocknung und Bautrocknung in Aktion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution / Process Section */}
            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Der Trocknungsprozess</p>
                        <h2 className="section-title">Schnell, leise, effizient</h2>
                        <p className="section-sub">
                            Wir verwenden die neueste Generation von geräuscharmen Kondenstrocknern. Minimaler Stress für Sie, maximale Trocknungskraft für Ihr Gebäude.
                        </p>
                    </div>

                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

                        <div className="service-card" style={{ padding: '2rem' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
                                <ActivityIcon />
                            </div>
                            <h3>1. Exakte <br />Feuchtigkeitsmessung</h3>
                            <p>
                                Vor Beginn messen wir mit modernsten kapazitiven und dielektrischen Messgeräten exakt,
                                wie viel Wasser in Wänden und Estrich steckt. Wir dokumentieren den IST-Zustand präzise.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
                                <LayersIcon />
                            </div>
                            <h3>2. Dämmschicht- <br />trocknung</h3>
                            <p>
                                Wenn Wasser unter den Estrich gelaufen ist, installieren wir unser Unterdruck-System
                                mit 5-6 cm großen Bohrungen. Das System saugt die nasse Luft gezielt aus den Bodenschichten ab und filtert
                                gleichzeitig schädliche Partikel durch HEPA-Filter aus.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
                                <WindIcon />
                            </div>
                            <h3>3. Raumluft- <br />Trocknung</h3>
                            <p>
                                Parallel stellen wir leise und stromsparende Kondenstrockner auf. Sie fangen die der Luft entzogene
                                Feuchtigkeit auf oder leiten diese direkt abwärts in den Abfluss. Ihre Tapeten und Putze trocknen sicher ab.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
                                <CheckCircleIcon />
                            </div>
                            <h3>4. Abschlussmessung <br />& Zertifikat</h3>
                            <p>
                                Nach wenigen Wochen prüfen wir den Erfolg. Wir schalten die Geräte ab und Sie erhalten
                                ein offizielles Trocknungsprotokoll (wichtig für die Versicherung). Einer Schimmelbildung
                                wurde erfolgreich vorgebeugt.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Neubautrocknung / Extra Section */}
            <section className="section" style={{ background: '#fff' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2.2rem)', fontWeight: '800', marginBottom: '1rem', color: 'var(--grey-dark)' }}>
                        Bauen Sie gerade? <span style={{ color: 'var(--blue)' }}>Neubautrocknung!</span>
                    </h2>
                    <p style={{ color: 'var(--grey-mid)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                        Wussten Sie, dass beim Bau eines Massivhauses tausende Liter Wasser vermauert werden? Wer heute zu schnell einzieht,
                        bekommt morgen Probleme mit Schwitzwasser und Schimmel. Unsere technische Neubautrocknung verkürzt die natürliche
                        Trocknungszeit extrem. <strong>Sie können Wochen früher einziehen und sparen teure Heizkosten im ersten Winter!</strong>
                    </p>
                    <Link to="/kontakt#rueckruf-form" className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.6rem 1.5rem', fontWeight: 'bold' }}>
                        Jetzt zur Bautrocknung beraten lassen
                    </Link>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="section" style={{ background: 'var(--blue)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem' }}>
                        Überlassen Sie Feuchtigkeit nicht dem Zufall.
                    </h2>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
                        Wir statten Ihre Räumlichkeiten mit der besten Trocknungstechnologie auf dem Markt aus.
                        Rufen Sie uns an oder stellen Sie Ihre Terminanfrage online.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+4915112022996" className="btn btn-lg btn-white">
                            Direkt anrufen: 0151 1202 2996
                        </a>
                        <Link to="/kontakt#rueckruf-form" className="btn btn-lg btn-outline-white">
                            Besichtigung buchen
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Gebaeudetrocknung;
