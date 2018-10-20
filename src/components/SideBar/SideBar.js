import React, {Component} from "react";
import moment from "moment";

import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';


class Sidebar extends Component {

    state = {
        filteredJobOffers: []
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
                                    <Button size="small" color="primary">
                                        Więcej
                                    </Button>
                                    <Button onClick size="small" color="primary">
                                        Zgłoś
                                    </Button>
                                </CardActions>
                            </Card>
                        )
                    })
                }

            </div>

        )
    }
}

export default Sidebar;



