import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data) {
    let errors = {};

    if (Validator.isEmpty(data.identifier)) {
        errors.identifier = 'To pole jest wymagane';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'To pole jest wymagane';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}