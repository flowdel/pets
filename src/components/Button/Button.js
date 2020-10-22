import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
    return (
        <button 
            className="button" 
            onClick={props.clicked}>
                {props.text}
        </button>
    )
};

Button.propTypes = {
    clicked: PropTypes.func,
    text: PropTypes.string,
};

export default Button;