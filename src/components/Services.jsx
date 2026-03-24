import React from 'react';
import './Services.css';

const Services = () => {
    const services = [
        {
            icon: '🍽️',
            title: 'Multi-cuisine Vegetarian',
            desc: 'Expertly crafted Indian, Continental, Mexican, and Italian pure vegetarian dishes.'
        },
        {
            icon: '📅',
            title: 'Reservations Required',
            desc: 'To ensure the best experience and minimal wait times, we recommend booking in advance.'
        },
        {
            icon: '🥂',
            title: 'Private Dining',
            desc: 'Exclusive sections available for your special celebrations and corporate gatherings.'
        },
        {
            icon: '🥘',
            title: 'All-You-Can-Eat',
            desc: 'Special buffet days offering unlimited spread of our signature delicacies.'
        }
    ];

    return (
        <section className="section services" id="services">
            <div className="container">
                <h2 className="section-title animate-on-scroll text-white">Our Services</h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            className={`service-card animate-on-scroll delay-${(index + 1) * 100}`}
                            key={index}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
