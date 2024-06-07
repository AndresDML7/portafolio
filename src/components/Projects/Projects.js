import React from 'react';
import './Projects.scss';

const projectsData = [
    {
        title: 'Proyecto 1',
        description: 'Descripción breve del proyecto 1.',
        link: '#'
    },
    {
        title: 'Proyecto 2',
        description: 'Descripción breve del proyecto 2.',
        link: '#'
    },
    {
        title: 'Proyecto 3',
        description: 'Descripción breve del proyecto 3.',
        link: '#'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="projects" role="region" aria-labelledby="projects-heading">
            <div className="projects__container">
                <h2 id="projects-heading" className="projects__title">Proyectos</h2>
                <div className="projects__list">
                    {projectsData.map((project, index) => (
                        <div key={index} className="projects__item">
                            <h3 className="projects__item-title">{project.title}</h3>
                            <p className="projects__item-description">{project.description}</p>
                            <a href={project.link} className="projects__item-link" target="_blank" rel="noopener noreferrer">Ver más</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
