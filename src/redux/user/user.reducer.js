import { userTypes } from './user.types';

const initialState = {
    currentUser: null,
    userLoggedIn: false
};

const userReducer =  (state=initialState, action) => {
    switch(action.type) {
        case userTypes.SET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userLoggedIn: true
            }
        case userTypes.LOG_OUT_USER:
            return {
                ...state,
                currentUser: null,
                userLoggedIn: false
            }
        default:
            return state;
    }
}

export default userReducer;