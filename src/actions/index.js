import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILED, LOGIN_STARTED } 
    from './types';

export const emailChanged = (text) => ({
    type: EMAIL_CHANGED,
    payload: text
});

export const passwordChanged = (text) => ({
    type: PASSWORD_CHANGED,
    payload: text
});

function userLoginSuccess(payload, dispatch, success) {
    dispatch({
        type: success ? LOGIN_USER_SUCCESS : LOGIN_USER_FAILED,
        payload
    });

    Actions.main();
}

export const loginUser = ({ email, password }) => dispatch => {
    dispatch({
        type: LOGIN_STARTED,
        payload: email
    });
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(user => {
            userLoginSuccess(user, dispatch, true);
        })
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(user => userLoginSuccess(user, dispatch, true))
                .catch((error) => userLoginSuccess(error, dispatch, false));
        });
};
