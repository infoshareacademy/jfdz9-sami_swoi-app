import React, {Component} from 'react';
import DashBoard from '../DashBoard/DashBoard'
import SideBar from '../SideBar/SideBar'
import Grid from "@material-ui/core/Grid/Grid";
import AddOffertCore from "../AddOffert/AddOffertCore";



class Home extends Component {
    render() {
        return (


            <Grid container spacing={25}>
                <Grid item xs={9}>
                    <DashBoard/>
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
