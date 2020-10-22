import React, {useState, useEffect} from 'react';
import './Rating.css';
import PropTypes from 'prop-types';

const Rating = (props) => {

    const [inputId, setInputId] = useState('');

    const makeId = () => {
        return Math.random().toString(36).substring(7);
    };

    useEffect(() => {
        setInputId(makeId());
    }, []);

    return (
        <div onChange={props.onChange}>
            <span className="rating">
                <input type="radio" id={inputId + '-5'} name={props.name} value="5" />
                <label htmlFor={inputId + '-5'}></label>
                <input type="radio" id={inputId + '-4'} name={props.name} value="4" />
                <label htmlFor={inputId + '-4'}></label>
                <input type="radio" id={inputId + '-3'} name={props.name} value="3" />
                <label htmlFor={inputId + '-3'}></label>
                <input type="radio" id={inputId + '-2'} name={props.name} value="2" />
                <label htmlFor={inputId + '-2'}></label>
                <input type="radio" id={inputId + '-1'} name={props.name} value="1" />
                <label htmlFor={inputId + '-1'}></label>
                <input type="radio" id={inputId + '-0'} name={props.name} value="0" className="rating-clear" />
                <label htmlFor={inputId + '-0'}></label>
            </span>
        </div>     
    )
};

Rating.propTypes = {
    onChange: PropTypes.func,
    name: PropTypes.string
};

export default Rating;