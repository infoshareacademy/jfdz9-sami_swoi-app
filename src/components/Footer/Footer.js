import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        width: 500,
    },
};

class Footer extends React.Component {
    state = {
        value: 'recents',
    };

    handleChange = (event, value) => {
        this.setState({value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div style={{}}>
                <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
                    <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon/>}/>
                    <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon/>}/>
                    <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon/>}/>
                    <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>}/>
                </BottomNavigation>
                <Typography variant="body2" color="inherit" style={{width: 500, margin: 10, textAlign: 'center', background: 'lightgrey'}}>
                    Copyright by SamiSwoi &#9400;
                </Typography>
            </div>
        );
    }
}

Footer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Footer);