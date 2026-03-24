import React, { useState } from 'react';
import './Menu.css';
import { fullMenu } from '../data/menuData';

// Deduplicate categories based on available items
const categories = ['All', ...new Set(fullMenu.map(item => item.cat))].filter(Boolean);

const Menu = () => {
    const [activeTab, setActiveTab] = useState('All');
    const [showAll, setShowAll] = useState(false);

    const filteredDishes = activeTab === 'All'
        ? fullMenu
        : fullMenu.filter(dish => dish.cat === activeTab);

    const displayedDishes = showAll ? filteredDishes : filteredDishes.slice(0, 8);

    return (
        <section className="section menu" id="menu">
            <div className="container">
                <h2 className="section-title animate-on-scroll">Our Highlight Menu</h2>

                <div className="menu-categories animate-on-scroll delay-100">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            className={`cat-btn ${activeTab === cat ? 'active' : ''}`}
                            onClick={() => {
                                setActiveTab(cat);
                                setShowAll(false);
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="menu-grid animate-on-scroll delay-200">
                    {displayedDishes.length > 0 ? (
                        displayedDishes.map((dish, index) => (
                            <div className="menu-card" key={index}>
                                <div className="menu-card-header">
                                    <h3 className="dish-name playfair">{dish.name}</h3>
                                    <span className="dish-price">{dish.price}</span>
                                </div>
                                <p className="dish-desc">{dish.desc}</p>
                                <div className="dish-footer">
                                    <span className={`dish-tag ${dish.tag.includes('Special') ? 'special' : 'jain'}`}>
                                        {dish.tag}
                                    </span>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-items">
                            <p>Explore our full menu at the restaurant for this category!</p>
                        </div>
                    )}
                </div>

                {filteredDishes.length > 8 && (
                    <div className="menu-toggle-btn animate-on-scroll delay-300">
                        <button
                            className="btn btn-outline"
                            onClick={() => setShowAll(!showAll)}
                        >
                            {showAll ? 'Show Less' : 'Show More'}
                        </button>
                    </div>
                )}

                <div className="menu-cta animate-on-scroll delay-400">
                    <a href="#menu" className="btn btn-primary" style={{ marginTop: '1rem' }} onClick={(e) => { e.preventDefault(); alert('The full menu PDF will be available for download soon.'); }}>Download Full Menu</a>
                </div>
            </div>
        </section>
    );
};

export default Menu;
