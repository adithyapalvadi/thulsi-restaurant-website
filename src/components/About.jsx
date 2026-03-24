import React from 'react';
import './About.css';

// Using one of the food images as about section image
import aboutImg from '../assets/food-images/unnamed (1).webp';

const About = () => {
    return (
        <section className="section about" id="about">
            <div className="container about-container">

                <div className="about-image-wrapper animate-on-scroll">
                    <div className="about-image">
                        <img src={aboutImg} alt="Thulsi Restaurant Ambiance and Food" />
                    </div>
                    <div className="experience-badge playfair">
                        <span className="years">Premium</span>
                        <span className="text">Dining</span>
                    </div>
                </div>

                <div className="about-content animate-on-scroll delay-200">
                    <h2 className="section-title">About Thulsi</h2>

                    <p className="about-text">
                        Thulsi Restaurant is a premium pure vegetarian dining destination in Chennai
                        offering Indian, Continental, Mexican, and Italian cuisines. Known for its
                        elegant ambiance, diverse menu, and exceptional service.
                    </p>

                    <div className="about-details">
                        <div className="detail-item">
                            <div className="detail-icon">⭐</div>
                            <div className="detail-info">
                                <h4>4.5 Rating</h4>
                                <p>Based on 528 reviews</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">📍</div>
                            <div className="detail-info">
                                <h4>Address</h4>
                                <p>3rd Floor, Harrisons Hotel, Nungambakkam, Chennai</p>
                            </div>
                        </div>

                        <div className="detail-item">
                            <div className="detail-icon">📞</div>
                            <div className="detail-info">
                                <h4>Phone</h4>
                                <p>096000 43366</p>
                            </div>
                        </div>
                    </div>

                    <a href="#menu" className="btn btn-primary mt-4">Discover Our Menu</a>
                </div>
            </div>
        </section>
    );
};

export default About;
