import React, {useState} from 'react';
import './Header.css';
import MobileNav from '../MobileNav/MobileNav';
import DesktopNav from '../DesktopNav/DesktopNav';
import NavToggle from '../NavToggle/NavToggle'
import { NavLink } from 'react-router-dom';
import Logo from '../../images/main.png'

const Header = (props) => {
    
    const [showNav, setShowNav] = useState(false);

    const handleToggleClick = () => {
        setShowNav(prevState => !prevState);
    };

    const linksList = [{
        link: '/pets',
        title: 'ПРИЮТИТЬ',
        children: [{
            link: '/cats',
            title: 'КОШКИ'
        },{
            link: '/dogs',
            title: 'СОБАКИ'
        },{
            link: '/new-pet',
            title: 'НОВЫЙ ДРУЖОЧЕК'
        }]
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
        link: '/blog',
        title: 'БЛОГ'
    },{
        link: '/contact',
        title: 'КОНТАКТЫ'
    }]

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header__container">
                    <NavLink className="header__logo" to="/" >
                        <div className="header__logo-img">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="header__logo-name">
                            <p>ПОМОГИ БОБАКЕ</p>
                            <p>ПРИЮТ ДЛЯ ЖИВОТНЫХ</p>
                        </div>
                    </NavLink>
                    <div className="header__nav">
                        <DesktopNav width={window.innerWidth} showNav={showNav} linksList={linksList}/>
                    </div>
                    <div className="header__actions">
                        <NavToggle active={showNav} clicked={handleToggleClick}/>
                    </div>
                </div>  
                <div className="header__mobile-nav">
                    <MobileNav width={window.innerWidth} showNav={showNav} linksList={linksList}/>
                </div> 
            </div>
        </header>
    );
};


export default Header;
