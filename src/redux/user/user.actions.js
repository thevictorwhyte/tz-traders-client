import { userTypes } from './user.types';
import axios from 'axios';

export const setCurrentUserStart = () => ({
    type: userTypes.SET_CURRENT_USER_START
});

export const setCurrentUserSuccess = (user) => ({
  type: userTypes.SET_CURRENT_USER_SUCCESS,
  payload: user
});

export const setCurrentUserFailure = () => ({
  type: userTypes.SET_CURRENT_USER_FAILURE
});

export const  logOutCurrentUser = () => ({
    type: userTypes.LOG_OUT_USER
})

export const loginUserFailure = () => ({
    type: userTypes.LOG_IN_USER_FAILURE
});

export const setCurrentUserStartAsync = (userData, history) => {

    return dispatch => {
        dispatch(setCurrentUserStart());

        axios.post(`${process.env.REACT_APP_API_URL}/v1/auth/register`, userData)
            .then(result => {
                dispatch(setCurrentUserSuccess(result.data.user))
                history.push('dashboard')
            })
            .catch(err => {
                console.log(err)
                dispatch(setCurrentUserFailure())
            })
    }
}

export const loginUser = (userData, history) => {

    return dispatch => {
        dispatch(setCurrentUserStart())

        axios.post(`${process.env.REACT_APP_API_URL}/v1/auth/login`, userData)
            .then(result => {
                dispatch(setCurrentUserSuccess(result.data.user))
                history.push('dashboard')
            })
            .catch(err => {
                dispatch(loginUserFailure())
                if(process.env.NODE_ENV === 'development') {
                    console.log(err)
                }
            })
    }
}

export const logoutUser = (history) => {

    return dispatch => {
        history.push('home')
        dispatch(logOutCurrentUser())
        
    }
}