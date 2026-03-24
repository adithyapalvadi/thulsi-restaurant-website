import React from 'react';
import './Hero.css';

// Using the user provided ambiance image for the hero background
import heroBg from '../assets/Thulsi_Ambiance.png';

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div
                className="hero-bg"
                style={{ backgroundImage: `url(${heroBg})` }}
            ></div>
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-text-container">
                    <h1 className="hero-title animate-on-scroll playfair">
                        Pure Vegetarian<br />
                        <span className="text-highlight">Fine Dining</span> Experience
                    </h1>
                    <p className="hero-subtitle animate-on-scroll delay-100">
                        Where tradition meets modern flavors
                    </p>
                    <div className="hero-buttons animate-on-scroll delay-200">
                        <a href="#menu" className="btn btn-primary">View Menu</a>
                        <a href="#reservation" className="btn btn-outline hero-btn-outline">Reserve Table</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
