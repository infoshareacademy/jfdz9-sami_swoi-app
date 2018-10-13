import React, {Component} from "react";
import moment from "moment";

import Card from '@material-ui/core/Card';
import CardMedia from "@material-ui/core/CardMedia/CardMedia";
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";


class Sidebar extends Component {

    state = {
        filteredJobOffers: []
    }

    componentDidMount() {
        fetch('/Data/job_offers.json')
            .then(response => response.json())
            .then(job_offers => {

                job_offers.sort((offer1, offer2) => {
                    const momentCond1 = moment(offer1.createdAt);
                    const momentCond2 = moment(offer2.createdAt);
                    if (momentCond1.isAfter(momentCond2)) {
                        return 1;
                    }
                    if (momentCond1.isBefore(momentCond2)) {
                        return -1;
                    }
                    return 0;
                });

                this.setState({
                    filteredJobOffers: job_offers.slice(0, 4)
                })

            })
    }


    render() {
        return (
            <div className='ui segment pushable'>
                <div className='pusher'>
                    <div className='ui basic segment'>
                        <h3 className='ui header'>SideBar ;P</h3>
                        {
                            this.state.filteredJobOffers.map(offer=>{
                                return(
                                    <Card key={offer.id}>
                                        <CardContent>
                                            <Typography component="h2" variant="headline">
                                                { offer.title}
                                            </Typography>
                                        </CardContent>

                                        <CardMedia
                                           src="https://www.koty.pl/wp-content/uploads/2017/11/shutterstock_684452296-e1511112417106-864x575.jpg"
                                        />
                                    </Card>
                                )
                            })
                        }

                    </div>
                </div>
            </div>
        )
    }
};

export default Sidebar;



