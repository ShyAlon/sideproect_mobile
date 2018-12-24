import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import TicketList from './components/TicketList';

const RouterComponenet = () => (

    <Router>
        <Scene key="root" hideNavBar>
            <Scene key="auth">
                <Scene key="login" component={LoginForm} title="Please Login" initial />
            </Scene>
            <Scene key="main">
                <Scene
                    key="tickets" component={TicketList}
                    title="What's up?"
                    rightTitle="🚶"
                    onRight={() => console.log('batata')}
                />
            </Scene>
        </Scene>
    </Router>
);

export default RouterComponenet;
