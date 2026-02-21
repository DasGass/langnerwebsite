import React from 'react';
import { Link } from 'react-router-dom';
import '../components/ServicesGrid.css';

const ShieldIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const SearchIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const DropletIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
);

const CheckCircleIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const Wasserschaden = () => {
    return (
        <div className="page-wasserschaden">
            {/* Minimal Inner Hero */}
            <section className="section" style={{ background: '#F8FAFC', paddingBottom: '3rem', paddingTop: '4rem' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <span style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            24/7 Notdienst im Rhein-Sieg-Kreis
                        </span>
                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--grey-dark)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: 1.2 }}>
                            Wasserschaden? <br />
                            <span style={{ color: 'var(--blue)' }}>Wir retten Ihr Zuhause.</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--grey-mid)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Ein Wasserschaden ist ein Albtraum. Feuchtigkeit zerstört nicht nur Möbel und Böden,
                            sondern greift unbemerkt die Bausubstanz an und fördert gesundheitsgefährdende Schimmelbildung.
                            <strong> Wir nehmen Ihnen diese Sorge ab.</strong> Professionell, schnell und komplett aus einer Hand.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:+4915112022996" className="btn btn-lg">Notdienst: 0151 1202 2996</a>
                            <Link to="/kontakt#rueckruf-form" className="btn btn-lg btn-outline">Angebot anfordern</Link>
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
                                Die Unsichtbaren Gefahren: Warum Warten teuer wird
                            </h2>
                            <p>
                                Oft ist nur ein kleiner dunkler Fleck an der Wand oder an der Decke sichtbar. Doch das wahre
                                Ausmaß eines Wasserschadens liegt fast immer im Verborgenen – unter dem Estrich, in der Dämmung
                                oder in den Hohlräumen der Wände.
                            </p>
                            <p>
                                Je länger Wasser ungehindert in der Bausubstanz steht, desto drastischer fallen die Konsequenzen aus:
                                Die Dämmschicht verliert ihre Isolierwirkung komplett, das Mauerwerk weicht auf, und innerhalb weniger
                                Tage beginnen sich erste, hochallergene Schimmelpilzkulturen zu bilden.
                            </p>
                            <p>
                                <strong>Das muss nicht sein.</strong> Mit unserer Soforthilfe stoppen wir die Ausbreitung
                                sofort und dokumentieren den Schaden lückenlos für Ihre Versicherung.
                            </p>
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '100%', minHeight: '350px', background: 'var(--grey-bg)' }}>
                            <img src={`${import.meta.env.BASE_URL}images/hero/tims.jpg`} alt="Wasserschaden Notdienst Einsatz" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution / Process Section */}
            <section className="section section-grey">
                <div className="container">
                    <div className="section-header">
                        <p className="section-label">Unser Prozess</p>
                        <h2 className="section-title">In 4 Schritten zur Normalität</h2>
                        <p className="section-sub">
                            Ihre Nerven zu schonen ist unser oberstes Ziel. Wir übernehmen den kompletten Ablauf für Sie – von der Lokalisierung bis zur finalen Renovierung der betroffenen Räume.
                        </p>
                    </div>

                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>

                        <div className="service-card" style={{ padding: '2rem' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
                                <SearchIcon />
                            </div>
                            <h3>1. Zerstörungsfreie <br />Leckageortung</h3>
                            <p>
                                Wir schlagen keine Wände blind auf. Mit Infrarot-Thermografie und Endoskopie
                                orten wir den Rohrbruch punktgenau und zerstörungsfrei. Das rettet Ihre teuren Fliesen
                                und reduziert den Reparaturbedarf drastisch.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
                                <DropletIcon />
                            </div>
                            <h3>2. Technische <br />Tieftrocknung</h3>
                            <p>
                                Ist das Leck versiegelt, entfernen wir das stehende Wasser. Mit modernsten Hochleistungs-Kondenstrocknern
                                und spezieller Dämmschichttrocknung entziehen wir dem Mauerwerk schnell und sicher jegliche Restfeuchte,
                                bevor Schimmel entstehen kann.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
                                <CheckCircleIcon />
                            </div>
                            <h3>3. Komplette <br />Wiederherstellung (Sanierung)</h3>
                            <p>
                                Nach der Trocknung verabschieden wir uns nicht. Unser Team übernimmt alle anfallenden Renovierungsarbeiten:
                                Verputzen, Malerarbeiten, neuer Bodenbelag und Fliesenlegen. Ihr Raum sieht danach wieder aus wie neu – alles aus einer Hand.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>
                                <ShieldIcon />
                            </div>
                            <h3>4. Direkte <br />Versicherungsabrechnung</h3>
                            <p>
                                Die Bürokratie übernehmen wir! Da ein Wasserschaden in der Regel über Ihre Wohngebäude- oder Hausratversicherung gedeckt ist,
                                übernehmen wir die fachgerechte Schadensdokumentation und rechnen unsere Leistungen zu 100% direkt mit dem Versicherer ab. Kein Stress, keine Vorfinanzierung für Sie.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="section" style={{ background: 'var(--blue)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem' }}>
                        Jede Stunde zählt. Handeln Sie jetzt.
                    </h2>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
                        Unsere Experten im Rhein-Sieg-Kreis sind einsatzbereit. Lassen Sie uns Ihren Schaden beurteilen
                        und direkt die notwendigen Erstmaßnahmen einleiten.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+4915112022996" className="btn btn-lg btn-white">Notdienst anrufen</a>
                        <Link to="/kontakt#rueckruf-form" className="btn btn-lg btn-outline-white">
                            WhatsApp schreiben / Nachricht senden
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Wasserschaden;
