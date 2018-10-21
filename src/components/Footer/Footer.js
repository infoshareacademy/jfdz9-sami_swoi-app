import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = {
    root: {
        width: 800,
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
            <div style={{margin: '0 auto', bottom: 0}}>
                <Typography variant="subheading" color="primary" style={{width: 1500, margin: 10, textAlign: 'center', background: 'lightgrey'}}>
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