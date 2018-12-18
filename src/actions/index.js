import firebase from 'firebase';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCES } from './types';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
});

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});

export const loginUser = ({ email, password }) => dispatch => {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            console.log(user);
            dispatch({
                type: LOGIN_USER_SUCCES,
                payload: user
            });
        });
};
