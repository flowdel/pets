import React from 'react';
import PropTypes from 'prop-types';
import './DesktopNav.css';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

const Nav = (props) =>  {
    return (
        <nav className="desktop-nav" id="desktop-nav">
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
                        <div 
                            className="desktop-nav__link" 
                            key={link.link}>
                            <NavLink 
                                className="desktop-nav__link-title" 
                                to={link.link}>
                                    {link.title}
                            </NavLink>
                            <div className="desktop-nav__options">
                                {link.children ? 
                                    link.children.map((child) => {
                                        if (child) {
                                            return (
                                                <NavLink 
                                                    className="desktop-nav__option-item" 
                                                    key={child.link} to={child.link}>
                                                        <i className="fas fa-paw"></i><span>{child.title}</span>
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
        </nav>
    )
};

Nav.propTypes = {
    linksList: PropTypes.array,
    onLogout: PropTypes.func,
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout()),
    }
};

export default connect(null, mapDispatchToProps)(Nav);




