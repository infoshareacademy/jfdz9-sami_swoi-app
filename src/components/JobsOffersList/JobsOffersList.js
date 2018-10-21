import React, {Component, Fragment} from 'react';
import './JobOffersList.css'
import {withStyles} from '@material-ui/core/styles';
import SearchForm from '../SearchForm/SearchForm';

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
        fetch('/Data/job_offers.json')
            .then(res => res.json())
            .then(job_offers => {
                this.setState({jobsOffers: job_offers, filteredJobOffers: job_offers})
            })
    };

    handleData = (data) => {
        this.setState({fromChild: data});
    }

    filter = filters => {
        console.log(filters);

        this.setState({
            filteredJobOffers: this
                .state
                .jobsOffers
                .filter(el => { 
                   if(el.title.toLowerCase().includes(filters.title.toLowerCase()) && 
                      el.company.locations.map(i => i.name).toString().includes(filters.location) &&
                      el.requirements.minExp >= filters.minExperience &&
                      el.requirements.skills.toString().includes(filters.skills)) return el;
                }).filter(el => {
                    if(filters.languages.length > 0) {
                        return el.requirements.languages.some(lang => filters.languages.includes(lang))
                    } else {
                        return true;
                    }
                })
        })
    };

    render() {
        return (
            <Fragment>
                <SearchForm onSubmit={this.filter}/>
                <div>
                    {this
                        .state
                        .filteredJobOffers
                        .map(el => (
                            <Fragment>
                                <h2>{el.title}</h2>
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
                </div>

            </Fragment>
        )
    }
}

export default withStyles(styles, {withTheme: true})(JobsOffersList);