import React from 'react';
import {NavLink} from 'react-router-dom';
import Logo from '../Logo/Logo';
import Aux from '../../hoc/Aux/Aux';
import './Footer.css';

const Footer = () => {
    return (
        <Aux>
            <div className="footer">
                <div className="spacer"></div>
                <div className="container">
                    <div className="footer__content">
                        <div className="footer__nav">
                            <NavLink className="footer__link" to="/">Приютить</NavLink>
                            <NavLink className="footer__link" to="/services">Услуги</NavLink>
                            <NavLink className="footer__link" to="/contact">Контакты</NavLink>
                            <NavLink className="footer__link" to="/about">О нас</NavLink>
                        </div>
                        <div className="footer__logo">
                            <Logo />
                        </div>
                        <div className="footer__text">
                            <div>Санкт-Петербург, Ленинградская область</div>
                            <div>@ Проект «Помоги бобаке», 2056</div>
                        </div>
                    </div>
                </div>
            </div>
        </Aux> 
    )
};

export default Footer;