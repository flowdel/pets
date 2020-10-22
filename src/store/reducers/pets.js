// import * as actionTypes from '../actions/actionTypes';
// import { updateObject } from '../../shared/utility';

const initialState = {
    pets: [], 
    pet: {}
};

const setPets = (state, action) => {
    return {
        ...state,
        pets: action.pets
    }
};

const addPet = (state, action) => {
    const updatedPets = [...state.pets, action.petData];
    console.log(updatedPets, 'from Reducer');
    return {
        ...state,
        pets: updatedPets
    };
};

const setPetData = (state, action) => {
    return {
        ...state,
        pet: action.petData
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PETS': 
            return setPets(state, action);
        case 'ADD_PET': 
            return addPet(state, action);
        case 'SET_PET_DATA': 
            return setPetData(state, action);
        default: 
            return state;
    }
};

export default reducer;