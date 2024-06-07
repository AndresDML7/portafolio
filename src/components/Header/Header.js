import React from 'react';
import './Header.scss';
import logo from '../../assets/images/logo.png'; // Ajusta la ruta según tu estructura de proyecto

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <a href="#home" className="header__logo-link">
                        <img src={logo} alt="Logo" className="header__logo-image" />
                    </a>
                </div>
                <nav className="header__nav">
                    <ul className="header__list">
                        <li className="header__item"><a href="#home" className="header__link">Home</a></li>
                        <li className="header__item"><a href="#about" className="header__link">About</a></li>
                        <li className="header__item"><a href="#projects" className="header__link">Projects</a></li>
                        <li className="header__item"><a href="#contact" className="header__link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
