import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <img src="/logo.png" alt="Thulsi Logo" className="footer-logo-img" />
                        </a>
                        <p className="footer-desc">
                            Pure Vegetarian Fine Dining Experience.
                            Where tradition meets modern flavors in the heart of Chennai.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="Facebook">FB</a>
                            <a href="#" className="social-link" aria-label="Instagram">IG</a>
                            <a href="#" className="social-link" aria-label="Twitter">TW</a>
                        </div>
                    </div>

                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#menu">Menu</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#reservation">Reservations</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul>
                            <li><strong>Phone:</strong> 096000 43366</li>
                            <li><strong>Email:</strong> reservations@thulsi.com</li>
                            <li><strong>Address:</strong> 3rd Floor, Harrisons Hotel, Nungambakkam, Chennai</li>
                        </ul>
                    </div>

                    <div className="footer-hours">
                        <h4 className="footer-heading">Opening Hours</h4>
                        <p className="open-hours">Open Daily</p>
                        <p className="hours-highlight">7:00 PM onwards</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Thulsi Restaurant. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
