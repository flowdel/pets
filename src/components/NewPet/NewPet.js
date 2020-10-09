import React, {useState} from 'react';
import Aux from '../../hoc/Aux/Aux'

const NewPet = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
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
                                    <label for="form__name">Кличка:</label>
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
                                    <label for="form__age">Возраст:</label>
                                </div>
                                <div className="form__column">
                                    <input 
                                        type="text" 
                                        id="form__age"
                                        value={age}
                                        onChange={event => setAge(event.target.value)} />
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label for="form__feature">Пушистость:</label>
                                </div>
                                <div className="form__column">
                                        <div><i className="fas fa-circle"></i></div>
                                        <div><i className="fas fa-circle"></i></div>
                                        <div><i className="fas fa-circle"></i></div>
                                        <div><i className="fas fa-circle"></i></div>
                                        <div><i className="fas fa-circle"></i></div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label for="form__feature">Мурчистость:</label>
                                </div>
                                <div className="form__column">
                                    <div><i className="fas fa-circle"></i></div>
                                    <div><i className="fas fa-circle"></i></div>
                                    <div><i className="fas fa-circle"></i></div>
                                    <div><i className="fas fa-circle"></i></div>
                                    <div><i className="fas fa-circle"></i></div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label for="form__feature">Игривость:</label>
                                </div>
                                <div className="form__column">
                                    <div><i className="fas fa-circle"></i></div>
                                    <div><i className="fas fa-circle"></i></div>
                                    <div><i className="fas fa-circle"></i></div>
                                    <div><i className="fas fa-circle"></i></div>
                                    <div><i className="fas fa-circle"></i></div>
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label for="form__photo">Фото:</label>
                                </div>
                                <div className="form__column">
                                    <input type="file" id="form__photo" />
                                </div>
                            </div>
                            <div className="form__row">
                                <div className="form__column">
                                    <label for="form__description">Опишите себя:</label>
                                </div>
                                <div className="form__column">
                                    <textarea id="form__description" cols="30" rows="5"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Aux>
    )
}

export default NewPet;