import React, {Component} from 'react';
import './SearchForm.css';
import Grid from '@material-ui/core/Grid';

const languages = ['Polski', 'Niemiecki', 'Angielski', 'Hiszpanski', 'Francuski'];

class SearchForm extends Component {
    state = {
        
    }
    render() {
        return (
            <form>
                <Grid container spacing={24}>
                    <Grid className="grid-item" item xs>
                        xsxsxsxs 
                    </Grid>
                    <Grid className="grid-item" item xs>
                        xs
                    </Grid>
                    <Grid className="grid-item" item xs>
                        xs
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid className="grid-item" item xs>
                        xs
                    </Grid>
                    <Grid className="grid-item" item xs>
                        xs
                    </Grid>
                    <Grid className="grid-item" item xs>
                        xs
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default SearchForm;