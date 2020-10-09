import React from 'react';
import './MobileNav.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) =>  {
    return (
        props.showNav ? <nav className="mobile-nav" id="mobile-nav">
            {props.linksList.map((link) => {
                return (
                    <div className="mobile-nav__link">
                        <NavLink className="mobile-nav__link-title"to={link.link}>{link.title}</NavLink>
                            <div className="mobile-nav__options">
                                {link.children ? 
                                    link.children.map((child) => {
                                        return (
                                            <NavLink className="mobile-nav__option-item" to={child.link}><i class="fas fa-paw"></i><span>{child.title}</span></NavLink>
                                        )
                                    })
                                : null}
                            </div>
                    </div>
                )
            })}
            {/* <div className="mobile-nav__link" onClick={(event) => handleNavClick(event)}>
                <div>УСЛУГИ</div>
                <div className="nav__options">
                    <NavLink className="nav__option-item" to="/">ПЕРЕЧЕНЬ УСЛУГ</NavLink>
                    <NavLink className="nav__option-item" to="/">СТОИМОСТЬ УСЛУГ</NavLink>
                </div>
            </div>
            <NavLink className="nav__link" to="/dogs"><div>О НАС</div></NavLink>
            <NavLink className="nav__link" to="/"><div>БЛОГ</div></NavLink>
            <NavLink className="nav__link" to="/"><div>КОНТАКТЫ</div></NavLink> */}
        </nav> : null
    )
}

export default Nav;



