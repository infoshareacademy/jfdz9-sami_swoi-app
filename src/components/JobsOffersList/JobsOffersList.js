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
    };

    componentDidMount() {
        fetch('/Data/job_offers.json').then(res => res.json()).then(job_offers => {
                this.setState({jobsOffers: job_offers, filteredJobOffers: job_offers})
            })
    };

    handleData = (data) => {
        this.setState({
            fromChild: data
        });
    }

    filter = filters => {
        console.log(filters);

        this.setState({
            filteredJobOffers: this.state.jobsOffers.filter(el => {
                for(let i = 0; i > Object.keys().length; i++) {
                    if(el.title == filters.[e.target.name]) {
                        return el;
                    }
                }
                
            })
        })
    };

    render() {
        return (
            <Fragment>
                <SearchForm onSubmit={this.filter}/> 
                {this
                    .state
                    .filteredJobOffers
                    .map(el => (
                        <Fragment>
                            <p>{el.title}</p>
                            <p>{el.description}</p>
                            <p>{el.createdAt}</p>
                            <p>{el.expirationDate}</p>
                            <p>{el.salaryMin}</p>
                            <p>{el.salaryMax}</p>
                            <p>{el.company.name}</p>
                            <p>{el.company.locations[0].name}</p>
                            <p>Oczekujemy:</p>
                            <p>Doswiadczenie min: {el.requirements.minExp}</p>
                            <p>Umiejetnosci: {el.requirements.skills}</p>
                            <p>Jezyki: {el.requirements.languages}</p>
                            <br/>

                        </Fragment>
                    ))
}
            </Fragment>
        )
    }
}

export default withStyles(styles, {withTheme: true})(JobsOffersList);