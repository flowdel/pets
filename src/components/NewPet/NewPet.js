import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux/Aux';
import Rating from '../Rating/Rating';
import Button from '../Button/Button';
import './NewPet.css';
// import axios from '../../axios';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const NewPet = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [type, setType] = useState('dog');
    const [sex, setSex] = useState('male');
    const [health, setHealth] = useState('good');
    const [fluff, setFluff] = useState(0);
    const [purr, setPurr] = useState(0);
    const [play, setPlay] = useState(0);
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');

    const handleTypeChange = (event) => {
        console.log(event.target.value);
        setType(event.target.value);
    }
    const handleSexChange = (event) => {
        setSex(event.target.value);
    }
    const handleHealthChange = (event) => {
        setHealth(event.target.value);
    }
    const handleFluffChange = (event) => {
        setFluff(+event.target.value);
    };
    const handlePurrChange = (event) => {
        setPurr(+event.target.value);
    };
    const handlePlayChange = (event) => {
        setPlay(+event.target.value);
    };
    const handleImageChange = (event) => {
        let [file] = event.target.files;
        const formData = new FormData();
        formData.append('files', file);
        console.log(formData);
        setImage(formData);
    };
    const handleSubmit = () => {
        console.log(type, sex, health);
        props.onPetAdded({
            name,
            age,
            sex,
            health,
            type,
            purr,
            fluff,
            play,
            image,
            description
        }, props.idToken)
    }
    
                            

    return (
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="form__container">
                    <div className="headline">Новый гость приюта</div>
                    <form action="" className="form">
                        <div className="form__table">
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__name">Кличка:</label>
                                </div>
                                <div className="form__column">
                                    <input 
                                        type="text" 
                                        id="form__name"
                                        value={name}
                                        onChange={event => setName(event.target.value)} />
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__age">Возраст:</label>
                                </div>
                                <div className="form__column">
                                    <input 
                                        type="number" 
                                        id="form__age"
                                        value={age}
                                        onChange={event => setAge(event.target.value)} />
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__type">Тип:</label>
                                </div>
                                <div className="form__column">
                                    <select 
                                        id="form__type" 
                                        value={type}
                                        onChange={(event) => handleTypeChange(event)}
                                        >
                                            <option value="cat">Кот</option>
                                            <option value="dog">Пес</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__sex">Пол:</label>
                                </div>
                                <div className="form__column">
                                    <select 
                                        id="form__sex" 
                                        value={sex}
                                        onChange={(event) => handleSexChange(event)}
                                        >
                                            <option value="male">М</option>
                                            <option value="female">Ж</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__health">Здоровье:</label>
                                </div>
                                <div className="form__column">
                                    <select 
                                        id="form__health" 
                                        value={health}
                                        onChange={(event) => handleHealthChange(event)}
                                        >
                                            <option value="good">Хорошее</option>
                                            <option value="needHelp">Требуется помощь</option>
                                            <option value="disabled">С особенностями</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__feature">Пушистость:</label>
                                </div>
                                <div className="form__column">
                                    <Rating 
                                        onChange={(event) => handleFluffChange(event)}
                                        name="fluff"/>          
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__feature">Милость:</label>
                                </div>
                                <div className="form__column">
                                    <Rating 
                                        onChange={(event) => handlePurrChange(event)}
                                        name="purr"/>   
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__feature">Игривость:</label>
                                </div>
                                <div className="form__column">
                                    <Rating 
                                        onChange={(event) => handlePlayChange(event)}
                                        name="play"/>  
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__photo">Фото:</label>
                                </div>
                                <div className="form__column">
                                    <input 
                                        type="file" 
                                        id="form__photo"
                                        onChange={event => handleImageChange(event)} />
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__description">Описание:</label>
                                </div>
                                <div className="form__column">
                                    <textarea 
                                        id="form__description" 
                                        cols="30" 
                                        rows="5"
                                        value={description}
                                        onChange={event => setDescription(event.target.value)}></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                    <Button 
                        text="Отправить"
                        clicked={() => handleSubmit()} 
                        ></Button>
                </div>
            </div>
        </Aux>
    )
};

NewPet.propTypes = {
    onPetAdded: PropTypes.func,
    idToken: PropTypes.string,
};

const mapStateToProps = state => {
    return {
        pets: state.pets.pets,
        idToken: state.auth.idToken
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPetAdded: (petData, idToken) => dispatch(actions.addPet(petData, idToken)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewPet);