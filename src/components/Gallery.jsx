import React, { useState } from 'react';
import './Gallery.css';

// Automatically import all images from the food-images directory using Vite's import.meta.glob
const imageModules = import.meta.glob('../assets/food-images/*.{jpg,jpeg,png,webp}', { eager: true, import: 'default' });
const allImages = Object.values(imageModules);

const Gallery = () => {
    const [showAll, setShowAll] = useState(false);

    // First image as featured (pick a specific large one if you like, here we use first available)
    // But wait, the previous code used a specific image for featured. Let's just use the first item as featured.
    const featuredImg = allImages.length > 0 ? allImages[0] : '';
    const remainingImages = allImages.slice(1);

    // Show 8 images by default initially
    const displayedSubGrid = showAll ? remainingImages : remainingImages.slice(0, 8);

    return (
        <section className="section gallery" id="gallery">
            <div className="container">
                <h2 className="section-title animate-on-scroll">A Feast for the Eyes</h2>

                <div className="gallery-layout">
                    {featuredImg && (
                        <div className="gallery-item featured animate-on-scroll">
                            <img src={featuredImg} alt="Featured Dish" />
                            <div className="gallery-overlay">
                                <span className="gallery-icon">🔍</span>
                            </div>
                        </div>
                    )}

                    <div className="gallery-sub-grid">
                        {displayedSubGrid.map((imgSrc, index) => (
                            <div className="gallery-item animate-on-scroll delay-100" key={index}>
                                <img src={imgSrc} alt={`Gallery dish ${index + 1}`} loading="lazy" />
                                <div className="gallery-overlay"><span className="gallery-icon">🔍</span></div>
                            </div>
                        ))}
                    </div>
                </div>

                {remainingImages.length > 8 && (
                    <div className="gallery-toggle-btn animate-on-scroll delay-200">
                        <button
                            className="btn btn-outline"
                            onClick={() => setShowAll(!showAll)}
                            style={{ marginTop: '2rem' }}
                        >
                            {showAll ? 'Show Less' : 'View Full Gallery'}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Gallery;
