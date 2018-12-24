// eslint-disable-next-line import/no-extraneous-dependencies
import Firebase from 'firebase';

const env = require('../../env.json');

export function initialize() {
    Firebase.initializeApp({
        apiKey: env.REACT_APP_GOOGLE_API_KEY,
        authDomain: 'sideproject-client.firebaseapp.com',
        databaseURL: 'https://sideproject-client.firebaseio.com',
        projectId: 'sideproject-client',
        storageBucket: 'sideproject-client.appspot.com',
        messagingSenderId: '1086836341434'
    });
    console.log('Auth', firebase.auth);
}

export const firebase = Firebase;
