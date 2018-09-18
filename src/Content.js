import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'



const Content = () => (
    <Switch>
        <Route exact path="/"/>
        <Route path="dashboard" component="{DashBoard}"/>
    </Switch>
);

export default Content;
