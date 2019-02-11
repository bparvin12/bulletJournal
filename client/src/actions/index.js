import axios from 'axios';
import { AUTH_SIGN_UP, AUTH_ERROR, AUTH_SIGN_OUT, AUTH_SIGN_IN } from './types';


export const signUp = data => {
    return async dispatch => {
        try {
            // send data to back end (axios)
            const res = await axios.post('http://localhost:3001/users/signup', data)
            console.log('res: ', res);

            // get JWToken // show user signed in w/ token
            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.token
            });

            // store JWToken to local storage
            localStorage.setItem('JWT-TOKEN', res.data.token);
        } catch(err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email address already registered'
            })
            // console.error('err: ', err)
        }
    };
}

export const signIn = data => {
    return async dispatch => {
        try {
            // send data to back end (axios)
            const res = await axios.post('http://localhost:3001/users/signin', data)
            console.log('res: ', res);

            // get JWToken // show user signed in w/ token
            dispatch({
                type: AUTH_SIGN_IN,
                payload: res.data.token
            });

            // store JWToken to local storage
            localStorage.setItem('JWT-TOKEN', res.data.token);
        } catch(err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email address not yet registered'
            })
            // console.error('err: ', err)
        }
    };
}

export const signOut = () => {
    return dispatch => {
        localStorage.removeItem('JWT_TOKEN');
        
        dispatch({
            type: AUTH_SIGN_OUT,
            payload: ''
        })
    };
}