import React, {Component} from 'react';
import DashBoard from '../DashBoard/DashBoard'
import SideBar from '../SideBar/SideBar'
import Grid from "@material-ui/core/Grid/Grid";
import AddOffertCore from "../AddOffert/AddOffertCore";
import SingleOffer from "../SingleOffer/SingleOffer";

import withStyles from '@material-ui/core/styles/withStyles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

const theme = createMuiTheme({
    palette: {
        primary: blue,

    },
});


class Home extends Component {
    render() {
        return (


            <Grid container spacing={25}>
                <Grid item xs={9}>
                    <DashBoard/>
                    <SingleOffer/>
                </Grid>
                <Grid item xs={3}>
                    <SideBar/>
                    <AddOffertCore/>
                </Grid>
            </Grid>
        );
    }
}

export default Home;
