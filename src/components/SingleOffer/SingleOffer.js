import React, {Component} from "react";
import Card from '@material-ui/core/Card';
import Typography from "@material-ui/core/Typography/Typography";
import CardContent from "@material-ui/core/CardContent/CardContent";
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const SingleOffer = ({offer}) =>
    (
        <div className='ui basic segment'>
            <Card>
                <CardContent>
                    <Typography component="h2" variant="headline">
                        Wakat: {offer.title}
                    </Typography>
                    <Typography component="p">
                        Dodano: {offer.createdAt}
                    </Typography>
                    <Typography component="p">
                        Firma: {offer.company ? offer.company.name : 'Ukryta Rekrutacja'}
                    </Typography>
                    <Typography component="p">
                        Minimalne wynagrodzenie: {offer.salaryMin}
                    </Typography>
                    <Typography component="p">
                        Opis: {offer.description}
                    </Typography>
                    <Typography component="p">
                        Wymagania:{offer.requirements.skills}

                    </Typography>


                </CardContent>

                <CardActions>
                <IconButton aria-label="Add to favorites">
                <FavoriteIcon/>
                </IconButton>
                <IconButton aria-label="Share">
                <ShareIcon/>
                </IconButton>
                </CardActions>
            </Card>
        </div>
    );

export default SingleOffer;



