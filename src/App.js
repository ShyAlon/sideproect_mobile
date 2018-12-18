/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import firebase from '@firebase/app';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import LoginForm from './components/LoginForm';
import reducers from './reducers';

const env = require('../env.json');

class App extends Component {
    componentWillMount() {
        console.log('env', env);
        firebase.initializeApp({
            apiKey: env.REACT_APP_GOOGLE_API_KEY,
            authDomain: 'sideproject-client.firebaseapp.com',
            databaseURL: 'https://sideproject-client.firebaseio.com',
            projectId: 'sideproject-client',
            storageBucket: 'sideproject-client.appspot.com',
            messagingSenderId: '1086836341434'
        });
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <LoginForm />
            </Provider>
        );
    }
}
export default App;
