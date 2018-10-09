import React, { Component, Fragment } from 'react';
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
import Register from './components/AddOffert/AddOffertForm'
// import SearchForm from './SearchForm'
import SideBar from './components/SideBar/SideBar'
import AddOffertButton from "./components/AddOffert/AddOffertCore";
// import UserPanel from './UserPanel'


class App extends Component {
  render() {
    return (
        <Fragment>
            <Router>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/dashboard" component={DashBoard}/>
                        <Route path="/sidebar" component={SideBar}/>
                        <Route path="/footer" component={Footer}/>
                        <Route path="/login" component={LogIn}/>
                        <Route path="/register" component={Register}/>
                    </Switch>
                </div>
            </Router>
            <AddOffertButton/>
        </Fragment>



    );
  }
}

export default App;