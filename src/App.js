import React, { Component } from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/Home';
import DashBoard from './components/DashBoard/DashBoard'
import Footer from './components/Footer/Footer'
// import JobsOffersList from './JobsOffersList'
// import LogIn from './LogIn'
import Navigation from './components/Navigation/Navigation'
// import Register from './Register'
// import SearchForm from './SearchForm'
// import SideBar from './SideBar'
// import UserPanel from './UserPanel'


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation/>
          <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/dashboard" component={DashBoard}/>
              <Route path="/footer" component={Footer}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;