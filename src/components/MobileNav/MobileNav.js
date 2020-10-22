import React from 'react';
import PropTypes from 'prop-types';
import './MobileNav.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const Nav = (props) =>  {
    return (
        props.showNav ? 
        <nav 
            className="mobile-nav"  
            id="mobile-nav">
                {props.linksList.map((link) => {
                    if (link) {
                        if (link.title === 'ВЫХОД') {
                            return (
                                <div 
                                    className="desktop-nav__link" 
                                    key={link.link}>
                                        <NavLink 
                                            className="desktop-nav__link-title" 
                                            to={link.link}
                                            onClick={() => props.onLogout()}
                                            >
                                                {link.title}
                                        </NavLink>
                                </div>
                            )
                        }
                        return (
                            <div className="mobile-nav__link">
                                <NavLink 
                                    className="mobile-nav__link-title"
                                    to={link.link}>
                                        {link.title}
                                </NavLink>
                                    <div className="mobile-nav__options">
                                        {link.children ? 
                                            link.children.map((child) => {
                                                if (child) {
                                                    return (
                                                        <NavLink 
                                                            className="mobile-nav__option-item" 
                                                            to={child.link} 
                                                            key={child.title}>
                                                                <i className="fas fa-paw"></i>
                                                                <span>{child.title}</span>
                                                        </NavLink>
                                                    )
                                                }
                                                return null;
                                            })
                                        : null}
                                    </div>
                            </div>
                        )
                    }
                    return null;
                })}
        </nav> : null
    )
};

Nav.propTypes = {
    showNav: PropTypes.bool,
    onLogout: PropTypes.func,
    linksList: PropTypes.array,
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
    }
};

export default connect(null, mapDispatchToProps)(Nav);


