import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../hoc/Aux/Aux';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import './Application.css';
import Button from '../Button/Button';

const Application = (props) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [number, setNumber] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        props.onPetLoad(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.id]);

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSendApplication({
            name,
            surname,
            number,
            description,
            petId: props.pet.id
        });
        props.history.push('/');
    }

    return (
        props.pet.image ? 
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="form__container">
                <div className="headline">Заявка на усыновление: <span className="headline headline_type_subtitle">питомец {props.pet.name}</span></div>
                    <form 
                        action="" 
                        className="form" 
                        onSubmit={(event) => handleSubmit(event)}>
                            <div 
                                className="form__img" 
                                style={{backgroundImage: `url('https://iparts.kameas.ru${props.pet.image[0].url}')`, backgroundSize: 'cover'}}>
                            </div>
                            <div className="form__table">
                                <div className="form__row">
                                    <div className="form__column">
                                        <label htmlFor="form__surname">Фамилия:</label>
                                    </div>
                                    <div className="form__column">
                                        <input 
                                            type="text" 
                                            value={surname} 
                                            id="form__surname"
                                            onChange={event => setSurname(event.target.value)}  />
                                    </div>
                                </div>
                                <div className="form__row">
                                    <div className="form__column">
                                        <label htmlFor="form__name">Имя:</label>
                                    </div>
                                    <div className="form__column">
                                        <input 
                                            type="text" 
                                            value={name} 
                                            id="form__name"
                                            onChange={event => setName(event.target.value)}  />
                                    </div>
                                </div>
                                <div className="form__row">
                                    <div className="form__column">
                                        <label htmlFor="form__number">Телефон:</label>
                                    </div>
                                    <div className="form__column">
                                        <input 
                                            type="text" 
                                            value={number} 
                                            id="form__number"
                                            onChange={event => setNumber(event.target.value)}  />
                                    </div>
                                </div>
                                <div className="form__row">
                                    <div className="form__column">
                                        <label htmlFor="form__description">Опишите себя:</label>
                                    </div>
                                    <div className="form__column">
                                        <textarea 
                                            value={description} 
                                            id="form__description"
                                            onChange={event => setDescription(event.target.value)} ></textarea>
                                    </div>
                                </div>
                                <Button text="Отправить"></Button>
                            </div>
                    </form>
                </div>
            </div>
            
        </Aux> : null
    )
};

Application.propTypes = {
    onPetLoad: PropTypes.func,
    onSendApplication: PropTypes.func,
    match: PropTypes.object,
    pet: PropTypes.object,
    history: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        pet: state.pets.pet
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPetLoad: (petId) => dispatch(actions.getPetData(petId)),
        onSendApplication: (applicationData) => dispatch(actions.sendApplication(applicationData))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Application);