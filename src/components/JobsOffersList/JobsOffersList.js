import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import SearchForm from '../SearchForm/SearchForm';
import moment from "moment/moment";

const styles = theme => ({

    chips: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip: {
        margin: theme.spacing.unit / 4
    }
});

class JobsOffersList extends Component {

    state = {
        jobsOffers: [],
        filteredJobOffers: []
    }

    componentDidMount() {
        fetch('/Data/job_offers.json')
            .then(response => response.json())
            .then(job_offers => {
                this.setState({
                    jobsOffers: job_offers,
                    filteredJobOffers: job_offers
                })

            })
    }

    filter = filters => {
        console.log(filters)
        this.setState({
            filteredJobOffers: this.state.jobsOffers.filter(el => true)
        })
};

    render() {
        const {classes, theme} = this.props;
        return (
            <Fragment>
                <SearchForm onSubmit={this.filter}/>
                // tutaj lista
                {
                    this.state.filteredJobOffers.map(el => <p>{el.title}</p>)
                }
            </Fragment>
        )
    }
}

export default withStyles(styles, {withTheme: true})(JobsOffersList);