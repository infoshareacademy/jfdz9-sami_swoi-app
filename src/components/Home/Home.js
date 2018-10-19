import React, {Component} from 'react';
import DashBoard from '../DashBoard/DashBoard'
import SideBar from '../SideBar/SideBar'
import Grid from "@material-ui/core/Grid/Grid";

class Home extends Component {
    render() {
        return (

                <Grid container spacing={24}>

                    <Grid item xs={9}>

                    </Grid>
                    <Grid item xs={9}>
                        <DashBoard/>
                    </Grid>
                    <Grid item xs={3}>
                        <SideBar/>
                    </Grid>
                </Grid>

        );
    }
}

export default Home;