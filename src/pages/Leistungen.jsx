import React from 'react';
import { Link } from 'react-router-dom';

const ShieldCheckIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
    </svg>
);

const SearchIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" {...props}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

const DropletIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" {...props}>
        <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </svg>
);

const WindIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" {...props}>
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
    </svg>
);

const ToolIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" {...props}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const CheckCircleIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24" {...props}>
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);


const Leistungen = () => {
    return (
        <div className="page-leistungen">
            {/* Hero Section */}
            <section className="section" style={{ background: '#F8FAFC', paddingBottom: '3rem', paddingTop: '4rem' }}>
                <div className="container">
                    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                        <span style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                            Unser Leistungsportfolio
                        </span>
                        <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: 'var(--grey-dark)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: 1.2 }}>
                            Alles aus einer Hand. <br />
                            <span style={{ color: 'var(--blue)' }}>Von der Ortung bis zur Sanierung.</span>
                        </h1>
                        <p style={{ fontSize: '1.1rem', color: 'var(--grey-mid)', lineHeight: 1.6, marginBottom: '2rem' }}>
                            Ein Wasserschaden erfordert das Zusammenspiel vieler Gewerke. Bei Langner GM beenden wir das Chaos.
                            Sie bekommen genau <strong>einen Ansprechpartner</strong>, der Ihr Gebäude von der ersten Feuchtigkeitsmessung
                            bis zum finalen Pinselstrich der Renovierung begleitet.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                            <a href="tel:+4915112022996" className="btn btn-lg">Notdienst: 0151 1202 2996</a>
                            <Link to="/kontakt#rueckruf-form" className="btn btn-lg btn-outline">Unverbindlich anfragen</Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Detailed List */}
            <section className="section" style={{ background: '#fff' }}>
                <div className="container">
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 5vw, 5rem)' }}>

                        {/* Service Item 1: Leckageortung */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
                            <div style={{ order: 2 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <SearchIcon />
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: '800', color: 'var(--grey-dark)' }}>Leckageortung</h2>
                                </div>
                                <p style={{ color: 'var(--grey-mid)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                    Statt auf Verdacht Wände aufzustemmen, arbeiten wir zerstörungsfrei. Mit Infrarot-Thermografie,
                                    Endoskopie und akustischen Horchgeräten finden wir den verborgenen Rohrbruch zentimetergenau.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--grey-dark)' }}><CheckCircleIcon /> Zerstörungsfreie Auffindung</li>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--grey-dark)' }}><CheckCircleIcon /> Erspart teure Fliesenreparaturen</li>
                                </ul>
                                <Link to="/kontakt#rueckruf-form" className="btn btn-outline" style={{ padding: '0.5rem 1.2rem' }}>Termin für Ortung vereinbaren</Link>
                            </div>
                            <div style={{ order: 1, borderRadius: '12px', overflow: 'hidden', height: '300px', background: 'var(--grey-bg)' }}>
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/kzygg8/loch.jpg" alt="Leckageortung in Aktion" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Service Item 2: Wasserschadensanierung & Trocknung */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
                            <div style={{ order: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <WindIcon />
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: '800', color: 'var(--grey-dark)' }}>Wasserschaden & Trocknung</h2>
                                </div>
                                <p style={{ color: 'var(--grey-mid)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                    Wir stoppen das Wasser, saugen es ab und starten umgehend die technische Tieftrocknung.
                                    Egal ob Wände, Decken oder die heikle Dämmschicht unter dem schwimmenden Estrich –
                                    wir holen die Feuchtigkeit restlos aus dem Mauerwerk.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--grey-dark)' }}><CheckCircleIcon /> Unterdruckverfahren (Dämmschicht)</li>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--grey-dark)' }}><CheckCircleIcon /> Neubautrocknung</li>
                                </ul>
                                <Link to="/gebaeudetrocknung" className="btn" style={{ padding: '0.5rem 1.2rem' }}>Mehr zur Gebäudetrocknung</Link>
                            </div>
                            <div style={{ order: 2, borderRadius: '12px', overflow: 'hidden', height: '300px', background: 'var(--grey-bg)' }}>
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/tooasc/bild10-1.jpg" alt="Wasserschaden an der Wand - Trocknung erforderlich" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Service Item 3: Schimmelsanierung */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
                            <div style={{ order: 2 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <DropletIcon />
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: '800', color: 'var(--grey-dark)' }}>Schimmelsanierung</h2>
                                </div>
                                <p style={{ color: 'var(--grey-mid)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                    Haben Sie Schwarzschimmel nach einem Wasserschaden bemerkt? Wir entfernen befallene Tapeten und Putze fachmännisch,
                                    töten die Pilzsporen mit tiefenwirksamen Anti-Schimmel-Mitteln ab und sorgen dafür, dass sich der Befall nicht ausbreitet.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--grey-dark)' }}><CheckCircleIcon /> Fachgerechte Sporenabtötung</li>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--grey-dark)' }}><CheckCircleIcon /> Gesundheitsrisiken minimieren</li>
                                </ul>
                                <Link to="/kontakt#rueckruf-form" className="btn btn-outline" style={{ padding: '0.5rem 1.2rem' }}>Beratung anfordern</Link>
                            </div>
                            <div style={{ order: 1, borderRadius: '12px', overflow: 'hidden', height: '300px', background: 'var(--grey-bg)' }}>
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/q0jtv7/bild14.jpg" alt="Extremer Schimmelbefall an der Decke" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                        {/* Service Item 4: Komplette Wiederherstellung */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(2rem, 4vw, 4rem)', alignItems: 'center' }}>
                            <div style={{ order: 1 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                    <div style={{ width: '50px', height: '50px', background: 'var(--grey-dark)', color: '#fff', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                        <ToolIcon />
                                    </div>
                                    <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2rem)', fontWeight: '800', color: 'var(--grey-dark)' }}>Komplette Sanierung</h2>
                                </div>
                                <p style={{ color: 'var(--grey-mid)', fontSize: '1.05rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                                    Der Raum ist trocken, aber Fliesen fehlen und die Wand ist kahl? Kein Problem! Unser Handwerkerteam
                                    übernimmt die gesamte Wiederherstellung. Wir verlegen neuen Estrich, fliesen den Fußboden, tapezieren
                                    und streichen die Wände in Ihrer Wunschfarbe.
                                </p>
                                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--grey-dark)' }}><CheckCircleIcon /> Fliesen- & Estricharbeiten</li>
                                    <li style={{ display: 'flex', gap: '0.5rem', color: 'var(--grey-dark)' }}><CheckCircleIcon /> Maler- & Verputzerarbeiten</li>
                                </ul>
                                <Link to="/kontakt#rueckruf-form" className="btn" style={{ padding: '0.5rem 1.2rem' }}>Sanierungsangebot einholen</Link>
                            </div>
                            <div style={{ order: 2, borderRadius: '12px', overflow: 'hidden', height: '300px', background: 'var(--grey-bg)' }}>
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/image_2024-10-31t11_28_36-235-high.jpg" alt="Abgeschlossene Sanierung und Fliesenarbeiten" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Insurance Trust Block */}
            <section className="section section-grey">
                <div className="container">
                    <div style={{ background: 'var(--blue)', color: '#fff', borderRadius: '16px', padding: 'clamp(2rem, 4vw, 3rem)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', alignItems: 'center' }}>
                        <div>
                            <h2 style={{ fontSize: 'clamp(1.5rem, 2vw, 2.2rem)', fontWeight: '800', marginBottom: '1rem' }}>
                                Stressfreie Versicherungsabwicklung
                            </h2>
                            <p style={{ fontSize: '1.05rem', opacity: 0.9, lineHeight: 1.6, marginBottom: '1.5rem' }}>
                                Wir verschonen Sie mit dem lästigen Papierkram. Sämtliche erbrachten Leistungen (von der Ortung bis zur Mängelbeseitigung)
                                werden von uns detailliert dokumentiert und im Anschluss direkt und zu 100% mit Ihrer Gebäude- oder Hausratsversicherung abgerechnet.
                            </p>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, opacity: 0.9 }}>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Keine Vorfinanzierung nötig</li>
                                <li style={{ marginBottom: '0.5rem' }}>✓ Professionelle Messprotokolle</li>
                                <li>✓ Direktkontakt zu den Sachbearbeitern</li>
                            </ul>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.1)', padding: '2rem', borderRadius: '12px', textAlign: 'center' }}>
                            <ShieldCheckIcon style={{ width: '48px', height: '48px', margin: '0 auto', opacity: 0.9 }} />
                            <h3 style={{ fontSize: '1.3rem', fontWeight: 'bold' }}>Ihre Police zahlt. <br />Wir kümmern uns.</h3>
                            <a href="tel:+4915112022996" className="btn btn-white" style={{ justifyContent: 'center', marginTop: '1rem' }}>Jetzt Fall besprechen</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center', background: '#fff' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: 'var(--grey-dark)', fontWeight: '800', marginBottom: '1rem' }}>
                        Sie brauchen Soforthilfe?
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--grey-mid)', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Wenden Sie sich direkt an unseren Notdienst im Rhein-Sieg-Kreis oder schreiben Sie uns unkompliziert per WhatsApp.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+4915112022996" className="btn btn-lg">Jetzt anrufen: 0151 1202 2996</a>
                        <Link to="/kontakt#rueckruf-form" className="btn btn-lg btn-outline">WhatsApp / Mail schreiben</Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Leistungen;
