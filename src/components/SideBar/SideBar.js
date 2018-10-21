import React, {Component, Fragment} from "react";
import moment from "moment";

import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Modal from "@material-ui/core/Modal/Modal";
import SingleOffer from "../SingleOffer/SingleOffer";
import {withStyles} from "@material-ui/core";

function getModalStyle() {
    const top = 40;
    const left = 50;

    return {
        top: `${top}%`,
        left: `calc(${left}% )`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        width: theme.spacing.unit * 50,
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 2,
    },
});

class Sidebar extends Component {

    state = {
        filteredJobOffers: [],
        selectedJobOffer: null
    };

    componentDidMount() {
        fetch('/Data/job_offers.json')
            .then(response => response.json())
            .then(job_offers => {

                job_offers.sort((offer1, offer2) => {
                    const momentCond1 = moment(offer1.createdAt);
                    const momentCond2 = moment(offer2.createdAt);
                    if (momentCond1.isAfter(momentCond2)) {
                        return -1;
                    }
                    if (momentCond1.isBefore(momentCond2)) {
                        return 1;
                    }
                    return 0;
                });

                this.setState({
                    filteredJobOffers: job_offers.slice(0, 5)
                })

            })
    }


    render() {

        return (
            <div className='ui basic segment'>
                <h3 className='ui header'>Najnowsze Oferty!</h3>
                {
                    this.state.filteredJobOffers.map(offer => {
                        return (
                            <Fragment>
                                <Card key={offer.id}>
                                    <CardContent>
                                        <Typography component="h2" variant="headline">
                                            {offer.title}
                                        </Typography>
                                        <Typography component="p">
                                            {offer.createdAt}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button onClick={() => this.setState({selectedJobOffer: offer})} size="small" color="primary">
                                            Więcej
                                        </Button>
                                        <Button onClick size="small" color="primary">
                                            Zgłoś
                                        </Button>
                                    </CardActions>
                                </Card>

                                <Modal
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                    open={!!this.state.selectedJobOffer}
                                    onClose={() => this.setState({selectedJobOffer: null})}
                                >
                                    {this.displayOfferModal()}

                                </Modal>
                            </Fragment>

                        )
                    })
                }

            </div>

        )
    }

    displayOfferModal() {
        const {classes} = this.props;

        return (
            <div style={getModalStyle()} className={classes.paper}>
                <Typography variant="title" id="modal-title">
                    Wybrałeś:
                </Typography>
                <SingleOffer offer={this.state.selectedJobOffer}/>
            </div>);
    }
}

export default withStyles(styles)(Sidebar);



