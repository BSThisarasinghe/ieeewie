import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './screens/home.screen';
import SignIn from './screens/sign-in.screen';
import Dashboard from './screens/dashboard.screen';
import { Header } from './components';

function RouterComponent() {
    return (
        <React.Fragment>
            <Header />
            <main class="page-content">
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route exact path="/signIn" render={(props) => <SignIn {...props} />} />
                <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
            </main>
        </React.Fragment>
    );
}

export default RouterComponent;
