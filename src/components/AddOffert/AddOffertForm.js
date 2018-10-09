import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

const currencies = [
    {
        value: 'PLN',
        label: 'Zł',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'USD',
        label: '$',
    }
];


class AddOffertForm extends React.Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
    };

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    required
                    label="Nazwa"
                    placeholder="Wpisz nazwę firmy"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    required
                    label="Tytuł"
                    multiline
                    rowsMax="4"
                    className={classes.textField}
                    margin="normal"
                    placeholder="Podaj tytuł ogłoszenia"
                    variant="outlined"
                />
                <TextField
                    required
                    label="Treść"
                    style={{ margin: 8 }}
                    placeholder="Wpisz pełną treść ogłoszenia"
                    fullWidth
                    multiline
                    rows="15"
                    margin="normal"
                    variant="outlined"
                    className={classes.textField}
                />
                <TextField
                    id="outlined-email-input"
                    label="Email"
                    className={classes.textField}
                    type="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    label="Number"
                    type="number"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                />
                <TextField
                    select
                    label="Native select"
                    className={classes.textField}
                    value={this.state.currency}
                    SelectProps={{
                        native: true,
                        MenuProps: {
                            className: classes.menu,
                        },
                    }}
                    helperText="Please select your currency"
                    margin="normal"
                    variant="outlined"
                >
                    {currencies.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </TextField>
            </form>
        );
    }
}

AddOffertForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AddOffertForm);