import React from 'react';
import './About.scss';
import profileImage from '../../assets/images/profile-image.jpg'; // Ruta de la imagen de perfil

const About = () => {

    const skills = [
        { iconClass: 'fas fa-laptop-code', label: '.NET' },
        { iconClass: 'fas fa-code', label: 'C#' },
        { iconClass: 'fas fa-network-wired', label: 'API REST' },
        { iconClass: 'fas fa-sitemap', label: 'Entity Framework' },
        { iconClass: 'fas fa-link', label: 'LINQ' },
        { iconClass: 'fas fa-vial', label: 'Unit Tests' },
        { iconClass: 'fas fa-database', label: 'SQL Server' },
        { iconClass: 'fas fa-user-cog', label: 'Azure DevOps' },
        { iconClass: 'fab fa-react', label: 'React Js' },
        { iconClass: 'fab fa-js-square', label: 'JavaScript' },
        { iconClass: 'fab fa-html5', label: 'HTML' },
        { iconClass: 'fab fa-css3-alt', label: 'CSS' },
    ];

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
                        Soy Andres, un apasionado desarrollador fullstack con más de dos años de experiencia.
                        Asumo cada proyecto como un reto para aprender y fortalecer mis habilidades técnicas. Con buena lógica 
                        y fluidez en inglés, colaboro eficazmente en equipos globales. Comprometido con el aprendizaje continuo, 
                        busco crear soluciones innovadoras y eficientes, siempre listo para enfrentar nuevos desafíos.
                        </p>
                    </div>
                </div>
                <div className="about__skills">
                    <h3 className="about__skills-title">Skills</h3>
                    <ul className="about__skills-list">
                        {skills.map((skill, index) => (
                            <li key={index} className="about__skills-item">
                                <i className={`${skill.iconClass} about__skills-icon`}></i>
                                <span className="about__skills-label">{skill.label}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
