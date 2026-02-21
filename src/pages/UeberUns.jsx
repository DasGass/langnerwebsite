import React from 'react';
import { Link } from 'react-router-dom';

const ShieldCheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
    </svg>
);

const UserCheckIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="8.5" cy="7" r="4" />
        <polyline points="17 11 19 13 23 9" />
    </svg>
);

const ToolIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
);

const MapPinIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);

const UeberUns = () => {
    return (
        <div className="page-ueber-uns">
            {/* Minimal Inner Hero */}
            <section className="section" style={{ background: '#F8FAFC', paddingBottom: '3rem', paddingTop: '4rem' }}>
                <div className="container">
                    <div className="trust-grid">
                        <div className="trust-content">
                            <span style={{ display: 'inline-block', background: 'var(--blue)', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem', width: 'max-content' }}>
                                Über Langner GM
                            </span>
                            <h1 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', color: 'var(--grey-dark)', marginBottom: '1.5rem', fontWeight: '800', lineHeight: 1.2 }}>
                                Wir sind Ihr Rettungsteam bei <span style={{ color: 'var(--blue)' }}>Wasserschäden</span> im Rhein-Sieg-Kreis.
                            </h1>
                            <p style={{ fontSize: '1.1rem', color: 'var(--grey-mid)', lineHeight: 1.6, marginBottom: '2rem' }}>
                                Wenn Wasser in Ihr Gebäude eindringt, brauchen Sie keine Callcenter-Agenten, sondern Handwerker, die sofort wissen,
                                was zu tun ist. Als lokaler Fachbetrieb aus Eitorf stehen wir genau dafür: Schnelle Hilfe, ehrliche Beratung und
                                handwerkliche Perfektion – bis der letzte Pinselstrich trocken ist.
                            </p>
                        </div>
                        <div style={{ borderRadius: '12px', overflow: 'hidden', height: '100%', minHeight: '350px', background: 'var(--grey-bg)' }}>
                            <img src="/images/hero/tims.jpg" alt="Das Team von Langner GM" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy / Benefit Section */}
            <section className="section" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
                        <p className="section-label">Unsere Philosophie</p>
                        <h2 className="section-title">Warum Kunden uns <br />ihr Zuhause anvertrauen</h2>
                        <p className="section-sub" style={{ margin: '0 auto' }}>
                            Ein Wasserschaden ist stressig genug. Wir haben unsere Dienstleistung so aufgebaut, dass Sie
                            sich entspannt zurücklehnen können, während wir den Schaden beseitigen.
                        </p>
                    </div>

                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>

                        <div className="service-card" style={{ padding: '2rem', alignItems: 'center', textAlign: 'center' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)', marginBottom: '1rem', width: '60px', height: '60px' }}>
                                <MapPinIcon />
                            </div>
                            <h3>Regional & Schnell</h3>
                            <p>
                                Wir sind kein anonymer Großkonzern. Als Familienbetrieb im Rhein-Sieg-Kreis sind unsere Anfahrtswege kurz.
                                Im Notfall sind wir oft in unter einer Stunde bei Ihnen, um Schlimmeres zu verhindern.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem', alignItems: 'center', textAlign: 'center' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)', marginBottom: '1rem', width: '60px', height: '60px' }}>
                                <ToolIcon />
                            </div>
                            <h3>Alles aus einer Hand</h3>
                            <p>
                                Trocknen reicht nicht. Wer verputzt danach? Wer verlegt die neuen Fliesen? Wir!
                                Sie müssen keine fünf verschiedenen Handwerker koordinieren. Wir machen alles von A bis Z.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem', alignItems: 'center', textAlign: 'center' }}>
                            <div className="service-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)', marginBottom: '1rem', width: '60px', height: '60px' }}>
                                <UserCheckIcon />
                            </div>
                            <h3>Eigene Fachleute</h3>
                            <p>
                                Wir arbeiten nicht mit Subunternehmen. Alle Trocknungs- und Sanierungsarbeiten werden von
                                unserem eigenen, festangestellten und geschulten Fachpersonal durchgeführt.
                            </p>
                        </div>

                        <div className="service-card" style={{ padding: '2rem', alignItems: 'center', textAlign: 'center', background: 'var(--grey-dark)' }}>
                            <div className="service-card-icon" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', marginBottom: '1rem', width: '60px', height: '60px' }}>
                                <ShieldCheckIcon />
                            </div>
                            <h3 style={{ color: '#fff' }}>100% Versicherungsservice</h3>
                            <p style={{ color: 'rgba(255,255,255,0.7)' }}>
                                Wir kommunizieren direkt mit Ihrer Gebäude- oder Hausratversicherung, reichen alle nötigen Fotos,
                                Messprotokolle und Rechnungen ein. Für Sie entsteht null Papierkram.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="section section-grey">
                <div className="container">
                    <div className="trust-stats" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        <div className="trust-stat" style={{ padding: '2.5rem 1.5rem' }}>
                            <div className="trust-stat-num">24/7</div>
                            <div className="trust-stat-label" style={{ fontSize: '1rem' }}>Erreichbarer Notdienst</div>
                        </div>
                        <div className="trust-stat" style={{ padding: '2.5rem 1.5rem' }}>
                            <div className="trust-stat-num">100%</div>
                            <div className="trust-stat-label" style={{ fontSize: '1rem' }}>Direktabrechnung</div>
                        </div>
                        <div className="trust-stat" style={{ padding: '2.5rem 1.5rem' }}>
                            <div className="trust-stat-num">Komplett</div>
                            <div className="trust-stat-label" style={{ fontSize: '1rem' }}>Trocknung & Sanierung</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section" style={{ background: '#fff' }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 4rem' }}>
                        <p className="section-label">Unser Team</p>
                        <h2 className="section-title">Die Gesichter hinter Langner GM</h2>
                        <p className="section-sub" style={{ margin: '0 auto' }}>
                            Fachkompetenz trifft Leidenschaft. Unser Team besteht aus erfahrenen Spezialisten,
                            die jeden Tag ihr Bestes für Ihr Zuhause geben.
                        </p>
                    </div>

                    <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>

                        {/* Team Member 1: Michael */}
                        <div className="team-card">
                            <div className="team-card-img-wrap">
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/r5ii0233-high.jpg" alt="Michael - Inhaber" />
                            </div>
                            <div className="team-card-body">
                                <span className="team-card-role">Inhaber</span>
                                <h3 className="team-card-name">Michael</h3>
                                <p className="team-card-desc">Gründer und Herz des Unternehmens. Leitet alle Prozesse von A bis Z.</p>
                            </div>
                        </div>

                        {/* Team Member 2: Ramona */}
                        <div className="team-card">
                            <div className="team-card-img-wrap">
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/r5ii0213-high.jpg" alt="Ramona - Ingenieur & Büro" />
                            </div>
                            <div className="team-card-body">
                                <span className="team-card-role">Ingenieur & Büro</span>
                                <h3 className="team-card-name">Ramona</h3>
                                <p className="team-card-desc">Expertin für Planung und Management. Seit 2022 im Team.</p>
                            </div>
                        </div>

                        {/* Team Member 3: David */}
                        <div className="team-card">
                            <div className="team-card-img-wrap">
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/r5ii0296-high.jpg" alt="David - Maler" />
                            </div>
                            <div className="team-card-body">
                                <span className="team-card-role">Maler</span>
                                <h3 className="team-card-name">David</h3>
                                <p className="team-card-desc">Spezialist für Oberflächen und Finish. Seit 2023 bei uns.</p>
                            </div>
                        </div>

                        {/* Team Member 4: Viktor */}
                        <div className="team-card">
                            <div className="team-card-img-wrap">
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/r5ii0276-high.jpg" alt="Viktor - Trocknungstechniker" />
                            </div>
                            <div className="team-card-body">
                                <span className="team-card-role">Trocknungstechniker</span>
                                <h3 className="team-card-name">Viktor</h3>
                                <p className="team-card-desc">Meister der technischen Bautrocknung. Seit 2024 im Team.</p>
                            </div>
                        </div>

                        {/* Team Member 5: Sascha */}
                        <div className="team-card">
                            <div className="team-card-img-wrap">
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/r5ii0328-high.jpg" alt="Sascha - Fliesenleger" />
                            </div>
                            <div className="team-card-body">
                                <span className="team-card-role">Fliesenleger</span>
                                <h3 className="team-card-name">Sascha</h3>
                                <p className="team-card-desc">Präzision in jeder Fliese. Seit 2024 im Team.</p>
                            </div>
                        </div>

                        {/* Team Member 6: Viktor (Maler) */}
                        <div className="team-card">
                            <div className="team-card-img-wrap">
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/r5ii0290-high.jpg" alt="Viktor - Maler" />
                            </div>
                            <div className="team-card-body">
                                <span className="team-card-role">Maler</span>
                                <h3 className="team-card-name">Viktor</h3>
                                <p className="team-card-desc">Experte für Malerarbeiten und Finish. Seit 2024 im Team.</p>
                            </div>
                        </div>

                        {/* Team Member 7: Jonathan */}
                        <div className="team-card">
                            <div className="team-card-img-wrap">
                                <img src="https://primary.jwwb.nl/public/y/m/i/temp-nbiwqvxfwullqbvupqwd/r5ii0240-high.jpg" alt="Jonathan - Trocknungstechniker" />
                            </div>
                            <div className="team-card-body">
                                <span className="team-card-role">Trocknungstechniker</span>
                                <h3 className="team-card-name">Jonathan</h3>
                                <p className="team-card-desc">Zuverlässiger Spezialist für Trocknung. Seit 2025 im Team.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Final CTA Strip */}
            <section className="section" style={{ background: 'var(--blue)', color: '#fff', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: '800', marginBottom: '1rem' }}>
                        Lernen Sie uns persönlich kennen.
                    </h2>
                    <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem', opacity: 0.9 }}>
                        Ob akuter Wasserschaden oder Beratungsbedarf: Wir stehen Ihnen im Rhein-Sieg-Kreis zur Seite.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <a href="tel:+4915112022996" className="btn btn-lg btn-white">
                            Notdienst anrufen
                        </a>
                        <Link to="/kontakt#rueckruf-form" className="btn btn-lg btn-outline-white">
                            Nachricht schreiben
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default UeberUns;
