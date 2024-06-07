import React from 'react';
import './Home.scss';

const Home = () => {
    return (
        <section id="home" className="home">
            <div className="home__content">
                <h1 className="home__title">ANDRES<br/><span className='home__title-lastname'>MUÑOZ</span></h1>
                <p className='home__subtitle'>Fullstack Developer</p>
                <div className="home__social-icons">
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="home__social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
