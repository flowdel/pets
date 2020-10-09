import React, { useState, useEffect, useCallback } from 'react';
import Aux from '../../hoc/Aux/Aux';
import PetPreview from './PetPreview/PetPreview';
import { useLocation } from 'react-router-dom';

const Pets = (props) => {
    const [catInfo, setCatInfo] = useState([
        {
           name: 'Мурка',
           age: 5,
           fluffiness: 3,
           purr: 2,
           playfulness: 5,
           imageUrl: require('../../images/cat.png')
        },
        {
            name: 'Васька',
            age: 7,
            fluffiness: 4,
            purr: 5,
            playfulness: 4,
            imageUrl: require('../../images/cat1.png')
        },
        {
            name: 'Юся',
            age: 3,
            fluffiness: 5,
            purr: 5,
            playfulness: 4,
            imageUrl: require('../../images/cat2.png')
        },
        {
            name: 'Фунф',
            age: 9,
            fluffiness: 5,
            purr: 5,
            playfulness: 3,
            imageUrl: require('../../images/cat3.png')
        },
        {
            name: 'Тапик',
            age: 6,
            fluffiness: 2,
            purr: 5,
            playfulness: 3,
            imageUrl: require('../../images/cat4.png')
        },
        {
            name: 'Колба',
            age: 4,
            fluffiness: 2,
            purr: 3,
            playfulness: 3,
            imageUrl: require('../../images/cat5.png')
        }
    ]);

    const [dogInfo, setDogInfo] = useState([
        {
           name: 'Дружок',
           age: 5,
           fluffiness: 3,
           purr: 2,
           playfulness: 5,
           imageUrl: require('../../images/dog.png')
        },
        {
            name: 'Шарик',
            age: 7,
            fluffiness: 4,
            purr: 5,
            playfulness: 4,
            imageUrl: require('../../images/dog1.png')
        },
        {
            name: 'Милли',
            age: 3,
            fluffiness: 5,
            purr: 5,
            playfulness: 4,
            imageUrl: require('../../images/dog2.png')
        },
        {
            name: 'Карри',
            age: 3,
            fluffiness: 5,
            purr: 5,
            playfulness: 4,
            imageUrl: require('../../images/dog3.png')
        },
        {
            name: 'Туттик',
            age: 3,
            fluffiness: 5,
            purr: 5,
            playfulness: 4,
            imageUrl: require('../../images/dog4.png')
        }
    ]);

    let petInfo;
    const location = useLocation();
    if (location.pathname === '/cats') {
        petInfo = catInfo;
    } else if (location.pathname === '/dogs') {
        petInfo = dogInfo;
    } else {
        return null;
    }
    return (
        <Aux>
            <div className="spacer"></div>
            <div className="container">
                <div className="pet-preview__container">
                    {
                        petInfo.map(pet => {
                            return <PetPreview 
                            key={pet.name}
                            name={pet.name}
                            age={pet.age}
                            fluffiness={pet.fluffiness}
                            purr={pet.purr}
                            playfulness={pet.playfulness}
                            imageUrl={pet.imageUrl}
                            class={"pet-preview_type_small"}
                            ></PetPreview>;
                        })
                    }
                </div>
            </div>
        </Aux>
    );
};

export default Pets;


