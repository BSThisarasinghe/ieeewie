import React from 'react';
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './screens/home.screen';
import SignIn from './screens/sign-in.screen';
import Dashboard from './screens/dashboard.screen';
import WieChapters from './screens/wie-chapters.screen';
import Commitee from './screens/executive-commitee.screen';
import AboutUs from './screens/about-us.screen';
import Conference from './screens/conference.screen';
import Events from './screens/events.screen';
import ConfCommittee from './screens/conference-committee.screen';
import { Header, Footer } from './components';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Header />
        <Switch>
          <main class="page-content" style={{ paddingBottom: 100 }}>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route exact path="/signIn" render={(props) => <SignIn {...props} />} />
            <Route exact path="/wieChapters" render={(props) => <WieChapters {...props} />} />
            <Route exact path="/dashboard" render={(props) => <Dashboard {...props} />} />
            <Route exact path="/commitee" render={(props) => <Commitee {...props} />} />
            <Route exact path="/aboutus" render={(props) => <AboutUs {...props} />} />
            <Route exact path="/conference" render={(props) => <Conference {...props} />} />
            <Route exact path="/events" render={(props) => <Events {...props} />} />
            <Route exact path="/conferencecommittee" render={(props) => <ConfCommittee {...props} />} />
          </main>
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
}

export default App;
