import React, {useState} from 'react';
import './DesktopNav.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) =>  {
    // const [showNavItem, setShowNavItem] = useState([false])
    // const handleNavClick = (event) => {
    //     if (event.target.classList[0] === 'nav__option-item') {
    //         event.preventDefault();
    //     } else {
    //         event.target.children[1].classList.toggle('active');
    //         setShowNavItem(prevState => !prevState);
    //     }
    // }


    // const [linksStatus, setLinksStatus] = useState(props.linksList.map(() => false));
    // const handleNavClick = (index) => {
    //     let newLinksStatus = [...linksStatus];
    //     console.log(linksStatus[index]);
    //     newLinksStatus[index] = !newLinksStatus[index];
    //     setLinksStatus(newLinksStatus);
    // }

    return (
        <nav className="desktop-nav" id="desktop-nav">
            {props.linksList.map((link) => {
                return (
                    <div className="desktop-nav__link">
                        <NavLink className="desktop-nav__link-title"to={link.link}>{link.title}</NavLink>
                            <div className="desktop-nav__options">
                                {link.children ? 
                                    link.children.map((child) => {
                                        return (
                                            <NavLink className="desktop-nav__option-item" to={child.link}><i className="fas fa-paw"></i><span>{child.title}</span></NavLink>
                                        )
                                    })
                                : null}
                            </div>
                    </div>
                )
            })}
        </nav>
    )
}

export default Nav;



