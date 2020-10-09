import React from 'react';
import './NavToggle.css'

const navToggle = (props) => {
    return (
        <div className={`nav-toggle ${props.active ? 'active' : ''}`} onClick={props.clicked}>
            <button className="nav-toggle__button" type="button" >
                <span className="nav-toggle__item"></span>
            </button>
        </div>
    )
}

export default navToggle;