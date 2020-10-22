import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const fetchPets = (petType) => {
    let typeFilter;
    if (petType === '/cats') {
        typeFilter = '?type=cat';
    } else if (petType === '/dogs') {
        typeFilter = '?type=dog'
    }
    return dispatch => {
        axios.get(`/pets${typeFilter}`)
            .then(response => {
                console.log(response);
                dispatch(setPets(response.data));
            })
    }
}

export const setPets = (pets) => {
    return {
        type: actionTypes.SET_PETS,
        pets
    };
}

export const addPetToList = (petData) => {
    return {
        type: actionTypes.ADD_PET,
        petData
    };
};

export const addPet = (petData, idToken) => {
    console.log(idToken);
    return dispatch => {
        dispatch(savePetPicture(petData, idToken))
    }
}

export const savePetPicture = (petData, idToken) => {
    console.log(petData.image);
    return dispatch => {
        axios.post('/upload', petData.image, {
        headers: {
            Authorization: `Bearer ${idToken}`,
            'Content-Type': 'multipart/form-data',
        },
    })
            .then(response => {
                console.log(response);
                const pictures = response.data;
                const pictureIds = [];
                for (const picture of pictures) {
                    pictureIds.push(picture.id);
                }
                petData.image = pictureIds;
                dispatch(savePet(petData, idToken));
            })
    }
}

export const savePet = (petData, idToken) => {
    return dispatch => {
        dispatch(addPetToList);
        console.log(petData.image);
        axios.post('/pets', petData, {
            headers: {
                Authorization: `Bearer ${idToken}`,
            },
        })
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    };
};

export const getPetData = (petId) => {
    return dispatch => {
        axios.get(`/pets/${petId}`)
            .then(response => {
                console.log(response.data, 'from get pet data');
                dispatch(setPetData(response.data));
            })
    }
}

export const setPetData = (petData) => {
    return {
        type: actionTypes.SET_PET_DATA,
        petData
    };
}

export const sendApplication = (applicationData) => {
    console.log(applicationData);
    return dispatch => {
        axios.post('/applications', applicationData)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error)
            });
    }
}