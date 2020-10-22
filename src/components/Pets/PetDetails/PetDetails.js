import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './PetDetails.css';
import Aux from '../../../hoc/Aux/Aux';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import Button from '../../Button/Button';

const PetDetails = (props) => {
    useEffect(() => {
        props.onPetLoad(props.match.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleClick = () => {
        console.log(props.history);
        props.history.push(`/adopt/${props.pet.id}`);
    }
    return (
        props.pet.image ? 
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="content-wrapper">
                    <div className="pet-details">
                        <div className="pet-details__container">
                            <div 
                                className="pet-details__img" 
                                style={{backgroundImage: `url('https://iparts.kameas.ru${props.pet.image[0].url}')`, backgroundSize: 'cover'}}
                            ></div>
                            <div className="pet-details__info">
                                <div className="headline">{props.pet.name}</div>
                                <div className="pet-details__feature">Пол: <span>{props.pet.sex === 'male' ? 'м' : 'ж'}</span></div>
                                <div className="pet-details__feature">Возраст: <span>{props.pet.age} лет</span></div>
                                <div className="pet-details__feature">
                                    Здоровье: <span>{props.pet.health === 'good' ?
                                    'Хорошее' : props.pet.health === 'needHelp' ?
                                    'Требуется помощь' : 'С особенностями'}</span>
                                </div>
                                <div className="pet-details__description">Описание:<p>{props.pet.description}</p></div>
                                <Button 
                                    text="Приютить" 
                                    clicked={() => handleClick()}>
                                </Button>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </Aux> : null
    )
};

const mapStateToProps = state => {
    return {
        pet: state.pets.pet
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onPetLoad: (petId) => dispatch(actions.getPetData(petId)),
    }
};

PetDetails.propTypes = {
    onPetLoad: PropTypes.func,
    match: PropTypes.object,
    history: PropTypes.object,
    pet: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(PetDetails);
