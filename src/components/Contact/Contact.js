// src/components/Contact/Contact.js
import React from 'react';
import './Contact.scss';

const Contact = () => {
    return (
        <section id="contact" className="contact" role="region" aria-labelledby="contact-heading">
            <div className="contact__container">
                <h2 id="contact-heading" className="contact__title">Contacto</h2>
                <form className="contact__form">
                    <div className="contact__form-group">
                        <label htmlFor="name" className="contact__label">Nombre</label>
                        <input type="text" id="name" className="contact__input" required />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="email" className="contact__label">Correo Electrónico</label>
                        <input type="email" id="email" className="contact__input" required />
                    </div>
                    <div className="contact__form-group">
                        <label htmlFor="message" className="contact__label">Mensaje</label>
                        <textarea id="message" className="contact__textarea" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="contact__button">Enviar</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
