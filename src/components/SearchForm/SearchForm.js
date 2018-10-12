import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import './SearchForm.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const styles = theme => ({

    chips: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    chip: {
        margin: theme.spacing.unit / 4
    }
});

const languages = ['Polski', 'Niemiecki', 'Angielski', 'Hiszpanski', 'Francuski'];

class SearchForm extends Component {

    state = {
        industry: '',
        location: '',
        minExperience: null,
        skills: [],
        languages: []
    }

    componentDidMount() {
        fetch('job_offers.json')
        .then((res) => res.text())
        .then(data => {
            console.log(data);
        })
    }

    handleChange = e => {
        this.setState({languages: e.target.value})
    }

    handleSubmit = e => {}

    render() {
        const {classes, theme} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={24}>
                    <Grid className="grid-item" item xs>
                        <TextField label="Zawód" value={this.state.industry}/>
                    </Grid>
                    <Grid className="grid-item" item xs>
                        <TextField label="Miasto" value={this.state.location}/>
                    </Grid>
                    <Grid className="grid-item" item xs>
                        <TextField label="Doświadczenie" value={this.state.minExperience}/>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid className="grid-item" item xs>
                        <FormControl className="form-control">
                            <InputLabel>Umiejętności</InputLabel>
                            <Select value={this.state.skills}>
                                <MenuItem></MenuItem>
                                <MenuItem></MenuItem>
                                <MenuItem></MenuItem>
                                <MenuItem></MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid className="grid-item" item xs>
                        <FormControl className="form-control">
                            <InputLabel>Języki</InputLabel>

                            <Select
                                multiple
                                value={this.state.languages}
                                onChange={this.handleChange}
                                input={< Input id = "select-multiple-chip" />}
                                renderValue={selected => (
                                <div className={classes.chips}>
                                    {selected.map(value => (<Chip key={value} label={value} className={classes.chip}/>))}
                                </div>
                            )}>
                                {languages.map(lang => (
                                    <MenuItem key={lang} value={lang}>
                                        {lang}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid className="grid-item" item xs>
                        <Button variant="outlined">
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default withStyles(styles, {withTheme: true})(SearchForm);