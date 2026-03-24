import React from 'react';
import './Reviews.css';

const Reviews = () => {
    const reviewsData = [
        {
            name: "Arun Kumar",
            rating: 5,
            date: "2 weeks ago",
            text: "Great ambiance and tasty food. The atmosphere was perfect for a family dinner."
        },
        {
            name: "Priya Sharma",
            rating: 5,
            date: "1 month ago",
            text: "Wide variety of vegetarian cuisines. Loved their South Indian spread and desserts."
        },
        {
            name: "Vikram Singh",
            rating: 4,
            date: "2 months ago",
            text: "Excellent service and unique dishes. The Honey Chilli Lotus Stem was a revelation!"
        }
    ];

    return (
        <section className="section reviews" id="reviews">
            <div className="container">
                <h2 className="section-title animate-on-scroll">What Our Guests Say</h2>

                <div className="reviews-grid">
                    {reviewsData.map((review, index) => (
                        <div
                            className={`review-card animate-on-scroll delay-${(index + 1) * 100}`}
                            key={index}
                        >
                            <div className="review-header">
                                <div className="reviewer-avatar">
                                    {review.name.charAt(0)}
                                </div>
                                <div className="reviewer-info">
                                    <h4 className="reviewer-name">{review.name}</h4>
                                    <span className="review-date">{review.date}</span>
                                </div>
                            </div>
                            <div className="review-stars">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <span key={i} className="star">⭐</span>
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
