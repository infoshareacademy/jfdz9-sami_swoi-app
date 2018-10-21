import React, { Component, Fragment } from 'react';
import './JobOffersList.css';
import { withStyles } from '@material-ui/core/styles';
import SearchForm from '../SearchForm/SearchForm';
import * as firebase from 'firebase';
import { locationIdData } from '../AddOffert/AddOffertForm';

const styles = (theme) => ({
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

	processData = (snapshot) => {
		const data = snapshot.val();
		const job_offers = Object.entries(data || {}).map(([ id, value ]) => ({
			id,
			...value
		}));
		console.log(job_offers);

		this.setState({ jobsOffers: job_offers, filteredJobOffers: job_offers });
	};

	componentDidMount() {
		firebase.database().ref('/').on('value', this.processData);
	}

	componentWillUnmount() {
		firebase.database().ref('/').off('value', this.processData);
	}

	// componentDidMount() {     fetch('/Data/job_offers.json')         .then(res =>
	// res.json())         .then(job_offers => {
	// this.setState({jobsOffers: job_offers, filteredJobOffers: job_offers})
	//  }) };

	handleData = (data) => {
		this.setState({ fromChild: data });
	};

	filter = (filters) => {
		console.log(filters);

		this.setState({
			filteredJobOffers: this.state.jobsOffers
				.filter((el) => {
					if (
						el.title.toLowerCase().includes(filters.title.toLowerCase()) &&
						(filters.location.trim() !== ''
							? el.locationId === locationIdData.find((el) => el.name.includes(filters.location)).id
							: true) &&
						el.requirements.minExp >= filters.minExperience &&
						el.requirements.skills.toString().includes(filters.skills)
					)
						return el;
				})
				.filter((el) => {
					if (filters.languages.length > 0) {
						return filters.languages.every((lang) => el.requirements.languages.includes(lang));
					} else {
						return true;
					}
				})
		});
	};

	render() {
		return (
			<Fragment>
				<SearchForm onSubmit={this.filter} />
				<div className="container">
					{this.state.filteredJobOffers.map((el) => (
						<div>
							<h2>{el.title}</h2>
							<ul>
								<li>Data dodania: {el.createdAt}</li>
								<li>Wygasa: {el.expirationDate}</li>
								<li>Wynagrodzenie od: {el.salaryMin}</li>
								<li>Lokalizacja: {locationIdData.find((i) => i.id === el.locationId).name}</li>
								<li>Doswiadczenie minimalne (w latach): {el.requirements.minExp}</li>
								<li>Umiejetnosci: {el.requirements.skills + ' '}</li>
								<li>Jezyki: {el.requirements.languages + ' '}</li>
							</ul>
							<br />
						</div>
					))}
				</div>
			</Fragment>
		);
	}
}

export default withStyles(styles, { withTheme: true })(JobsOffersList);
