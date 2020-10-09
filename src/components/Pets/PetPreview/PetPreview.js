import React from 'react';
import './PetPreview.css';

// import { withRouter } from 'react-router-dom';

const pet = (props) => {
    return (
        props.class === "" ? 
        <div class={'pet-preview' + props.class} onClick={props.clicked}>
            <div class="pet-preview__img" style={{backgroundImage: `url('${props.imageUrl}')`, backgroundSize: 'cover'}} >
                <div class="pet-preview__text">ЗАБРАТЬ ДОМОЙ</div>
            </div>
            <div class="pet-preview__info">
                <div class="pet-preview__name">{props.title}</div>
            </div>
        </div>
        : 
        <div className={'pet-preview' + props.class} onClick={props.clicked}>
            <div className="pet-preview__img" style={{backgroundImage: `url('${props.imageUrl}')`, backgroundSize: 'cover'}} >
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
                                {Array.apply(null, {length: props.fluffiness}).map((e, index) => (
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
                                {Array.apply(null, {length: props.playfulness}).map((e, index) => (
                                    <div key={index}><i className="fas fa-circle"></i></div>
                                ))}
                            </td>
                        </tr>
                    </tbody>
                </table>  
            </div>
            <div className="spacer"></div>
        </div>
        
    )
}



export default pet;