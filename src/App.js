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
import Register from './components/Register/Register'
import SearchForm from './components/SearchForm/SearchForm'
import Home from './components/Home/Home'
import Grid from "@material-ui/core/Grid/Grid";
import JobsOffersList from "./components/JobsOffersList/JobsOffersList";
import Footer from './components/Footer/Footer'
import {createMuiTheme} from '@material-ui/core/styles';
import PrivateRoute from './PrivateRoute';
import { app } from './components/common/firebase';
import CircularProgress from "@material-ui/core/CircularProgress/CircularProgress";


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0b5994',
        },
        secondary: {
            main: '#1d83c6',
        },
        white: {
            main: '#ffffff',
        }
    },
});


class App extends Component {
    state = {
        loading: true,
        authenticated: false,
        user: null };

    componentWillMount() {
        app.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({
                    authenticated: true,
                    currentUser: user,
                    loading: false
                });
            } else {
                this.setState({
                    authenticated: false,
                    currentUser: null,
                    loading: false
                });
            }
        });
    }



    render() {
        const { authenticated, loading } = this.state;

        if (loading) {
            return <CircularProgress color="secondary" style={{width: 'auto', height: 'auto', display: 'block', position: 'relative'}} />
        }

        return (
            <Router>
                <div>
                    <PrivateRoute
                        exact
                        path="./components/Home/Home"
                        component={Home}
                        authenticated={authenticated}
                    />
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Navigation/>
                    </Grid>
                    <Grid item xs={12}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/dashboard" component={DashBoard}/>
                            <Route path="/register" component={Register}/>
                            <Route path="/login" component={LogIn}/>
                            <Route path="/list" component={JobsOffersList}/>
                        </Switch>
                    </Grid>
                    <Footer/>
                </Grid>
                </div>
            </Router>
        );
    }

}

export default App;