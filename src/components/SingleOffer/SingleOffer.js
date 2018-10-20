import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


class SingleOffer extends Component {

    state = {
        filteredJobOffers: []
    };

    componentDidMount() {
        fetch('/Data/job_offers.json')
            .then(response => response.json())
            .then(job_offers => {


                this.setState({
                    filteredJobOffers: job_offers.slice(1, 2)
                })

            })
    }


    render() {
        return (

            <div className='ui basic segment'>
                {
                    this.state.filteredJobOffers.map(offer => {
                        return (
                            <Card key={offer.id}>
                                <CardContent>
                                    <Typography component="h2" variant="headline">
                                        Wakat: {offer.title}
                                    </Typography>
                                    <Typography component="p">
                                        Dodano: {offer.createdAt}
                                    </Typography>

                                    <Typography component="p">
                                       Firma: {offer.company.name}
                                    </Typography>

                                    <Typography component="p">
                                        Minimalne wynagrodzenie: {offer.salaryMin}
                                    </Typography>

                                    <Typography component="p">
                                        Opis: {offer.description}
                                    </Typography>


                                </CardContent>

                                <CardActions>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon/>
                                    </IconButton>
                                    <IconButton aria-label="Share">
                                        <ShareIcon/>
                                    </IconButton>
                                    <IconButton
                                        // className={classnames(classes.expand, {
                                        //     [classes.expandOpen]: this.state.expanded,
                                        // })}
                                        // onClick={this.handleExpandClick}
                                        // aria-expanded={this.state.expanded}
                                        aria-label="Show more"
                                    >
                                        <ExpandMoreIcon/>
                                    </IconButton>
                                </CardActions>
                            </Card>
                        )
                    })
                }

            </div>

        )
    }
}

export default SingleOffer;



