import React, {Component} from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './components/Home';
import DashBoard from './components/DashBoard/DashBoard'
// import JobsOffersList from './components/JobsOffersList/JobsOffersList'
import LogIn from './components/LogIn/LogIn'
import Navigation from './components/Navigation/Navigation'
import Register from './components/Register/Register'
// import SearchForm from './SearchForm'
import SideBar from './components/SideBar/SideBar'
import Grid from "@material-ui/core/Grid/Grid";

// import UserPanel from './UserPanel'


class App extends Component {
    render() {
        return (
            <Router>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Navigation/>
                    </Grid>
                    <Grid item xs={9}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/dashboard" component={DashBoard}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={LogIn}/>
                        </Switch>
                    </Grid>
                    <Grid item xs={3}>
                        <SideBar/>
                    </Grid>
                </Grid>
            </Router>
        );
    }
}

export default App;