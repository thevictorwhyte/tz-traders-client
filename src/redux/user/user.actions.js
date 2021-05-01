import { userTypes } from './user.types';
import axios from 'axios';
import { useHistory } from 'react-router';

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

export const setCurrentUserStartAsync = (userData, history) => {

    return dispatch => {
        dispatch(setCurrentUserStart());
        console.log(process.env)

        axios.post('http://localhost:3000/v1/auth/register', userData)
            .then(result => {
                console.log(result)
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

        axios.post('http://localhost:3000/v1/auth/login', userData)
            .then(result => {
                dispatch(setCurrentUserSuccess(result.data.user))
                history.push('dashboard')
            })
            .catch(err => {
                dispatch(setCurrentUserFailure())
                if(process.env.NODE_ENV === 'development') {
                    console.log(err)
                }
            })
    }
}