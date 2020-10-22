import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const signin = (formData) => {
    return dispatch => {;
        console.log(formData);
        axios.post('auth/local', {
            identifier: formData.email,
            password: formData.password,
        })
            .then(response => {
                console.log(response.data);
                localStorage.setItem('idToken', response.data.jwt);
                localStorage.setItem('userId', response.data.user.id);
                dispatch(saveAuthData({
                    idToken: response.data.jwt,
                    userId: response.data.user.id
                }));
            })
            .catch(error => {
                console.log(error);
                dispatch(handleAuthError(error))
            });
    };
};

export const saveAuthData = (authData) => {
    // console.log(authData);
    return {
        type: actionTypes.SAVE_AUTH_DATA,
        authData
    };
};

export const handleAuthError = (error) => {
    return {
        type: actionTypes.HANDLE_AUTH_ERROR,
        error
    };
};

export const authCheckState = () => {
    return dispatch => {
        const idToken = localStorage.getItem('idToken');
        if (!idToken) {
            return;
        } else {
            const userId = localStorage.getItem('userId');
            dispatch(saveAuthData({idToken, userId}));
        }
    };
};

export const logout = () => {
    localStorage.removeItem('idToken');
    localStorage.removeItem('userId');
    return {
        type: actionTypes.LOGOUT
    };
};

