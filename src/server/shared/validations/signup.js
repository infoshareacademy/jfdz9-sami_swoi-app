import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = 'To pole jest wymagane';
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = 'To pole jest wymagane';
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email jest niepoprawny';
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = 'To pole jest wymagane';
    }
    if (Validator.isEmpty(data.passwordConfirmation)) {
        errors.passwordConfirmation = 'To pole jest wymagane';
    }
    if (!Validator.equals(data.password, data.passwordConfirmation)) {
        errors.passwordConfirmation = 'Hasło musi się zgadzać';
    }
    if (Validator.isEmpty(data.timezone)) {
        errors.timezone = 'To pole jest wymagane';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}