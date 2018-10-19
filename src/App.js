import React, {Component} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import DashBoard from './components/DashBoard/DashBoard'
import Navigation from './components/Navigation/Navigation'
import LogIn from './components/LogIn/LogIn'
import Register from './components/Register/RegisterPage'
import SearchForm from './components/SearchForm/SearchForm'
import SideBar from './components/SideBar/SideBar'
import Grid from "@material-ui/core/Grid/Grid";

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
                            <Route path="/dashboard" component={DashBoard}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={LogIn}/>
                            <Route path="/searchform" component={SearchForm}/>
                        </Switch>
                    </Grid>
                    <Grid item xs={9}>
                        <DashBoard/>
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