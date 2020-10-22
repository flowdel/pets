import React from 'react';
import PropTypes from 'prop-types';
import './PetPreview.css';

const Pet = (props) => {
    console.log(props, `https://iparts.kameas.ru/${props.image}`);
    return (
        props.class === "" ? 
        <div className={'pet-preview ' + props.class} onClick={props.clicked}>
            <div className="pet-preview__container">
                <div className="pet-preview__img" style={{backgroundImage: `url('https://iparts.kameas.ru${props.image}')`, backgroundSize: 'cover'}} >
                    <div className="pet-preview__text">ЗАБРАТЬ ДОМОЙ</div>
                </div>
                <div className="pet-preview__info">
                    <div className="pet-preview__name">{props.title}</div>
                </div>
            </div>
        </div>
        : 
        <div className={'pet-preview ' + props.class} onClick={props.clicked}>
            <div className="pet-preview__container">
                <div className="pet-preview__img" style={{backgroundImage: `url('https://iparts.kameas.ru${props.image}')`, backgroundSize: 'cover'}} >
                    <div className="pet-preview__text">ПОДРОБНЕЕ</div>
                </div>
                <div className="pet-preview__info">
                    <div className="pet-preview__name">{props.name}</div>
                    <table className="pet-preview__details">
                        <tbody>
                            <tr>
                                <td className="pet-preview__feature">Возраст:</td>
                                <td>{props.age} лет</td>
                            </tr>
                            <tr>
                                <td className="pet-preview__feature">Пушистость:</td>
                                <td>
                                    {Array.apply(null, {length: props.fluff}).map((e, index) => (
                                        <div key={index}><i className="fas fa-circle"></i></div>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td className="pet-preview__feature">Мурчистость:</td>
                                <td>
                                    {Array.apply(null, {length: props.purr}).map((e, index) => (
                                        <div key={index}><i className="fas fa-circle"></i></div>
                                    ))}
                                </td>
                            </tr>
                            <tr>
                                <td className="pet-preview__feature">Игривость:</td>
                                <td>
                                    {Array.apply(null, {length: props.play}).map((e, index) => (
                                        <div key={index}><i className="fas fa-circle"></i></div>
                                    ))}
                                </td>
                            </tr>
                        </tbody>
                    </table>  
                </div>
            </div>
            <div className="spacer"></div>
        </div>
        
    )
};

Pet.propTypes = {
    class: PropTypes.string,
    clicked: PropTypes.func,
    title: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
    fluff: PropTypes.number,
    purr: PropTypes.number,
    play: PropTypes.number,
    image: PropTypes.string,
};

export default Pet;