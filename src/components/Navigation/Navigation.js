import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
};

function ButtonAppBar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.grow}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};



const Navigation = () => {
    return(
        <div>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/dashboard">DASHBOARD</NavLink>
            <NavLink to="/footer">FOOTER</NavLink>
            <NavLink to="/sidebar">_SIDEBAR_</NavLink>
            <NavLink to="/login">____LOGIN</NavLink>
        </div>
    )
};

export default Navigation;