import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMobileOpen ? 'navbar-mobile-open' : ''}`}>
            <div className="container nav-container">
                <div className="logo">
                    <a href="#">
                        <img src="/logo.png" alt="Thulsi Logo" className="logo-img" />
                    </a>
                </div>

                <div className={`hamburger ${isMobileOpen ? 'active' : ''}`} onClick={() => setIsMobileOpen(!isMobileOpen)}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>

                <ul className={`nav-links ${isMobileOpen ? 'active' : ''}`}>
                    <li><a href="#about" onClick={() => setIsMobileOpen(false)}>About</a></li>
                    <li><a href="#menu" onClick={() => setIsMobileOpen(false)}>Menu</a></li>
                    <li><a href="#gallery" onClick={() => setIsMobileOpen(false)}>Gallery</a></li>
                    <li><a href="#services" onClick={() => setIsMobileOpen(false)}>Services</a></li>
                    <li><a href="#reviews" onClick={() => setIsMobileOpen(false)}>Reviews</a></li>
                </ul>
                <a href="#reservation" className={`btn btn-primary nav-btn ${isMobileOpen ? 'active' : ''}`} onClick={() => setIsMobileOpen(false)}>Reserve Table</a>
            </div>
        </nav>
    );
};

export default Navbar;
