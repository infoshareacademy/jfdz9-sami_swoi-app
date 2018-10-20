import React from 'react';
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';

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
    const {classes} = props;
    const logo = 'http://i64.tinypic.com/kd07q1.png';

    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Link to="/"><img src={logo} width="250" height="60" /></Link>
                    <Typography variant="title" color="inherit" className={classes.grow}>
                    </Typography>
                    <Button component={Link} to="/list" color="inherit">
                        Lupa
                    </Button>
                    <Button component={Link} to="/register" color="inherit">
                        Zarejestruj się
                    </Button>
                    <Button component={Link} to="/login" color="inherit">
                        Zaloguj się
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

ButtonAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(ButtonAppBar);