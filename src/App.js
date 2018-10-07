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
// import JobsOffersList from './components/JobsOffersList/JobsOffersList'
import LogIn from './components/LogIn/LogIn'
import Navigation from './components/Navigation/Navigation'
// import Register from './Register'
// import SearchForm from './SearchForm'
import SideBar from './components/SideBar/SideBar'
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
              <Route path="/sidebar" component={SideBar}/>
              <Route path="/footer" component={Footer}/>
              <Route path="/login" component={LogIn}/>
          </Switch>
            <SideBar/>
        </div>
      </Router>
    );
  }
}

export default App;