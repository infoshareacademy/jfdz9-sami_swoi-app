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
        title: '',
        location: '',
        minExperience: null,
        skills: [],
        languages: []
    }

    componentDidMount() {
        fetch('/Data/job_offers.json').then((res) => res.json()).then(data => {
            console.log(data);
        })
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(this.state) 
    };

    render() {
        const {classes, theme} = this.props;
        return (
            <form onSubmit={this.handleSubmit}>
                <Grid container spacing={24}>
                    <Grid className="grid-item" item xs>
                        <TextField
                            label="Zawód"
                            onChange={this.handleChange}
                            name="title"
                            value={this.state.industry}
                            required/>
                    </Grid>
                    <Grid className="grid-item" item xs>
                        <TextField
                            label="Miasto"
                            onChange={this.handleChange}
                            name="location"
                            value={this.state.location}/>
                    </Grid>
                    <Grid className="grid-item" item xs>
                        <TextField
                            label="Doświadczenie"
                            onChange={this.handleChange}
                            name="minExperience"
                            value={this.state.minExperience}/>
                    </Grid>
                </Grid>
                <Grid container spacing={24}>
                    <Grid className="grid-item" item xs>
                        <TextField
                            label="Umiejetności"
                            onChange={this.handleChange}
                            name="skills"
                            value={this.state.skills}/>
                    </Grid>
                    <Grid className="grid-item" item xs>
                        <FormControl className="form-control">
                            <InputLabel>Języki</InputLabel>

                            <Select
                                multiple
                                name="languages"
                                value={this.state.languages}
                                onChange={this.handleChange}
                                input={< Input id = "select-multiple-chip" />}
                                
                 
                            >
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
                        <Button variant="outlined" type={'submit'}>
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        );
    }
}

export default withStyles(styles, {withTheme: true})(SearchForm);