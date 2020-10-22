import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../Button/Button';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/index';
import './Signin.css';

const Signin = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();
        await props.onSignin({
            email,
            password
        });
        props.history.push('/');
    }

    return (
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="signin__container">
                    <form action="" className="form" onSubmit={(event) => handleSubmit(event)}>
                        <div className="form__table">
                            <div className="signin__headline">ВХОД</div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__email">E-mail:</label>
                                </div>
                                <div className="form__column">
                                    <input 
                                        type="email" 
                                        value={email} 
                                        id="form__email"
                                        onChange={event => setEmail(event.target.value)}  />
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label htmlFor="form__password">Пароль:</label>
                                </div>
                                <div className="form__column">
                                    <input 
                                        type="password" 
                                        value={password} 
                                        id="form__password"
                                        onChange={event => setPassword(event.target.value)}  />
                                </div>
                            </div>
                            <Button className="signin__button" text="Войти"></Button>
                        </div>
                    </form>
                </div>
            </div>
        </Aux>
    )
};

Signin.propTypes = {
    onSignin: PropTypes.func,
    history: PropTypes.object,
};

const mapStateToProps = state => {
    return {
        idToken: state.auth.idToken,
        userId: state.auth.userId,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onSignin: (formData) => dispatch(actions.signin(formData)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
