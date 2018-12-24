/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Router from './Router';
import reducers from './reducers';
import { initialize } from './services/firebase';


class App extends Component {
    componentWillMount() {
        initialize();
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <Router />
            </Provider>
        );
    }
}
export default App;
