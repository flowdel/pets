import React from 'react';
import {NavLink} from 'react-router-dom';
import LogoImage from '../../images/main.png';
import './Logo.css';

const Logo = () => {
    return (
        <NavLink 
            className="logo" 
            to="/" 
            activeClassName="logo_is_active">
                <div className="logo__img">
                    <img src={LogoImage} alt="" />
                </div>
                <div className="logo__name">
                    <div className="logo__name-item">ПОМОГИ БОБАКЕ</div>
                    <div className="logo__name-item">ПРИЮТ ДЛЯ ЖИВОТНЫХ</div>
                </div>
        </NavLink>
    )
};

export default Logo;