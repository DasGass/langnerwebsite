import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Topbar from './components/Topbar';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Leistungen from './pages/Leistungen';
import Wasserschaden from './pages/Wasserschaden';
import Gebaeudetrocknung from './pages/Gebaeudetrocknung';
import UeberUns from './pages/UeberUns';
import Kontakt from './pages/Kontakt';

const ScrollToSection = () => {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [pathname, hash]);

    return null;
};

function App() {
    return (
        <Router basename="/Langner_Website/">
            <ScrollToSection />
            <div className="langner-landing-page">
                <Topbar />
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/leistungen" element={<Leistungen />} />
                        <Route path="/wasserschaden" element={<Wasserschaden />} />
                        <Route path="/gebaeudetrocknung" element={<Gebaeudetrocknung />} />
                        <Route path="/ueber-uns" element={<UeberUns />} />
                        <Route path="/kontakt" element={<Kontakt />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
