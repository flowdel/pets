import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import MobileNav from '../MobileNav/MobileNav';
import DesktopNav from '../DesktopNav/DesktopNav';
import NavToggle from '../NavToggle/NavToggle'
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router';
import Logo from '../Logo/Logo';
import { connect } from 'react-redux';

const Header = (props) => {
    const location = useLocation();
    
    useEffect(() => {
        setShowNav(false);
    }, [location.pathname]);

    const [showNav, setShowNav] = useState(false);

    const handleToggleClick = () => {
        setShowNav(prevState => !prevState);
    };

    let newPet = null;
    let signIn = {
        link: '/signin',
        title: 'ВХОД'
    };
    let logOut = null;

    if (props.isAuthenticated) {
        newPet = {
            link: '/new-pet',
            title: 'НОВЫЙ ДРУЖОЧЕК'
        };
        signIn = null;
        logOut = {
            link: '/signin',
            title: 'ВЫХОД'
        }
    }

    const linksList = [{
        link: '/',
        title: 'ПРИЮТИТЬ',
        children: [{
            link: '/cats',
            title: 'КОШКИ'
        },{
            link: '/dogs',
            title: 'СОБАКИ'
        }, 
        newPet]
    },{
        link: '/services',
        title: 'УСЛУГИ',
        children: [{
            link: '/servises-list',
            title: 'ПЕРЕЧЕНЬ УСЛУГ'
        }, {
            link: '/price',
            title: 'ЦЕНЫ НА УСЛУГИ'
          }]
    },{
        link: '/about',
        title: 'О НАС'
    },{
        link: '/contact',
        title: 'КОНТАКТЫ'
    },
    signIn,
    logOut];

    return (
        <header className="header" id="header">
            <div className="container header__container">
                <Logo />
                <div className="header__nav">
                    <DesktopNav 
                        width={window.innerWidth} 
                        showNav={showNav} 
                        linksList={linksList}/>
                </div>
                <div className="header__actions">
                    <NavToggle 
                        active={showNav} 
                        clicked={handleToggleClick}/>
                    <div className="header__social">
                        <Link 
                            to="instagram.com"
                            className="header__social-link" 
                            ><i className="fab fa-instagram"></i></Link>
                        <Link 
                            to="vk.com"
                            className="header__social-link" 
                            ><i className="fab fa-vk"></i></Link>
                        <Link 
                            to="facebook.com"
                            className="header__social-link" 
                            ><i className="fab fa-facebook-square"></i></Link>
                    </div>
                </div>
            </div>  
            <div className="header__mobile-nav">
                <MobileNav 
                    width={window.innerWidth} 
                    showNav={showNav} 
                    linksList={linksList}/>
            </div> 
        </header>
    );
};

Header.propTypes = {
    isAuthenticated: PropTypes.bool,
    history: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.idToken !== null
    };
};

export default connect(mapStateToProps, null)(Header);
  
