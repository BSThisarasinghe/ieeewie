import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './screens/home.screen';
import SignIn from './screens/sign-in.screen';
import Dashboard from './screens/dashboard.screen';
import { Header } from './components';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <main class="page-content">
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/signIn" render={(props) => <SignIn {...props} />} />
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
          </main>
          {/* <Route exact path="/checkoutpricessingle" component={CheckoutPricesSingle} />
            <Route exact path="/terms" component={TermsAndConditions} />
            <Route exact path="/privacy" component={PrivacyPolicy} />
            <Route exact path="/checkoutpricesenterprise" component={CheckoutPricesEnterprise} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/provision" render={(props) => <Provision {...props} auth={this.state.auth} keycloak={this.state.keycloak} onSetAuth={this.setAuth} />} /> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
