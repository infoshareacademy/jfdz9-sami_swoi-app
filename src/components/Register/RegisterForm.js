import React, { Component} from 'react';
import timezones from '/home/kursant/WebstormProjects/jfdz9-sami_swoi-app/src/data/timezones.js';
import map from 'lodash/map';
import classnames from 'classnames';
import validateInput from '/home/kursant/WebstormProjects/jfdz9-sami_swoi-app/src/server/shared/validations/signup.js';
import TextFieldGroup from '../common/TextFieldGroup';
import { ButtonToolbar, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';
import PropTypes from 'prop-types';
import firebase from 'firebase';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            timezone: '',
            errors: {},
            isLoading: false,
            invalid: false
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkUserExists = this.checkUserExists.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if (!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    checkUserExists(e) {
        const field = e.target.name;
        const val = e.target.value;
        if (val !== '') {
            this.props.isUserExists(val).then(res => {
                let errors = this.state.errors;
                let invalid;
                if (res.data.user) {
                    errors[field] = 'There is user with such ' + field;
                    invalid = true;
                } else {
                    errors[field] = '';
                    invalid = false;
                }
                this.setState({ errors, invalid });
            });
        }
    }

    onSubmit(e) {
        e.preventDefault();

        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'Rejestracja przebiegła pomyślnie. Witamy w aplikacji HARUJEMY.PL!'
                    });
                    this.context.router.push('/');
                },
                (err) => this.setState({ errors: err.response.data, isLoading: false })
            );
        }
    }

    render() {
        const { errors } = this.state;
        const options = map(timezones, (val, key) =>
            <option key={val} value={val}>{key}</option>
        );
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Nie masz jeszcze konta? Dołącz do nas!</h1>

                <ButtonToolbar className="form-group">
                        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                            <ToggleButton value={1}>Szukam pracy</ToggleButton>
                            <ToggleButton value={2}>Szukam pracowników</ToggleButton>
                        </ToggleButtonGroup>
                </ButtonToolbar>

                <TextFieldGroup
                    error={errors.username}
                    label="Nazwa użytkownika"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.username}
                    field="username"
                />

                <TextFieldGroup
                    error={errors.email}
                    label="Email"
                    onChange={this.onChange}
                    checkUserExists={this.checkUserExists}
                    value={this.state.email}
                    field="email"
                />

                <TextFieldGroup
                    error={errors.password}
                    label="Hasło"
                    onChange={this.onChange}
                    value={this.state.password}
                    field="password"
                    type="password"
                />

                <TextFieldGroup
                    error={errors.passwordConfirmation}
                    label="Potwierdzenie hasła"
                    onChange={this.onChange}
                    value={this.state.passwordConfirmation}
                    field="passwordConfirmation"
                    type="password"
                />

                <div className={classnames("form-group", { 'has-error': errors.timezone })}>
                    <label className="control-label">Twoja strefa czasowa:</label>
                    <select
                        className="form-control"
                        name="timezone"
                        onChange={this.onChange}
                        value={this.state.timezone}
                    >
                        <option value="" disabled>Wybierz strefę czasową</option>
                        {options}
                    </select>
                    {errors.timezone && <span className="help-block">{errors.timezone}</span>}
                </div>

                <div className="form-group">
                    <button disabled={this.state.isLoading || this.state.invalid} className="btn btn-primary btn-lg">
                        Zarejestruj
                    </button>
                </div>
            </form>
        );
    }
}

RegisterForm.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired
}

RegisterForm.contextTypes = {
    router: PropTypes.object.isRequired
}

export default RegisterForm;