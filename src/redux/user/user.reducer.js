import { userTypes } from './user.types';

const initialState = {
    currentUser: {
        accountBalance: 0,
        accountCurrency: "",
        accountType: "",
        country: "",
        email: "",
        firstName: "",
        id: "",
        investments: [],
        isEmailVerified: false,
        lastName: "",
        role: "",
        zipCode: ""
    },
    userLoggedIn: false,
    isLoading: false,
    hasError: false,
    hasLoginError: false
};

const userReducer =  (state=initialState, action) => {
    switch(action.type) {
        case  userTypes.SET_CURRENT_USER_START:
            return {
                ...state,
                isLoading: true,
                hasError: false,
                userLoggedIn: false
            }
        case userTypes.SET_CURRENT_USER_SUCCESS:
            return {
                ...state,
                currentUser: action.payload,
                userLoggedIn: true,
                isLoading: false,
                hasError: false
            }
        case userTypes.SET_CURRENT_USER_FAILURE:
            return {
                ...state,
                userLoggedIn: false,
                isLoading: false,
                hasError: true
            }
        case userTypes.LOG_IN_USER_FAILURE:
            return {
                ...state,
                userLoggedIn: false,
                isLoading: false,
                hasLoginError: true
            }
        case userTypes.LOG_OUT_USER:
            return {
                ...state,
                currentUser: initialState.currentUser,
                userLoggedIn: false,
                isLoading: false,
                hasError: false,
                hasLoginError: false
            }
        default:
            return state;
    }
}

export default userReducer;