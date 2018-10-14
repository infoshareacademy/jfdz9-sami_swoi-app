import React, { Component } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            identifier: '',
            password: '',
            errors: {},
            isLoading: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value})
    }

    render() {
        const { errors, identifier, password, isLoading } = this.state;

        return(
            <form onSubmit={this.onSubmit}>
                <h1>Register</h1>
                <TextFieldGroup
                    field="identifier"
                    label="Username / Email"
                    value={identifier}
                    errors={errors.identifier}
                    onChange={this.onChange}
                />

                <TextFieldGroup
                    field="password"
                    label="Password"
                    value={password}
                    errors={errors.password}
                    onChange={this.onChange}
                    type="password"
                />

                <div>
                    <button disabled={isLoading}>Login</button>
                </div>
            </form>
        )
    }
}


export default Register;