const initialState = {
    idToken: null,
    userId: null,
    error: null
};

const saveAuthData = (state, action) => {
    return {
        ...state,
        idToken: action.authData.idToken,
        userId: action.authData.userId
    }
};

const handleAuthError = (state, action) => {
    return {
        ...state,
        error: action.error
    }
}

const logout = (state, action) => {
    return {
        ...state,
        idToken: null,
        userId: null
    };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_AUTH_DATA': 
            return saveAuthData(state, action);
        case 'HANDLE_AUTH_ERROR': 
            return handleAuthError(state, action);
        case 'LOGOUT': 
            return logout(state, action);
        default: 
            return state;
    }
};

export default reducer;
