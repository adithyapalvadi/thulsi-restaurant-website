import React from 'react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
    // Use a generic WhatsApp number or the one provided (096000 43366)
    const phoneNumber = "919600043366";
    const message = "Hello Thulsi Restaurant, I would like to inquire about...";

    return (
        <a
            href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
            className="whatsapp-float"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with us on WhatsApp"
        >
            <svg viewBox="0 0 32 32" className="whatsapp-icon" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 2.5C8.5 2.5 2.4 8.6 2.4 16.1c0 2.4.6 4.7 1.8 6.7L2.1 29.9l7.3-1.9c1.9 1 4.1 1.6 6.5 1.6 7.5 0 13.6-6.1 13.6-13.6S23.5 2.5 16 2.5zm0 24.8c-2 0-3.9-.5-5.6-1.5l-.4-.2-4.1 1.1 1.1-4-.3-.4c-1.1-1.7-1.7-3.7-1.7-5.8 0-6.2 5.1-11.3 11.3-11.3s11.3 5.1 11.3 11.3-5.1 11.3-11.3 11.3zm6.2-8.5c-.3-.2-2-.1-2.3 0-.3.1-.5.3-.7.7s-.8 1.1-1 1.2c-.2.2-.4.2-.7 0-1.7-.8-3-1.9-4.2-3.8-.2-.3 0-.4.2-.6.2-.2.4-.4.5-.6s.2-.4.3-.6c.1-.2.1-.4 0-.6s-.6-1.5-1-2.2c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4s-1 1-1 2.4.9 2.8 1.1 3c.2.2 2 3.1 4.9 4.3 2 .8 2.8.9 3.8.8 1.1-.1 2-.8 2.3-1.6.3-.7.3-1.4.2-1.6-.1-.1-.3-.2-.6-.3z" />
            </svg>
        </a>
    );
};

export default WhatsAppButton;
