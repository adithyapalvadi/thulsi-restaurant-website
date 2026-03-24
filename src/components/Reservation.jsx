import React, { useState } from 'react';
import './Reservation.css';

const Reservation = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
        }, 5000);
        e.target.reset();
    };

    return (
        <section className="section reservation" id="reservation">
            <div className="container">
                <div className="reservation-container animate-on-scroll">
                    <div className="reservation-content">
                        <h2 className="section-title playfair">Book a Table</h2>
                        <p className="reservation-subtitle">
                            Experience the best of vegetarian fine dining. We look forward to hosting you.
                        </p>

                        {submitted ? (
                            <div className="reservation-success animate-on-scroll visible">
                                <div className="success-icon">✨</div>
                                <h3>Reservation Request Sent!</h3>
                                <p>Thank you for choosing Thulsi Restaurant. Our team will contact you shortly to confirm your booking.</p>
                                <button className="btn btn-outline mt-4" onClick={() => setSubmitted(false)}>Make Another Booking</button>
                            </div>
                        ) : (
                            <form className="reservation-form" onSubmit={handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="name">Full Name</label>
                                        <input type="text" id="name" placeholder="John Doe" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone">Phone Number</label>
                                        <input type="tel" id="phone" placeholder="+91 96000 43366" required />
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="form-group">
                                        <label htmlFor="date">Date</label>
                                        <input type="date" id="date" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="guests">Number of Guests</label>
                                        <select id="guests" required>
                                            <option value="" disabled selected>Select Guests</option>
                                            <option value="1">1 Person</option>
                                            <option value="2">2 People</option>
                                            <option value="3">3 People</option>
                                            <option value="4">4 People</option>
                                            <option value="5">5 People</option>
                                            <option value="6+">6+ People</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="requests">Special Requests</label>
                                    <textarea id="requests" rows="3" placeholder="Any dietary requirements or special occasions?"></textarea>
                                </div>


                                <button type="submit" className="btn btn-primary form-submit-btn">Reserve Table</button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reservation;
