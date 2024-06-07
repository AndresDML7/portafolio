import React from 'react';
import './About.scss';
import profileImage from '../../assets/images/profile-image.jpg'; // Ruta de la imagen de perfil

const About = () => {
    return (
        <section id="about" className="about" role="region" aria-labelledby="about-heading">
            <div className="about__container">
                <div className="about__content-wrapper">
                    <div className="about__image-container" role="img" aria-label="Imagen de perfil">
                        <img src={profileImage} alt="Perfil" className="about__image" />
                    </div>
                    <div className="about__text-container">
                        <h2 id="about-heading" className="about__title">Sobre mí</h2>
                        <p className="about__content">
                        Soy Andres, un apasionado desarrollador full stack de 24 años con más de dos años de experiencia en .NET. 
                        Aunque especializado en back end, mi perfeccionismo me ha llevado a explorar el front end con entusiasmo. 
                        Asumo cada proyecto como un reto para aprender y fortalecer mis habilidades técnicas. Con buena lógica 
                        y fluidez en inglés, colaboro eficazmente en equipos globales. Comprometido con el aprendizaje continuo, 
                        busco crear soluciones innovadoras y eficientes, siempre listo para enfrentar nuevos desafíos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
