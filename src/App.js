import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './screens/home.screen';
import SignIn from './screens/sign-in.screen';
import Dashboard from './screens/dashboard.screen';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/dashboard" component={Dashboard} />
            {/* <Route exact path="/checkoutpricessingle" component={CheckoutPricesSingle} />
            <Route exact path="/terms" component={TermsAndConditions} />
            <Route exact path="/privacy" component={PrivacyPolicy} />
            <Route exact path="/checkoutpricesenterprise" component={CheckoutPricesEnterprise} />
            <Route exact path="/contactus" component={ContactUs} />
            <Route exact path="/provision" render={(props) => <Provision {...props} auth={this.state.auth} keycloak={this.state.keycloak} onSetAuth={this.setAuth} />} /> */}
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
