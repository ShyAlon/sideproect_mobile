import React, { Component } from 'react';
import LoginForm from './components/LoginForm';

import firebase from '@firebase/app';


class App extends Component {

    componentWillMount() {
        firebase.initializeApp( {
            apiKey: 'AIzaSyA_0OOJUwc47UrGamDkhzdYKNemL5j0WQ8',
            authDomain: 'sideproject-client.firebaseapp.com',
            databaseURL: 'https://sideproject-client.firebaseio.com',
            projectId: 'sideproject-client',
            storageBucket: 'sideproject-client.appspot.com',
            messagingSenderId: '1086836341434'
        });
    }

    render() {
        return (
            <LoginForm></LoginForm>
        )
    }
}
export default App;